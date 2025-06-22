import mockData from "@/data/game_platform_events_mock.json";
import useFiltersStore from "@/store/filters.store";
import { useCallback, useEffect } from "react";

export const useSearchEvents = () => {
  const { filters, setResults, resetResults } = useFiltersStore();

  const searchGame = useCallback(() => {
    if (!filters.game || !filters.platform) return resetResults();

    const entry = mockData.find(
      (e) => e.game_id === filters.game?.id && e.platform === filters.platform
    );

    setResults(entry?.events ?? []);
  }, [filters, setResults, resetResults]);

  useEffect(() => {
    searchGame();
  }, []);

  return {
    searchGame,
  };
};
