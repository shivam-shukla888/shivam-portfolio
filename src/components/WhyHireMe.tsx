import "./styles/WhyHireMe.css";
import { FaLightbulb, FaBrain, FaCloudUploadAlt, FaBriefcase } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { MdDownload, MdChatBubbleOutline } from "react-icons/md";

const WhyHireMe = () => {
  return (
    <div className="why-hire-section section-container" id="whyhire">
      <div className="why-hire-container">
        <div className="why-hire-header">
          <h2>
            Why Work <span>With Me?</span>
          </h2>
          <p className="why-hire-subtitle">
            Beyond coding, I focus on shipping real products that solve real problems.
          </p>
        </div>

        <div className="why-hire-grid">
          {/* Card 1 */}
          <div className="why-hire-card">
            <div className="why-hire-icon">
              <FaLightbulb />
            </div>
            <h3>Product Mindset</h3>
            <p>
              I focus on solving user problems, not just writing code. Every project is built with real-world adoption and usability in mind.
            </p>
          </div>

          {/* Card 2 */}
          <div className="why-hire-card">
            <div className="why-hire-icon">
              <FaBrain />
            </div>
            <h3>AI + Backend Combination</h3>
            <p>
              Strong backend engineering combined with modern AI tooling, allowing me to build complete intelligent systems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="why-hire-card">
            <div className="why-hire-icon">
              <FaCloudUploadAlt />
            </div>
            <h3>Production First</h3>
            <p>
              I prefer building deployable systems with cloud infrastructure, APIs, databases, monitoring, and real user workflows.
            </p>
          </div>

          {/* Card 4 */}
          <div className="why-hire-card">
            <div className="why-hire-icon">
              <FiZap />
            </div>
            <h3>Fast Learner</h3>
            <p>
              Comfortable learning new APIs, frameworks, and technologies rapidly to ship products faster.
            </p>
          </div>

          {/* Card 5 */}
          <div className="why-hire-card">
            <div className="why-hire-icon">
              <span style={{ fontSize: "28px" }}>🇮🇳</span>
            </div>
            <h3>Building For Bharat</h3>
            <p>
              Focused on creating AI products that solve practical challenges for Indian businesses and users.
            </p>
          </div>

          {/* Card 6 */}
          <div className="why-hire-card">
            <div className="why-hire-icon">
              <FaBriefcase />
            </div>
            <h3>Ownership</h3>
            <p>
              From idea to deployment, I take ownership of architecture, implementation, testing, and delivery.
            </p>
          </div>
        </div>

        {/* Recruiter CTA */}
        <div className="recruiter-cta-container">
          <h3>Looking for a Backend Engineer or AI Agent Developer?</h3>
          <p>
            Open to Backend Development, AI Engineering, and Software Engineering opportunities.
          </p>
          <div className="recruiter-cta-btns">
            <a
              href="/Resume.pdf"
              target="_blank"
              download="Shivam_Shukla_Resume.pdf"
              rel="noreferrer"
              className="recruiter-btn recruiter-primary-btn"
              data-cursor="disable"
            >
              <MdDownload /> View Resume
            </a>
            <a
              href="#contact"
              className="recruiter-btn recruiter-secondary-btn"
              data-cursor="disable"
            >
              <MdChatBubbleOutline /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
