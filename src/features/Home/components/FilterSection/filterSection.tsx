import Button from "@/components/ui/buttom";
import { useSearchEvents } from "@/hooks/useSearchEvents";
import { cn } from "@/lib/utils";
import useFiltersStore from "@/store/filters.store";
import { useCallback } from "react";
import EventList from "./eventList";
import GameSelector from "./gameSelector";
import PlatformSelector from "./platformSelector";

const FilterSection = ({ className }: { className?: string }) => {
  const { searchGame } = useSearchEvents();
  const { results } = useFiltersStore();

  const handleSearch = useCallback(() => searchGame(), [searchGame]);

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
        <div className="relative h-clamp-sm overflow-hidden flex flex-col items-center flex-1 min-h-0 w-full bg-card shadow-lg px-6 py-3 rounded-2xl ">
          <GameSelector />
          <EventList results={results} />
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

export default FilterSection;
