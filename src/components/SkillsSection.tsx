import React, { useState } from 'react';

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'MACHINE LEARNING & AI',
      skills: [
        { name: 'Python', info: 'Primary programming language for AI/ML development, data analysis, and automation scripts.' },
        { name: 'TensorFlow', info: 'Deep learning framework for building and training neural networks and machine learning models.' },
        { name: 'PyTorch', info: 'Dynamic neural network framework preferred for research and production ML applications.' },
        { name: 'Scikit-learn', info: 'Machine learning library for classical algorithms, data preprocessing, and model evaluation.' }
      ]
    },
    {
      title: 'FULLSTACK DEVELOPMENT',
      skills: [
        { name: 'React', info: 'Frontend JavaScript library for building interactive user interfaces and single-page applications.' },
        { name: 'Node.js', info: 'JavaScript runtime for server-side development, APIs, and backend application logic.' },
        { name: 'Express', info: 'Web framework for Node.js to build RESTful APIs and web applications efficiently.' },
        { name: 'MongoDB', info: 'NoSQL database for flexible, document-based data storage and scalable applications.' }
      ]
    },
    {
      title: 'DEVOPS & AUTOMATION',
      skills: [
        { name: 'Docker', info: 'Containerization platform for packaging applications and ensuring consistent deployment environments.' },
        { name: 'Kubernetes', info: 'Container orchestration for managing, scaling, and automating containerized applications.' },
        { name: 'AWS', info: 'Cloud computing platform for hosting, storage, databases, and various cloud-native services.' },
        { name: 'Jenkins', info: 'Automation server for continuous integration and continuous deployment (CI/CD) pipelines.' }
      ]
    },
    {
      title: 'TOOLS & TECHNOLOGIES',
      skills: [
        { name: 'VS Code', info: 'Primary code editor with extensions for development, debugging, and version control integration.' },
        { name: 'Jupyter', info: 'Interactive notebooks for data analysis, machine learning experimentation, and documentation.' },
        { name: 'Git', info: 'Distributed version control for code management, branching strategies, and team collaboration.' },
        { name: 'Postman', info: 'API development and testing tool for designing, testing, and documenting REST APIs.' }
      ]
    }
  ];

  const handleSkillClick = (skillName: string, skillInfo: string) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-heading">SKILLS</h2>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title}
            className={`card skills-card animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span 
                    className={`skill-tag ${selectedSkill === skill.name ? 'active' : ''}`}
                    onClick={() => handleSkillClick(skill.name, skill.info)}
                  >
                    {skill.name}
                  </span>
                  {selectedSkill === skill.name && (
                    <div className="skill-info">
                      {skill.info}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1400px;
          width: 100%;
        }

        .skills-card {
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .skill-category-title {
          font-size: 1.3rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          color: #FF00FF;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
          text-align: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.8rem;
        }

        .skill-item {
          position: relative;
        }

        .skill-tag {
          display: block;
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          color: #00FFFF;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          width: 100%;
        }

        .skill-tag:hover,
        .skill-tag.active {
          background: rgba(255, 0, 255, 0.2);
          border-color: #FF00FF;
          color: #FF00FF;
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.3);
        }

        .skill-info {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.95);
          border: 2px solid #00FFFF;
          border-radius: 8px;
          padding: 1rem;
          margin-top: 0.5rem;
          width: 250px;
          z-index: 10;
          font-size: 0.8rem;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.9);
          font-family: 'JetBrains Mono', monospace;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
          animation: fadeInUp 0.3s ease-out;
        }

        .skill-info::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid #00FFFF;
        }

        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .skill-category-title {
            font-size: 1.1rem;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 0.6rem;
          }
          
          .skill-tag {
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
          }

          .skill-info {
            width: 200px;
            font-size: 0.7rem;
            padding: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;