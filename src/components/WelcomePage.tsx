import React, { useEffect, useState } from 'react';

const WelcomePage: React.FC = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-page">
      <div className="diagonal-lines">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="diagonal-line" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
      
      <div className="welcome-content">
        <h1 className="welcome-text">WELCOME</h1>
        <div className="loading-dots">
          <span>Loading{dots}</span>
        </div>
      </div>
      
      <style jsx>{`
        .welcome-page {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #000290 0%, #000000 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow: hidden;
          cursor: none;
        }

        .diagonal-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .diagonal-line {
          position: absolute;
          width: 1px;
          height: 100vh;
          background: linear-gradient(to bottom, transparent, #00FFFF, transparent);
          animation: diagonalMove 3s linear infinite;
        }

        .diagonal-line:nth-child(odd) {
          left: 5%;
          transform: rotate(45deg);
          animation-duration: 4s;
        }

        .diagonal-line:nth-child(even) {
          right: 5%;
          transform: rotate(-45deg);
          animation-duration: 3.5s;
        }

        .diagonal-line:nth-child(3n) {
          left: 25%;
          transform: rotate(30deg);
          animation-duration: 4.5s;
        }

        .diagonal-line:nth-child(5n) {
          right: 25%;
          transform: rotate(-30deg);
          animation-duration: 3.2s;
        }

        .diagonal-line:nth-child(7n) {
          left: 45%;
          transform: rotate(60deg);
          animation-duration: 4.8s;
        }

        .diagonal-line:nth-child(11n) {
          right: 45%;
          transform: rotate(-60deg);
          animation-duration: 3.8s;
        }

        .diagonal-line:nth-child(13n) {
          left: 65%;
          transform: rotate(15deg);
          animation-duration: 4.2s;
        }

        .diagonal-line:nth-child(17n) {
          right: 65%;
          transform: rotate(-15deg);
          animation-duration: 3.6s;
        }

        @keyframes diagonalMove {
          0% {
            transform: translateY(-100vh) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(45deg);
            opacity: 0;
          }
        }



        .welcome-content {
          text-align: center;
          z-index: 1;
        }

        .welcome-text {
          font-size: 4rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #00FFFF;
          animation: pulse 2s ease-in-out infinite;
          margin-bottom: 2rem;
        }

        .loading-dots {
          font-size: 1.5rem;
          color: #00FFFF;
          font-family: 'JetBrains Mono', monospace;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 10px #00FFFF;
          }
          to {
            text-shadow: 0 0 20px #00FFFF, 0 0 30px #00FFFF;
          }
        }

        @media (max-width: 768px) {
          .welcome-text {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .loading-dots {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;