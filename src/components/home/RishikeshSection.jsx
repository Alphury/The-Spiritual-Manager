import { Link } from "react-router-dom";

function RishikeshSection() {
  return (
    <section className="rishikesh-section">
      <div className="rishikesh-sun"></div>

      <div className="rishikesh-container">
        <p className="section-tag">WHY RISHIKESH?</p>

        <h2 className="rishikesh-title">Because clarity requires environment.</h2>

        <div className="rishikesh-lines">
          <p>Away from boardrooms.</p>
          <p>Away from notifications.</p>
          <p>Away from performance masks.</p>
        </div>

        <div className="rishikesh-closing">
          <p>Rishikesh offers what leaders forget:</p>
          <h3>Stillness.</h3>
        </div>
        <div className="hero-buttons">
          <Link to="/immersion" className="primary-btn">
            Know More About The Rishikesh Immersion
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RishikeshSection;