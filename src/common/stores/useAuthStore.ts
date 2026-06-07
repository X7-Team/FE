import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { useShallow } from "zustand/shallow";
import type { IUser } from "../types/user";

interface AuthState {
  isAuthenticate: boolean;
  token: string | null;
  user: IUser | null;
  login: (token: string, user: IUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticate: false,
        token: null,
        user: null,
        login: (token: string, user: IUser) =>
          set({ isAuthenticate: true, token, user }),
        logout: () => set({ isAuthenticate: false, token: null, user: null }),
      }),
      { name: "Auth" },
    ),
    { name: "Auth" },
  ),
);

export const useAuthSelector = <T>(selector: (state: AuthState) => T): T =>
  useAuthStore(useShallow(selector));
