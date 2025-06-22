import mockData from "@/data/game_platform_events_mock.json";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const storageKey = "gamor-store";

interface State {
  data: StreamData[];
  theme: Theme;
}

interface Actions {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const initialState: State = {
  data: mockData,
  theme: "system",
};

const useGamorStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      toggleTheme: () =>
        set((state) => {
          console.log(state.theme);
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
    }),
    {
      name: storageKey,
    }
  )
);

export default useGamorStore;
