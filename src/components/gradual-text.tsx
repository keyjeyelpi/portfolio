import { Stack, Typography, type SxProps } from "@mui/material";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useBreakpoint } from "../assets/theme";

const GradualSpacing = ({
  text,
  sx,
  delay = 0,
}: {
  text:
    | string
    | {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };
  sx?: SxProps;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { breakpoint, bpOrder } = useBreakpoint();

  return (
    <Stack
      direction="row"
      spacing={0.2}
      justifyContent="center"
      ref={ref}
      component={motion.div}
      transition={{ delayChildren: delay }}
    >
      <AnimatePresence>
        {(typeof text === "string"
          ? text
          : typeof text === "object"
          ? (breakpoint === "xl"
              ? text.xl || text.lg || text.md || text.sm || text.xs
              : breakpoint === "lg"
              ? text.lg || text.md || text.sm || text.xs
              : breakpoint === "md"
              ? text.md || text.sm || text.xs
              : breakpoint === "sm"
              ? text.sm || text.xs
              : text.xs) ?? ""
          : ""
        )
          ?.split("")
          .map((char, i) => (
            <Typography
              component={motion.p}
              key={i}
              variant="h2"
              fontWeight="bold"
              sx={{
                textAlign: "center",
                fontSize: { xs: "1.25rem", sm: "2.25rem", md: "3.75rem" },
                letterSpacing: "-0.02em",
                lineHeight: { md: "4rem" },
                ...sx,
              }}
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {char === " " ? "\u00A0" : char}
            </Typography>
          ))}
      </AnimatePresence>
    </Stack>
  );
};

export default GradualSpacing;
