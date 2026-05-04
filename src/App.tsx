import "./styles/fontLink";

import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { useCallback, useState } from "react";
import { ChatBot } from "./components/chat/ChatBot";
import { NeuralCanvas } from "./components/effects/NeuralCanvas";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { useCursor } from "./hooks/useCursor";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ServicesPage } from "./pages/ServicesPage";
import { GLOBAL_CSS } from "./styles/globalCss";
import { theme } from "./theme/theme";

export default function App() {
  const [page, setPage] = useState("Home");
  const navigate = useCallback((p: string) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  useCursor();

  const pages: Record<string, React.ReactNode> = {
    Home: <HomePage navigate={navigate} />,
    Services: <ServicesPage />,
    Portfolio: <PortfolioPage />,
    About: <AboutPage />,
    Contact: <ContactPage />
  };

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <style>{GLOBAL_CSS}</style>
      <div id="ax-cur"/>
      <div id="ax-ring"/>

      <NeuralCanvas/>
      <div className="noise"/>
      <div className="scanlines"/>

      <Box sx={{position:"relative",zIndex:10}}>
        <Navbar current={page} navigate={navigate}/>
        <Box key={page} sx={{animation:"pageIn .45s ease both"}}>
          {pages[page]||<HomePage navigate={navigate}/>}
        </Box>
        <Footer navigate={navigate}/>
      </Box>

      <ChatBot/>
    </ThemeProvider>
  );
}
