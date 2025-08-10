import { create } from "zustand";

type ThemeMode = "light" | "dark" | "system";

type ThemeState = {
  mode: ThemeMode;
  resolvedMode: "light" | "dark";
  primary: string;
  secondary: string;
  setMode: (mode: ThemeMode) => void;
  setResolvedMode: (resolvedMode: "light" | "dark") => void;
  setPrimary: (color: string) => void;
  setSecondary: (color: string) => void;
};

export const getSystemTheme = (): "light" | "dark" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const useThemeStore = create<ThemeState>((set) => ({
  mode: "system",
  resolvedMode: "light",
  primary: "#2962FF",
  secondary: "#00BFA5",
  setMode: (mode) =>
    set({
      mode,
      resolvedMode: mode === "system" ? getSystemTheme() : mode,
    }),
  setResolvedMode: (resolvedMode) => set({ resolvedMode }),
  setPrimary: (color) => set({ primary: color }),
  setSecondary: (color) => set({ secondary: color }),
}));

export default useThemeStore;
export type { ThemeMode, ThemeState };
