import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './shared/components/Navbar';
import Home from './views/home/Home';
import AboutMe from './views/about/AboutMe';
import Education from './views/education/Education';
import Career from './views/career/Career';
import Projects from './views/projects/Projects';
import Contact from './views/contact/Contact';
import NotFound from './views/not-found/NotFound';
import Footer from './shared/components/Footer';

import './shared/styles/App.css';
import './shared/styles/enhancements.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-mij" element={<AboutMe />} />
            <Route path="/opleidingen" element={<Education />} />
            <Route path="/beroep" element={<Career />} />
            <Route path="/projecten" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;