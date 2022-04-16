import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero/Hero";
import HeroSubsection from "./components/hero/HeroSubsection";
import Sponsors from "./components/hero/Sponsors";
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <Menu isMenuOpen={menuOpen} setIsMenuOpen={toggleMenu} />
      <Navbar setIsMenuOpen={toggleMenu} />
      <Hero />
      <HeroSubsection />
      <Sponsors />
    </div>
  );
}

export default App;
