import { type ReactNode } from "react";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

const scrollDuration = 10; // seconds, adjust speed

const Marquee = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      component={motion.div}
      direction="row"
      initial={{ x: "-96%" }}
      animate={{
        x: ["-96%", "0%"],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: scrollDuration,
        ease: "linear",
      }}
    >
      {children}
      {children}
      {children}
      {children}
    </Stack>
  );
};

export default Marquee;
