import React from 'react';
import haroldImage from '../assets/Harold.png';

export const HaroldSection: React.FC = () => {
  return (
    <section id="harold" className="harold-section">
      <div className="harold-container">
        <div className="harold-content">
          <h2 className="harold-title">
            Meet Harold — The AI Assistant That Connects You to Real Attorneys
          </h2>
          <p className="harold-description">
            Harold is our AI assistant who helps you understand whether your case may fall under copyright law. Once you're ready, he connects you to real attorneys for live video consultations with licensed Copyright Law Experts.
          </p>
        </div>
        <div className="harold-character">
          <img src={haroldImage} alt="Harold" />
        </div>
      </div>
    </section>
  );
};

