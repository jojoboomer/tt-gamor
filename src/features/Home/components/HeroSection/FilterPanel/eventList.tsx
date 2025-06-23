import EventItem from "./eventItem";

interface Props {
  results: StreamEvent[];
};

const EventList = ({ results }: Props) => {

  return (
    <ul className=" w-full h-full py-3 px-1 space-y-2 overflow-y-auto no-scrollbar flex-1 pb-20">
      {results.map((event, index) => (
        <EventItem
          key={event.id}
          index={index + 1}
          item={event}
        />
      ))}
    </ul>
  );
};

export default EventList;
