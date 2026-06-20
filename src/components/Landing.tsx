import "./styles/Landing.css";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdDownload, MdArrowForward } from "react-icons/md";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        
        {/* Left Column (35%) - Profile Photo */}
        <div className="landing-left-col">
          <div className="landing-photo-container">
            <img src="/images/profile.png" alt="Shivam Shukla" className="landing-profile-img" />
          </div>
        </div>

        {/* Right Column (65%) - Bio and Actions */}
        <div className="landing-right-col">
          <div className="landing-intro-content">
            <h1 className="landing-name">Shivam Shukla</h1>
            <h2 className="landing-title">BACKEND &amp; AI DEVELOPER</h2>
            
            <p className="landing-description">
              I build AI agents and backend systems that run in production.
              <br />
              Currently open to Backend / AI Developer roles — available immediately.
            </p>

            {/* CTAs */}
            <div className="landing-ctas">
              <a href="#work" className="cta-btn primary-cta" data-cursor="disable">
                View Projects <MdArrowForward className="cta-icon" />
              </a>
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                download="Shivam_Shukla_Resume.pdf" 
                rel="noreferrer" 
                className="cta-btn secondary-cta" 
                data-cursor="disable"
              >
                Download Resume <MdDownload className="cta-icon" />
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="landing-socials">
              <a href="https://github.com/shivam-shukla888" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shivam-shukla-186276374/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/S888Shivam" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/_shiv_am_262?utm_source=qr&igsh=eDZhbnR1NzltZm05" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Stats Bar (Full Width, below hero) */}
      <div className="landing-stats-bar">
        <div className="landing-stats-grid">
          <div className="stats-card">
            <h3 className="stats-value">3+ Products</h3>
            <p className="stats-label">Production Ready</p>
          </div>
          <div className="stats-card">
            <h3 className="stats-value">2026</h3>
            <p className="stats-label">B.Tech CSE Graduate</p>
          </div>
          <div className="stats-card">
            <h3 className="stats-value">Java+Spring</h3>
            <p className="stats-label">Backend Stack</p>
          </div>
          <div className="stats-card">
            <h3 className="stats-value">AI Agents</h3>
            <p className="stats-label">Current Focus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
