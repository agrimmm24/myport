import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experienceData = {
    company: 'LinuxWorld Informatics Pvt. Ltd.',
    position: 'Tech Intern',
    duration: 'June 2024 - Present',
    location: 'Remote',
    description: 'LinuxWorld Informatics is a leading technology company specializing in Linux-based solutions, cloud computing, and DevOps automation. The company focuses on providing enterprise-level infrastructure solutions and training programs for emerging technologies.',
    responsibilities: [
      'Developed and deployed AI/ML models for real-world applications using Python and TensorFlow',
      'Worked on full-stack development projects using React, Node.js, and modern web technologies',
      'Implemented DevOps practices and automation workflows using Docker, Kubernetes, and CI/CD pipelines',
      'Collaborated with senior developers on enterprise-level solutions and cloud infrastructure',
      'Contributed to open-source projects and maintained comprehensive technical documentation',
      'Gained hands-on experience with AWS cloud platforms and containerization technologies'
    ],
    achievements: [
      'Successfully deployed 5+ machine learning models to production environment',
      'Reduced deployment time by 40% through automation and optimized CI/CD workflows',
      'Mentored junior interns in Python programming and Docker containerization technologies',
      'Led a team project that improved system performance by 25% through code optimization'
    ],
    technologies: ['Python', 'React', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 'TensorFlow', 'Linux', 'Git', 'Jenkins']
  };

  return (
    <section id="experience" className="section">
      <h2 className="section-heading">EXPERIENCE</h2>
      
      <div className="experience-container">
        <div className="experience-card animate-fade-in-up">
          <div className="experience-header">
            <div className="company-info">
              <h3 className="position-title">{experienceData.position}</h3>
              <h4 className="company-name">{experienceData.company}</h4>
              
              <div className="experience-meta">
                <div className="meta-item">
                  <Calendar size={18} />
                  <span>{experienceData.duration}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={18} />
                  <span>{experienceData.location}</span>
                </div>
                <div className="meta-item">
                  <Briefcase size={18} />
                  <span>Internship</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-content">
            <div className="company-description">
              <h5 className="section-subtitle">ABOUT THE COMPANY</h5>
              <p className="description-text">{experienceData.description}</p>
            </div>
            
            <div className="responsibilities-section">
              <h5 className="section-subtitle">KEY RESPONSIBILITIES</h5>
              <ul className="responsibilities-list">
                {experienceData.responsibilities.map((responsibility, index) => (
                  <li key={index} className="responsibility-item">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="achievements-section">
              <h5 className="section-subtitle">ACHIEVEMENTS</h5>
              <ul className="achievements-list">
                {experienceData.achievements.map((achievement, index) => (
                  <li key={index} className="achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="technologies-section">
              <h5 className="section-subtitle">TECHNOLOGIES USED</h5>
              <div className="technologies-grid">
                {experienceData.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-container {
          max-width: 1000px;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .experience-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(128, 128, 128, 0.5);
          border-radius: 16px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          width: 100%;
          opacity: 0;
          animation-fill-mode: forwards;
          position: relative;
          overflow: hidden;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(45deg, #00FFFF, #FF00FF);
        }

        .experience-card:hover {
          border-color: #00FFFF;
          box-shadow: 
            0 0 30px rgba(0, 255, 255, 0.6),
            0 0 60px rgba(0, 255, 255, 0.4);
          transform: translateY(-5px);
          border-radius: 50px;
        }

        .experience-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(0, 255, 255, 0.3);
        }

        .position-title {
          font-size: 2.2rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          color: #FF00FF;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          letter-spacing: 2px;
        }

        .company-name {
          font-size: 1.5rem;
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          color: #00FFFF;
          margin-bottom: 1rem;
        }

        .experience-meta {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
        }

        .experience-content {
          display: grid;
          gap: 2rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          color: #00FFFF;
          text-transform: uppercase;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .description-text {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          font-size: 1rem;
        }

        .responsibilities-list,
        .achievements-list {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 0.8rem;
        }

        .responsibility-item,
        .achievement-item {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          padding-left: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .responsibility-item::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #00FFFF;
          transition: all 0.3s ease;
        }

        .achievement-item::before {
          content: '★';
          position: absolute;
          left: 0;
          color: #FF00FF;
          transition: all 0.3s ease;
        }

        .responsibility-item:hover,
        .achievement-item:hover {
          color: white;
          transform: translateX(5px);
        }

        .responsibility-item:hover::before {
          color: #FF00FF;
        }

        .achievement-item:hover::before {
          color: #00FFFF;
        }

        .technologies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.8rem;
        }

        .tech-badge {
          background: rgba(0, 255, 255, 0.2);
          color: #00FFFF;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          text-align: center;
          font-weight: 600;
          border: 1px solid rgba(0, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: rgba(255, 0, 255, 0.2);
          color: #FF00FF;
          border-color: #FF00FF;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .experience-card {
            padding: 1.5rem;
          }
          
          .position-title {
            font-size: 1.6rem;
          }
          
          .company-name {
            font-size: 1.2rem;
          }
          
          .experience-meta {
            gap: 1rem;
          }
          
          .meta-item {
            font-size: 0.8rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .description-text,
          .responsibility-item,
          .achievement-item {
            font-size: 0.9rem;
          }
          
          .technologies-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 0.6rem;
          }
          
          .tech-badge {
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;