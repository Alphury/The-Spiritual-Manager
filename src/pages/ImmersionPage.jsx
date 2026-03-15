import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/immersion.css";

function ImmersionPage() {
  return (
    <>
      <Navbar />

      <section className="immersion-hero">
        <div className="immersion-sun"></div>

        <div className="immersion-hero-content">
          <p className="immersion-tag">THE SIGNATURE EXPERIENCE</p>

          <h1 className="immersion-title">The Conscious Leadership Immersion</h1>

          <p className="immersion-location">Rishikesh</p>

          <p className="immersion-subtitle">
            For leaders who carry responsibility quietly.
          </p>
        </div>
      </section>

      <section className="immersion-flow-section">
        <div className="immersion-flow-container">
          <div className="immersion-flow-header">
            <p className="section-tag">WHAT HAPPENS INSIDE</p>
            <h2 className="immersion-flow-title">A 2.5 Day Leadership Reset</h2>
          </div>

          <div className="immersion-days-grid">
            <div className="immersion-day-card">
              <p className="immersion-day-label">Day 1</p>
              <h3>Awareness</h3>
              <ul>
                <li>Leadership shadow mapping</li>
                <li>Ego & decision workshop</li>
                <li>Silent reflection walk</li>
                <li>Fire circle dialogue</li>
              </ul>
            </div>

            <div className="immersion-day-card">
              <p className="immersion-day-label">Day 2</p>
              <h3>Alignment</h3>
              <ul>
                <li>Breathwork for clarity</li>
                <li>Energy & decision architecture</li>
                <li>Personal leadership code design</li>
              </ul>
            </div>

            <div className="immersion-day-card">
              <p className="immersion-day-label">Day 3</p>
              <h3>Integration</h3>
              <ul>
                <li>Strategic reflection session</li>
                <li>Commitment declaration</li>
                <li>Post-retreat action blueprint</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="immersion-fit-section">
        <div className="immersion-fit-container">
          <div className="immersion-fit-header">
            <p className="immersion-fit-tag">APPLICATION FIT</p>
            <h2 className="immersion-fit-title">Who This Experience Is For</h2>
          </div>

          <div className="immersion-fit-grid">
            <div className="immersion-fit-card fit-yes">
              <p className="immersion-fit-card-label">Who Should Apply?</p>
              <ul>
                <li>Leaders managing teams of 20+</li>
                <li>Founders experiencing growth stress</li>
                <li>Hospitality owners facing culture fatigue</li>
                <li>Decision makers navigating complexity</li>
              </ul>
            </div>

            <div className="immersion-fit-card fit-no">
              <p className="immersion-fit-card-label">Who Should Not Apply?</p>
              <ul>
                <li>Those looking for religious rituals</li>
                <li>Those uncomfortable with introspection</li>
                <li>Those unwilling to question their leadership identity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ImmersionPage;