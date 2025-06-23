import mockData from "@/data/game_platform_events_mock.json";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const storageKey = "gamor-app";

interface GlobalState {
  theme: Theme;
  data: StreamData[]; 
  currentEvent: StreamEvent | null;

  filters: Filters;
  results: StreamEvent[];
}

interface GlobalActions {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;

  setData: (data: StreamData[]) => void;
  setCurrentEvent: (event: StreamEvent | null) => void;

  setGame: (game: Game | null) => void;
  setPlatform: (platform: Platform) => void;
  resetFilters: () => void;
  setFilters: (filters: Partial<Filters>) => void;

  setResults: (results: StreamEvent[]) => void;
  resetResults: () => void;
}

const initialState: GlobalState = {
  theme: "system",
  data: mockData, 
  currentEvent: null,
  filters: {
    game: null,
    platform: "party",
  },
  results: [],
};

const useGamorStore = create<GlobalState & GlobalActions>()(
  persist(
    (set) => ({
      ...initialState, // Extiende el estado inicial

      // Acciones de Tema
      toggleTheme: () =>
        set((state) => {
          if (state.theme === "system") {
            const systemTheme = window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches
              ? "light"
              : "dark";
            return { theme: systemTheme };
          }
          const nextTheme = state.theme === "light" ? "dark" : "light";
          return { theme: nextTheme };
        }),
      setTheme: (theme) => set({ theme }),

      setData: (data) => set({ data }),
      setCurrentEvent: (event) => set({ currentEvent: event }),

      setGame: (game) => set((state) => ({ filters: { ...state.filters, game } })),
      setPlatform: (platform) =>
        set((state) => ({ filters: { ...state.filters, platform } })),
      resetFilters: () => set({ filters: initialState.filters }),
      setFilters: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),

      setResults: (results) => set({ results }),
      resetResults: () => set({ results: [] }),
    }),
    {
      name: storageKey,
    }
  )
);

export default useGamorStore;