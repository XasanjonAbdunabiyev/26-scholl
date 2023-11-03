import React from "react";

import TheNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About } from "./pages/About";
import { Academics } from "./pages/Academics";
import { AdditionalCards } from "./pages/AdditionalCards";
import { StudentLife } from "./pages/StudentLife";
import { StudentOptions } from "./pages/StudentOptions";

export default function App() {
  return (
    <>
      <TheNavbar />
      <Hero />
      <About />
      <AdditionalCards />
      <Academics />
      <StudentLife />
      <StudentOptions />
    </>
  );
}
