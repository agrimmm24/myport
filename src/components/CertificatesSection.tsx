import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const CertificatesSection: React.FC = () => {
  const certificates = {
    'AI/ML': [
      {
        title: 'Machine Learning Specialization',
        issuer: 'Stanford University (Coursera)',
        description: 'Comprehensive course covering supervised learning, unsupervised learning, and best practices in machine learning.',
        link: '#'
      },
      {
        title: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI',
        description: 'Advanced neural networks, CNNs, RNNs, and deep learning frameworks for real-world applications.',
        link: '#'
      },
      {
        title: 'TensorFlow Developer Certificate',
        issuer: 'Google',
        description: 'Professional certification demonstrating proficiency in building and deploying ML models using TensorFlow.',
        link: '#'
      }
    ],
    'Fullstack': [
      {
        title: 'Full Stack Web Development',
        issuer: 'freeCodeCamp',
        description: 'Complete web development curriculum covering HTML, CSS, JavaScript, React, Node.js, and databases.',
        link: '#'
      },
      {
        title: 'React Development',
        issuer: 'Meta (Coursera)',
        description: 'Advanced React concepts including hooks, context, state management, and modern development practices.',
        link: '#'
      },
      {
        title: 'Node.js Certification',
        issuer: 'OpenJS Foundation',
        description: 'Server-side JavaScript development, API design, and backend architecture best practices.',
        link: '#'
      }
    ],
    'DevOps': [
      {
        title: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        description: 'Cloud development skills including serverless computing, containerization, and AWS service integration.',
        link: '#'
      },
      {
        title: 'Docker Certified Associate',
        issuer: 'Docker Inc.',
        description: 'Container technology expertise covering Docker fundamentals, orchestration, and production deployment.',
        link: '#'
      },
      {
        title: 'Kubernetes Administrator',
        issuer: 'CNCF',
        description: 'Container orchestration, cluster management, and Kubernetes ecosystem administration skills.',
        link: '#'
      }
    ]
  };

  return (
    <section id="certificates" className="section">
      <h2 className="section-heading">CERTIFICATES</h2>
      
      <div className="certificates-container">
        {Object.entries(certificates).map(([category, certs], categoryIndex) => (
          <div 
            key={category}
            className={`certificate-category animate-fade-in-up`}
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            <h3 className="category-title">{category}</h3>
            <div className="certificates-grid">
              {certs.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="certificate-card"
                  style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s` }}
                >
                  <div className="certificate-header">
                    <div className="certificate-icon">
                      <Award size={24} />
                    </div>
                    <h4 className="certificate-title">{cert.title}</h4>
                  </div>
                  
                  <div className="certificate-content">
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <p className="certificate-description">{cert.description}</p>
                    
                    <a href={cert.link} className="certificate-link">
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .certificates-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .certificate-category {
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .category-title {
          font-size: 1.8rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          color: #FF00FF;
          text-align: center;
          margin-bottom: 2rem;
          letter-spacing: 2px;
          position: relative;
        }

        .category-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(45deg, #00FFFF, #FF00FF);
          border-radius: 2px;
        }

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .certificate-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(128, 128, 128, 0.5);
          border-radius: 12px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .certificate-card::before {
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

        .certificate-card:hover {
          border-color: #00FFFF;
          box-shadow: 
            0 0 30px rgba(0, 255, 255, 0.6),
            0 0 60px rgba(0, 255, 255, 0.4);
          transform: translateY(-10px) scale(1.02);
          border-radius: 50px;
        }

        .certificate-card:hover::before {
          transform: scaleX(1);
        }

        .certificate-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .certificate-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(0, 255, 255, 0.2);
          border: 2px solid #00FFFF;
          border-radius: 50%;
          color: #00FFFF;
          transition: all 0.3s ease;
        }

        .certificate-card:hover .certificate-icon {
          background: rgba(255, 0, 255, 0.2);
          border-color: #FF00FF;
          color: #FF00FF;
          transform: scale(1.1) rotate(10deg);
        }

        .certificate-title {
          font-size: 1.2rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          color: #00FFFF;
          text-transform: uppercase;
          letter-spacing: 1px;
          flex: 1;
        }

        .certificate-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .certificate-issuer {
          font-size: 1rem;
          color: #FF00FF;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
        }

        .certificate-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'JetBrains Mono', monospace;
          line-height: 1.5;
        }

        .certificate-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #00FFFF;
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          align-self: flex-start;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 6px;
          background: rgba(0, 255, 255, 0.1);
        }

        .certificate-link:hover {
          color: #FF00FF;
          border-color: #FF00FF;
          background: rgba(255, 0, 255, 0.1);
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .certificates-container {
            gap: 2rem;
          }
          
          .category-title {
            font-size: 1.4rem;
          }
          
          .certificates-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .certificate-card {
            padding: 1.2rem;
          }
          
          .certificate-header {
            flex-direction: column;
            text-align: center;
            gap: 0.8rem;
          }
          
          .certificate-icon {
            width: 40px;
            height: 40px;
          }
          
          .certificate-title {
            font-size: 1rem;
          }
          
          .certificate-issuer {
            font-size: 0.9rem;
          }
          
          .certificate-description {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CertificatesSection;