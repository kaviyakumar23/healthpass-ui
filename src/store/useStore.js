// src/store/useStore.js
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Create the store
const useStore = create(
  devtools(
    persist(
      (set) => ({
        // Initial state
        auth: {
          codeVerifier: null,
          codeChallenge: null,
          loading: false,
        },
        user: {
          isAuthenticated: false,
          baseUri: null,
        },
        tokens: {
          accessToken: null,
          refreshToken: null,
        },

        login: () =>
          set((state) => ({
            user: {
              ...state.user,
              isAuthenticated: true,
            },
          })),
        setTokens: (accessToken, refreshToken) =>
          set((state) => ({
            tokens: {
              ...state.tokens,
              accessToken: accessToken,
              refreshToken: refreshToken,
            },
          })),

        logout: () =>
          set((state) => ({
            user: {
              ...state.user,
              isAuthenticated: false,
            },
            tokens: {
              accessToken: null,
              refreshToken: null,
            },
          })),

        setPKCE: (verifier, codeChallenge) =>
          set((state) => ({
            auth: {
              ...state.auth,
              codeChallenge: codeChallenge,
              codeVerifier: verifier,
            },
          })),
        setAuthLoading: (loading) =>
          set((state) => ({
            auth: {
              ...state.auth,
              loading: loading,
            },
          })),
        setBaseUri: (baseUri) =>
          set((state) => ({
            user: {
              ...state.user,
              baseUri: baseUri,
            },
          })),

        setUser: (user) =>
          set((state) => ({
            user: {
              ...state.user,
              user: user,
            },
          })),
      }),
      {
        name: "app-storage", // unique name for localStorage
        partialize: (state) => ({
          user: state.user,
          auth: state.auth,
          tokens: state.tokens,
        }), // only persist user state
      }
    )
  )
);

export default useStore;
