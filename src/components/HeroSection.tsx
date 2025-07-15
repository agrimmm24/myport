import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import profileImage from '../assets/pic.jpg';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AI&ML Engineer | Fullstack Developer | DevOps Practitioner';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const floatingIcons = [
    { icon: '🐍', name: 'Python', delay: '0s', x: '10%', y: '20%' },
    { icon: '⚛️', name: 'React', delay: '1s', x: '85%', y: '15%' },
    { icon: '🌐', name: 'HTML', delay: '2s', x: '15%', y: '70%' },
    { icon: '🎨', name: 'CSS', delay: '3s', x: '80%', y: '75%' },
    { icon: '🐳', name: 'Docker', delay: '4s', x: '20%', y: '45%' },
    { icon: '☁️', name: 'Cloud', delay: '5s', x: '75%', y: '45%' },
    { icon: '⚙️', name: 'DevOps', delay: '6s', x: '50%', y: '10%' },
    { icon: '📊', name: 'Data', delay: '7s', x: '90%', y: '60%' },
  ];

  return (
    <section id="hero" className="hero-section animate-zoom-in">
      <div className="floating-icons">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="floating-icon"
            style={{
              left: item.x,
              top: item.y,
              animationDelay: item.delay,
            }}
            title={item.name}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="profile-container">
          <div className="profile-image">
            <img 
              src={profileImage} 
              alt="Agrim Srivastava"
              className="profile-photo"
            />
          </div>
        </div>
        
        <div className="hero-text">
          <h1 className="hero-name">
            AGRIM SRIVASTAVA
          </h1>
          <p className="hero-role">
            {displayText}
            <span className="cursor">|</span>
          </p>
          
          <a
            className="download-resume-btn"
            href="/Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: 
            radial-gradient(circle at 30% 40%, rgba(0, 2, 144, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.6) 0%, transparent 50%),
            linear-gradient(135deg, #000290 0%, #000000 100%);
          position: relative;
          overflow: hidden;
        }

        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-icon {
          position: absolute;
          font-size: 2rem;
          opacity: 0.7;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
            opacity: 0.9;
          }
        }

        .hero-content {
          text-align: center;
          z-index: 2;
          position: relative;
        }

        .profile-container {
          margin-bottom: 2rem;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          margin: 0 auto;
          border-radius: 50%;
          border: 4px solid #00FFFF;
          padding: 4px;
          background: linear-gradient(45deg, #00FFFF, #FF00FF);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .hero-name {
          font-size: 3.5rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 1rem;
          color: #00FFFF;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-name:hover {
          transform: scale(1.05);
        }

        .hero-role {
          font-size: 1.2rem;
          color: #00FFFF;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 2rem;
          min-height: 2rem;
        }

        .cursor {
          animation: blink 1s infinite;
          color: #FF00FF;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .download-resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #00FFFF;
          color: #010101;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
        }

        .download-resume-btn:hover {
          background: #FF00FF;
          color: white;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(255, 0, 255, 0.4);
        }

        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .hero-role {
            font-size: 1rem;
          }
          
          .profile-image {
            width: 150px;
            height: 150px;
          }
          
          .download-resume-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }

          .floating-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;