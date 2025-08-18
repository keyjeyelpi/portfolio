import { type ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMeasurePosition } from "./useMeasurePosition";
import {
  Box,
  Card,
  IconButton,
  Stack,
  Typography,
  type SxProps,
} from "@mui/material";
import { TbX } from "react-icons/tb";

export interface CardProps {
  id: string;
  content: ReactNode;
  column: number;
  row: number;
  title?: string;
}

interface DraggableCardProps {
  i: number;
  card: CardProps;
  updatePosition: (
    index: number,
    pos: { top: number; left: number; column: number; row: number }
  ) => void;
  updateOrder: (index: number, xOffset: number, yOffset: number) => void;
  padding?: number;
  turnDragOff?: boolean;
  cardSx?: SxProps;
  onClick?: () => void;
  fullScreen?: boolean;
  removeFullScreen?: () => void;
}

export const DraggableCardContainer = ({
  row = 4,
  column = 4,
  gap = 2,
  children,
  customGridTemplateColumns,
  customGridTemplateRows,
}: {
  row: number;
  column: number;
  children: ReactNode;
  gap?: number;
  customGridTemplateColumns?: string;
  customGridTemplateRows?: string;
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        gridTemplateColumns: `repeat(${column}, ${customGridTemplateColumns || "1fr"
          })`,
        gridTemplateRows: `repeat(${row}, ${customGridTemplateRows || "1fr"})`,
        gap,
      }}
      display="grid"
    >
      {children}
    </Box>
  );
};

const DraggableCard = ({
  i,
  card,
  updatePosition,
  updateOrder,
  padding,
  turnDragOff,
  cardSx,
  onClick,
  fullScreen,
  removeFullScreen
}: DraggableCardProps) => {
  const [isDragging, setDragging] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const ref = useMeasurePosition((pos) => updatePosition(i, pos));

  useEffect(() => {
    if (!fullScreen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };

  }, [fullScreen])



  return (
    <Card
      component={motion.div}
      ref={ref as any}
      layout
      initial={false}
      sx={{
        position: "relative",
        background: "background.default",
        zIndex: isDragging ? 3 : 1,
        p: padding || 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        ...cardSx,
        ...(fullScreen && {
          position: "fixed",
          top: 0,
          left: 0,
          width: { xs: "100%", md: "100vw" },
          height: { xs: "100%", md: "100dvh" },
          zIndex: 1300, // ensure it's above everything
          justifyContent: "center",
          alignItems: "center",
        }),
      }}
      onClick={onClick}
      animate={{
        gridColumn: `span ${card.column}`,
        gridRow: `span ${card.row}`,
        ...(fullScreen ? {
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1300,
        } : {
          width: "auto",
          height: "auto",
          zIndex: [1, 0]
        })
      }}
      elevation={0}
      // whileHover={
      //   turnDragOff
      //     ? undefined
      //     : {
      //         scale: 1.03,
      //         boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
      //       }
      // }
      // whileTap={
      //   turnDragOff
      //     ? undefined
      //     : {
      //         scale: 1.12,
      //         boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
      //       }
      // }
      drag={!turnDragOff && !fullScreen}
      onHoverStart={() => {
        if (fullScreen) return;
        setShowTitle(true);
      }}
      onHoverEnd={() => {
        setShowTitle(false)
      }}
      dragSnapToOrigin
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onUpdate={({ x, y }) => {
        isDragging && updateOrder(i, Number(x), Number(y));
      }}
    >
      {fullScreen && removeFullScreen && <IconButton component={motion.div}
        sx={{
          backgroundColor: "background.default",
          zIndex: 1
        }}
        initial={{
          position: "fixed",
          right: 20,
          top: 20
        }}
        onClick={(e) => {
          e.stopPropagation();
          removeFullScreen();
        }}
      >
        <TbX />
      </IconButton>}
      <Stack
        sx={{ height: "100%", width: "100%" }}
        justifyContent="space-between"
      >
        {
          showTitle && <Stack alignItems="center" justifyContent="center" sx={{
            bgcolor: "rgba(0,0,0,.5)",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 20
          }}>
            <Typography variant="h1" sx={{ color: "white" }}>
              {card.title}
            </Typography>
          </Stack>
        }
        <Box sx={{
          height: fullScreen ? "100dvh" : "100%",
          maxWidth: fullScreen ? { xs: "100%", md: "100vw" } : "100%",
          overflowY: fullScreen ? "auto" : "none"
        }}>

          {card.content}
        </Box>
      </Stack>
    </Card >
  );
};

export default DraggableCard;
