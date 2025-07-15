import React, { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage';
import CodeLogoPage from './components/CodeLogoPage';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'logo' | 'main'>('welcome');
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage('logo');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'blog', 'projects', 'experience', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (currentPage === 'welcome') {
    return <WelcomePage />;
  }

  if (currentPage === 'logo') {
    return <CodeLogoPage onLogoClick={() => setCurrentPage('main')} />;
  }

  return (
    <div className="portfolio-container">
      <div 
        className="custom-cursor"
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />
      
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <BlogSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificatesSection />
      </main>
      <ContactSection />
    </div>
  );
}

export default App;