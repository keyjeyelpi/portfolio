import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Servo from "../assets/images/logo/servo.png";
import LWUA from "../assets/images/logo/lwua.png";
import { useState } from "react";

const CompaniesIveWorkedWith = [
  {
    icon: Servo,
    name: "Servo IT Solutions",
    duration: "Oct. 2021 - Aug. 2025",
    position: "Full Stack Developer | Multimedia Designer | UI/UX Designer",
    responsibilities: [
      "Built and maintained applications leveraging React, Node.js, and MySQL.",
      "Designed and implemented iXORP Booking Engine, a full-featured system for managing reservations.",
      "Integrated auto-translate and currency conversion features to enhance user experience.",
      "Managed key modules of Xenia Cloud, including Front-Office and Hermes Accounting System",
      "Developed Hospitality TV System, a platform for managing hotel TV channels, content and integration with the front-office system.",
      "Developed 40+ websites for hotels and resorts, covering both single-property and multi-property operations.",
      "Produced multimedia assets for marketing, training, and branding, including IDs, certificates, and posters.",
      "Redesigned UI and UX for iServe and iKeep, mobile products for hotel management.",
    ],
  },
  {
    name: "Freelance Projects",
    duration: "Aug. 2019 - Aug. 2021",
    position: "Mobile Developer | UI/UX Designer",
    responsibilities: [
      "Designed and developed responsive web and mobile applications, ensuring optimal performance across devices.",
      "Created intuitive user interfaces and engaging user experiences through wireframing, prototyping, and high-fidelity design.",
      "Built and maintained mobile applications using cross-platform frameworks and native development tools.",
      "Collaborated with clients to gather requirements, propose solutions, and deliver projects on time.",
      "Integrated APIs and backend services to support dynamic application functionality.",
      "Optimized code, assets, and workflows for better scalability, maintainability, and performance.",
      "Provided post-launch support, updates, and feature enhancements based on user feedback.",
    ],
  },
  {
    icon: LWUA,
    name: "Local Water Utilities Administration",
    duration: "Jan. - May. 2019",
    position: "Web Developer Intern",
    responsibilities: [
      "Developed a branch and location management system for the Local Water Utilities Administration using PHP and Laravel, streamlining data handling across multiple service areas.",
      "Implemented CRUD functionality for branch and location records, enabling efficient updates and accurate data tracking.",
      "Designed relational database schemas to support hierarchical branch-location structures and optimized queries for faster retrieval.",
      "Integrated user authentication, role-based access control, and secure session management to ensure safe system usage across different administrative levels.",
      "Built a dynamic reporting module, allowing administrators to generate and export customizable reports for operational insights.",
      "Collaborated with supervisors to gather requirements, align system features with organizational needs, and deliver a functional prototype.",
    ],
  },
];

const Experience = () => {
  const [currentlyHovered, setCurrentlyHovered] = useState<number | null>(null);

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
      }}
    >
      <Container maxWidth="xl">
        <Stack gap={2}>
          <Stack
            gap={{ xs: 1, md: 2 }}
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Typography fontSize={24} color="secondary">
              What I have done
            </Typography>
            <Typography
              fontSize="2.667rem"
              fontWeight={700}
              textAlign={{ xs: "left", md: "right" }}
              textTransform={"uppercase"}
            >
              Experiences{" "}
              <Typography
                component="span"
                fontSize="2.667rem"
                fontWeight={700}
                textTransform={"uppercase"}
                color="secondary"
              >
                I
              </Typography>{" "}
              have accummulated
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            <AnimatePresence>
              {CompaniesIveWorkedWith.map((service, index) => (
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
                    direction="row"
                    gap={4}
                    whileHover={{
                      scale: 1.05,
                      zIndex: 1,
                    }}
                    sx={{
                      bgcolor: "background.default",
                      border: "solid 1px",
                      borderColor: "divider",
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                      p: 4,
                      position: "relative",
                    }}
                    onMouseEnter={() => setCurrentlyHovered(index)}
                    onMouseLeave={() => setCurrentlyHovered(null)}
                  >
                    <Stack
                      alignItems="center"
                      sx={{ width: 20, position: "relative" }}
                    >
                      <Box
                        sx={{
                          width: 11,
                          height: 11,
                          borderRadius: 10,
                          bgcolor:
                            index % 2 === 0 ? "primary.main" : "secondary.main",
                        }}
                      />
                      <Box
                        component={motion.div}
                        sx={{
                          bgcolor:
                            index % 2 === 0 ? "primary.main" : "secondary.main",
                        }}
                        initial={{
                          position: "absolute",
                          width: 1,
                        }}
                        animate={{
                          left: 5,
                          top: 5,
                          height: index === currentlyHovered ? "100%" : 40,
                          borderRadius: 1,
                        }}
                      />
                    </Stack>
                    <Stack
                      component={motion.div}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      justifyContent="space-between"
                    >
                      <Stack direction="row" alignItems="center" gap={2}>
                        {!!service.icon && (
                          <Box
                            component={motion.img}
                            src={service.icon}
                            sx={{ height: 36 }}
                          />
                        )}
                        <Stack>
                          <Typography
                            variant="h5"
                            fontSize="1.25em"
                            fontWeight={600}
                          >
                            {service.name}
                          </Typography>
                          <Typography fontSize={"1em"} sx={{ opacity: 0.5 }}>
                            {service.duration}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography fontSize={24}>{service.position}</Typography>
                      <Stack sx={{ mt: 4 }}>
                        {service.responsibilities.map((responsibility, i) => {
                          return (
                            <Stack
                              direction="row"
                              key={i}
                              gap={1}
                              sx={{ opacity: 0.5 }}
                            >
                              -{" "}
                              <Typography variant="body1">
                                {responsibility}
                              </Typography>
                            </Stack>
                          );
                        })}
                      </Stack>
                    </Stack>
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

export default Experience;
