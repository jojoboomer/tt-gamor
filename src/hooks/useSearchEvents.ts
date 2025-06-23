import useGamorStore from "@/store/main.store";
import { useCallback, useEffect } from "react";

export const useSearchEvents = () => {
  const { filters, setResults, resetResults } = useGamorStore();
  const { data } = useGamorStore()

  const searchEvents = useCallback(() => {
    if (!filters.game || !filters.platform) return resetResults();

    const entry = data.find(
      (e) => e.game_id === filters.game?.id && e.platform === filters.platform
    );

    setResults(entry?.events ?? []);
  }, [data, filters, setResults, resetResults]);

  useEffect(() => {
    searchEvents();
  }, [data]);

  return {
    searchEvents,
  };
};
