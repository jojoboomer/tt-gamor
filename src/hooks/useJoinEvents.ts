import { createInitialsAvatar } from "@/lib/utils";
import useAuthenticationStore from "@/store/auth.store";
import useGamorStore from "@/store/main.store";
import { useCallback, useMemo } from "react";

export const useEventParticipation = () => {
  const { session } = useAuthenticationStore();
  const { data, setData, currentEvent, setCurrentEvent } = useGamorStore();

  // Memoizes the current user's relevant data for event participation.
  // This `useMemo` ensures that `currentUser` is only recomputed if `session` changes.
  const currentUser = useMemo(() => {
    if (!session?.user) return null;
    return {
      id: session.user.id as string,
      username: session.user.username,
      avatar:
        session.user.avatar ?? createInitialsAvatar(session.user.username),
    };
  }, [session]);

  // Memoizes the `toggleEventParticipation` function using `useCallback`.
  // This prevents unnecessary re-creations of the function, which is good for performance
  // if it's passed down to child components.
  const toggleEventParticipation = useCallback(
    (eventId: string) => {
      //Validation
      if (!currentUser) {
        return {
          success: false,
          message: "You must be logged in to join an event.",
        };
      }

      // Validation: User trying to join a different event while already in one.
      // This logic prevents a user from joining two events simultaneously.
      if (currentEvent && currentEvent.id !== eventId) {
        return {
          success: false,
          message: "You can't join another event while you're in another one.",
        };
        return;
      }

      // Update the `data` (all event groups) to reflect participation change.
      const updatedData = data.map((group) => {
        const updatedEvents = group.events.map((event) => {
          if (event.id !== eventId) return event;

          const isUserInEvent = event.streamers.some(
            (s) => s.id === currentUser.id
          );

          const newStreamers = isUserInEvent
            ? event.streamers.filter((s) => s.id !== currentUser.id)
            : [...event.streamers, currentUser];

          return { ...event, streamers: newStreamers };
        });

        return { ...group, events: updatedEvents };
      });

      //determine the new `currentEvent` state.
      // Finds the specific event that was toggled from the `updatedData`.
      const newCurrentEvent = updatedData
        .flatMap((g) => g.events)
        .find((e) => e.id === eventId);

      const isLeaving =
        currentEvent?.id === eventId &&
        !newCurrentEvent?.streamers.some((s) => s.id === currentUser.id);

      //Update the stores.
      setData(updatedData);
      setCurrentEvent(isLeaving ? null : newCurrentEvent || null);

      return {
        success: true,
        message: isLeaving ? "You left the event." : "You joined the event.",
      };
    },
    [currentUser, data, setData, currentEvent, setCurrentEvent]
  );

  return { toggleEventParticipation };
};
// This hook can be better if we have a optimistic update and be async in real api