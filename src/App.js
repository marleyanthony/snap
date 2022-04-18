import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero/Hero";
import HeroSubsection from "./components/hero/HeroSubsection";
import Sponsors from "./components/hero/Sponsors";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

const AppWrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: ${(props) => (props.isMenuOpen ? "" : "-1")};
  background: ${(props) => (props.isMenuOpen ? "rgba(0, 0, 0, 0.7)" : "none")};
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isDesktop = width > 800 ? true : false;

  return (
    <AppWrapper>
      <Overlay isMenuOpen={menuOpen} />
      <Menu isMenuOpen={menuOpen} setIsMenuOpen={toggleMenu} />
      <Navbar setIsMenuOpen={toggleMenu} isDesktop={isDesktop} />
      <Hero isDesktop={isDesktop} />
      <HeroSubsection is={isDesktop} />
      <Sponsors />
    </AppWrapper>
  );
}

export default App;
