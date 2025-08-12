import {
  AppBar,
  Button,
  Card,
  Container,
  Divider,
  IconButton,
  Popover,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ThemeToggle from "./theme-toggle";
import darkLogo from "../assets/images/logo/black.png";
import lightLogo from "../assets/images/logo/white.png";
import { useBreakpoint, useCurrentThemeMode } from "../assets/theme";
import chroma from "chroma-js";
import { TbMenu2 } from "react-icons/tb";
import { useState } from "react";

const urls = [
  {
    title: "Services",
    link: "services",
  },
  {
    title: "Experience",
    link: "projects",
  },
  {
    title: "Tech Stack",
    link: "tech-stack",
  },
  {
    title: "Feedback",
    link: "feedback",
  },
];

const Navigation = () => {
  const { breakpoint } = useBreakpoint();

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = breakpoint === "xs" ? 56 : 64;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  if (breakpoint === "xs") {
    return (
      <>
        <IconButton onClick={handleClick}>
          <TbMenu2 />
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Card>
            {urls.map((url, index) => (
              <>
                <Button
                  key={index}
                  variant="text"
                  onClick={() => handleScrollToSection(url.link)}
                  sx={{ width: 300, justifyContent: "flex-start" }}
                >
                  {url.title}
                </Button>
                <Divider />
              </>
            ))}
          </Card>
        </Popover>
      </>
    );
  }

  return (
    <Stack direction="row" alignItems="center">
      {urls.map((url, index) => (
        <Button
          key={index}
          variant="text"
          component="a"
          onClick={() => handleScrollToSection(url.link)}
          sx={{
            textDecoration: "none",
            color: "text.primary",
            "&:hover": {
              color: "primary.main",
            },
            textTransform: "capitalize",
          }}
        >
          {url.title}
        </Button>
      ))}
    </Stack>
  );
};

const Header = () => {
  const { darkMode, bgColor } = useCurrentThemeMode();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: chroma(bgColor).alpha(0.33).css(),
        backdropFilter: "blur(16px)",
      }}
    >
      <Toolbar
        sx={{
          backdropFilter: "blur(16px)",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
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
            <Stack direction="row" alignItems="center" gap={2}>
              <Navigation />
              <ThemeToggle />
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default Header;
