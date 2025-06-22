import { create } from "zustand";
import { persist } from "zustand/middleware";

const storageKey = "gamor-store";

interface State {
  filters: Filters;
  results: StreamEvent[];
}

interface Actions {
  setGame: (game: Game | null) => void;
  setPlatform: (platform: Platform) => void;
  resetFilters: () => void;
  setFilters: (filters: Partial<Filters>) => void;
  setResults: (results: StreamEvent[]) => void;
  resetResults: () => void;
}

const initialState: State = {
  filters: {
    game: null,
    platform: "party",
  },
  results: [],
};

const useFiltersStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setGame: (game) => set({ filters: { ...get().filters, game } }),
      setPlatform: (platform) =>
        set({ filters: { ...get().filters, platform } }),
      resetFilters: () => set({ filters: initialState.filters }),
      setFilters: (filters) =>
        set({
          filters: { ...get().filters, ...filters },
        }),
      setResults: (results) => set({ results }),
      resetResults: () => set({ results: [] }),
    }),
    {
      name: storageKey,
    }
  )
);

export default useFiltersStore;
