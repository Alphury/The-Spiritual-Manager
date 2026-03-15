import Navbar from "../components/layout/Navbar";

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
    </>
  );
}


export default AssessmentPage;