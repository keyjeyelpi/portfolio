import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuid } from 'uuid';
import chroma from "chroma-js";

import { useBreakpoint, useCurrentThemeMode } from "../assets/theme";

import iKeep_1 from "../assets/images/projects/iKeep/1.png";
import iKeep_2 from "../assets/images/projects/iKeep/2.png";
import iKeep_3 from "../assets/images/projects/iKeep/3.png";
import iKeep_4 from "../assets/images/projects/iKeep/4.png";
import iKeep_5 from "../assets/images/projects/iKeep/5.png";
import iKeep_6 from "../assets/images/projects/iKeep/6.png";
import iKeep_7 from "../assets/images/projects/iKeep/7.png";

import iXORPv3_1 from "../assets/images/projects/iXORP-v3/1.png";
import iXORPv3_2 from "../assets/images/projects/iXORP-v3/2.png";
import iXORPv3_3 from "../assets/images/projects/iXORP-v3/3.png";
import iXORPv3_4 from "../assets/images/projects/iXORP-v3/4.png";
import iXORPv3_5 from "../assets/images/projects/iXORP-v3/5.png";
import iXORPv3_6 from "../assets/images/projects/iXORP-v3/6.png";
import iXORPv3_7 from "../assets/images/projects/iXORP-v3/7.png";
import iXORPv3_8 from "../assets/images/projects/iXORP-v3/8.png";

import salesPortal_1 from "../assets/images/projects/sales-portal/1.png";
import salesPortal_2 from "../assets/images/projects/sales-portal/2.png";

import xeniaCloud_1 from "../assets/images/projects/xenia-cloud/1.png";
import xeniaCloud_2 from "../assets/images/projects/xenia-cloud/2.png";
import xeniaCloud_3 from "../assets/images/projects/xenia-cloud/3.png";
import xeniaCloud_4 from "../assets/images/projects/xenia-cloud/4.png";
import xeniaCloud_5 from "../assets/images/projects/xenia-cloud/5.png";
import xeniaCloud_6 from "../assets/images/projects/xenia-cloud/6.png";
import xeniaCloud_7 from "../assets/images/projects/xenia-cloud/7.png";


import Project from "../pages/project";
import HorizontalScroll from "../components/horizontal-scroll";

const projects = [
  {
    id: uuid(),
    aspectRatio: 16 / 9,
    title: "IXORP Booking Engine",
    images: [
      iXORPv3_1,
      iXORPv3_2,
      iXORPv3_3,
      iXORPv3_4,
      iXORPv3_5,
      iXORPv3_6,
      iXORPv3_7,
      iXORPv3_8,
    ],
    descriptions: [
      "iXORP Booking Engine is a powerful and fully customizable hotel booking application designed to adapt seamlessly to your property's unique needs. With dynamic color theming, it easily aligns with your brand identity, ensuring a consistent and professional guest experience. The system supports flexible and customizable payment gateway integrations, giving hotels the freedom to choose the most convenient and secure payment solutions for their market. iXORP also comes equipped with built-in analytics, empowering hoteliers with real-time insights into bookings, revenue, and customer behavior—helping drive smarter business decisions."
    ],
    tools: [
      "React",
      "Framer Motion",
      "Material UI",
      "Node JS",
      "MySQL"
    ],
    role: "System Developer",
  },
  {
    id: uuid(),
    aspectRatio: 16 / 9,
    title: "Xenia Cloud",
    images: [
      xeniaCloud_1,
      xeniaCloud_2,
      xeniaCloud_3,
      xeniaCloud_4,
      xeniaCloud_5,
      xeniaCloud_6,
      xeniaCloud_7
    ],
    descriptions: [
      "Xenia Cloud is an all-in-one online platform built to simplify hotel and resort operations. It brings together essential modules such as front office, accounting, and POS systems—seamlessly integrated yet capable of running independently to fit each property’s needs. Designed with flexibility in mind, it allows hotels to adopt the tools they require while ensuring smooth coordination across departments for a consistent and hassle-free workflow.",
      "Powered by cloud technology, Xenia Cloud provides real-time access from anywhere, enabling staff to manage reservations, guest profiles, billing, and daily operations with ease. Its customizable workflows, detailed reporting, and analytics help management gain actionable insights, improve efficiency, and deliver a superior guest experience. Scalable and adaptable, Xenia Cloud grows with your business, making it a reliable solution for hospitality management."
    ],
    tools: [
      "React",
      "Framer Motion",
      "Material UI",
      "Node JS",
      "MySQL"
    ],
    role: "System Developer",
  },
  {
    id: uuid(),
    aspectRatio: 16 / 9,
    title: "Hospitality TV",
    images: [
    ],
    descriptions: [
      "Hospitality TV is a specialized in-room entertainment solution designed for hotels, resorts, and other hospitality establishments. It provides guests with a personalized viewing experience, offering access to live TV channels, on-demand content, streaming apps, and hotel services—all through an intuitive interface. Beyond entertainment, it serves as a platform for promoting hotel amenities, delivering important information, and enhancing guest engagement, creating a modern, seamless, and memorable stay."
    ],
    tools: [
      "HTML",
      "CSS",
      "JS",
      "Tizen",
      "MySQL"
    ],
    role: "System Developer",
  },
  {
    id: uuid(),
    aspectRatio: 16 / 9,
    title: "Sales Portal",
    images: [
      salesPortal_1,
      salesPortal_2
    ],
    descriptions: [
      "Sales Portal is a centralized digital platform designed to streamline the entire sales process. It provides sales teams with easy access to product catalogs, pricing, quotations, customer information, and real-time updates—all in one intuitive interface. By automating repetitive tasks and consolidating sales activities, the portal helps reduce manual errors, increase efficiency, and improve collaboration across departments.",
      "With its secure, server-based setup, the Sales Portal allows hotel and resort staff to manage leads, track opportunities, and monitor sales activities directly within their local network. It also offers customizable reporting and analytics, giving management clear insights into customer preferences, sales performance, and revenue opportunities."
    ],
    tools: [
      "PHP",
      "CSS",
      "JS",
      "MySQL"
    ],
    role: "System Developer",
  },
  {
    id: uuid(),
    aspectRatio: "9 / 16",
    title: "iKeep v2",
    images: [
      iKeep_1,
      iKeep_2,
      iKeep_3,
      iKeep_4,
      iKeep_5,
      iKeep_6,
      iKeep_7,
    ],
    descriptions: [
      "iKeep is a room monitoring application designed for hotels and resorts to efficiently track housekeeping and room status in real time. It provides a clear overview of clean, dirty, vacant, and occupied rooms, giving staff instant visibility into the property’s readiness for guests. With its intuitive interface, iKeep streamlines communication between housekeeping and front office teams, ensuring faster room turnovers and improved operational efficiency.",
      "By centralizing room status updates in one platform, iKeep minimizes delays, reduces errors, and helps staff prioritize tasks more effectively. Managers can easily monitor progress, allocate resources, and maintain high standards of cleanliness and service. With iKeep, hotels and resorts can deliver a seamless guest experience by ensuring rooms are always ready on time."
    ],
    tools: [
      "Figma"
    ],
    role: "UI/UX Designer",
  },
];

const Projects = () => {
  const { breakpoint } = useBreakpoint();
  const { bgColor } = useCurrentThemeMode();
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    if (!selected) {
      document.body.style.overflowY = "auto";
      return;
    }

    document.body.style.overflowY = "hidden";
  }, [selected])

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {
          selected && (() => {
            const project = projects.find((project) => project.id === selected);
            return project ? (
              <Box
                key={project.id}
                component={motion.div}
                layoutId={project.id}
                sx={{
                  height: "100dvh",
                  width: "100vw",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  backgroundColor: "background.default",
                  borderRadius: 2,
                  border: "solid 1px",
                  borderColor: "background.100",
                  overflow: "auto",
                }}
                initial={{
                  zIndex: 0,
                }}
                animate={{
                  zIndex: 9999,
                }}
              >
                <Project
                  title={project.title}
                  images={project.images}
                  descriptions={project.descriptions}
                  tools={project.tools}
                  role={project.role}
                  selected
                  setSelected={() => setSelected("")}
                />
              </Box>
            ) : null;
          })()
        }
      </AnimatePresence>
      <Stack
        id="projects"
        component={motion.div}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        sx={{
          pt: 10,
          width: "100%",
          maxWidth: "100vw",
          minHeight: { xs: "calc(100dvh - 57px)", md: "calc(100dvh - 65px)" },
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          gap={1}>
          <Typography fontSize={24}>Latest Projects</Typography>
          <Typography
            fontSize={48}
            fontWeight={800}
            textTransform="uppercase"
            color="secondary"
            sx={{
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Take a look at my latest works
          </Typography>
        </Stack>
        <HorizontalScroll>
          {
            projects.map((project) => (
              <Box
                key={project.id}
                component={motion.div}
                layoutId={project.id}
                onClick={() => setSelected(project.id)}
                sx={{
                  position: "relative",
                  height:
                    breakpoint === "xs"
                      ? "60vh"
                      : "80vh",
                  aspectRatio: project.aspectRatio.toString(),
                  scrollSnapAlign: "center",
                  flexShrink: 0,
                  borderRadius: 2,
                  border: "solid 1px",
                  borderColor: "background.100",
                  backgroundColor: "background.100",
                  overflow: "hidden",
                  cursor: "pointer",
                  mr: 1,
                  "&:hover #project-overlay": {
                    backdropFilter: "blur(8px)",
                    bgcolor: chroma(bgColor).alpha(0.6).css(),
                  },
                  "&:hover #project-container": {
                    transform: "scale(1.2)",
                  },
                  "&:hover #project-title": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <Box id="project-title" sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  p: 2,
                  zIndex: 2,
                  transform: "translateY(-100%)",
                  transition: "transform 0.5s",
                }}>
                  <Typography variant="h4" fontWeight={600}>
                    {project.title}
                  </Typography>
                </Box>
                <Box id="project-overlay" sx={[{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  zIndex: 1,
                  transition: "backdrop-filter 1s, background-color 1s",
                  bgcolor: chroma(bgColor).alpha(0.2).css(),
                  backdropFilter: "blur(0px)",
                }]} />

                <Box
                  sx={{
                    all: "unset",
                  }}
                  id="project-container"
                >
                  <Project
                    {...project} />
                </Box>
              </Box>
            ))
          }
        </HorizontalScroll>
      </Stack>
    </>
  );
};

export default Projects;

