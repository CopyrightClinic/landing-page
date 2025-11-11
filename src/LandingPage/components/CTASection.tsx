import React from 'react';
import appStoreSvg from '../assets/icons/appStore.svg';
import playStoreSvg from '../assets/icons/playStore.svg';

export const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-background"></div>
      <div className="cta-container">
        <h2 className="cta-title">Ready to protect your work?</h2>
        <p className="cta-description">
          Get quick, reliable copyright guidance — anytime, anywhere. Connect with attorneys, get quick, practical answers.
        </p>
        <div className="cta-buttons">
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
    </section>
  );
};

