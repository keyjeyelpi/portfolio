import { useEffect } from "react";
import useThemeStore, { getSystemTheme } from "../store/theme-store";

const useSystemThemeSync = () => {
  const { mode, setResolvedMode } = useThemeStore();

  useEffect(() => {
    if (mode !== "system") return;

    const updateTheme = () => {
      setResolvedMode(getSystemTheme());
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);

    updateTheme();

    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, [mode, setResolvedMode]);
};

export default useSystemThemeSync;
