import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile-picture.png";
import arrow from "../assets/images/arrow.png";
import GradualSpacing from "../components/gradual-text";
import Typing from "../components/typing-text";
import Marquee from "../components/marquee";
import { useBreakpoint } from "../assets/theme";
import { handleScrollToSection } from "../components/header";

const Hero = () => {

  const { breakpoint } = useBreakpoint();

  return (
    <Stack
      id="hero"
      component={motion.div}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 2 }}
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        minHeight: { xs: "calc(100dvh - 57px)", md: "calc(100dvh - 65px)" },
        p: { md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          gap={2}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Stack gap={4} direction="column" alignItems="flex-start">
            <Stack
              gap={4}
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "flex-start", md: "center" }}
            >
              <Stack gap={4} direction="row" alignItems="center">
                <Box
                  component={motion.img}
                  src={profileImage}
                  sx={{ width: 100, height: 100, borderRadius: 6 }}
                  alt="Profile"
                  whileHover={{
                    scale: 5,
                    zIndex: 1,
                  }}
                />
                <Box
                  component={motion.img}
                  src={arrow}
                  initial={{
                    x: -150,
                    rotate: -45,
                    zIndex: 0,
                  }}
                  animate={{
                    x: 0,
                    rotate: 0,
                  }}
                  transition={{ duration: 1 }}
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 6,
                  }}
                  whileHover={{
                    rotate: 45,
                  }}
                />
              </Stack>
              <GradualSpacing
                text={{ xs: "Hi There, I'm", md: "Hi There," }}
                sx={{
                  fontSize: { xs: 62, md: "6.667em" },
                  letterSpacing: "-0.02em",
                  lineHeight: { xs: "2rem", md: "1.75rem" },
                  textTransform: "uppercase",
                }}
              />
            </Stack>
            <Stack gap={3} direction="column" alignItems="flex-start">
              <Typing
                text={{ xs: "Kim Joseph", md: "I'm Kim Joseph" }}
                sx={{
                  fontSize: { xs: 62, md: "6.667em" },
                  letterSpacing: "-0.02em",
                  lineHeight: { xs: "2rem", md: "5rem" },
                  textTransform: "uppercase",
                }}
              />
              <Typing
                text="Peñaloza"
                sx={{
                  fontSize: { xs: 62, md: "6.667em" },
                  letterSpacing: "-0.02em",
                  lineHeight: { xs: "2rem", md: "6.666rem" },
                  textTransform: "uppercase",
                }}
              />
            </Stack>
          </Stack>
          <Stack
            gap={4}
            direction="column"
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            justifyContent="space-between"
          >
            <Typography
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              sx={{
                maxWidth: 400,
                textAlign: { xs: "start", md: "end" },
                fontSize: 20,
              }}
            >
              I'm a software engineer passionate about creating impactful
              solutions. Skilled in full-stack development, from{" "}
              <Typography
                component="span"
                fontSize={24}
                color="primary.main"
                fontWeight={700}
              >
                UI
              </Typography>{" "}
              to{" "}
              <Typography
                component="span"
                fontSize={24}
                color="secondary.main"
                fontWeight={700}
              >
                backend
              </Typography>
              , I enjoy solving complex problems with creativity.
            </Typography>
            <Stack direction={{ xs: "column", md: "row" }} gap={2}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: 50 }}
                onClick={() => handleScrollToSection("projects", breakpoint)}
              >
                View Portfolio
              </Button>
              <Button variant="contained">Download CV</Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Stack
        sx={{
          position: "absolute",
          left: 120,
          bottom: 0,
          transform: "rotate(-90deg)",
          transformOrigin: "left bottom",
          opacity: 0.1,
          zIndex: -1,
          maxWidth: "100dvh",
        }}
      >
        <Marquee>
          <Typing
            text="KEYJEYELPI"
            sx={{
              fontSize: "10rem",
              letterSpacing: "-0.02em",
              lineHeight: { xs: "2rem", md: "5rem" },
              textTransform: "uppercase",
            }}
          />
        </Marquee>
      </Stack>
    </Stack>
  );
};

export default Hero;
