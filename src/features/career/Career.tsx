import React from 'react';
import './beroep.css';

const Career: React.FC = () => {
  return (
    <div className="career-container">
      <h1 className="section-title">Beginnende Software Developer</h1>
      
      <div className="career-content">
        <section className="career-section">
          <h2>Mijn Doel</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Ambities</h3>
              <ul className="skill-list">
                <li>Full Stack Developer worden</li>
                <li>Professionele Webapplicaties Bouwen</li>
                <li>Backend Development Beheersen</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="career-section">
          <h2>Wat ik wil leren</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Talen</h3>
              <ul className="skill-list">
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <ul className="skill-list">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Spring Boot</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;