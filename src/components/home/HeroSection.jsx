import heroLogo from "../../assets/icons/spiritual manager head.svg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero" id="home">
      {/* Full Width Rising Sun Background */}
      <div className="hero-sun-container">
        <div className="hero-sun"></div>
      </div>

      <div className="hero-content">

        <div className="hero-logo-wrapper">
          <img src={heroLogo} alt="The Spiritual Manager Logo" className="hero-logo" />
        </div>

        <h1 className="hero-title">THE SPIRITUAL MANAGER</h1>

        <h2 className="hero-subtitle">Bridging Boardrooms & Ashrams</h2>

        <p className="hero-description">
          For Leaders Who Have Achieved Success —
          <br />
          But Are Now Seeking Alignment.
        </p>

        <div className="hero-buttons">
          <Link to="/immersion" className="primary-btn">
            Apply for the Rishikesh Immersion
          </Link>

          <Link to="/assessment" className="secondary-btn">
            Take the Conscious Leadership Assessment
          </Link>
        </div>
      </div>

      <div className="hero-bottom-fade"></div>
    </section>
  );
}

export default HeroSection;