import Navbar from "../components/layout/Navbar";
import "../styles/about.css";
import raviImage from "../assets/images/raviimg.jpg";

function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-glow"></div>

        <div className="about-hero-container">
          <div className="about-hero-image-wrap">
            <img src={raviImage} alt="Ravi Singh" className="about-hero-image" />
          </div>

          <div className="about-hero-content">
            <p className="about-tag">FOUNDER PROFILE</p>
            <h1 className="about-title">Ravi Singh</h1>
            <p className="about-role">Conscious Leadership Architect</p>
            <p className="about-role-sub">Founder – The Spiritual Manager</p>

            <p className="about-intro">
              A leadership journey shaped by operational depth, crisis-tested
              responsibility, and the integration of strategic intelligence with
              inner awareness.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="about-section about-journey-section">
        <div className="about-container">
          <div className="about-section-header">
            <p className="about-section-tag">THE JOURNEY</p>
            <h2 className="about-section-title">Built from the ground up.</h2>
          </div>

          <div className="about-text-block">
            <p>
              Ravi began working at the age of 18, stepping into responsibility
              early and learning business from the ground up.
            </p>
            <p>
              Over 26+ years in hospitality leadership, he built hotels,
              education initiatives, salon brands, and navigated crisis
              environments that tested not just strategy — but stability.
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGIC DEPTH */}
      <section className="about-section about-strategy-section">
        <div className="about-container">
          <div className="about-section-header">
            <p className="about-section-tag">STRATEGIC DEPTH</p>
            <h2 className="about-section-title">
              Leadership sharpened by pressure.
            </h2>
          </div>

          <div className="about-cards-grid">
            <div className="about-card">
              <h3>Executive Learning</h3>
              <p>
                Midway through his journey, he completed the Executive Programme
                in Business Management (EPBM) from IIM Kolkata to deepen his
                strategic and financial acumen.
              </p>
            </div>

            <div className="about-card">
              <h3>Crisis Leadership</h3>
              <p>
                During COVID uncertainty, when teams faced salary risks, he
                built alternative revenue models to protect livelihoods —
                reinforcing his belief that leadership is responsibility under
                uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY */}
      <section className="about-section about-present-section">
        <div className="about-container">
          <div className="about-section-header">
            <p className="about-section-tag">TODAY</p>
            <h2 className="about-section-title">
              Where leadership meets awareness.
            </h2>
          </div>

          <div className="about-text-block">
            <p>
              Today, Ravi integrates operational depth with inner awareness.
            </p>
            <p>
              He is the Founder of The Spiritual Manager — a platform dedicated
              to architecting emotionally stable and strategically aligned
              leaders.
            </p>
            <p>
              He also serves as CEO (Chief Energy Officer) at Vridhee, a social
              learning platform working at the intersection of education and
              wellness.
            </p>
            <p className="about-closing-line">
              His work bridges boardrooms and awareness — designing leadership
              that is steady, conscious, and enduring.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;