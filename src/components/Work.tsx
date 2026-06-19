import { lazy, Suspense, useState } from "react";
import "./styles/Work.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectModal = lazy(() => import("./ProjectModal"));

const projects = [
  {
    id: "yojnasetu" as const,
    title: "Yojna Setu",
    subtitle: "AI-Powered Government Scheme Discovery Platform",
    description: "An AI-powered WhatsApp assistant helping Indian citizens discover relevant government schemes through natural language conversations.",
    tools: ["Java", "Spring Boot", "Groq API", "Twilio WhatsApp API", "MySQL", "AWS EC2"],
    highlights: [
      "WhatsApp-based interaction",
      "Multilingual support",
      "AI-powered scheme matching",
      "Real-world India-focused use case"
    ],
    image: "/images/yojnasetu.png",
    link: "https://github.com/shivam-shukla888/Yojna-Setu",
  },
  {
    id: "realguard" as const,
    title: "RealGuard",
    subtitle: "AI Real Estate Assistant",
    description: "An intelligent WhatsApp assistant that helps brokers and customers manage property inquiries, automate responses, and improve engagement.",
    tools: ["Java", "Spring Boot", "Twilio", "Groq LLM", "MySQL"],
    highlights: [
      "AI-driven conversations",
      "Lead qualification",
      "Automated customer support",
      "Real estate workflow automation"
    ],
    image: "/images/realguard.png",
    link: "https://github.com/shivam-shukla888/RealGuard",
  },
  {
    id: "vmitra" as const,
    title: "V-Mitra",
    subtitle: "Voice AI Companion",
    description: "Voice-enabled AI companion designed for small businesses and local vendors, enabling natural conversations and smart assistance.",
    tools: ["Java", "Spring Boot", "React", "Gemini API"],
    highlights: [
      "Voice interaction",
      "AI assistance",
      "Small business focused",
      "Modern conversational interface"
    ],
    image: "/images/vmitra (1).png",
    link: "https://github.com/shivam-shukla888/V-Mitra-Smart-Ai-Companion",
  },
];

const Work = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<"yojnasetu" | "realguard" | "vmitra" | null>(null);

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
                <img src={project.image} alt={project.title} className="project-image" />
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
                  <button
                    onClick={() => setSelectedProjectId(project.id)}
                    className="project-case-study-btn"
                    data-cursor="disable"
                  >
                    View Case Study
                  </button>
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

      {selectedProjectId && (
        <Suspense fallback={null}>
          <ProjectModal projectId={selectedProjectId} onClose={() => setSelectedProjectId(null)} />
        </Suspense>
      )}
    </div>
  );
};

export default Work;
