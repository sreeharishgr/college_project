import * as React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme.js";

// Page sections
import Hero from  "../component/Home_components/Hero_section.jsx";
import CategoryGrid from "../component/Home_components/Categories.jsx";
import DirectoryCta from "../component/Home_components/DirectoryCta.jsx";
import FeaturedCards from "../component/Home_components/Features.jsx";
import HowItWorks from "../component/Home_components/Howworks.jsx";
import CtaBand from "../component/Home_components/Ctaband.jsx";
import Footer from "../component/Home_components/Footer.jsx";

// Local app bar/header component (rename to avoid clash with MUI AppBar)
import Header from "./Appbar.jsx";

export default function Home() {
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
      {/* <Footer /> */}
    </ThemeProvider>
  );
}
