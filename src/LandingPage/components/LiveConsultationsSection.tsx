import React from 'react';

export const LiveConsultationsSection: React.FC = () => {
  return (
    <section className="live-consultations-section">
      <div className="live-consultations-background"></div>
      <div className="live-consultations-container">
        <h2 className="live-consultations-title">
          Live Video Consultations with Real Attorneys
        </h2>
        <p className="live-consultations-description">
          Meet face-to-face with licensed Copyright Law Experts through secure live video sessions inside the app. Get reliable, practical legal advice — not automated responses.
        </p>
        <button className="live-consultations-btn">
          Get the App
        </button>
      </div>
    </section>
  );
};

