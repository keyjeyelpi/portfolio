import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from "./assets/theme.tsx";
import Header from "./components/header";
import Hero from "./layouts/hero.tsx";
import Services from "./layouts/services.tsx";
import Experience from "./layouts/experience.tsx";
import TechStack from "./layouts/tech-stack.tsx";
import Projects from "./layouts/projects.tsx";
import Feedback from "./layouts/feedback.tsx";
import ContactMe from "./layouts/contact-me.tsx";

const App = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <TechStack />
      <Feedback />
      <ContactMe />
    </ThemeProvider>
  );
};

export default App;
