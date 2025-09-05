import { Container, IconButton, Stack, Typography } from "@mui/material";
import ImageSlider from "../components/image-slider";
import { TbX } from "react-icons/tb";

const Project = ({ descriptions, images, role, selected, title, tools, setSelected }: { descriptions?: string[]; images?: string[]; role?: string; selected?: boolean; title?: string; tools?: string[]; setSelected?: () => void }) => {
    return (
        <>
            {
                !!selected &&
                <>
                    {!!title && <Stack flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ p: 4, width: "100%", bgcolor: "background.50" }}>
                        <Typography variant="h5">
                            {title}
                        </Typography>
                        {setSelected && <IconButton onClick={setSelected}>
                            <TbX />
                        </IconButton>}
                    </Stack>}
                    <Container maxWidth="lg" sx={{ p: { xs: 2, md: 10 } }}>
                        <Stack justifyContent="space-between" direction="row">
                            {!!role && (<Stack direction="row" justifyContent="space-between">
                                <Stack>
                                    <Typography variant="h5" sx={{ mb: 2 }}>
                                        Role in Project
                                    </Typography>
                                    <Typography>
                                        {role}
                                    </Typography>
                                </Stack>
                            </Stack>)}
                            {!!tools?.length && <Stack>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Tools that I used
                                </Typography>
                                {
                                    tools.map((tool, index) => (
                                        <Typography key={tool + index}>
                                            {tool}
                                        </Typography>
                                    ))
                                }
                            </Stack>}
                        </Stack>
                    </Container>
                </>
            }
            {!!images?.length && <ImageSlider
                images={images}
                height={"100%"}
                width={"100%"}
                showControl={selected}
                sx={{
                    objectFit: selected ? "contain" : "cover"
                }}
                autoScroll
            />}
            {!!descriptions?.length && (
                <Container maxWidth="lg" sx={{ p: { xs: 2, md: 10 } }}>
                    <Stack gap={2}>
                        {
                            descriptions.map((description) => (
                                <Typography key="description">
                                    {description}
                                </Typography>
                            ))
                        }
                    </Stack>
                </Container>
            )}
        </>
    );
};

export default Project;
