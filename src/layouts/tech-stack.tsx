import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const techStacksIUse = [
  {
    title: "React",
    size: 3,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    ],
  },
  {
    title: "HTML/CSS/JS",
    size: 4,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
  },
  {
    title: "Typescript",
    size: 2,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    ],
  },
  {
    title: "Next.js",
    size: 3,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    ],
  },
  {
    title: "Docker",
    size: 2,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    ],
  },
  {
    title: "MySQL",
    size: 3,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    ],
  },
  {
    title: "Express.js",
    size: 3,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    ],
  },
  {
    title: "Git",
    size: 4,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    ],
  },
  {
    title: "Frameworks",
    size: 6,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    ],
  },
  {
    title: "Multimedia & UI/UX",
    size: 6,
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
    ],
  },
];

const TechStack = () => {
  return (
    <Stack
      id="tech-stack"
      component={motion.div}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        width: "100%",
        minHeight: { xs: "calc(100dvh - 57px)", md: "calc(100dvh - 65px)" },
        bgcolor: "background.50",
      }}
    >
      <Container maxWidth="lg">
        <Stack gap={2}>
          <Stack
            gap={{ xs: 1, md: 2 }}
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Typography fontSize={24} color="primary">
              What I use
            </Typography>
            <Typography
              fontSize="2.667rem"
              fontWeight={700}
              textAlign={{ xs: "left", md: "right" }}
              textTransform={"uppercase"}
              sx={{
                maxWidth: { md: 500 },
              }}
            >
              Techstacks that{" "}
              <Typography
                component="span"
                fontSize="2.667rem"
                fontWeight={700}
                textTransform={"uppercase"}
                color="primary"
              >
                I
              </Typography>{" "}
              have learned throughout my career
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            <AnimatePresence>
              {techStacksIUse.map((techStack, index) => (
                <Grid
                  component={motion.div}
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: index * 0.4,
                  }}
                  size={{
                    xs: 12,
                    md: techStack.size || 6,
                  }}
                  sx={{
                    minHeight: 150,
                  }}
                  key={index}
                >
                  <Stack
                    component={motion.div}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    justifyContent="flex-end"
                    sx={{
                      p: 1.5,
                      border: "solid 1px",
                      borderColor: "divider",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "background.default",
                      borderRadius: 2,
                      position: "relative",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      gap={2}
                      sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        margin: "auto",
                      }}
                    >
                      {techStack.images.map((image, imgIndex) => (
                        <Box
                          key={imgIndex}
                          component={motion.img}
                          src={image}
                          alt={techStack.title}
                          whileHover={{
                            rotate: [20, -20, 20, -20, 0],
                            transition: {
                              ease: "easeInOut",
                              duration: 0.5,
                            },
                          }}
                          sx={{
                            width: 36,
                            height: 36,
                            objectFit: "contain",
                          }}
                        />
                      ))}
                    </Stack>
                    <Typography
                      fontSize={14}
                      textTransform={"uppercase"}
                      sx={{ opacity: 0.5 }}
                    >
                      {techStack.title}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};

export default TechStack;
