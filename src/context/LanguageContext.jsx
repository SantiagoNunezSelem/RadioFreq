import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

function detectLanguage() {
  const langs = navigator.languages || [navigator.language || 'en'];
  for (const lang of langs) {
    const code = lang.toLowerCase().split('-')[0];
    if (code === 'es') return 'es';
  }
  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    let initial = 'es';
    try {
      const stored = localStorage.getItem('rfm-lang');
      if (stored === 'es' || stored === 'en') {
        initial = stored;
      } else {
        initial = detectLanguage();
      }
    } catch {
      initial = detectLanguage();
    }
    setLang(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'es'
      ? 'RF MASTERY — Curso de Radiofrecuencia'
      : 'RF MASTERY — Radio Frequency Course';
    try { localStorage.setItem('rfm-lang', lang); } catch {}
  }, [lang]);

  const toggleLanguage = () => setLang(l => l === 'es' ? 'en' : 'es');

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
