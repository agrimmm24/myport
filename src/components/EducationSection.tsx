import React from 'react';
import { GraduationCap, School } from 'lucide-react';

const EducationSection: React.FC = () => {
  const educationData = [
    {
      icon: <School size={32} />,
      type: 'SCHOOL',
      institution: 'SKD Academy',
      location: 'Gomti Nagar, Lucknow',
      period: '2019 - 2023',
      description: 'Completed higher secondary education with focus on Science and Mathematics. Participated in various technical competitions and coding events.',
      achievements: ['Science Stream Topper', 'Programming Club President', 'Mathematics Olympiad Participant']
    },
    {
      icon: <GraduationCap size={32} />,
      type: 'COLLEGE',
      institution: 'Vivekananda Global University',
      location: 'Jaipur, Rajasthan',
      period: '2024 - Present',
      description: 'Pursuing B.Tech in Artificial Intelligence & Data Science. Active member of coding club and technical societies.',
      achievements: ['Dean\'s List', 'AI/ML Research Assistant', 'Hackathon Winner']
    }
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-heading">EDUCATION</h2>
      
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div 
            key={edu.type}
            className={`education-card animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="education-icon">
              {edu.icon}
            </div>
            
            <div className="education-content">
              <div className="education-header">
                <span className="education-type">{edu.type}</span>
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-location">{edu.location}</p>
                <p className="education-period">{edu.period}</p>
              </div>
              
              <div className="education-details">
                <p className="education-description">{edu.description}</p>
                
                <div className="achievements">
                  <h4 className="achievements-title">ACHIEVEMENTS</h4>
                  <ul className="achievements-list">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .education-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 1000px;
          width: 100%;
        }

        .education-card {
          display: flex;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 16px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          opacity: 0;
          animation-fill-mode: forwards;
          position: relative;
          overflow: hidden;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(45deg, #00FFFF, #FF00FF);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .education-card:hover {
          border-color: #00FFFF;
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .education-card:hover::before {
          transform: scaleX(1);
        }

        .education-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: rgba(0, 255, 255, 0.1);
          border: 2px solid #00FFFF;
          border-radius: 50%;
          color: #00FFFF;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .education-card:hover .education-icon {
          background: rgba(255, 0, 255, 0.1);
          border-color: #FF00FF;
          color: #FF00FF;
          transform: scale(1.1) rotate(5deg);
        }

        .education-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .education-header {
          border-bottom: 1px solid rgba(0, 255, 255, 0.2);
          padding-bottom: 1rem;
        }

        .education-type {
          display: inline-block;
          background: rgba(0, 255, 255, 0.2);
          color: #00FFFF;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .education-institution {
          font-size: 1.8rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .education-location {
          font-size: 1.1rem;
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 0.3rem;
        }

        .education-period {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
        }

        .education-description {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 1rem;
        }

        .achievements-title {
          font-size: 1.1rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          color: #00FFFF;
          text-transform: uppercase;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 0.5rem;
        }

        .achievement-item {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.8);
          padding-left: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .achievement-item::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #FF00FF;
          transition: all 0.3s ease;
        }

        .achievement-item:hover {
          color: white;
          transform: translateX(5px);
        }

        .achievement-item:hover::before {
          color: #00FFFF;
        }

        @media (max-width: 768px) {
          .education-container {
            gap: 2rem;
          }
          
          .education-card {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
          
          .education-icon {
            width: 60px;
            height: 60px;
            align-self: center;
          }
          
          .education-institution {
            font-size: 1.4rem;
          }
          
          .education-location,
          .education-period {
            font-size: 1rem;
          }
          
          .education-description {
            font-size: 0.9rem;
          }
          
          .achievements-title {
            font-size: 1rem;
          }
          
          .achievement-item {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default EducationSection;