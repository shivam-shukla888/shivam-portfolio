import "./styles/CurrentFocus.css";
import { FaWhatsapp, FaMicrophone, FaBrain, FaCogs } from "react-icons/fa";

const CurrentFocus = () => {
  return (
    <div className="current-focus-section section-container" id="focus">
      <div className="current-focus-container">
        <div className="current-focus-header">
          <h2>
            Current <span>Focus</span>
          </h2>
          <p className="current-focus-subtitle">
            What I'm building and exploring right now.
          </p>
        </div>

        <div className="focus-grid">
          <div className="focus-card">
            <div className="focus-icon-wrapper">
              <FaWhatsapp />
            </div>
            <h3>WhatsApp AI Agents</h3>
            <p>
              Building production-ready conversational AI systems on WhatsApp using Twilio, Groq, and Spring Boot.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-icon-wrapper">
              <FaMicrophone />
            </div>
            <h3>Voice AI Systems</h3>
            <p>
              Exploring voice-first AI experiences for small businesses and local vendors.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-icon-wrapper">
              <FaBrain />
            </div>
            <h3>RAG Applications</h3>
            <p>
              Developing retrieval-augmented AI systems capable of answering domain-specific queries accurately.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-icon-wrapper">
              <FaCogs />
            </div>
            <h3>Automation Workflows</h3>
            <p>
              Building automated business processes using AI agents, APIs, and workflow orchestration tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentFocus;
