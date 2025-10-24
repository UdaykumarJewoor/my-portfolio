import { useEffect } from 'react';
import Navigation from '@/components/Portfolio/Navigation';
import HeroSection from '@/components/Portfolio/HeroSection';
import AboutSection from '@/components/Portfolio/AboutSection';
import EducationSection from '@/components/Portfolio/EducationSection';
import ExperienceSection from '@/components/Portfolio/ExperienceSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import SkillsSection from '@/components/Portfolio/SkillsSection';
import ContactSection from '@/components/Portfolio/ContactSection';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior to the html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
