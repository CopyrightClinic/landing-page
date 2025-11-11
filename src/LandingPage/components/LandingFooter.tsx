import React from 'react';
import { Link } from 'react-router-dom';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="landing-footer">
      <div className="landing-footer-container">
        <div className="footer-links">
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          <span className="footer-separator">|</span>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <span className="footer-separator">|</span>
          <a href="mailto:info@copyrightclinic.com" className="footer-link">Support</a>
        </div>
        <p className="footer-copyright">© 2025 Copyright Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};
