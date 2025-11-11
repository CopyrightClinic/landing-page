import React from 'react';
import dollarSvg from '../assets/icons/dollar.svg';
import lockSvg from '../assets/icons/lock.svg';
import lawSvg from '../assets/icons/law.svg';

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: lawSvg,
      title: 'Licensed attorneys for short sessions',
      description: 'Connect with verified legal professionals'
    },
    {
      icon: dollarSvg,
      title: 'Clear pricing before you book',
      description: 'Transparent costs with no hidden fees'
    },
    {
      icon: lockSvg,
      title: 'Private and secure',
      description: 'Your information stays protected'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Copyright Clinic</h2>
          <p className="about-description">
            Copyright Clinic connects you with real attorneys for quick, affordable guidance. Use the app to book sessions, track answers, and export notes for your records.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <div className="feature-icon-wrapper">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

