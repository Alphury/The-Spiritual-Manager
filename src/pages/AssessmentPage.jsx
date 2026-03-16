import Navbar from "../components/layout/Navbar";
import "../styles/assessment.css";
import "../styles/immersion.css";

function AssessmentPage() {
  return (
    <>
      <Navbar />

      <section className="immersion-hero">
        <div className="immersion-sun"></div>

        <div className="immersion-hero-content">
          <p className="immersion-tag">CONSCIOUS LEADERSHIP ASSESSMENT</p>

          <h1 className="immersion-title">Discover your current leadership alignment.</h1>

          <p className="immersion-subtitle">
            Measure the gap between outward success and inner alignment.
          </p>
        </div>
      </section>

      <section className="assessment-coming-section">
        <div className="assessment-coming-glow"></div>

        <div className="assessment-coming-container">
          <p className="section-tag">COMING SOON</p>

          <h2 className="assessment-coming-title">
            A deeper lens into leadership alignment.
          </h2>

          <p className="assessment-coming-text">
            The Conscious Leadership Assessment is currently being crafted as a
            private diagnostic for leaders seeking clarity, alignment, and
            deeper decision intelligence.
          </p>

          <p className="assessment-coming-note">
            Early access will be announced soon.
          </p>
        </div>
      </section>
    </>
  );
}

export default AssessmentPage;
