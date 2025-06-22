import { useCallback } from "react";
import EventItem from "./eventItem";

const EventList = ({ results }) => {
  const handleAdd = useCallback(() => console.log(), []);

  return (
    <ul className="relative w-full h-full py-3 space-y-2  ">
      {results.map((event, index) => (
        <EventItem
          key={index.id}
          index={index + 1}
          name={event.name}
          onClick={handleAdd}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-panel via-panel/80 to-transparent pointer-events-none"></div>
    </ul>
  );
};

export default EventList;
