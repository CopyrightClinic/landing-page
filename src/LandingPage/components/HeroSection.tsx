import React from 'react';
import appStoreSvg from '../assets/icons/appStore.svg';
import playStoreSvg from '../assets/icons/playStore.svg';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Copyright help made simple.</h1>
          <p className="hero-subtitle">
            Connect instantly with real Copyright Law Experts through Live Video Consultations.
          </p>
          <div className="hero-buttons">
            <button className="app-store-btn">
              <img src={appStoreSvg} alt="App Store" />
              <div className="app-btn-text">
                <span className="app-btn-label">Available on the</span>
                <span className="app-btn-store">App Store</span>
              </div>
            </button>
            <button className="google-play-btn">
              <img src={playStoreSvg} alt="Play Store" />
              <div className="app-btn-text">
                <span className="app-btn-label">Available on the</span>
                <span className="app-btn-store">Google Play</span>
              </div>
            </button>
          </div>
        </div>
        <div className="hero-phones">
        </div>
      </div>
    </section>
  );
};

