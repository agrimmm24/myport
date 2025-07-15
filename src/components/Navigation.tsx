import React from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact Me' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <span className="logo">AS</span>
      </div>
      
      <div className="nav-items">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(0, 255, 255, 0.1);
        }

        .logo {
          font-size: 2rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          color: #00FFFF;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo:hover {
          color: #FF00FF;
        }

        .nav-items {
          display: flex;
          gap: 1rem;
        }

        .nav-item {
          background: none;
          border: none;
          color: white;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-item:hover {
          color: #00FFFF;
          background: rgba(0, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .nav-item.active {
          color: #FF00FF;
          background: rgba(255, 0, 255, 0.1);
          border: 1px solid rgba(255, 0, 255, 0.3);
        }

        @media (max-width: 768px) {
          .navigation {
            padding: 0.5rem 1rem;
          }
          
          .nav-items {
            gap: 0.3rem;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .nav-item {
            font-size: 0.6rem;
            padding: 0.3rem 0.5rem;
            white-space: nowrap;
          }
          
          .logo {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;