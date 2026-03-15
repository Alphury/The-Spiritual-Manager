import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import ProblemSection from "../components/home/ProblemSection";
import PhilosophySection from "../components/home/PhilosophySection";
import ExperienceSection from "../components/home/ExperienceSection";
import FrameworkSection from "../components/home/FrameworkSection";
import RishikeshSection from "../components/home/RishikeshSection";
import Footer from "../components/layout/Footer";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PhilosophySection />
      <ExperienceSection />
      <FrameworkSection />
      <RishikeshSection />
      <Footer />
    </>
  );
}

export default Home;