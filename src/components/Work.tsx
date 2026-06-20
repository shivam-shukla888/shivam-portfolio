import "./styles/Work.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: "yojnasetu" as const,
    title: "Yojna Setu",
    subtitle: "AI-Powered Government Scheme Discovery Platform",
    description: "An AI-powered WhatsApp assistant helping Indian citizens discover relevant government schemes through natural language conversations.",
    tools: ["Java", "Spring Boot", "Groq API", "Twilio WhatsApp API", "MySQL", "AWS EC2"],
    highlights: [
      "WhatsApp conversational interface (Twilio API)",
      "Multilingual NLP support (Hindi, English, Hinglish)",
      "Dynamic LLM-based eligibility matching (Groq API)",
      "AWS EC2 containerized backend & MySQL scheme DB"
    ],
    images: ["/images/yojna setu 1.png", "/images/yojna setu 2.png"],
    link: "https://github.com/shivam-shukla888/Yojna-Setu",
  },
  {
    id: "realguard" as const,
    title: "RealGuard",
    subtitle: "AI Real Estate Assistant",
    description: "An intelligent WhatsApp assistant that helps brokers and customers manage property inquiries, qualify leads, and automate client engagement.",
    tools: ["Java", "Spring Boot", "Twilio", "Groq LLM", "MySQL"],
    highlights: [
      "AI-driven automated buyer lead qualification",
      "RERA registry verification & fraud detection APIs",
      "Dynamic mortgage & EMI loan profiling in-chat",
      "Automated site visit scheduling & broker notification"
    ],
    images: ["/images/realguard-v2.png"],
    link: "https://github.com/shivam-shukla888/RealGuard",
  },
  {
    id: "vmitra" as const,
    title: "V-Mitra",
    subtitle: "Voice AI Companion",
    description: "Voice-enabled AI companion designed for small businesses and local vendors, enabling natural conversations and smart assistance.",
    tools: ["Java", "Spring Boot", "React", "Groq API"],
    highlights: [
      "Multilingual voice-to-command intent resolution",
      "Real-time React dashboard with stock & sales analytics",
      "Localized GST tax profile calculations",
      "Offline-resilient local business ledger tracking"
    ],
    images: ["/images/vmitra (1).png", "/images/vmitra (2).png"],
    link: "https://github.com/shivam-shukla888/V-Mitra-Smart-Ai-Companion",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p className="work-subtitle">
            Production-ready AI applications built with Java, Spring Boot, LLMs, and cloud infrastructure.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <div className={`project-images-wrapper ${project.images.length > 1 ? "split" : ""}`}>
                  {project.images.map((imgUrl, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={imgUrl}
                      alt={`${project.title} screenshot ${imgIdx + 1}`}
                      className="project-image"
                    />
                  ))}
                </div>
                <div className="project-image-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                    data-cursor="disable"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header-info">
                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <h5>Key Highlights</h5>
                  <ul>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech-stack">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="tech-badge">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    data-cursor="disable"
                  >
                    <FaGithub className="btn-icon" /> Repository <FiExternalLink className="btn-arrow" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
