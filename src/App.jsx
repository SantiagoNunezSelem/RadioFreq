import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import About from './components/About';
import SectionDivider from './components/SectionDivider';
import Curriculum from './components/Curriculum';
import Project from './components/Project';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';

function AppContent() {
  useScrollReveal();

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <SectionDivider labelEs="PROGRAMA DE ESTUDIOS" labelEn="STUDY PROGRAM" />
      <Curriculum />
      <SectionDivider labelEs="PROYECTO FINAL" labelEn="FINAL PROJECT" style={{ paddingTop: '40px' }} />
      <Project />
      <SectionDivider labelEs="AVISO LEGAL" labelEn="LEGAL NOTICE" style={{ paddingBottom: '40px' }} />
      <Disclaimer />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
