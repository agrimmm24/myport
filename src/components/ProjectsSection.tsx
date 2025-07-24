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

function ProjectsSection() {
  // All useState hooks at the top
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showOutputModal, setShowOutputModal] = useState(false);
  const [showGeminiCodeModal, setShowGeminiCodeModal] = useState(false);
  const [showGeminiOutputModal, setShowGeminiOutputModal] = useState(false);
  const [showRamCodeModal, setShowRamCodeModal] = useState(false);
  const [showRamOutputModal, setShowRamOutputModal] = useState(false);
  const [showInstaCodeModal, setShowInstaCodeModal] = useState(false);
  const [showInstaOutputModal, setShowInstaOutputModal] = useState(false);
  const [showMenuCodeModal, setShowMenuCodeModal] = useState(false);
  const [showMenuOutputModal, setShowMenuOutputModal] = useState(false);
  const [showGeminiChatCodeModal, setShowGeminiChatCodeModal] = useState(false);
  const [showGeminiChatOutputModal, setShowGeminiChatOutputModal] = useState(false);
  const [showEmailCodeModal, setShowEmailCodeModal] = useState(false);
  const [showEmailOutputModal, setShowEmailOutputModal] = useState(false);
  const [showSmsCodeModal, setShowSmsCodeModal] = useState(false);
  const [showSmsOutputModal, setShowSmsOutputModal] = useState(false);
  const [showPythonGmailCodeModal, setShowPythonGmailCodeModal] = useState(false);
  const [showPythonGmailOutputModal, setShowPythonGmailOutputModal] = useState(false);

  // All code string constants here (one copy each)
  const websiteDownloaderCode = `import streamlit as st\nimport requests\nfrom bs4 import BeautifulSoup\n\nst.set_page_config(page_title=\"Website Data Downloader\", layout=\"centered\")\nst.title(\"🌐 Download Website HTML Data\")\n\nurl = st.text_input(\"Enter website URL (with https://)\", value=\"https://example.com\")\n\nif st.button(\"Fetch Website Data\"):\n    try:\n        response = requests.get(url, timeout=10)\n        response.raise_for_status()\n        \n        html_content = response.text\n        soup = BeautifulSoup(html_content, \"html.parser\")\n        text_only = soup.get_text()\n\n        st.subheader(\"✅ Raw HTML:\")\n        st.code(html_content[:1000] + \"...\", language=\"html\")\n\n        st.subheader(\"🧾 Extracted Text:\")\n        st.text(text_only[:2000] + \"...\" if len(text_only) > 2000 else text_only)\n\n        st.download_button(\"📥 Download Full HTML\", data=html_content, file_name=\"website.html\", mime=\"text/html\")\n        st.download_button(\"📥 Download Extracted Text\", data=text_only, file_name=\"website.txt\", mime=\"text/plain\")\n        \n    except Exception as e:\n        st.error(f\"Error: {e}\")\n`;

  const techIcons = [
    '🐍', '⚛️', '🌐', '🎨', '📱', '🐳', '☁️', '⚙️', '📊', '🔧', 
    '💾', '🔒', '🚀', '📡', '🎯', '💡', '🔥', '⚡', '🌟', '🎪'
  ];

  // Only one projects array, with all Python projects
  const projects: Record<string, Project[]> = {
    Python: [
      {
        title: 'Website Data Downloader',
        techStack: ['Python', 'Streamlit', 'BeautifulSoup', 'Requests'],
        description: 'Download and extract website HTML and text data using a simple Streamlit app. Enter a URL, fetch the data, and download the results as HTML or plain text.',
        image: '/download.jpg',
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
        image: '/ram.jpg',
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
      },
      {
        title: 'All-in-One Menu App',
        techStack: ['Python', 'Streamlit', 'OpenAI', 'Docker', 'Linux', 'PIL'],
        description: 'A menu-based Streamlit app with Linux, Docker, GenAI, ML, Email, WhatsApp, Calling, Messaging, Instagram, and LinkedIn features. Includes code execution, AI chat, and more.',
        image: '/menu1.png',
        viewCode: true,
        output: true
      },
      {
        title: 'Gemini Chat',
        techStack: ['Python', 'Streamlit', 'Google Gemini'],
        description: 'A Streamlit chatbot using Gemini LLM for mental health Q&A. Secure API key, few-shot learning, and interactive chat.',
        image: '/llm1.jpeg',
        viewCode: true,
        output: true
      },
      {
        title: 'Send Email',
        techStack: ['Python', 'Streamlit', 'SMTP'],
        description: 'A Streamlit app to send styled emails with attachments. Includes custom background, file upload, and secure sending.',
        image: '/email.jpg',
        viewCode: true,
        output: true
      },
      {
        title: 'SMS Sender via Twilio',
        techStack: ['Python', 'Streamlit', 'Twilio'],
        description: 'Send SMS messages using Twilio API from a Streamlit app. Enter recipient, message, and send instantly.',
        image: '/msg1.jpeg',
        viewCode: true,
        output: true
      },
      {
        title: 'Python Email Sender (Gmail)',
        techStack: ['Python', 'Streamlit', 'smtplib', 'EmailMessage'],
        description: 'Send emails using Gmail and Streamlit. Enter recipient, subject, and body, then send instantly using a secure app password.',
        image: '/email1.jpg',
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

  const geminiChatbotCode = `import streamlit as st\n\nimport requests\n\nfrom bs4 import BeautifulSoup\n\nfrom openai import OpenAI\n\n# API key for Gemini (you should consider using st.secrets in real apps for security)\ngemini_api_key = \"AIzaSyCqhhxWutn3J8sjtZHYf3Ayky0DePdtTP0\"\n\n# Get content from 1mg\nresponse = requests.get(\"https://www.1mg.com\")\nhtmlaicontent = response.text\nmysoup = BeautifulSoup(markup=htmlaicontent, features=\"html.parser\")\n\n# Set up the Gemini model through OpenAI interface\ngemini_model = OpenAI(\n    base_url=\"https://generativelanguage.googleapis.com/v1beta/openai/\",\n    api_key=gemini_api_key\n)\n\n# Define the chatbot function\ndef chatbot(userprompt):\n    my_msg = [\n        {\"role\": \"system\", \"content\": f\"you are AI assistent, your duty is to give the information about medicines available or not and thier salts ,take your content from: {htmlaicontent}\"},\n        {\"role\": \"user\", \"content\": userprompt}\n    ]\n    response = gemini_model.chat.completions.create(model=\"gemini-2.5-flash\", messages=my_msg)\n    return response.choices[0].message.content\n\n# Streamlit UI\nst.title(\"Medicine Info Chatbot (Gemini)\")\n\nuser_input = st.text_input(\"Ask about any medicine:\", placeholder=\"e.g., tell me about paracetamol\")\n\nif user_input:\n    with st.spinner(\"Thinking...\"):\n        answer = chatbot(user_input)\n    st.markdown(\"### Answer:\")\n    st.write(answer)\n`;

  const ramMonitorCode = `import streamlit as st\nimport psutil\nimport time\n\nst.set_page_config(page_title=\"RAM Monitor\", layout=\"centered\")\n\nst.title(\"💾 Real-Time RAM Monitor\")\n\nplaceholder = st.empty()\n\nwhile True:\n    mem = psutil.virtual_memory()\n    \n    total = mem.total / (1024 ** 3)\n    available = mem.available / (1024 ** 3)\n    used = mem.used / (1024 ** 3)\n    percent = mem.percent\n\n    with placeholder.container():\n        st.metric(label=\"Total RAM\", value=f\"{total:.2f} GB\")\n        st.metric(label=\"Used RAM\", value=f\"{used:.2f} GB\")\n        st.metric(label=\"Available RAM\", value=f\"{available:.2f} GB\")\n        st.progress(percent / 100.0, text=f\"{percent}% Used\")\n\n    time.sleep(1)\n`;

  188|    const instaPosterCode = `import streamlit as st\nst.set_page_config(page_title="Instagram Poster", page_icon="📷")`;
189|    const menuAppCode = `import streamlit as st\nfrom PIL import Image\n...


  const geminiChatCode = `import streamlit as st\nimport google.generativeai as genai\n\nst.set_page_config(page_title=\"Gemini Chat\", layout=\"centered\")\nst.title(\"🤖 Mental Reliever\")\n\n# Replace with your own key, stored securely in production\napi_key = \"AIzaSyBcaSAM_AsYpUqsdjpZdZt6w61v2ZPS0Ag\"\n\nif api_key:\n    genai.configure(api_key=api_key)\n    model = genai.GenerativeModel(\"gemini-2.5-flash\")\n\n    # Corrected few-shot examples\n    few_shot_history = [\n        {\"role\": \"user\", \"parts\": [\"Can you help me understand anxiety?\"]},\n        {\"role\": \"model\", \"parts\": [\"Sure, I'm a psychologist with 20 years of experience. Anxiety is...\"]},\n    ]\n\n    chat = model.start_chat(history=few_shot_history)\n\n    user_query = st.text_input(\"Ask a question:\", placeholder=\"e.g. How to deal with stress?\")\n\n    if st.button(\"Send\"):\n        if user_query.strip() == \"\":\n            st.warning(\"Please enter a question.\")\n        else:\n            with st.spinner(\"Thinking...\"):\n                response = chat.send_message(user_query)\n                st.success(\"Response:\")\n                st.write(response.text)\nelse:\n    st.warning(\"Please enter your Gemini API Key to begin.\")\n`;

  const emailSenderCode = `import streamlit as st\nimport smtplib\nfrom email.mime.multipart import MIMEMultipart\nfrom email.mime.text import MIMEText\nfrom email.mime.base import MIMEBase\nfrom email import encoders\n\n# ------------------ BACKGROUND CSS ------------------ #\ndef set_bg_image():\n    st.markdown(\"\"\"\n        <style>\n        .stApp {\n            background-image: url(\"https://static.vecteezy.com/system/resources/previews/000/543/942/non_2x/futuristic-blue-express-envelope-and-parcel-abstract-technology-background-business-quantum-internet-network-communication-and-high-speed-parcel-delivery-and-email-text-sending-message-service-vector.jpg\");\n            background-size: cover;\n            background-position: center;\n            background-repeat: no-repeat;\n            background-attachment: fixed;\n        }\n\n        .block-container {\n            background: rgba(255, 255, 255, 0.10);\n            backdrop-filter: blur(12px);\n            -webkit-backdrop-filter: blur(12px);\n            border-radius: 16px;\n            padding: 2rem;\n            margin-top: 50px;\n            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n            color: #ffffff;\n        }\n\n        input, textarea, .stTextInput > div > div, .stTextArea > div > div,\n        .stFileUploader > div, .stButton > button {\n            background-color: rgba(0, 0, 0, 0.5) !important;\n            color: #fff !important;\n            border-radius: 8px;\n        }\n\n        .stButton > button:hover {\n            background-color: rgba(0, 0, 0, 0.7) !important;\n        }\n\n        </style>\n    \"\"\", unsafe_allow_html=True)\n\n# Set background\nset_bg_image()\n\n# ------------------ Email UI ------------------ #\nwith st.container():\n    st.markdown('<div class="block-container">', unsafe_allow_html=True)\n\n    st.title("📨 Send Email")\n\n    receiver_email = st.text_input("📬 Receiver's Email")\n    subject = st.text_input("✉️ Email Subject")\n    body = st.text_area("📝 Email Body")\n    uploaded_files = st.file_uploader("📎 Upload PDF or JPG files", type=["pdf", "jpg", "jpeg"], accept_multiple_files=True)\n\n    send_button = st.button("🚀 Send Email")\n\n    sender_email = "sri.agrimsri@gmail.com"\n    sender_password = "tqgovynagziswluk"  # Use App Password\n\n    if send_button:\n        if not receiver_email or not subject or not body:\n            st.error("❗ Please fill in all required fields.")\n        else:\n            try:\n                msg = MIMEMultipart()\n                msg['From'] = sender_email\n                msg['To'] = receiver_email\n                msg['Subject'] = subject\n\n                msg.attach(MIMEText(body, 'plain'))\n\n                for file in uploaded_files:\n                    part = MIMEBase('application', 'octet-stream')\n                    part.set_payload(file.read())\n                    encoders.encode_base64(part)\n                    part.add_header('Content-Disposition', f'attachment; filename="{file.name}"')\n                    msg.attach(part)\n\n                server = smtplib.SMTP('smtp.gmail.com', 587)\n                server.starttls()\n                server.login(sender_email, sender_password)\n                server.send_message(msg)\n                server.quit()\n\n                st.success(f"✅ Email sent to {receiver_email} with {len(uploaded_files)} file(s) attached.")\n            except Exception as e:\n                st.error(f"❌ Failed to send email. Error: {str(e)}")\n\n    st.markdown('</div>', unsafe_allow_html=True)\n# ------------------ END OF EMAIL UI ------------------ \n`;

  const smsSenderCode = `import streamlit as st\nfrom twilio.rest import Client\n\n# Twilio credentials (DO NOT share these publicly)\nACCOUNT_SID = 'Account_sid'  # Replace with your Twilio Account SID\nAUTH_TOKEN = 'twilio_auth_token'                 # Replace with your Twilio Auth Token\nTWILIO_PHONE_NUMBER = 'twilio_number'                # Replace with your Twilio number\n\n# Streamlit UI setup\nst.set_page_config(page_title=\"📱 SMS Sender\", layout=\"centered\")\nst.title(\"📱 SMS Sender via Twilio\")\n\n# Input fields\nto_number = st.text_input(\"Enter recipient phone number (with country code)\", placeholder=\"+91XXXXXXXXXX\")\nmessage = st.text_area(\"Enter your message\")\n\n# Submit button\nif st.button(\"Send SMS\"):\n    if not to_number or not message:\n        st.warning(\"Please provide both phone number and message.\")\n    else:\n        try:\n            # Initialize Twilio client\n            client = Client(ACCOUNT_SID, AUTH_TOKEN)\n\n            # Send the SMS\n            message = client.messages.create(\n                body=message,\n                from_=TWILIO_PHONE_NUMBER,\n                to=to_number\n            )\n\n            st.success(f\"✅ Message sent! SID: {message.sid}\")\n        except Exception as e:\n            st.error(f\"❌ Failed to send message: {e}\")\n`;

  const pythonEmailSenderCode = `import streamlit as st\nimport smtplib\nfrom email.message import EmailMessage\n\n# App password and sender email (hardcoded for security)\nAPP_PASSWORD = \"bbtkaoxlcnwvccft\"  # Replace this with your 16-digit Gmail app password\nSENDER_EMAIL = \"sri.agrimsri@gmail.com\"    # Replace with your Gmail\n\nst.set_page_config(page_title=\"Email Sender\", layout=\"centered\")\nst.title(\"\ud83d\udce7 Python Email Sender (Gmail)\")\n\n# User Inputs\nrecipient = st.text_input(\"Recipient Email Address\")\nsubject = st.text_input(\"Email Subject\")\nbody = st.text_area(\"Email Body\")\n\nif st.button(\"Send Email\"):\n    if not recipient or not subject or not body:\n        st.warning(\"Please fill in all fields.\")\n    else:\n        try:\n            # Construct email\n            msg = EmailMessage()\n            msg['Subject'] = subject\n            msg['From'] = SENDER_EMAIL\n            msg['To'] = recipient\n            msg.set_content(body)\n\n            # Send email\n            with smtplib.SMTP('smtp.gmail.com', 587) as smtp:\n                smtp.starttls()\n                smtp.login(SENDER_EMAIL, APP_PASSWORD)\n                smtp.send_message(msg)\n\n            st.success(f\"\u2705 Email successfully sent to {recipient}\")\n        except Exception as e:\n            st.error(f\"\u274c Failed to send email: {e}\")\n`;

  return (
    <section id="projects" className="section">
      <h2 className="section-heading">PROJECTS</h2>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {/* TODO: Define techIcons array above, or replace with actual icons */}
          {['React', 'Node.js', 'Python', 'Docker', 'AWS', 'Kubernetes', 'Streamlit', 'OpenAI', 'Twilio', 'Gmail'].concat(
            ['React', 'Node.js', 'Python', 'Docker', 'AWS', 'Kubernetes', 'Streamlit', 'OpenAI', 'Twilio', 'Gmail'],
            ['React', 'Node.js', 'Python', 'Docker', 'AWS', 'Kubernetes', 'Streamlit', 'OpenAI', 'Twilio', 'Gmail']
          ).map((icon, index) => (
            <span key={index} className="tech-icon">
              {icon}
            </span>
          ))}
        </div>
      </div>

      {!(typeof showDropdowns === "undefined" ? false : showDropdowns) ? (
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
                        {project.title === 'All-in-One Menu App' && project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowMenuCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.title === 'All-in-One Menu App' && project.output && (
                          <button className="output-btn" onClick={() => setShowMenuOutputModal(true)}>
                            Output
                          </button>
                        )}
                        {project.title === 'Gemini Chat' && project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowGeminiChatCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.title === 'Gemini Chat' && project.output && (
                          <button className="output-btn" onClick={() => setShowGeminiChatOutputModal(true)}>
                            Output
                          </button>
                        )}
                        {project.title === 'Send Email' && project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowEmailCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.title === 'Send Email' && project.output && (
                          <button className="output-btn" onClick={() => setShowEmailOutputModal(true)}>
                            Output
                          </button>
                        )}
                        {project.title === 'SMS Sender via Twilio' && project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowSmsCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.title === 'SMS Sender via Twilio' && project.output && (
                          <button className="output-btn" onClick={() => setShowSmsOutputModal(true)}>
                            Output
                          </button>
                        )}
                        {project.title === 'Python Email Sender (Gmail)' && project.viewCode && (
                          <button className="view-code-btn" onClick={() => setShowPythonGmailCodeModal(true)}>
                            View Code
                          </button>
                        )}
                        {project.title === 'Python Email Sender (Gmail)' && project.output && (
                          <button className="output-btn" onClick={() => setShowPythonGmailOutputModal(true)}>
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
      {showMenuCodeModal && (
        <div className="modal-overlay" onClick={() => setShowMenuCodeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>All-in-One Menu App - Streamlit Code</h3>
            <pre style={{ maxHeight: '400px', overflow: 'auto', background: '#222', color: '#0ff', padding: '1rem', borderRadius: '8px' }}>{menuAppCode}</pre>
            <button onClick={() => setShowMenuCodeModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showMenuOutputModal && (
        <div className="modal-overlay" onClick={() => setShowMenuOutputModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>All-in-One Menu App - Output</h3>
            <img src="/menu.png" alt="All-in-One Menu App Output" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p>This Streamlit app provides a menu-based interface for Linux, Docker, GenAI, ML, Email, WhatsApp, Calling, Messaging, Instagram, and LinkedIn features. Each feature is accessible from the sidebar menu.</p>
            <button onClick={() => setShowMenuOutputModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showGeminiChatCodeModal && (
        <div className="modal-overlay" onClick={() => setShowGeminiChatCodeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Gemini Chat - Streamlit Code</h3>
            <pre style={{ maxHeight: '400px', overflow: 'auto', background: '#222', color: '#0ff', padding: '1rem', borderRadius: '8px' }}>{geminiChatCode}</pre>
            <button onClick={() => setShowGeminiChatCodeModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showGeminiChatOutputModal && (
        <div className="modal-overlay" onClick={() => setShowGeminiChatOutputModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Gemini Chat - Output</h3>
            <img src="/llm.png" alt="Gemini Chat Output" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p>This Streamlit app lets you chat with a Gemini LLM for mental health support. Enter your question and get an AI-powered response.</p>
            <button onClick={() => setShowGeminiChatOutputModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showEmailCodeModal && (
        <div className="modal-overlay" onClick={() => setShowEmailCodeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Send Email - Streamlit Code</h3>
            <pre style={{ maxHeight: '400px', overflow: 'auto', background: '#222', color: '#0ff', padding: '1rem', borderRadius: '8px' }}>{emailSenderCode}</pre>
            <button onClick={() => setShowEmailCodeModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showEmailOutputModal && (
        <div className="modal-overlay" onClick={() => setShowEmailOutputModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Send Email - Output</h3>
            <img src="/email.png" alt="Send Email Output" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p>This Streamlit app allows you to send emails with attachments and a beautiful UI. Fill in the details, upload files, and send your message securely.</p>
            <button onClick={() => setShowEmailOutputModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showSmsCodeModal && (
        <div className="modal-overlay" onClick={() => setShowSmsCodeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>SMS Sender via Twilio - Streamlit Code</h3>
            <pre style={{ maxHeight: '400px', overflow: 'auto', background: '#222', color: '#0ff', padding: '1rem', borderRadius: '8px' }}>{smsSenderCode}</pre>
            <button onClick={() => setShowSmsCodeModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showSmsOutputModal && (
        <div className="modal-overlay" onClick={() => setShowSmsOutputModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>SMS Sender via Twilio - Output</h3>
            <img src="/msg.png" alt="SMS Sender Output" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p>This Streamlit app lets you send SMS messages using Twilio. Enter the recipient's number and your message, then send instantly.</p>
            <button onClick={() => setShowSmsOutputModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showPythonGmailCodeModal && (
        <div className="modal-overlay" onClick={() => setShowPythonGmailCodeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Python Email Sender (Gmail) - Streamlit Code</h3>
            <pre style={{ maxHeight: '400px', overflow: 'auto', background: '#222', color: '#0ff', padding: '1rem', borderRadius: '8px' }}>{pythonEmailSenderCode}</pre>
            <button onClick={() => setShowPythonGmailCodeModal(false)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
      {showPythonGmailOutputModal && (
        <div className="modal-overlay" onClick={() => setShowPythonGmailOutputModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Python Email Sender (Gmail) - Output</h3>
            <img src="/email.png" alt="Python Email Sender Output" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p>This Streamlit app allows you to send emails using your Gmail account. Enter the recipient's email, subject, and body, then send instantly using a secure app password.</p>
            <button onClick={() => setShowPythonGmailOutputModal(false)} className="close-modal-btn">Close</button>
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