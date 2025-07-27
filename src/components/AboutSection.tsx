import React, { useState } from 'react';

const AboutSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const aboutCards = [
    {
      title: 'ABOUT ME',
      content: 'Passionate AI & ML Engineer with expertise in building intelligent systems and scalable applications. Currently pursuing B.Tech in AI & Data Science while gaining hands-on experience in real-world projects.'
    },
    {
      title: 'INTERESTS',
      content: 'Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Cloud Computing, DevOps Automation, Open Source Development, and emerging AI technologies.'
    },
    {
      title: 'HOBBIES',
      content: 'Coding personal projects, contributing to open source, exploring new frameworks, reading tech blogs, participating in hackathons, and staying updated with latest tech trends.'
    }
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-heading">ABOUT ME</h2>
      
      <div className="cards-container">
        {aboutCards.map((card, index) => (
          <div 
            key={card.title}
            className={`card about-card animate-fade-in-up ${hoveredCard !== null && hoveredCard !== index ? 'faded' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="card-title">{card.title}</h3>
            <p className="card-content">{card.content}</p>
          </div>
        ))}
      </div>

      <style>{`
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
        }

        .about-card {
          opacity: 0;
          animation-fill-mode: forwards;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .about-card.faded {
          opacity: 0.05;
          transform: scale(0.85);
          filter: blur(3px);
        }

        .about-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 255, 255, 0.3);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .card-content {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          font-family: 'JetBrains Mono', monospace;
        }

        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .card-title {
            font-size: 1.3rem;
          }
          
          .card-content {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;