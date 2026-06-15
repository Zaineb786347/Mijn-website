import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-col">
          <h4>ZA</h4>
          <p>Passie voor code, klaar voor de toekomst</p>
        </div>
        
        <div className="footer-col">
          <h4>Navigatie</h4>
          <a href="/">Home</a>
          <a href="/over-mij">Over Mij</a>
          <a href="/opleidingen">Opleidingen</a>
          <a href="/beroep">Beroep</a>
          <a href="/projecten">Projecten</a>
          <a href="/contact">Contact</a>
        </div>
        
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:zaineb.adalat786@gmail.com">zaineb.adalat786@gmail.com</a>
          <a href="tel:+31645771052">+31 6 45771052</a>
          <p>Terneuzen, Nederland</p>
        </div>
      </div>
      
      <div className="footer-line"></div>
      
      <div className="footer-copyright">
        <p>&copy; {currentYear} Zaineb Adalat. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
};

export default Footer;
