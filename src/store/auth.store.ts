import { loginUser } from "@/lib/authService";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const storageKey = "auth-gamor-store";

interface State {
  session: { user: User; token: string } | null;
}

interface Actions {
  login: (credentials: LoginData) => Promise<void>;
  logout: () => void;
}

const initialState: State = {
  session: null,
};

const useAuthenticationStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      login: async (credentials: LoginData) => {
        try {
          const response = await loginUser(credentials);
          if (!response) {
            throw new Error("Failed to login");
          }
          const res = JSON.parse(response);
          set({  session: res });
        } catch (error) {
          console.error(error);
        }
      },
      logout: () => {
        set({ session: null });
      },
    }),
    {
      name: storageKey,
    }
  )
);

export default useAuthenticationStore;
