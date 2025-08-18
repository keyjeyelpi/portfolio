import { useEffect, useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

interface ImageSliderProps {
    images: string[];
    height?: number | string;
    width?: number | string;
    showControl?: boolean;
    autoScroll?: boolean;
}

const ImageSlider = ({ images, height = 400, width = "100%", showControl, autoScroll }: ImageSliderProps) => {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (!autoScroll) return;

        const timeout = setTimeout(handleNext, 5000);

        return () => clearTimeout(timeout);
    }, [autoScroll])

    return (
        <Box
            sx={{
                position: "relative",
                width,
                height,
                overflow: "hidden",
            }}
        >
            <AnimatePresence mode="wait">
                <Box component={motion.img}
                    key={images[index]}
                    src={images[index]}
                    alt={`slide-${index}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>

            {images.length > 1 && showControl && <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    transform: "translateY(-50%)",
                    px: 1,
                }}
            >
                <IconButton onClick={handlePrev} sx={{ bgcolor: "rgba(0,0,0,0.4)", color: "white" }}>
                    <TbChevronLeft />
                </IconButton>
                <IconButton onClick={handleNext} sx={{ bgcolor: "rgba(0,0,0,0.4)", color: "white" }}>
                    <TbChevronRight />
                </IconButton>
            </Stack>}

        </Box>
    );
};

export default ImageSlider;
