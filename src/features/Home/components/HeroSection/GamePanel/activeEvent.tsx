import { useEventParticipation } from "@/hooks/useJoinEvents";
import { toast } from "@/lib/toast-component";
import useGamorStore from "@/store/main.store";
import { X } from "lucide-react";
import AvatarStack from "../../avatarStack";
import ButtonWithPopover from "../../buttonWithPopover";

const ActiveEvent = () => {
  const { currentEvent, setCurrentEvent } = useGamorStore();
  const { toggleEventParticipation } = useEventParticipation();

  if (!currentEvent) {
    return null;
  }

  const handleOnClick = () => {
    const res = toggleEventParticipation(currentEvent.id);
    if (res?.success) {
      toast({
        description: "You have left the event.",
      });
    }
    setCurrentEvent(null);
  };

  return (
    <div className="absolute bottom-10 bg-panel/20 backdrop-blur-2xl border border-border rounded-4xl p-4 ">
      <div className="relative flex flex-col items-center">
        <AvatarStack
          list={currentEvent.streamers}
          size="size-8"
          className="absolute -top-8 flex items-center -space-x-2 flex-1 "
        />
        <p>You have joined to:</p>
        <div className="inline-flex gap-2 items-center">
          {currentEvent.name}
          <ButtonWithPopover
            content={"Leave event"}
            variant="text"
            className="hover:scale-120"
            onClick={handleOnClick}
          >
            <X height={20} width={20} />
          </ButtonWithPopover>
        </div>
      </div>
    </div>
  );
};

export default ActiveEvent;
