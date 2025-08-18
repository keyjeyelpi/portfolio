import { Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import DraggableCard, {
  DraggableCardContainer,
} from "../components/draggable-cards";
import { usePositionReorder } from "../components/draggable-cards/usePositionReorder";
import { useBreakpoint } from "../assets/theme";
import IXORPBookingEngine from "../pages/ixorp";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "0",
    title: "IXORP Booking Engine",
    row: 30,
    content: (isSelected: boolean) => <IXORPBookingEngine selected={isSelected} />,
  },
  {
    id: "1",
    title: "Project 2",
    image: "",
    row: 20,
    content: (isSelected: boolean) => <img src="" alt="Project 2" />,
  },
  {
    id: "2",
    title: "Project 3",
    image: "",
    row: 30,
    content: (isSelected: boolean) => <img src="" alt="Project 3" />,
  },
  {
    id: "3",
    title: "Project 4",
    image: "",
    row: 40,
    content: (isSelected: boolean) => <img src="" alt="Project 4" />,
  },
  {
    id: "4",
    title: "Project 5",
    image: "",
    row: 30,
    content: (isSelected: boolean) => <img src="" alt="Project 5" />,
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
                  content: project.content(selected === project.id),
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

