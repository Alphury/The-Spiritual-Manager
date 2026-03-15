import Navbar from "../components/layout/Navbar";
import "../styles/immersion.css";

function AboutPage() {
  return (
    <>
    <Navbar />
    <section className="immersion-hero">
        <div className="immersion-sun"></div>

        <div className="immersion-hero-content">
          <p className="immersion-title">ABOUT RAVI SINGH</p>
        </div>
    </section>
    </>
  );
}

export default AboutPage;