import create from "zustand";
import { combine } from "zustand/middleware";
import { isServer } from "../lib/util/is-server";
import { User } from "../lib/generated";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { devMode } from "../lib/constants";

export const isLoggedInWithData = (
  data: Partial<User> | any | null,
  error?: any
) => {
  const loggedIn = error ? false : data ? true : false;
  loggedIn ? console.log("Logged in") : console.log("Logged out");
  return loggedIn;
};

export const useLoggedInStore = create(
  combine(
    {
      user: {} as Partial<User>,
      loggedIn: false,
      accessToken: ``,
      refreshToken: ``,
    },
    (set) => ({
      setTokens: (tokenPayload: { act: string; rft: string }) => {
        set((state) => ({
          ...state,
          accessToken: tokenPayload.act,
          refreshToken: tokenPayload.rft,
        }));
      },
      setUser: (user: Partial<User> | any) => {
        set((state) => ({
          ...state,
          user: user,
        }));
      },
      login: () =>
        set(() => ({
          loggedIn: true,
        })),
      logout: () => {
        try {
          localStorage.setItem(`sqstac`, ``);
        } catch {}
        set(() => ({
          loggedIn: false,
          accessToken: ``,
          refreshToken: ``,
          user: {},
        }));
      },
    })
  )
);

// for nextjs ensure window is not undefined as it will crash
if (devMode && typeof window === "object") {
  mountStoreDevtool("useLoggedInStore", useLoggedInStore as any);
}
