import useGamorStore from "@/store/main.store";
import { useCallback, useEffect } from "react";

export const useSearchEvents = () => {
  const { filters, setResults, resetResults } = useGamorStore();
  const { data } = useGamorStore()

  // Memoizes the `searchEvents` function using `useCallback`.
  // This prevents unnecessary re-creations of the function, which is good for performance
  // if it's passed down to child components.
  const searchEvents = useCallback(() => {
    if (!filters.game || !filters.platform) return resetResults();

    const entry = data.find(
      (e) => e.game_id === filters.game?.id && e.platform === filters.platform
    );

    setResults(entry?.events ?? []);
  }, [data, filters, setResults, resetResults]);

  useEffect(() => {
    searchEvents();
  }, [searchEvents]);

  return {
    searchEvents,
  };
};
//Not a goot idea use largue data in localstorage but in this case i want to mock all the data