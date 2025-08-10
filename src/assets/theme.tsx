import { createTheme } from "@mui/material/styles";
import useThemeStore from "../store/theme-store";
import type { Theme } from "@mui/material/styles";
import chroma from "chroma-js";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import darkLogo from "../assets/images/logo/black.png";
import lightLogo from "../assets/images/logo/white.png";

export const useBreakpoint = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  return {
    breakpoint: isXs
      ? "xs"
      : isSm
      ? "sm"
      : isMd
      ? "md"
      : isLg
      ? "lg"
      : isXl
      ? "xl"
      : "unknown",
    bpOrder: ["xs", "sm", "md", "lg", "xl"],
  };
};

export const useCurrentThemeMode = (): {
  darkMode: boolean;
  textColor: string;
  bgColor: string;
} => {
  const mode = useThemeStore((state) => state.mode);

  const [isDark, setIsDark] = useState(false);

  const darkMode = mode === "light" ? false : mode === "dark" ? true : isDark;

  const textColor = darkMode ? "#efefef" : "#424242";
  const bgColor = darkMode ? "#101010" : "#FFFFFF";

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (mq.matches) {
      setIsDark(true);
    }

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);

  useEffect(() => {
    const link =
      document.querySelector<HTMLLinkElement>("link[rel~='icon']") ||
      document.createElement("link");

    link.rel = "icon";
    link.href = darkMode ? lightLogo : darkLogo;

    if (!link.parentNode) {
      document.head.appendChild(link);
    }
  }, [darkMode]);

  return { darkMode, textColor, bgColor };
};

const generatePalette = (bc: string) => {
  const { darkMode } = useCurrentThemeMode();

  const baseColor = chroma(bc)
    .darken(darkMode && chroma(bc).luminance() > 0.5 ? 0.25 : 0)
    .hex();

  const dark = "#000000";
  const light = "#FFFFFF";
  const saturation = chroma(baseColor).hsl()[1];

  const palette: any = {};

  // Define stops for lighter and darker shades
  const lightScale = chroma
    .scale([baseColor, darkMode ? dark : light])
    .mode("lab");

  const darkScale = chroma
    .scale([baseColor, darkMode ? light : dark])
    .mode("lab");

  // Generate lighter shades
  palette["50"] = lightScale(saturation && !darkMode ? 0.9 : 0.95)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();
  palette["100"] = lightScale(0.8)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();
  palette["200"] = lightScale(0.6)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();
  palette["300"] = lightScale(0.4)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();
  palette["400"] = lightScale(0.2)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();

  // Base main color (500)
  palette["500"] = chroma(baseColor)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();

  // Generate darker shades
  palette["600"] = darkScale(0.2)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();
  palette["700"] = darkScale(0.4)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();
  palette["800"] = darkScale(0.6)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();
  palette["900"] = darkScale(0.8)
    .brighten(saturation && !darkMode ? 0.125 : 0)
    .darken(darkMode ? 1 : 0)
    .hex();

  palette["A100"] = chroma(baseColor).brighten(2).hex();
  palette["A200"] = chroma(baseColor).brighten(1).hex();
  palette["A400"] = chroma(baseColor).darken(0.5).hex();
  palette["A700"] = chroma(baseColor).darken(1.5).hex();

  palette.main = baseColor;
  palette.light = palette["200"];
  palette.dark = palette["700"];

  return palette;
};

const useTheme = (): Theme => {
  const { darkMode } = useCurrentThemeMode();
  const { primary, secondary } = useThemeStore();

  const primaryPalette = generatePalette(primary);
  const secondaryPalette = generatePalette(secondary);
  const backgroundPalette = generatePalette("#888888");

  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: primaryPalette,
      secondary: secondaryPalette,
      background: backgroundPalette,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "uppercase",
            padding: "16px 24px",
            boxShadow: "none",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode
              ? backgroundPalette["200"]
              : backgroundPalette["100"],
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: backgroundPalette["50"],
          },
        },
      },
    },
    typography: {
      fontFamily: "Inter, Arial, sans-serif",
    },
  });
};

export default useTheme;
