import { createInitialsAvatar } from "@/lib/utils";
import useAuthenticationStore from "@/store/auth.store";
import useGamorStore from "@/store/main.store";
import { useCallback, useMemo } from "react";

export const useEventParticipation = () => {
  const { session } = useAuthenticationStore();
  const { data, setData, currentEvent, setCurrentEvent } = useGamorStore();

  const currentUser = useMemo(() => {
    if (!session?.user) return null;
    return {
      id: session.user.id,
      username: session.user.username,
      avatar:
        session.user.avatar ?? createInitialsAvatar(session.user.username),
    };
  }, [session]);

  const toggleEventParticipation = useCallback(
    (eventId: string) => {
      if (!currentUser) {
        return {
          success: false,
          message: "You must be logged in to join an event.",
        };
      }

      if (currentEvent && currentEvent.id !== eventId) {
        return {
          success: false,
          message: "You can't join another event while you're in another one.",
        };
        return;
      }

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

      const newCurrentEvent = updatedData
        .flatMap((g) => g.events)
        .find((e) => e.id === eventId);

      const isLeaving =
        currentEvent?.id === eventId &&
        !newCurrentEvent?.streamers.some((s) => s.id === currentUser.id);

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
