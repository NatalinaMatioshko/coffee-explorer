import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthMode = "login" | "register";

type AuthState = {
  user: User | null;
  isAuth: boolean;
  mode: AuthMode;
  setMode: (mode: AuthMode) => void;
  login: (email: string) => Promise<void>;
  register: (name: string, email: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuth: false,
      mode: "login",

      setMode(mode) {
        set({ mode });
      },


      
      async login(email: string) {
        const fakeUser: User = {
          id: 1,
          name: "Coffee Lover",
          email,
        };
        set({ user: fakeUser, isAuth: true });
      },


      
      async register(name: string, email: string) {
        const fakeUser: User = {
          id: 1,
          name,
          email,
        };
        set({ user: fakeUser, isAuth: true });
      },

      logout() {
        set({ user: null, isAuth: false, mode: "login" });
      },
    }),
    {
      name: "auth-store", 
    }
  )
);
