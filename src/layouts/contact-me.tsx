import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaViber, FaXTwitter } from "react-icons/fa6";
import { TbMail, TbPhone } from "react-icons/tb";

const contactMe = [
  {
    title: "keyjeyelpi@gmail.com",
    image: TbMail,
    link: "mailto:keyjeyelpi@gmail.com"
  },
  {
    title: "kj.penaloza@gmail.com",
    image: TbMail,
    link: "mailto:kj.penaloza@gmail.com"
  },
  {
    title: "+63 995 258 5388",
    image: TbPhone,
    link: "tel:+639952585388"
  },
  {
    title: "linkedin",
    image: FaLinkedin,
    link: "https://linkedin.com/in/keyjeyelpi"
  },
  {
    title: "github",
    image: FaGithub,
    link: "https://github.com/keyjeyelpi"
  },
  {
    title: "facebook",
    image: FaFacebook,
    link: "https://facebook.com/keyjeyelpi"
  },
  {
    title: "X",
    image: FaXTwitter,
    link: "https://twitter.com/keyjeyelpi"
  },
  {
    title: "Viber",
    image: FaViber,
    link: "viber://chat?number=+639952585388"
  },
];

const ContactMe = () => {
  return (
    <Stack
      id="contact-me"
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
        bgcolor: "background.50",
      }}
    >
      <Container maxWidth="lg">
        <Stack gap={2}>
          <Stack
            gap={{ xs: 1, md: 2 }}
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Typography fontSize={24} color="primary">
              How to find me
            </Typography>
            <Typography
              fontSize="2.667rem"
              fontWeight={700}
              textAlign={{ xs: "left", md: "right" }}
              textTransform={"uppercase"}
              sx={{
                maxWidth: { md: 500 },
              }}
            >
              Here's how to get in touch with {" "}
              <Typography
                component="span"
                fontSize="2.667rem"
                fontWeight={700}
                textTransform={"uppercase"}
                color="primary"
              >
                me
              </Typography>
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            <AnimatePresence>
              {
                contactMe.map((contact, index) => {
                  return <Grid
                    component={motion.div}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      delay: index * 0.4,
                    }}
                    size={{
                      xs: 12,
                      md: 3,
                    }}
                    sx={{
                      minHeight: 150,
                      cursor: "pointer",
                    }}
                    key={index}
                    onClick={() => window.open(contact.link, "_blank")}
                  >
                    <Stack
                      component={motion.div}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      justifyContent="flex-end"
                      sx={{
                        p: 1.5,
                        border: "solid 1px",
                        borderColor: "divider",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "background.default",
                        borderRadius: 2,
                        position: "relative",
                      }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          margin: "auto",
                        }}
                      >
                        {typeof contact.image === "string" ? (
                          <Box
                            key={"contact-img-" + index}
                            component={motion.img}
                            src={contact.image}
                            alt={contact.title}
                            whileHover={{
                              rotate: [20, -20, 20, -20, 0],
                              transition: {
                                ease: "easeInOut",
                                duration: 0.5,
                              },
                            }}
                            sx={{
                              width: 36,
                              height: 36,
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          contact.image && typeof contact.image === "function" ? (
                            <contact.image size={36} />
                          ) : null
                        )}
                      </Stack>
                      <Typography
                        fontSize={14}
                        textTransform={"uppercase"}
                        sx={{ opacity: 0.5 }}
                      >
                        {contact.title}
                      </Typography>
                    </Stack>
                  </Grid>

                })
              }
            </AnimatePresence>
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ContactMe;
