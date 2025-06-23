import { createInitialsAvatar } from "@/lib/utils";
import useAuthenticationStore from "@/store/auth.store";
import useGamorStore from "@/store/main.store";
import { useCallback } from "react";

export const useEventParticipation = () => {
  const { session } = useAuthenticationStore();
  const { data, setData, setCurrentEvent } = useGamorStore();

  const toggleEventParticipation = useCallback((eventId: string) => {
    if (!session) return;

    const newStreamer = {
      id: session.user.id,
      username: session.user.username,
      avatar: session.user.avatar ?? createInitialsAvatar(session.user.username),
    };

    let hasConflict = false;
    let updatedCurrentEvent: any = null;

    const updatedData = data.map((entry) => {
      let userAlreadyInThisEvent = false;
      let userInAnotherEvent = false;

      const updatedEvents = entry.events.map((event) => {
        const isUserInEvent = event.streamers.some((s) => s.id === newStreamer.id);

        if (event.id === eventId) {
          if (isUserInEvent) {
            userAlreadyInThisEvent = true;
            return {
              ...event,
              streamers: event.streamers.filter((s) => s.id !== newStreamer.id),
            };
          } else {
            updatedCurrentEvent = { ...event, streamers: [...event.streamers, newStreamer] };
            return {
              ...event,
              streamers: [...event.streamers, newStreamer],
            };
          }
        }

        if (isUserInEvent) userInAnotherEvent = true;

        return event;
      });

      if (userInAnotherEvent && !userAlreadyInThisEvent) {
        hasConflict = true;
      }

      return {
        ...entry,
        events: hasConflict ? entry.events : updatedEvents,
      };
    });

    if (hasConflict) {
      alert("You're already in another event.");
      return;
    }

    setData(updatedData);

    if (updatedCurrentEvent) {
      setCurrentEvent(updatedCurrentEvent);
      alert("You joined the event.");
    } else {
      setCurrentEvent(null);
      alert("You left the event.");
    }
  }, [data, setData, session, setCurrentEvent]);

  return { toggleEventParticipation };
};
