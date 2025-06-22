import Button from "@/components/ui/buttom";
import { Plus } from "lucide-react";

type EventItemProps = {
  index: number;
  name: string;
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

export const EventItem = ({ index, name, onClick }: EventItemProps) => (
  <li key={index} className="flex items-center justify-between group ">
    <div className="flex items-center gap-3">
      <span className="text-sm size-6 rounded-full flex items-center justify-center bg-neutral text-text/80 group-hover:text-text hoi">
        {index + 1}
      </span>
      <span className="font-medium text-text/80 hover:text-text">{name}</span>
    </div>
    <ButtomAdd onClick={onClick}></ButtomAdd>
  </li>
);

export default EventItem;
