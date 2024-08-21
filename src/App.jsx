import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MainSection from "./components/MainSection.jsx";
import OurCreation from "./components/OurCreation.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const App = () => {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className={`${isActive ? "bodyWrapper-active" : "bodyWrapper"}`}>
        <Navbar isActive={isActive} toggleActive={toggleActive} />
        <MainSection />
        <OurCreation />
        <Footer />
      </div>
    </>
  );
};

export default App;
