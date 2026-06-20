import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <div className="about-header-side">
        <h2 className="about-side-title">ABOUT<br /><span>ME</span></h2>
      </div>
      <div className="about-content-side">
        <p className="para">
          I'm a Backend &amp; AI Developer and 2026 CSE graduate who builds production-ready AI agents — not just side projects. I specialize in Java, Spring Boot, and LLM integration (Groq API, LangChain4j) to ship intelligent, scalable systems. My work includes a live WhatsApp AI bot deployed on AWS EC2 serving real users in Hindi and English. I build for Bharat — solving real problems for vendors, citizens, and brokers through conversational AI.
        </p>
      </div>
    </div>
  );
};

export default About;
