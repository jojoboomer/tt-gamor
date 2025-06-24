import Button from "@/components/ui/buttom";
import { useSearchEvents } from "@/hooks/useSearchEvents";
import { cn } from "@/lib/utils";
import useGamorStore from "@/store/main.store";
import { useCallback } from "react";
import EventList from "./eventList";
import GameSelector from "./gameSelector";
import PlatformSelector from "./platformSelector";

const FilterPanel = ({ className }: { className?: string }) => {
  const { searchEvents } = useSearchEvents();
  const { results } = useGamorStore();

  const handleSearch = useCallback(() => searchEvents(), [searchEvents]);

  return (
    <div className={cn(className)}>
      <div className="space-y-4 w-full">
        <h3 className="font-semibold">
          <span className="text-lg text-gray-400">01.</span> Choose Platform
        </h3>
        <PlatformSelector />
      </div>
      <div className="space-y-4 ">
        <h3 className="font-semibold">
          <span className="text-lg text-gray-400">02.</span> Searching Game
        </h3>
        <div className="relative h-clamp-sm overflow-hidden flex flex-col items-center flex-1 min-h-0 w-full bg-card shadow-md px-6 py-3 rounded-4xl ">
          <GameSelector />
          <EventList results={results} />
          <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-panel via-panel/80 to-transparent pointer-events-none"></div>
          <Button
            size="lg"
            className="absolute bottom-4 rounded-md w-[90%]"
            onClick={handleSearch}
          >
            Search Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
