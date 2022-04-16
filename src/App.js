import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero/Hero";
import HeroSubsection from "./components/hero/HeroSubsection";
import Sponsors from "./components/hero/Sponsors";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeroSubsection />
      <Sponsors />
    </div>
  );
}

export default App;
