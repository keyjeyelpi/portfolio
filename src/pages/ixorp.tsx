import { Box, Container, Stack, Typography } from "@mui/material";
import iXORPv3_1 from "../assets/images/projects/iXORP-v3/1.png";
import iXORPv3_2 from "../assets/images/projects/iXORP-v3/2.png";
import iXORPv3_3 from "../assets/images/projects/iXORP-v3/3.png";
import iXORPv3_4 from "../assets/images/projects/iXORP-v3/4.png";
import iXORPv3_5 from "../assets/images/projects/iXORP-v3/5.png";
import iXORPv3_6 from "../assets/images/projects/iXORP-v3/6.png";
import iXORPv3_7 from "../assets/images/projects/iXORP-v3/7.png";
import iXORPv3_8 from "../assets/images/projects/iXORP-v3/8.png";
import ImageSlider from "../components/image-slider";

const IXORPBookingEngine = ({ selected }: { selected: boolean }) => {
    return (
        <>
            {
                selected &&
                <>
                    <Stack justifyContent="center" sx={{ p: 4, width: "100%", bgcolor: "background.100" }}>
                        <Typography variant="h5">
                            iXORP Booking Engine
                        </Typography>
                    </Stack>
                    <Container maxWidth="lg" sx={{ p: { xs: 2, md: 10 } }}>
                        <Stack direction="row" justifyContent="space-between">
                            <Stack>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Role in Project
                                </Typography>
                                <Typography>
                                    System Developer
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Tools that I used
                                </Typography>
                                <Typography>
                                    React
                                </Typography>
                                <Typography>
                                    Framer Motion
                                </Typography>
                                <Typography>
                                    Material UI
                                </Typography>
                                <Typography>
                                    Node JS
                                </Typography>
                                <Typography>
                                    MySQL
                                </Typography>
                            </Stack>
                        </Stack>
                    </Container>
                </>
            }
            <ImageSlider
                images={[
                    iXORPv3_1,
                    iXORPv3_2,
                    iXORPv3_3,
                    iXORPv3_4,
                    iXORPv3_5,
                    iXORPv3_6,
                    iXORPv3_7,
                    iXORPv3_8,
                ]}
                height={"100%"}
                width={"100%"}
                showControl={selected}
            />
            <Container maxWidth="lg" sx={{ p: { xs: 2, md: 10 } }}>
                <Typography>
                    iXORP Booking Engine is a powerful and fully customizable hotel booking application designed to adapt seamlessly to your property’s unique needs. With dynamic color theming, it easily aligns with your brand identity, ensuring a consistent and professional guest experience. The system supports flexible and customizable payment gateway integrations, giving hotels the freedom to choose the most convenient and secure payment solutions for their market. iXORP also comes equipped with built-in analytics, empowering hoteliers with real-time insights into bookings, revenue, and customer behavior—helping drive smarter business decisions.
                </Typography>
            </Container>
        </>
    );
};

export default IXORPBookingEngine;
