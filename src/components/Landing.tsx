import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdDownload, MdArrowForward } from "react-icons/md";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <div className="landing-photo">
              <img src="/images/profile.png" alt="Shivam Shukla" />
            </div>
            <h1 className="landing-name">Shivam Shukla</h1>
          </div>

          <div className="landing-info">
            <h2 className="landing-headline">Backend &amp; AI Developer</h2>

            <p className="landing-subheadline">
              I build AI agents and backend systems that run in production.
              <br />
              Currently open to Backend / AI Developer roles — available immediately.
            </p>

            <div className="landing-ctas">
              <a href="#work" className="cta-btn primary-cta" data-cursor="disable">
                View Projects <MdArrowForward className="cta-icon" />
              </a>
              <a href="/Resume.pdf" target="_blank" download="Shivam_Shukla_Resume.pdf" rel="noreferrer" className="cta-btn secondary-cta" data-cursor="disable">
                Download Resume <MdDownload className="cta-icon" />
              </a>
            </div>

            <div className="landing-mobile-socials">
              <a href="https://github.com/shivam-shukla888" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shivam-shukla-186276374/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/S888Shivam" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/_shiv_am_262?utm_source=qr&igsh=eDZhbnR1NzltZm05" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="landing-stats-wrapper">
            <div className="stats-card">
              <h3>3+</h3>
              <p>Production AI Products</p>
            </div>
            <div className="stats-card">
              <h3>2026</h3>
              <p>B.Tech CSE Graduate</p>
            </div>
            <div className="stats-card">
              <h3>Java + Spring</h3>
              <p>Backend Specialization</p>
            </div>
            <div className="stats-card">
              <h3>AI Agents</h3>
              <p>Current Focus</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
