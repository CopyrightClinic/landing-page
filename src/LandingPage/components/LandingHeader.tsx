import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';

export const LandingHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="landing-header">
      <div className="landing-header-container">
        <div className="landing-header-left">
          <div className="landing-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Logo" />
          </div>
          <nav className="landing-nav">
            <a href="#about" className="landing-nav-link" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
            <a href="#harold" className="landing-nav-link" onClick={(e) => handleNavClick(e, 'harold')}>Meet Harold</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

