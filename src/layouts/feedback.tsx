import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import KSG from "../assets/images/Gonzales_Kathleen.png";
import JCG from "../assets/images/Guevarra_John-Carlo.png";
import JPJ from "../assets/images/Jacobe_Juan-Paulo.png";
import ZGS from "../assets/images/Salonga_Zoilo-Jr.png";
import { useState } from "react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

const feedbacks = [
  {
    picture: KSG,
    name: "Kathleen Gonzales",
    company: "Servo IT Solutions - OPC",
    position: "Software Development Department Head - Project Manager",
    feedback: `I've had the chance to work with Kim, and he's the kind of teammate everyone hopes to have. He's professional, easy to get along with, and brings a positive vibe to any conversation.

What I really admire about him is his willingness to go the extra mile-whether it's staying late to finish something important, stepping in to help without being asked, or just making sure things get done right. You can always count on him to deliver and to make the process enjoyable along the way.

Any team would be lucky to have him.`,
  },
  {
    picture: JCG,
    name: "John Carlos Guevarra",
    company: "Servo IT Solutions - OPC",
    position: "Full-Stack Senior Software Developer",
    feedback:
      "Working with Kim Joseph has been a total joy! The attention to details, eye for design, talent for turning ideas into smooth, responsive interfaces and out of the box ideas are truly impressive. He is not just great at coding; he is also great colleague, always ready to collaborate, share ideas, and learn from other developers. Truly exceptional!",
  },
  {
    picture: JPJ,
    name: "Juan Paulo Jacobe",
    company: "Servo IT Solutions - OPC",
    position: "Assistant Project Manager - Cloud Solutions Lead",
    feedback:
      "Kim is an absolute gem to the team — hardworking, highly skilled, and always ready to step in and help without hesitation. He consistently delivers excellent work and goes the extra mile to ensure the best outcomes. What makes Kim stand out even more is his generosity in sharing knowledge, and lifting the whole team’s capabilities. His positive energy and dedication shine through in every project making him not just a teammate, but someone who truly makes work more enjoyable for everyone",
  },
  {
    picture: ZGS,
    name: "Zoilo Salonga Jr.",
    company: "Servo IT Solutions - OPC",
    position: "Solutions Architect",
    feedback: `I’ve had the privilege of working with Kim Joseph from the early days of our React CRA projects all the way through to more advanced and diverse work, including Tizen TV development.

Kim has consistently demonstrated exceptional skill as a Front-End Developer, combining technical expertise with a strong sense of design and user experience. From crafting clean, efficient, and scalable React code to tackling platform-specific challenges on Tizen TV, Kim approaches every task with focus, creativity, and a problem-solving mindset.

What stands out most is Kim’s adaptability—whether we were building from scratch or integrating complex features, he was quick to learn, eager to explore new tools, and always committed to delivering high-quality results. His collaborative nature and attention to detail have made him an invaluable team member.

Any team would be fortunate to have Kim Joseph on board, and I’m confident he will continue to excel and innovate in any front-end or cross-platform project he takes on.`,
  },
];

const Feedback = () => {
  const [currentSelected, setCurrentlySelected] = useState<number>(0);

  const handlePreviousFeedback = () =>
    setCurrentlySelected((prev) =>
      currentSelected === 0 ? feedbacks.length - 1 : Math.max(prev - 1, 0)
    );

  const handleNextFeedback = () =>
    setCurrentlySelected((prev) =>
      currentSelected === feedbacks.length - 1
        ? 0
        : Math.min(prev + 1, feedbacks.length - 1)
    );

  // useEffect(() => {
  //   const timeout = setTimeout(handleNextFeedback, 5000);

  //   return () => clearTimeout(timeout);
  // }, [currentSelected]);

  return (
    <Stack
      id="feedback"
      component={motion.div}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        width: "100%",
        minHeight: { xs: "calc(100dvh - 57px)", md: "calc(100dvh - 65px)" },
      }}
    >
      <Container maxWidth="lg">
        <Stack gap={2}>
          <Stack alignItems="center">
            <Typography fontSize={24} color="secondary">
              Turning Promises into Proof.
            </Typography>
            <Typography
              fontSize="2.667rem"
              fontWeight={700}
              textTransform={"uppercase"}
            >
              Feedbacks that tell who{" "}
              <Typography
                component="span"
                fontSize="2.667rem"
                fontWeight={700}
                textTransform={"uppercase"}
                color="secondary"
              >
                I
              </Typography>{" "}
              Am.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{ minHeight: 500 }}
          alignItems="center"
          justifyContent="center"
        >
          {feedbacks.map(
            (feedback, index) =>
              currentSelected === index && (
                <Stack
                  flex={1}
                  alignItems={"center"}
                  component={motion.div}
                  initial={{ opacity: 0, x: -100, filter: "blur(16px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 100, filter: "blur(16px)" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  sx={{ mt: 4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 100) {
                      handlePreviousFeedback();
                    } else if (info.offset.x < -100) {
                      handleNextFeedback();
                    }
                  }}
                >
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Box
                      component="img"
                      src={feedback.picture}
                      alt={feedback.name}
                      sx={{
                        backgroundColor: "primary.main",
                        width: 120,
                        height: 120,
                        borderRadius: 30,
                        objectFit: "cover",
                      }}
                    />
                  </Stack>
                  <Typography mt={2} textAlign="center">
                    "{feedback.feedback}"
                  </Typography>
                  <Stack alignItems="center" sx={{ opacity: 0.5, mt: 4 }}>
                    <Typography fontWeight={600} textAlign="center">
                      {feedback.name}
                    </Typography>
                    <Typography color="textSecondary" textAlign="center">
                      {feedback.position} at {feedback.company}
                    </Typography>
                  </Stack>
                </Stack>
              )
          )}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Button onClick={handlePreviousFeedback}>
            <TbArrowLeft />
          </Button>
          <Button onClick={handleNextFeedback}>
            <TbArrowRight />
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Feedback;
