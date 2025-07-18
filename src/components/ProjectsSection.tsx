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
        title: 'Website Data Downloader',
        techStack: ['Python', 'Streamlit', 'BeautifulSoup', 'Requests'],
        description: 'Download and extract website HTML and text data using a simple Streamlit app. Enter a URL, fetch the data, and download the results as HTML or plain text.',
        image: '/download.jpg', // updated thumbnail
        viewCode: true,
        output: true
      },
      {
        title: 'Medicine Info Chatbot (Gemini)',
        techStack: ['Python', 'Streamlit', 'BeautifulSoup', 'Requests', 'OpenAI', 'Gemini'],
        description: 'Chatbot that answers questions about medicines using Gemini and live data from 1mg.com. Enter a medicine name and get AI-powered information.',
        image: '/Medi1.png',
        viewCode: true,
        output: true
      },
      {
        title: 'Real-Time RAM Monitor',
        techStack: ['Python', 'Streamlit', 'psutil'],
        description: 'Monitor your system RAM usage in real-time with a live updating dashboard. See total, used, and available RAM with a progress bar.',
        image: '/ram.jpg', // swapped: now thumbnail
        viewCode: true,
        output: true
      },
      {
        title: 'Instagram Poster',
        techStack: ['Python', 'Streamlit'],
        description: 'Post to Instagram with a simple Streamlit app. Enter your username, password, caption, and upload an image or video. Preview your post before submission (mocked).',
        image: '/insta1.jpg',
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

  const [showGeminiCodeModal, setShowGeminiCodeModal] = useState(false);
  const [showGeminiOutputModal, setShowGeminiOutputModal] = useState(false);
  const geminiChatbotCode = `import streamlit as st\n\nimport requests\n\nfrom bs4 import BeautifulSoup\n\nfrom openai import OpenAI\n\n# API key for Gemini (you should consider using st.secrets in real apps for security)\ngemini_api_key = \"AIzaSyCqhhxWutn3J8sjtZHYf3Ayky0DePdtTP0\"\n\n# Get content from 1mg\nresponse = requests.get(\"https://www.1mg.com\")\nhtmlaicontent = response.text\nmysoup = BeautifulSoup(markup=htmlaicontent, features=\"html.parser\")\n\n# Set up the Gemini model through OpenAI interface\ngemini_model = OpenAI(\n    base_url=\"https://generativelanguage.googleapis.com/v1beta/openai/\",\n    api_key=gemini_api_key\n)\n\n# Define the chatbot function\ndef chatbot(userprompt):\n    my_msg = [\n        {\"role\": \"system\", \"content\": f\"you are AI assistent, your duty is to give the information about medicines available or not and thier salts ,take your content from: {htmlaicontent}\"},\n        {\"role\": \"user\", \"content\": userprompt}\n    ]\n    response = gemini_model.chat.completions.create(model=\"gemini-2.5-flash\", messages=my_msg)\n    return response.choices[0].message.content\n\n# Streamlit UI\nst.title(\"Medicine Info Chatbot (Gemini)\")\n\nuser_input = st.text_input(\"Ask about any medicine:\", placeholder=\"e.g., tell me about paracetamol\")\n\nif user_input:\n    with st.spinner(\"Thinking...\"):\n        answer = chatbot(user_input)\n    st.markdown(\"### Answer:\")\n    st.write(answer)\n`;

  const [showRamCodeModal, setShowRamCodeModal] = useState(false);
  const [showRamOutputModal, setShowRamOutputModal] = useState(false);
  const ramMonitorCode = `import streamlit as st\nimport psutil\nimport time\n\nst.set_page_config(page_title=\"RAM Monitor\", layout=\"centered\")\n\nst.title(\"💾 Real-Time RAM Monitor\")\n\nplaceholder = st.empty()\n\nwhile True:\n    mem = psutil.virtual_memory()\n    \n    total = mem.total / (1024 ** 3)\n    available = mem.available / (1024 ** 3)\n    used = mem.used / (1024 ** 3)\n    percent = mem.percent\n\n    with placeholder.container():\n        st.metric(label=\"Total RAM\", value=f\"{total:.2f} GB\")\n        st.metric(label=\"Used RAM\", value=f\"{used:.2f} GB\")\n        st.metric(label=\"Available RAM\", value=f\"{available:.2f} GB\")\n        st.progress(percent / 100.0, text=f\"{percent}% Used\")\n\n    time.sleep(1)\n`;

  const [showInstaCodeModal, setShowInstaCodeModal] = useState(false);
  const [showInstaOutputModal, setShowInstaOutputModal] = useState(false);
  const instaPosterCode = `import streamlit as st\n\nst.set_page_config(page_title=\"Instagram Poster\", page_icon=\"\ud83d\udcf8\", layout=\"centered\")\n\nst.title(\"\ud83d\udcf8 Instagram Poster\")\n\n# Input fields\nusername = st.text_input(\"Instagram Username\")\npassword = st.text_input(\"Password\", type=\"password\")\ncaption = st.text_area(\"Post Caption\")\nmedia = st.file_uploader(\"Upload Image/Video\", type=[\"jpg\", \"jpeg\", \"png\", \"mp4\"])\n\n# Submit Button\nif st.button(\"Submit Post\"):\n    if not username or not password or not caption:\n        st.warning(\"Please fill in all fields (username, password, caption).\")\n    else:\n        st.success(\"\u2705 Your post has been submitted to Instagram (Mocked).\")\n        st.write(\"### \ud83d\udcc4 Post Preview\")\n        st.write(f\"**Username:** {username}\")\n        st.write(f\"**Caption:** {caption}\")\n        if media:\n            st.write(f\"**Uploaded File:** {media.name}\")\n            if media.type.startswith(\"image/\"):\n                st.image(media, caption=\"Uploaded Image\", use_column_width=True)\n            \n            elif media.type == \"video/mp4\":\n                st.video(media)\n            else:\n                st.warning(\"Unsupported file type for preview.\")\n`;

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
                        {project.title === 'Website Data Downloader' && project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.title === 'Website Data Downloader' && project.output && (
                          <button className="output-btn" onClick={() => setShowOutputModal(true)}>
                            Output
                          </button>
                        )}
                        {project.title === 'Medicine Info Chatbot (Gemini)' && project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowGeminiCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.title === 'Medicine Info Chatbot (Gemini)' && project.output && (
                          <button className="output-btn" onClick={() => setShowGeminiOutputModal(true)}>
                            Output
                          </button>
                        )}
                        {project.title === 'Real-Time RAM Monitor' && project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowRamCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.title === 'Real-Time RAM Monitor' && project.output && (
                          <button className="output-btn" onClick={() => setShowRamOutputModal(true)}>
                            Output
                          </button>
                        )}
                        {project.title === 'Instagram Poster' && project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowInstaCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.title === 'Instagram Poster' && project.output && (
                          <button className="output-btn" onClick={() => setShowInstaOutputModal(true)}>
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
      {showGeminiCodeModal && (
        <div className="modal-overlay" onClick={() => setShowGeminiCodeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Medicine Info Chatbot (Gemini) - Streamlit Code</h3>
            <pre style={{ maxHeight: '400px', overflow: 'auto', background: '#222', color: '#0ff', padding: '1rem', borderRadius: '8px' }}>{geminiChatbotCode}</pre>
            <button onClick={() => setShowGeminiCodeModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showGeminiOutputModal && (
        <div className="modal-overlay" onClick={() => setShowGeminiOutputModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Medicine Info Chatbot (Gemini) - Output</h3>
            <img src="/Medi.png" alt="Medicine Info Chatbot Output" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p>This Streamlit app allows you to ask about any medicine. It uses Gemini AI and live data from 1mg.com to answer your queries about medicine availability and their salts.</p>
            <button onClick={() => setShowGeminiOutputModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showRamCodeModal && (
        <div className="modal-overlay" onClick={() => setShowRamCodeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Real-Time RAM Monitor - Streamlit Code</h3>
            <pre style={{ maxHeight: '400px', overflow: 'auto', background: '#222', color: '#0ff', padding: '1rem', borderRadius: '8px' }}>{ramMonitorCode}</pre>
            <button onClick={() => setShowRamCodeModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showRamOutputModal && (
        <div className="modal-overlay" onClick={() => setShowRamOutputModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Real-Time RAM Monitor - Output</h3>
            <img src="/ram1.png" alt="RAM Monitor Output" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p>This Streamlit app displays your system's RAM usage in real-time, updating every second. It shows total, used, and available RAM, along with a live progress bar.</p>
            <button onClick={() => setShowRamOutputModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showInstaCodeModal && (
        <div className="modal-overlay" onClick={() => setShowInstaCodeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Instagram Poster - Streamlit Code</h3>
            <pre style={{ maxHeight: '400px', overflow: 'auto', background: '#222', color: '#0ff', padding: '1rem', borderRadius: '8px' }}>{instaPosterCode}</pre>
            <button onClick={() => setShowInstaCodeModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showInstaOutputModal && (
        <div className="modal-overlay" onClick={() => setShowInstaOutputModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Instagram Poster - Output</h3>
            <img src="/insta.png" alt="Instagram Poster Output" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p>This Streamlit app allows you to post to Instagram by entering your credentials, caption, and uploading an image or video. The post preview is shown after submission (mocked).</p>
            <button onClick={() => setShowInstaOutputModal(false)} className="close-modal-btn">Close</button>
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