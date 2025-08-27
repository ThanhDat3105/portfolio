import React from "react";
import Introduce from "./introduce/Introduce";
import About from "./about/About";
import Skill from "./skill/Skill";
import Portfolio from "./portfolio/Portfolio";
import Project from "./project/Project";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <div className="home_page bg-[#081c29]">
      <Introduce />
      <About />
      <Skill />
      <Portfolio />
      <Project />
      <Contact />
    </div>
  );
}
