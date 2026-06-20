import "./styles/DeveloperHub.css";
import { FaGithub } from "react-icons/fa";
import { FiCpu, FiExternalLink } from "react-icons/fi";
import { MdDownload } from "react-icons/md";

const DeveloperHub = () => {
  return (
    <div className="dev-hub-section section-container" id="devhub">
      <div className="dev-hub-container">
        <div className="dev-hub-header">
          <h2>
            Developer <span>Command Center</span>
          </h2>
          <p className="dev-hub-subtitle">
            A snapshot of my engineering activity, open-source work, and current focus.
          </p>
        </div>

        <div className="dev-hub-grid">
          {/* Card 1: GitHub */}
          <div className="dev-hub-card github-card">
            <div>
              <div className="card-header">
                <FaGithub className="card-icon" />
                <h3>GitHub Activity</h3>
              </div>
              <div className="github-stats">
                <div className="stat-item">
                  <span className="stat-label">Total Public Repositories:</span>
                  <span className="stat-value">15+</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Primary Languages:</span>
                  <span className="stat-value">Java, TypeScript, SQL, Python</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Latest Projects:</span>
                  <span className="stat-value">Yojna Setu, RealGuard, V-Mitra</span>
                </div>
              </div>
            </div>
            <a
              href="https://github.com/shivam-shukla888"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              data-cursor="disable"
            >
              <FaGithub /> View GitHub <FiExternalLink />
            </a>
          </div>

          {/* Card 2: Current Tech Stack */}
          <div className="dev-hub-card tech-card">
            <div>
              <div className="card-header">
                <FiCpu className="card-icon" />
                <h3>Current Tech Stack</h3>
              </div>
              <div className="tech-badge-container">
                {["Java", "Spring Boot", "MySQL", "Groq", "LangChain4j", "Twilio", "AWS", "Docker", "React"].map(
                  (tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Card 3: Current Mission */}
          <div className="dev-hub-card mission-card">
            <div>
              <div className="card-header">
                <div className="mission-icon">🇮🇳</div>
                <h3>Building AI Products for Bharat</h3>
              </div>
              <p className="mission-description">
                Focused on building practical AI systems for Indian users through WhatsApp, Voice, and Automation platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Resume Button */}
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-resume-btn"
        data-cursor="disable"
      >
        <MdDownload /> Resume
      </a>
    </div>
  );
};

export default DeveloperHub;
