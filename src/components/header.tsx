import {
  AppBar,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ThemeToggle from "./theme-toggle";
import darkLogo from "../assets/images/logo/black.png";
import lightLogo from "../assets/images/logo/white.png";
import { useCurrentThemeMode } from "../assets/theme";
import chroma from "chroma-js";

const Header = () => {
  const { darkMode, bgColor } = useCurrentThemeMode();

  return (
    <AppBar position="sticky" elevation={0} sx={{
      backgroundColor: chroma(bgColor).alpha(0.33).css(),
      backdropFilter: "blur(16px)",
    }}>
      <Toolbar
        sx={{
          backdropFilter: "blur(16px)",
          color: "text.primary",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" gap={2}>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: 40,
                  width: 40,
                  p: 1,
                  borderRadius: 2,
                  backgroundColor: "background.100",
                }}
              >
                <img
                  src={darkMode ? lightLogo : darkLogo}
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Stack>
              <Typography
                variant="h6"
                fontSize={18}
                fontWeight={600}
                letterSpacing={0.25}
              >
                keyjey
                <Typography
                  component="span"
                  fontSize={18}
                  fontWeight={600}
                  letterSpacing={0.25}
                  color="primary"
                >
                  elpi.
                </Typography>
              </Typography>
            </Stack>
            <ThemeToggle />
          </Stack>
        </Container>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default Header;
