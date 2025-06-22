import Button from "@/components/ui/buttom";
import type { Event as EventOption } from "@store/filters.store";
import { Plus } from "lucide-react";

type EventItemProps = {
  index: number;
  item: EventOption;
  onClick: () => void;
};

const ButtomAdd = ({ ...props }) => (
  <Button
    variant="default"
    size="sm"
    {...props}
    className="size-6 cursor-pointer !bg-neutral group-hover:scale-110 transition-transform duration-150 ease-out"
  >
    <Plus className="size-3 text-text" />
  </Button>
);

export const EventItem = ({ index, item, onClick }: EventItemProps) => (
  <li key={index} className="flex items-center group gap-4 ">
    <div className="flex items-center gap-3">
      <span className="text-sm size-6 rounded-full flex items-center justify-center bg-neutral text-text/80 group-hover:text-text hoi">
        {index + 1}
      </span>
      <span className="font-medium text-text/80 hover:text-text">
        {item.name}
      </span>
    </div>
    <div className="flex items-center -space-x-2 flex-1 ">
      {item.streamers.map((streamer) => (
        <img src={streamer.avatar} alt={streamer.username} className="size-6 rounded-full border border-border"></img>
      ))}
    </div>
    <ButtomAdd onClick={onClick}></ButtomAdd>
  </li>
);

export default EventItem;
