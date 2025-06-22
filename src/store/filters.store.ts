import { create } from "zustand";
import { persist } from "zustand/middleware";

const storageKey = "gamor-store";

export type Platform = "party" | "match" | "stream";

export type Game = {
  id: string;
  name: string;
  box_art_url: string;
  igdb_id: string;
  category_id: string;
};

export type Filters = {
  game: Game | null;
  platform: Platform;
};

interface State {
  filters: Filters;
}

interface Actions {
  setGame: (game: Game | null) => void;
  setPlatform: (platform: Platform) => void;
  resetFilters: () => void;
  setFilters: (filters: Partial<Filters>) => void;
}

const initialState: State = {
  filters: {
    game: null,
    platform: "party",
  },
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
    }),
    {
      name: storageKey,
    }
  )
);

export default useFiltersStore;
