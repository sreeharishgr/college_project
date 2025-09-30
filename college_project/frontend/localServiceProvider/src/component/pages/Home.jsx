import * as React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../theme";

// Page sections
import Hero from "../Home_components/Hero_section";
import CategoryGrid from "../Home_components/Categories";
import DirectoryCta from "../Home_components/DirectoryCta";
import FeaturedCards from "../Home_components/Features";
import HowItWorks from "../Home_components/Howworks";
import CtaBand from "../Home_components/Ctaband";
import Footer from "../Home_components/Footer";

// Local app bar/header component (rename to avoid clash with MUI AppBar)
import Header from "./Appbar.jsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Header /> */}
      <main>
        <Hero />
        <CategoryGrid />
        <DirectoryCta />
        <FeaturedCards />
        <HowItWorks />
        <CtaBand />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
