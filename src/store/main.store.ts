import mockData from "@/data/game_platform_events_mock.json";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const storageKey = "gamor-store";

interface State {
  data: StreamData[];
  currentEvent: StreamEvent | null;
  theme: Theme;
}

interface Actions {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setData: (data: StreamData[]) => void;
  setCurrentEvent: (event: StreamEvent | null) => void;
}

const initialState: State = {
  data: mockData,
  theme: "system",
  currentEvent: null,
};

const useGamorStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
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
    }),
    {
      name: storageKey,
    }
  )
);

export default useGamorStore;
