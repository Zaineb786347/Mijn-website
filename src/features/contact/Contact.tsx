import React from 'react';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">
          Op zoek naar een stagiair? Neem gerust contact op!
        </p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info-grid">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zaineb.adalat786@gmail.com&su=Contact%20via%20Portfolio&body=Hallo%20Zaineb,%0D%0A%0D%0A" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                zaineb.adalat786@gmail.com
              </a>
              <p className="contact-description">Klik om direct te emailen via Gmail</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <h3>Telefoon</h3>
              <a href="tel:+31645771052" className="contact-link">06 45771052</a>
              <p className="contact-description">Bel me voor een gesprek</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Locatie</h3>
              <p className="contact-link-text">Terneuzen, Nederland</p>
            </div>
          </div>
        </div>

        <div className="contact-social">
          <h2>Volg me online</h2>
          <div className="social-links-large">
            <a href="https://www.linkedin.com/in/zaineb-adalat-ba7439324/" className="social-link-card" target="_blank" rel="noopener noreferrer">
              <span className="social-icon-large">💼</span>
              <span className="social-name">LinkedIn</span>
            </a>
            <a href="https://github.com/Zaineb786347" className="social-link-card" target="_blank" rel="noopener noreferrer">
              <span className="social-icon-large">🐙</span>
              <span className="social-name">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;