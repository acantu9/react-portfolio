import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const Main = () => {
  return (
    <div className="main">
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
};

export default Main;