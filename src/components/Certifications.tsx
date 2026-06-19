import "./styles/Certifications.css";

const Certifications = () => {
  return (
    <div className="certifications-section section-container">
      <div className="certifications-container">
        <h2>
          Certifications <span>&</span>
          <br /> Achievements
        </h2>
        <div className="certifications-info">
          <div className="certifications-timeline">
            <div className="certifications-dot"></div>
          </div>
          <div className="certifications-info-box">
            <div className="certifications-info-in">
              <div className="certifications-role">
                <h4>AWS Cloud Practitioner Essentials</h4>
                <h5>AWS Training & Certification</h5>
              </div>
            </div>
            <p>
              Foundational certification covering AWS Cloud concepts, core services, 
              security, and pricing — applied directly in deploying Yojna Setu on AWS EC2.
              <br />
              <a href="https://drive.google.com/file/d/1_eiCRXeDsavFe0KLQ0MRZbmvYeNuTgy4/view" target="_blank" rel="noopener noreferrer" className="certificate-link">
                View Certificate
              </a>
            </p>
          </div>
          <div className="certifications-info-box">
            <div className="certifications-info-in">
              <div className="certifications-role">
                <h4>Advanced Software Engineering Job Simulation</h4>
                <h5>Walmart Global Tech (Forage)</h5>
              </div>
            </div>
            <p>
              Simulated real-world software engineering tasks including system design 
              and debugging at enterprise scale.
              <br />
              <a href="https://drive.google.com/file/d/1cPBkED0kVAYWTF4LU-dZhMWap4H8Frr8/view" target="_blank" rel="noopener noreferrer" className="certificate-link">
                View Certificate
              </a>
            </p>
          </div>
          <div className="certifications-info-box">
            <div className="certifications-info-in">
              <div className="certifications-role">
                <h4>Java with Spring Boot Internship</h4>
                <h5>Soft Pro</h5>
              </div>
            </div>
            <p>
              Completion certificate for backend internship building production 
              RESTful APIs with Java and Spring Boot.
              <br />
              <a href="https://drive.google.com/file/d/1KmW_xZv7xv9pjj2SH0k3hvzHvs_ZrNS9/view" target="_blank" rel="noopener noreferrer" className="certificate-link">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
