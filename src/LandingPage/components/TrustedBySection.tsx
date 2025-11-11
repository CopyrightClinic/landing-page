import React from 'react';
import musicSvg from '../assets/icons/music.svg';
import videoSvg from '../assets/icons/video.svg';
import writeSvg from '../assets/icons/write.svg';
import artistSvg from '../assets/icons/artist.svg';

export const TrustedBySection: React.FC = () => {
  const trustedItems = [
    { icon: musicSvg, label: 'Musicians' },
    { icon: videoSvg, label: 'Visual Artists' },
    { icon: writeSvg, label: 'Content Creators' },
    { icon: artistSvg, label: 'Writers' }
  ];

  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <h2 className="trusted-title">Trusted by</h2>
        <div className="trusted-grid">
          {trustedItems.map((item, index) => (
            <div key={index} className="trusted-item">
              <img src={item.icon} alt={item.label} />
              <span className="trusted-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

