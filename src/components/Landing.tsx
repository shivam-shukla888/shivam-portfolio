import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { FaGithub } from "react-icons/fa";
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
            <h2>Hello! I'm</h2>
            <h1 className="landing-name">
              SHIVAM
              <br />
              <span>SHUKLA</span>
            </h1>
          </div>

          <div className="landing-info">
            <h2 className="landing-headline">
              Backend Engineer & <br />
              <span>AI Agent Developer</span>
            </h2>

            <p className="landing-subheadline">
              Building production-ready AI agents, WhatsApp automations, and scalable backend systems using Java, Spring Boot, LLMs, and Cloud Infrastructure.
            </p>

            <p className="landing-bio">
              I build real-world AI products for the Indian market, combining backend engineering, automation, and conversational AI to solve practical business problems.
            </p>

            <div className="landing-ctas">
              <a href="#work" className="cta-btn primary-cta" data-cursor="disable">
                View Projects <MdArrowForward className="cta-icon" />
              </a>
              <a href="/resume.pdf" target="_blank" download="Shivam_Shukla_Resume.pdf" rel="noreferrer" className="cta-btn secondary-cta" data-cursor="disable">
                Download Resume <MdDownload className="cta-icon" />
              </a>
              <a href="https://github.com/shivam-shukla888" target="_blank" rel="noopener noreferrer" className="cta-btn third-cta" data-cursor="disable">
                <FaGithub className="cta-icon" /> GitHub Profile
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
