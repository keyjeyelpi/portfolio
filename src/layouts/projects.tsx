import { useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { v4 as uuid } from 'uuid';

import { useBreakpoint } from "../assets/theme";
import iXORPv3_1 from "../assets/images/projects/iXORP-v3/1.png";
import iXORPv3_2 from "../assets/images/projects/iXORP-v3/2.png";
import iXORPv3_3 from "../assets/images/projects/iXORP-v3/3.png";
import iXORPv3_4 from "../assets/images/projects/iXORP-v3/4.png";
import iXORPv3_5 from "../assets/images/projects/iXORP-v3/5.png";
import iXORPv3_6 from "../assets/images/projects/iXORP-v3/6.png";
import iXORPv3_7 from "../assets/images/projects/iXORP-v3/7.png";
import iXORPv3_8 from "../assets/images/projects/iXORP-v3/8.png";
import xeniaCloud_1 from "../assets/images/projects/xenia-cloud/1.png";
import xeniaCloud_2 from "../assets/images/projects/xenia-cloud/2.png";

import DraggableCard, {
  DraggableCardContainer,
} from "../components/draggable-cards";
import { usePositionReorder } from "../components/draggable-cards/usePositionReorder";

import Project from "../pages/project";

const projects = [
  {
    id: uuid(),
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
    row: 30,
  },
  {
    id: uuid(),
    title: "Xenia Cloud",
    images: [
      xeniaCloud_1,
      xeniaCloud_2,
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
    row: 40,
  },
  {
    id: uuid(),
    title: "Hospitality TV",
    images: [
    ],
    descriptions: [
      "Hospitality TV is a specialized in-room entertainment solution designed for hotels, resorts, and other hospitality establishments. It provides guests with a personalized viewing experience, offering access to live TV channels, on-demand content, streaming apps, and hotel services—all through an intuitive interface. Beyond entertainment, it serves as a platform for promoting hotel amenities, delivering important information, and enhancing guest engagement, creating a modern, seamless, and memorable stay."
    ],
    tools: [
      "React",
      "Framer Motion",
      "Material UI",
      "Node JS",
      "MySQL"
    ],
    role: "System Developer",
    row: 25,
  },

];

const Projects = () => {
  const [order, updatePosition, updateOrder] = usePositionReorder(projects);
  const { breakpoint } = useBreakpoint();
  const [selected, setSelected] = useState<string>();

  return (
    <Stack
      id="projects"
      component={motion.div}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      justifyContent="center"
      alignItems="center"
      sx={{
        pt: 10,
        width: "100%",
        minHeight: { xs: "calc(100dvh - 57px)", md: "calc(100dvh - 65px)" },
      }}
    >
      <Container maxWidth="xl">
        <Stack gap={2}>
          <Stack alignItems="center" gap={1}>
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
          <DraggableCardContainer gap={2} row={40} column={12}>
            {order.map((project, idx) => (
              <DraggableCard
                key={project.id}
                i={idx}
                fullScreen={selected === project.id}
                card={{
                  id: project.id,
                  title: project.title,
                  content: <Project
                    images={project.images}
                    descriptions={project.descriptions}
                    tools={project.tools}
                    role={project.role}
                    selected={selected === project.id}
                    title={project.title}
                  />,
                  column: breakpoint === "xs" ? 12 : 4,
                  row: breakpoint === "xs" ? 12 : project.row || 4,
                }}
                onClick={() => setSelected(project.id)}
                removeFullScreen={() => setSelected(undefined)}
                cardSx={{
                  border: "solid 1px",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
                updatePosition={updatePosition}
                updateOrder={updateOrder}
              />
            ))}
          </DraggableCardContainer>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Projects;

