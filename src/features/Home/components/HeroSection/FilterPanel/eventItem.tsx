import Button from "@/components/ui/buttom";
import { useEventParticipation } from "@/hooks/useJoinEvents";
import { toast, type ToastVariant } from "@/lib/toast-component";
import useGamorStore from "@/store/main.store";
import { Minus, Plus } from "lucide-react";
import AvatarStack from "../../avatarStack";

type EventItemProps = {
  index: number;
  item: StreamEvent;
};

const ButtomAdd = ({
  action = "add",
  ...props
}: {
  action?: "add" | "remove";
} & React.ComponentProps<typeof Button>) => (
  <Button
    variant="default"
    size="sm"
    {...props}
    className="size-6 cursor-pointer !bg-neutral group-hover:scale-110 transition-transform duration-150 ease-out"
  >
    {action === "add" ? (
      <Plus className="size-3 text-text" />
    ) : (
      <Minus className="size-3 text-text" />
    )}
  </Button>
);

export const EventItem = ({ index, item }: EventItemProps) => {
  const { toggleEventParticipation } = useEventParticipation();
  const { currentEvent } = useGamorStore();

  const handleOnClick = () => {
    const res = toggleEventParticipation(item.id);
    let message;
    const variant: ToastVariant = res?.success ? "info" : "error";

    if (!res) {
      return toast({
        description: "Something went wrong.",
      });
    }

    if (res.success) {
      message =
        item.id == currentEvent?.id
          ? "You left the event."
          : "You joined the event.";
    } else {
      message = res.message;
    }

    toast({
      variant,
      description: message,
    });
  };

  return (
    <li key={index} className="flex items-center group gap-4 ">
      <div className="flex items-center gap-3">
        <span className="text-sm size-6 rounded-full flex items-center justify-center bg-neutral text-text/80 group-hover:text-text hoi">
          {index}
        </span>
        <span className="font-medium text-text/80 hover:text-text">
          {item.name}
        </span>
      </div>
      <AvatarStack list={item.streamers} />
      <ButtomAdd
        action={item.id == currentEvent?.id ? "remove" : "add"}
        onClick={handleOnClick}
      ></ButtomAdd>
    </li>
  );
};

export default EventItem;
