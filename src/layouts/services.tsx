import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { TbApi, TbDatabase, TbGlobe, TbPencil } from "react-icons/tb";

const servicesIOffer = [
  {
    icon: <TbGlobe size={36} />,
    title: "Website Development",
    description: "Building responsive and dynamic websites.",
  },
  {
    icon: <TbApi size={36} />,
    title: "API Design & Integration",
    description:
      "Create secure, scalable REST or GraphQL APIs and integrate with third-party services for seamless data exchange.",
  },
  {
    icon: <TbDatabase size={36} />,
    title: "Database Design & Optimization",
    description:
      "Designing efficient database schemas and optimizing queries for performance.",
  },
  {
    icon: <TbPencil size={36} />,
    title: "UI/UX Design",
    description: "Creating user-friendly and visually appealing interfaces.",
  },
];

const Services = () => {
  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
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
      <Container maxWidth="xl">
        <Stack gap={2}>
          <Stack
            gap={{ xs: 1, md: 2 }}
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Typography fontSize={24} color="primary">
              What I do
            </Typography>
            <Typography
              fontSize="2.667rem"
              fontWeight={700}
              textAlign={{ xs: "left", md: "right" }}
              textTransform={"uppercase"}
            >
              Digital Services{" "}
              <Typography
                component="span"
                fontSize="2.667rem"
                fontWeight={700}
                textTransform={"uppercase"}
                color="primary"
              >
                I
              </Typography>{" "}
              offer
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            <AnimatePresence>
              {servicesIOffer.map((service, index) => (
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
                    md: 6,
                  }}
                  key={index}
                >
                  <Stack
                    component={motion.div}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    justifyContent="space-between"
                    sx={{
                      p: 4,
                      bgcolor: "background.default",
                      border: "solid 1px",
                      borderColor: "divider",
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                    }}
                  >
                    <Stack direction="row" alignItems="center" gap={2}>
                      <Box sx={{ height: 36, width: 36 }}>{service.icon}</Box>
                      <Typography variant="h5" fontSize={36} fontWeight={600}>
                        <Typography
                          variant="h5"
                          fontSize={64}
                          fontWeight={600}
                          component={"span"}
                          color={index % 2 ? "primary" : "secondary"}
                        >
                          {service.title?.charAt(0).toUpperCase()}
                        </Typography>
                        {service.title?.slice(1)}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      fontSize={18}
                      sx={{ opacity: 0.5, mt: 100 / 8 }}
                    >
                      {service.description}
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

export default Services;
