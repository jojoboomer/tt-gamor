import { create } from "zustand";
import { persist } from "zustand/middleware";

const storageKey = "gamor-sore";

export type Theme = "dark" | "light" | "system";

interface State {
  theme: Theme;
}

interface Actions {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const initialState: State = {
  theme: "system",
};

const useGamorStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      toggleTheme: () => set((state) => {
        const nextTheme =
          state.theme === 'light' ? 'dark' :
          state.theme === 'dark' ? 'system' :
          'light';
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
