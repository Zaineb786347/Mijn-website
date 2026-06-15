import React, { useState } from 'react';
import './projecten.css';
import portfolioImg from '../../assets/img/portfolio.png';
import aiImg from '../../assets/img/ai.png';
import tuvaluImg from '../../assets/img/tuvalu.png';
import { useScrollReveal } from '../../shared/hooks/useScrollReveal';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Alle');
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Mijn persoonlijke portfolio gemaakt met React en TypeScript. Een moderne, responsive website met focus op gebruikservaring.",
      image: portfolioImg,
      technologies: ["React", "TypeScript", "CSS"],
      status: "Afgerond",
      category: ["Web", "Vibe Coding"],
      link: "/"
    },
    {
      id: 2,
      title: "AI Robot Planner",
      description: "Een intelligente applicatie voor robot planning met AI algoritmes. Helpt bij het optimaliseren van robot bewegingen.",
      image: aiImg,
      technologies: ["React", "TypeScript", "AI"],
      status: "Afgerond",
      category: ["AI", "Vibe Coding"],
      link: "http://localhost:3001/"
    },
    {
      id: 3,
      title: "Tuvalu Tourism",
      description: "Een moderne tourism website voor Tuvalu met focus op eco-friendly attractions, homestays, en sustainable tours. Een intuïtieve en responsive design.",
      image: tuvaluImg,
      technologies: ["React", "Web Design", "Tourism"],
      status: "Afgerond",
      category: ["Web", "Vibe Coding"],
      link: "http://localhost:3000/"
    },
    
  ];

  const categories = ['Alle', 'Web', 'AI', 'Vibe Coding', 'Zonder AI'];
  const filteredProjects = filter === 'Alle' 
    ? projects 
    : projects.filter(p => Array.isArray(p.category) ? p.category.includes(filter) : p.category === filter);

  return (
    <div className="projects-container">
      <header ref={headerRef} className={`projects-header ${headerVisible ? 'reveal-visible' : ''}`}>
        <h1 className="section-title">
          <span className="gradient-text">Mijn Projecten</span>
        </h1>
        <p className="section-subtitle">
          Een selectie van projecten waar ik aan heb gewerkt
        </p>
        
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>
      
      <div ref={gridRef} className={`projects-grid style-cinema ${gridVisible ? 'reveal-visible' : ''}`}>
        {filteredProjects.map((project, index) => (
          <article 
            key={project.id} 
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a
                  href={project.link && project.link !== '#' ? project.link : (project.image as unknown as string)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn"
                >
                  Bekijk Project
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;