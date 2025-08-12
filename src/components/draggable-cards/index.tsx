import { type ReactNode, useState } from "react";
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
import { TbDots } from "react-icons/tb";

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
        gridTemplateColumns: `repeat(${column}, ${
          customGridTemplateColumns || "1fr"
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
}: DraggableCardProps) => {
  const [isDragging, setDragging] = useState(false);

  const ref = useMeasurePosition((pos) => updatePosition(i, pos));

  return (
    <Card
      component={motion.div}
      ref={ref as any}
      layout
      initial={false}
      sx={{
        background: "white",
        zIndex: isDragging ? 3 : 1,
        p: padding || 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        ...cardSx,
      }}
      animate={{
        gridColumn: `span ${card.column}`,
        gridRow: `span ${card.row}`,
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
      drag={!turnDragOff}
      dragSnapToOrigin
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onUpdate={({ x, y }) => {
        isDragging && updateOrder(i, Number(x), Number(y));
      }}
    >
      <Stack
        sx={{ height: "100%", width: "100%" }}
        justifyContent="space-between"
      >
        {card.title && (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontFeatureSettings: `'liga' off, 'clig' off`,
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: 0.15,
              }}
            >
              {card.title}
            </Typography>
            {!turnDragOff && (
              <IconButton>
                <TbDots />
              </IconButton>
            )}
          </Stack>
        )}
        {card.content}
      </Stack>
    </Card>
  );
};

export default DraggableCard;
