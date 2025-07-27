import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Code } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactDetails = [
    {
      icon: <Phone size={24} />,
      label: 'Mobile',
      value: '+91 7880692270',
      link: 'tel:+917880692270'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'agrimmm24',
      link: 'https://github.com/agrimmm24'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Agrim Srivastava',
      link: 'https://www.linkedin.com/feed/'
    },
    {
      icon: <Code size={24} />,
      label: 'LeetCode',
      value: 'Agrim04',
      link: 'http://leetcode.com/u/Agrim04/'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully! (This is a demo)');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <footer id="contact" className="contact-footer">
      <div className="footer-content">
        <h2 className="footer-heading">CONTACT</h2>
        
        <div className="contact-container">
          <div className="contact-form-section animate-fade-in-left">
            <h3 className="form-title">GET IN TOUCH</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-textarea"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
          
          <div className="contact-info-section animate-fade-in-right">
            <h3 className="info-title">CONNECT WITH ME</h3>
            <div className="contact-details">
              {contactDetails.map((contact, index) => (
                <a 
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="contact-icon">
                    {contact.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Agrim Srivastava. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .contact-footer {
          background: 
            radial-gradient(circle at 30% 40%, rgba(45, 45, 45, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.5) 0%, transparent 50%),
            linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
          padding: 4rem 2rem 2rem;
          border-top: 2px solid rgba(0, 255, 255, 0.3);
          position: relative;
        }

        .contact-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(45, 45, 45, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.3) 0%, transparent 50%);
          z-index: 0;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .footer-heading {
          font-size: 3rem;
          font-weight: 700;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 3rem;
          letter-spacing: 2px;
          color: #ffffff;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .contact-form-section,
        .contact-info-section {
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .form-title,
        .info-title {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 2rem;
          letter-spacing: 1px;
          text-align: center;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          position: relative;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(128, 128, 128, 0.5);
          border-radius: 8px;
          padding: 1rem;
          color: white;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
          transition: all 0.3s ease;
          resize: none;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #00FFFF;
          box-shadow: 
            0 0 30px rgba(0, 255, 255, 0.6),
            0 0 60px rgba(0, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.1);
        }

        .submit-btn {
          background: #00FFFF;
          color: #010101;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          background: #FF00FF;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 0, 255, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(128, 128, 128, 0.5);
          border-radius: 8px;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .contact-item:hover {
          border-color: #00FFFF;
          box-shadow: 
            0 0 30px rgba(0, 255, 255, 0.6),
            0 0 60px rgba(0, 255, 255, 0.4);
          transform: translateY(-10px) scale(1.02);
          border-radius: 50px;
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(0, 255, 255, 0.2);
          border-radius: 50%;
          color: #00FFFF;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          background: rgba(255, 0, 255, 0.2);
          color: #FF00FF;
          transform: scale(1.1);
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .contact-label {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .contact-value {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 255, 255, 0.2);
        }

        .footer-bottom p {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .contact-footer {
            padding: 3rem 1rem 2rem;
          }

          .footer-heading {
            font-size: 2rem;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .form-title,
          .info-title {
            font-size: 1.3rem;
          }
          
          .form-input,
          .form-textarea {
            padding: 0.8rem;
            font-size: 0.9rem;
          }
          
          .submit-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
          
          .contact-item {
            padding: 0.8rem;
          }
          
          .contact-icon {
            width: 40px;
            height: 40px;
          }
          
          .contact-label {
            font-size: 0.8rem;
          }
          
          .contact-value {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default ContactSection;