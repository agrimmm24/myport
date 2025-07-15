import React, { useState } from 'react';

interface CodeLogoPageProps {
  onLogoClick: () => void;
}

const NUM_DIAGONAL_LINES = 20;
const LINE_COLOR = '#fff';

const CodeLogoPage: React.FC<CodeLogoPageProps> = ({ onLogoClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate 20 animated diagonal lines
  const diagonalLines = Array.from({ length: NUM_DIAGONAL_LINES }, (_, i) => (
    <div
      key={i}
      className="diagonal-line"
      style={{ animationDelay: `${i * 0.1}s` }}
    />
  ));

  return (
    <div className="code-logo-page">
      {/* Animated diagonal lines */}
      <div className="diagonal-lines">{diagonalLines}</div>
      <div
        className="logo-container"
        onClick={onLogoClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`logo-text ${isHovered ? 'hovered' : ''}`}>AS</div>
        <div className="logo-subtitle">Click to Enter</div>
      </div>
      <style>{`
        .code-logo-page {
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
          cursor: pointer;
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
          width: 2px;
          height: 100vh;
          background: linear-gradient(to bottom, transparent, ${LINE_COLOR}, transparent);
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
        .logo-container {
          text-align: center;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .logo-text {
          font-size: 8rem;
          font-weight: 900;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 8px;
          color: #00FFFF;
          animation: logoPulse 2s ease-in-out infinite;
          margin-bottom: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 0 0 30px rgba(0, 255, 255, 0.8);
        }
        .logo-text.hovered {
          transform: scale(1.1);
          color: #FF00FF;
          text-shadow: 0 0 50px rgba(255, 0, 255, 0.8);
        }
        .logo-subtitle {
          font-size: 1.2rem;
          color: #00FFFF;
          font-family: 'JetBrains Mono', monospace;
          opacity: 0.8;
          animation: fadeInOut 2s ease-in-out infinite;
        }
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @media (max-width: 768px) {
          .logo-text { font-size: 5rem; letter-spacing: 4px; }
          .logo-subtitle { font-size: 1rem; }
        }
        @media (max-width: 480px) {
          .logo-text { font-size: 3.5rem; letter-spacing: 2px; }
          .logo-subtitle { font-size: 0.9rem; }
        }
      `}</style>
    </div>
  );
};

export default CodeLogoPage; 