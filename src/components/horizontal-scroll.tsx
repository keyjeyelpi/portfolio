import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Box from "@mui/material/Box";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const scrollPerc = useMotionValue(0);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth + window.innerWidth);
    }
  }, [scrollRef]);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    if (ghostRef.current) resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  // Replace old useViewportScroll with new useScroll in framer v12
  const { scrollYProgress } = useScroll();

  // Update scroll percentage manually
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      scrollPerc.set(v);
    });
    return () => unsub();
  }, [scrollYProgress, scrollPerc]);

  const transform = useTransform(
    scrollPerc,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <Box>
      <Box
        sx={{
          position: "sticky",
          WebkitPosition: "sticky",
          top: 0,
          left: 0,
          right: 0,
          willChange: "transform",
        }}
      >

        <Box
          component={motion.section}
          ref={scrollRef}
          sx={{
            height: "100vh",
            width: "max-content",
            display: "flex",
            alignItems: "center",
            px: 160,
          }}
          style={{ x: spring }}
        >
          {/* Thumbnails */}
          <Box
            sx={{
              display: "flex",
            }}
          >
            {children}
          </Box>
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

export default SmoothScroll;
