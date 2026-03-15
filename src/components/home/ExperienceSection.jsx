function ExperienceSection() {
  return (
    <section className="experience-section" id="immersion">
      <div className="experience-container">
        <div className="experience-header">
          <p className="experience-tag">THE SIGNATURE EXPERIENCE</p>
          <h2 className="experience-title">Conscious Leadership Immersion</h2>
          <p className="experience-meta">
            Rishikesh | 2.5 Days | Limited to 12 Leaders
          </p>
        </div>

        <div className="experience-grid">
          <div className="experience-card">
            <p className="experience-card-label">Designed For</p>
            <ul className="experience-list">
              <li>Hotel Owners</li>
              <li>Founders</li>
              <li>CXOs</li>
              <li>Senior Decision Makers</li>
            </ul>
          </div>

          <div className="experience-card">
            <p className="experience-card-label">What You’ll Experience</p>

            <p className="experience-line">You will not attend lectures.</p>

            <div className="experience-flow">
              <p>Silence before strategy.</p>
              <p>Breath before decision.</p>
              <p>Reflection before expansion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;