import React, { useState } from "react";
import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import AboutSection from "../components/Sections/AboutSection/AboutSection";
import CardsSection from "../components/Sections/CardsSection/CardsSection";

import { experienceInfo, projectsInfo } from "../constants/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutSection />
      <CardsSection id="experience" title="experience." info={experienceInfo} />
      <CardsSection id="projects" title="projects." info={projectsInfo} />
    </>
  );
};

export default Home;
