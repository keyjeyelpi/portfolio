import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { Box } from "@mui/material";

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const scrollPerc: MotionValue<number> = useMotionValue(0);

  // Measure widths on mount + resize
  useLayoutEffect(() => {
    function updateRange() {
      if (scrollRef.current && containerRef.current) {
        setScrollRange(scrollRef.current.clientWidth + (160 * 2 * 8) + 50);
        setViewportW(containerRef.current.offsetWidth);
      }
    }
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  // Use page scroll progress (fixes mobile)
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      scrollPerc.set(v);
    });
  }, [scrollYProgress, scrollPerc]);

  // Translate horizontal scroll based on vertical scroll
  const transform = useTransform(
    scrollPerc,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <Box ref={containerRef} id="horizontal-scroll">
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          component={motion.div}
          ref={scrollRef}
          sx={{
            height: "100vh",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            px: 160,
          }}
          style={{ x: spring }}
        >
          <Box sx={{ display: "flex" }}>{children}</Box>
        </Box>
      </Box>
      <Box
        ref={ghostRef}
        sx={{
          width: "100vw",
          height: scrollRange,
        }}
      />
    </Box>
  );
};

export default HorizontalScroll;
