import "./styles/EngineeringJourney.css";

const EngineeringJourney = () => {
  return (
    <div className="journey-section section-container" id="journey">
      <div className="journey-container">
        <h2>
          Engineering <span>Journey</span>
        </h2>
        <p className="journey-subtitle">
          My path from learning programming to building production AI systems.
        </p>

        <div className="journey-info">
          <div className="journey-timeline">
            <div className="journey-dot"></div>
          </div>

          <div className="journey-info-box">
            <div className="journey-info-in">
              <div className="journey-role">
                <h4>Started Programming</h4>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Learned programming fundamentals and began exploring software development.
            </p>
          </div>

          <div className="journey-info-box">
            <div className="journey-info-in">
              <div className="journey-role">
                <h4>Backend Development</h4>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Focused on Java, Spring Boot, REST APIs, databases, and scalable backend architecture.
            </p>
          </div>

          <div className="journey-info-box">
            <div className="journey-info-in">
              <div className="journey-role">
                <h4>Soft Pro Internship</h4>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on real-world backend development and gained practical software engineering experience.
            </p>
          </div>

          <div className="journey-info-box">
            <div className="journey-info-in">
              <div className="journey-role">
                <h4>Production AI Products</h4>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built Yojna Setu, RealGuard, and V-Mitra using LLMs, Spring Boot, WhatsApp APIs, and cloud deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringJourney;
