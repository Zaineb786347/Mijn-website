import { useState, useEffect } from "react";
import './mezelf.css';
import foto from "../../assets/img/mijnfotoghibli.png";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const qualities = [
    { icon: "📚", title: "Leergierig", description: "Ontwikkel mezelf constant verder" },
    { icon: "⚡", title: "Nauwkeurig", description: "Aandacht voor detail in code" },
    { icon: "🚀", title: "Zelfstandig", description: "Kan goed op eigen initiatief werken" },
    { icon: "⭐", title: "Doorzetter", description: "Geef niet op bij uitdagingen" }
  ];

  const hobbies = [
    { icon: "💻", title: "Programmeren", description: "Nieuwe projecten bouwen en leren" },
    { icon: "🍳", title: "Koken", description: "Simpele maar lekkere gerechten maken" }
  ];

  return (
    <div className="about-container">
      <section className={`about-hero ${isVisible ? 'visible' : ''}`}>
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <div className="profile-ring"></div>
            <img src={foto} alt="Zaineb Adalat" className="profile-image"/>
          </div>
        </div>
        
        <div className="about-content">
          <h1 className="about-title">
            Over Mij
          </h1>
          <p className="bio-intro">
            Ik ben <strong>Zaineb Adalat</strong>, 24 jaar uit Terneuzen. 
            MBO student Software Development met passie voor het bouwen van moderne webapplicaties.
          </p>
        </div>
      </section>

      <section className="qualities-hobbies-section">
        <div className="qualities-container">
          <h2 className="section-heading">Kwaliteiten</h2>
          <div className="qualities-grid">
            {qualities.map((quality, index) => (
              <div key={index} className="quality-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="quality-icon">{quality.icon}</div>
                <h3 className="quality-title">{quality.title}</h3>
                <p className="quality-description">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hobbies-container">
          <h2 className="section-heading">Hobbies & Interesses</h2>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="hobby-icon">{hobby.icon}</div>
                <h3 className="hobby-title">{hobby.title}</h3>
                <p className="hobby-description">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
