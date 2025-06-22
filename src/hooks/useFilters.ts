import mockData from "@/data/game_platform_events_mock.json";
import useFiltersStore from "@/store/filters.store";
import { useEffect, useState } from "react";

export const useFilteredEvents = () => {
  const { filters } = useFiltersStore(); 
  const [results, setResults] = useState<any[]>([]);

  const searchGame = () => {
    const filtered = mockData.filter((entry) => {
      return (
        (entry.game_id === filters.game?.id) &&
        (entry.platform === filters.platform)
      );
    });
    setResults(filtered[0]['events']);
  };

  useEffect(() => {
    searchGame();
  }, []);

  return { results, searchGame };
};
