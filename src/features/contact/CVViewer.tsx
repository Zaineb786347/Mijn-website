import React, { useEffect } from 'react';
import './cv-viewer.css';

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVViewer: React.FC<CVViewerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Blokkeer Ctrl+S, Ctrl+P, Ctrl+C
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'c'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      // Blokkeer F12, Ctrl+Shift+I (DevTools)
      if (e.key === 'F12' || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('contextmenu', handleContextMenu);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="cv-viewer-overlay" onClick={onClose}>
      <div className="cv-viewer-container" onClick={(e) => e.stopPropagation()}>
        <div className="cv-viewer-header">
          <h3>Curriculum Vitae</h3>
          <button className="cv-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="cv-viewer-content">
          <iframe 
            src="/Zaineb_Adalat.pdf#toolbar=0&navpanes=0&scrollbar=0"
            className="cv-iframe"
            title="Curriculum Vitae"
          />
          <div className="cv-watermark">Vertrouwelijk Document</div>
        </div>
      </div>
    </div>
  );
};

export default CVViewer;
