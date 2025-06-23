import useGamorStore from "@/store/main.store";
import AvatarStack from "../../avatarStack";

const ActiveEvent = () => {
  const { currentEvent } = useGamorStore();

  if (!currentEvent) {
    return null;
  }

  return (
    <div className="absolute bottom-10 bg-panel/20 backdrop-blur-2xl border border-border rounded-4xl p-4 animate-bounce">
      <div className="relative flex flex-col items-center">
        <AvatarStack
          list={currentEvent.streamers}
          size="size-8"
          className="absolute -top-8 flex items-center -space-x-2 flex-1 "
        />
        <p>You have joined to:</p>
        {currentEvent.name}
      </div>
    </div>
  );
};

export default ActiveEvent;
