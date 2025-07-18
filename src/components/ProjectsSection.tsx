import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Define a type for project objects
interface Project {
  title: string;
  techStack: string[];
  description: string;
  image: string;
  viewCode?: boolean;
  output?: boolean;
}

const ProjectsSection: React.FC = () => {
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showOutputModal, setShowOutputModal] = useState(false);
  const websiteDownloaderCode = `import streamlit as st\nimport requests\nfrom bs4 import BeautifulSoup\n\nst.set_page_config(page_title=\"Website Data Downloader\", layout=\"centered\")\nst.title(\"🌐 Download Website HTML Data\")\n\nurl = st.text_input(\"Enter website URL (with https://)\", value=\"https://example.com\")\n\nif st.button(\"Fetch Website Data\"):\n    try:\n        response = requests.get(url, timeout=10)\n        response.raise_for_status()\n        \n        html_content = response.text\n        soup = BeautifulSoup(html_content, \"html.parser\")\n        text_only = soup.get_text()\n\n        st.subheader(\"✅ Raw HTML:\")\n        st.code(html_content[:1000] + \"...\", language=\"html\")\n\n        st.subheader(\"🧾 Extracted Text:\")\n        st.text(text_only[:2000] + \"...\" if len(text_only) > 2000 else text_only)\n\n        st.download_button(\"📥 Download Full HTML\", data=html_content, file_name=\"website.html\", mime=\"text/html\")\n        st.download_button(\"📥 Download Extracted Text\", data=text_only, file_name=\"website.txt\", mime=\"text/plain\")\n        \n    except Exception as e:\n        st.error(f\"Error: {e}\")\n`;

  const techIcons = [
    '🐍', '⚛️', '🌐', '🎨', '📱', '🐳', '☁️', '⚙️', '📊', '🔧', 
    '💾', '🔒', '🚀', '📡', '🎯', '💡', '🔥', '⚡', '🌟', '🎪'
  ];

  const projects: Record<string, Project[]> = {
    Python: [
      {
        title: 'Email Sender Automation',
        techStack: ['Python', 'SMTP', 'Pandas', 'Streamlit'],
        description: 'Automated email sending system with bulk email capabilities, template customization, and analytics dashboard for efficient communication management.',
        image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'WhatsApp Sender Bot',
        techStack: ['Python', 'Selenium', 'PyAutoGUI', 'Schedule'],
        description: 'Automated WhatsApp messaging bot for bulk messaging, scheduled sends, and contact management with intelligent message queuing.',
        image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'AI Chat Assistant',
        techStack: ['Python', 'OpenAI API', 'Flask', 'WebSocket'],
        description: 'Intelligent chatbot with natural language processing capabilities, context awareness, and multi-platform integration for enhanced user experience.',
        image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'Data Analysis Dashboard',
        techStack: ['Python', 'Pandas', 'Matplotlib', 'Plotly'],
        description: 'Comprehensive data visualization platform with interactive charts, real-time analytics, and automated reporting for business intelligence.',
        image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'Website Data Downloader',
        techStack: ['Python', 'Streamlit', 'BeautifulSoup', 'Requests'],
        description: 'Download and extract website HTML and text data using a simple Streamlit app. Enter a URL, fetch the data, and download the results as HTML or plain text.',
        image: '/Down1.png',
        viewCode: true,
        output: true
      }
    ],
    Fullstack: [
      {
        title: 'Instagram Poster Dashboard',
        techStack: ['React', 'Node.js', 'MongoDB', 'Instagram API'],
        description: 'Full-stack application for automated Instagram posting with content scheduling, analytics dashboard, and social media management features.',
        image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'E-Commerce Platform',
        techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        description: 'Complete online shopping platform with user authentication, payment processing, inventory management, and admin dashboard.',
        image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'Task Management App',
        techStack: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
        description: 'Real-time collaborative task management application with drag-and-drop interface, team collaboration, and progress tracking.',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'Weather Forecast App',
        techStack: ['React', 'Node.js', 'OpenWeather API', 'Chart.js'],
        description: 'Weather application with location-based forecasts, interactive maps, historical data visualization, and weather alerts.',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
    DevOps: [
      {
        title: 'Menu-Based DevOps Tool',
        techStack: ['Docker', 'Linux', 'Shell Scripting', 'GenAI'],
        description: 'Comprehensive DevOps automation tool with ML integration, Docker management, Linux system administration, and AI-powered infrastructure optimization.',
        image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'CI/CD Pipeline Automation',
        techStack: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
        description: 'Automated deployment pipeline with code quality checks, automated testing, container orchestration, and cloud infrastructure management.',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'Infrastructure Monitoring',
        techStack: ['Prometheus', 'Grafana', 'AlertManager', 'ELK Stack'],
        description: 'Comprehensive monitoring solution with real-time metrics, log aggregation, alerting system, and performance analytics dashboard.',
        image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'Security Automation Tool',
        techStack: ['Ansible', 'Terraform', 'Vault', 'Security Scanning'],
        description: 'Automated security compliance tool with vulnerability scanning, secret management, infrastructure as code, and security policy enforcement.',
        image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  };

  const handleExploreClick = () => {
    console.log('Explore button clicked!');
    setShowDropdowns(true);
  };

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-heading">PROJECTS</h2>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {[...techIcons, ...techIcons, ...techIcons].map((icon, index) => (
            <span key={index} className="tech-icon">
              {icon}
            </span>
          ))}
        </div>
      </div>

      {!showDropdowns ? (
        <div className="explore-btn-container">
          <button className="explore-btn" onClick={handleExploreClick}>
            Explore Projects
          </button>
        </div>
      ) : (
        <div className="dropdowns-container">
          {Object.keys(projects).map((category) => (
            <div key={category} className="dropdown-wrapper">
              <button 
                className={`dropdown-btn ${activeDropdown === category ? 'active' : ''}`}
                onClick={() => toggleDropdown(category)}
              >
                {category}
                <ChevronDown 
                  size={16} 
                  className={`dropdown-arrow ${activeDropdown === category ? 'rotated' : ''}`}
                />
              </button>
              
              {activeDropdown === category && (
                <div className="dropdown-content">
                  {projects[category as keyof typeof projects].map((project, index) => (
                    <div key={index} className="project-card">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="project-info">
                        <h4 className="project-title">{project.title}</h4>
                        <div className="tech-stack">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        <p className="project-description">{project.description}</p>
                        {project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.output && (
                          <button className="output-btn" onClick={() => setShowOutputModal(true)}>
                            Output
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {showCodeModal && (
        <div className="modal-overlay" onClick={() => setShowCodeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Website Data Downloader - Streamlit Code</h3>
            <pre style={{ maxHeight: '400px', overflow: 'auto', background: '#222', color: '#0ff', padding: '1rem', borderRadius: '8px' }}>{websiteDownloaderCode}</pre>
            <button onClick={() => setShowCodeModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showOutputModal && (
        <div className="modal-overlay" onClick={() => setShowOutputModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Website Data Downloader - Output</h3>
            <img src="/Down1.png" alt="Website Data Downloader Output" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p>This Streamlit app allows you to enter any website URL, fetch its HTML content, extract the readable text, and download both as files. The UI is simple and user-friendly, with download buttons for both HTML and text data.</p>
            <button onClick={() => setShowOutputModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}

      <style>{`
        .marquee-container {
          width: 100%;
          max-width: 1200px;
          margin: 2rem 0;
          background: rgba(128, 128, 128, 0.1);
          border-radius: 8px;
          overflow: hidden;
          padding: 1rem 0;
          position: relative;
          z-index: 1;
        }

        .marquee-content {
          display: flex;
          animation: marquee 60s linear infinite;
          white-space: nowrap;
        }

        .tech-icon {
          font-size: 2rem;
          margin: 0 2rem;
          opacity: 0.8;
          transition: all 0.3s ease;
          color: #FF00FF;
        }

        .tech-icon:hover {
          opacity: 1;
          transform: scale(1.2);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .explore-btn-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2rem 0;
          position: relative;
          z-index: 10;
        }

        .explore-btn {
          background: #00FFFF;
          color: #010101;
          border: none;
          padding: 1.5rem 3rem;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
          position: relative;
          z-index: 100;
          pointer-events: auto;
        }

        .explore-btn:hover {
          background: #FF00FF;
          color: white;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(255, 0, 255, 0.4);
        }

        .dropdowns-container {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1200px;
          width: 100%;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-btn {
          background: transparent;
          color: #00FFFF;
          border: 2px solid #00FFFF;
          padding: 1rem 2rem;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dropdown-arrow {
          transition: transform 0.3s ease;
        }

        .dropdown-arrow.rotated {
          transform: rotate(180deg);
        }

        .dropdown-btn:hover,
        .dropdown-btn.active {
          background: #00FFFF;
          color: #010101;
          transform: scale(1.05);
        }

        .dropdown-content {
          position: relative;
          background: rgba(0, 0, 0, 0.9);
          border: 2px solid #00FFFF;
          border-radius: 8px;
          padding: 1rem;
          margin-top: 1rem;
          width: 100%;
          backdrop-filter: blur(10px);
          animation: fadeInUp 0.3s ease-out;
        }

        .dropdown-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .project-card {
          margin-bottom: 0;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(0, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 255, 255, 0.3);
          border-color: #00FFFF;
        }

        .project-image {
          width: 100%;
          height: 150px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-info {
          text-align: left;
        }

        .project-title {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          color: #FF00FF;
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: rgba(0, 255, 255, 0.2);
          color: #00FFFF;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .project-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-family: 'JetBrains Mono', monospace;
        }

        .view-code-btn, .output-btn {
          background: #FF00FF;
          color: #fff;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 1rem;
          margin-right: 0.7rem;
          margin-top: 0.7rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .view-code-btn:hover, .output-btn:hover {
          background: #00FFFF;
          color: #010101;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }
        .modal-content {
          background: #181818;
          padding: 2rem;
          border-radius: 12px;
          max-width: 600px;
          width: 90vw;
          box-shadow: 0 8px 32px rgba(0,255,255,0.2);
          color: #fff;
          position: relative;
        }
        .close-modal-btn {
          background: #00FFFF;
          color: #181818;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 1rem;
          margin-top: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .close-modal-btn:hover {
          background: #FF00FF;
          color: #fff;
        }

        @media (max-width: 768px) {
          .marquee-container {
            margin: 1rem 0;
          }
          
          .tech-icon {
            font-size: 1.5rem;
            margin: 0 1rem;
          }
          
          .explore-btn {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
          
          .dropdowns-container {
            gap: 1rem;
          }
          
          .dropdown-content {
            width: 100%;
            grid-template-columns: 1fr;
          }
          
          .project-card {
            padding: 1rem;
          }
          
          .project-image {
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;