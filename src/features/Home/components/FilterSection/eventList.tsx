import { useCallback } from "react";
import EventItem from "./eventItem";

const EventList = ({ results }) => {
  const handleAdd = useCallback(() => console.log(), []);

  return (
    <ul className=" w-full h-full py-3 space-y-2 overflow-y-auto no-scrollbar flex-1 pb-20">
      {results.map((event, index) => (
        <EventItem
          key={index.id}
          index={index + 1}
          item={event}
          onClick={handleAdd}
        />
      ))}
    </ul>
  );
};

export default EventList;
