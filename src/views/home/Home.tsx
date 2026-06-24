import './home.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">
              Software Developer in Opleiding
            </h1>
            
            <p className="hero-subtitle">Op zoek naar een leerzame stageplek</p>
            
            <p className="hero-description">
              Ik ben een gemotiveerde MBO-student met een sterke passie voor software development en moderne webapplicaties. Tijdens een leerzame stage wil ik mijn kennis in de praktijk toepassen, actief bijdragen aan echte projecten, waardevolle werkervaring opdoen en mij verder ontwikkelen tot een professionele software developer.
            </p>

            <div className="hero-buttons">
              <Link to="/projecten" className="btn btn-primary">
                <span>Bekijk Projecten</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;