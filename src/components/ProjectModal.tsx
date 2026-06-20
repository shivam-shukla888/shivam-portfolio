import { useState } from "react";
import "./styles/ProjectModal.css";
import { FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

interface ProjectModalProps {
  projectId: "yojnasetu" | "realguard" | "vmitra";
  onClose: () => void;
}

const caseStudiesData = {
  yojnasetu: {
    title: "Yojna Setu",
    subtitle: "AI-Powered Government Scheme Discovery Platform",
    problem: "Millions of Indian citizens struggle to navigate bureaucratic systems and identify government social welfare schemes that are relevant to their needs, leading to underutilization of critical public benefits.",
    solution: "Designed and built an AI-powered WhatsApp assistant. By integrating conversational LLMs, citizens can chat in natural language (Hindi and English) to automatically determine their eligibility matching complex criteria.",
    architecture: ["User", "WhatsApp (Twilio)", "Spring Boot API", "Groq LLM", "MySQL Scheme DB", "Response"],
    challenges: [
      "Understanding mixed Hindi-English (Hinglish) natural language inputs accurately.",
      "Optimizing complex multi-variable eligibility rules dynamically inside the LLM prompt context.",
      "Managing stateless webhook-based user session states over Twilio APIs.",
      "Reducing API response latencies to keep the conversation fluent."
    ],
    deployment: "Deployed as a containerized Java microservice on AWS EC2, configured with standard scaling policies and MySQL database layering.",
    learnings: [
      "Designing state-resilient conversational agent workflows.",
      "Advanced prompt engineering with structured dynamic JSON outputs.",
      "Building resilient webhooks and rate-limiting integrations.",
      "Scalable relational database modeling for dynamic scheme definitions."
    ],
    github: "https://github.com/shivam-shukla888/Yojna-Setu",
    images: ["/images/yojna setu 1.png", "/images/yojna setu 2.png"]
  },
  realguard: {
    title: "RealGuard",
    subtitle: "AI Real Estate Assistant",
    problem: "Real estate brokers spend excessive working hours handling repetitive customer inquiries, filtering out unqualified leads, and manually checking compliance and site visit schedules.",
    solution: "Developed RealGuard, an intelligent real-estate automation assistant on WhatsApp. RealGuardQualifications handles automated support, schedules property visits, and qualifies buyer leads.",
    architecture: ["User", "WhatsApp (Twilio)", "Spring Boot backend", "Groq LLM", "MySQL CRM Layer"],
    challenges: [
      "Designing contextual real estate qualifying conversational trees using an LLM agent.",
      "Real-time RERA registry ID lookups and verification APIs.",
      "Implementing fraud-detection algorithms to filter spam listings.",
      "Calculating complex EMI loan profiles and mortgages dynamically inside the chat interface."
    ],
    deployment: "Deployed on standard cloud-hosted backend architecture, backed by MySQL database clusters for data persistence and Twilio messaging webhooks.",
    learnings: [
      "Integrating external web verification APIs (RERA registries) into conversational loops.",
      "Developing algorithmic lead scoring heuristics.",
      "Event-driven broker notification systems.",
      "Secure CRM endpoint design and data protection protocols."
    ],
    github: "https://github.com/shivam-shukla888/RealGuard",
    images: ["/images/realguard-v2.png"]
  },
  vmitra: {
    title: "V-Mitra",
    subtitle: "Voice AI Companion",
    problem: "Small local vendors and shopkeepers in India often lack the literacy or technical familiarity to manage physical stock, track sales, calculate daily profits, and calculate tax profiles.",
    solution: "Created V-Mitra, a voice-enabled AI companion. Shopkeepers talk directly to the application in natural multilingual conversation, and the assistant handles logging inventory, managing registers, and displaying analytics on a clean web dashboard.",
    architecture: ["Voice Input", "Speech Processing", "Groq LLM", "Spring Boot API", "Business Logic", "React Web Dashboard"],
    challenges: [
      "Accurate speech-to-text transcription in noisy local marketplace environments.",
      "Resolving voice intent commands to structured database operations.",
      "Designing responsive React dashboard components to match realtime voice logs.",
      "Determining localized tax calculations (GST rules) dynamically."
    ],
    deployment: "Cloud-deployed Spring Boot API gateway paired with a React frontend hosted on optimized static bucket networks.",
    learnings: [
      "Integrating low-latency web speech transcription libraries.",
      "State synchronization between real-time voice inputs and React web state.",
      "Multi-platform database syncing.",
      "Integrating dynamic tax engine rules for localized business operations."
    ],
    github: "https://github.com/shivam-shukla888/V-Mitra-Smart-Ai-Companion",
    images: ["/images/vmitra (1).png", "/images/vmitra (2).png"]
  }
};

const ProjectModal = ({ projectId, onClose }: ProjectModalProps) => {
  const data = caseStudiesData[projectId];
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "challenges" | "deployment">("overview");

  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <MdClose />
        </button>

        <div className="modal-header">
          <h2>{data.title}</h2>
          <h4>{data.subtitle}</h4>
        </div>

        <div className="modal-tabs">
          {(["overview", "architecture", "challenges", "deployment"] as const).map((tab) => (
            <button
              key={tab}
              className={`modal-tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="modal-body">
          {activeTab === "overview" && (
            <div>
              <div className="case-study-section">
                <h5>The Problem</h5>
                <p>{data.problem}</p>
              </div>
              <div className="case-study-section">
                <h5>The Solution</h5>
                <p>{data.solution}</p>
              </div>
              <div className="case-study-section">
                <h5>Key Engineering Learnings</h5>
                <ul className="case-study-list">
                  {data.learnings.map((learning, idx) => (
                    <li key={idx}>{learning}</li>
                  ))}
                </ul>
              </div>
              {data.images && data.images.length > 0 && (
                <div className="case-study-showcase">
                  <h5>Product Screenshots</h5>
                  <div className="showcase-gallery">
                    {data.images.map((img, idx) => (
                      <img key={idx} src={img} alt={`Screenshot ${idx + 1}`} className="showcase-img" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "architecture" && (
            <div>
              <div className="case-study-section">
                <h5>System Architecture Flow</h5>
                <div className="architecture-flow">
                  {data.architecture.map((node, idx) => (
                    <div key={idx} style={{ display: "contents" }}>
                      <div className="flow-node">{node}</div>
                      {idx < data.architecture.length - 1 && (
                        <div className="flow-arrow">➔</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "challenges" && (
            <div>
              <div className="case-study-section">
                <h5>Key Engineering Challenges</h5>
                <ul className="case-study-list">
                  {data.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "deployment" && (
            <div>
              <div className="case-study-section">
                <h5>Infrastructure & Deployment</h5>
                <p>{data.deployment}</p>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-github-btn"
            data-cursor="disable"
          >
            <FaGithub /> View Code <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
