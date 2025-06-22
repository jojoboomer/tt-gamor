import { loginUser } from "@/lib/authService";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const storageKey = "gamor-store";

type LoginData = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
  username: string;
  fullName: string;
  role: string;
};

interface State {
  user: User | null;
  session: { user: User; token: string } | null;
}

interface Actions {
  login: (credentials: LoginData) => Promise<void>;
  logout: () => void;
}

const initialState: State = {
  user: null,
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
          set({ user: res.user, session: res });
        } catch (error) {
          console.error(error);
        }
      },
      logout: () => {
        set({ user: null, session: null });
      },
    }),
    {
      name: storageKey,
    }
  )
);

export default useAuthenticationStore;
