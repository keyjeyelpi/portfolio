import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from "./assets/theme.tsx";
import Header from "./components/header";
import Hero from "./layouts/hero.tsx";
import Services from "./layouts/services.tsx";
import Experience from "./layouts/experience.tsx";

const App = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Header />
      <Hero />
      <Services />
      <Experience />
    </ThemeProvider>
  );
};

export default App;
