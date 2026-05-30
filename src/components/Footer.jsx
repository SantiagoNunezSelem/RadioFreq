import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer>
      <div className="footer-logo">RF<span>.</span>MASTERY</div>
      <div className="footer-copy">
        {lang === 'es'
          ? '© 2025 RF MASTERY — CURSO DE RADIOFRECUENCIA — TODOS LOS DERECHOS RESERVADOS'
          : '© 2025 RF MASTERY — RADIO FREQUENCY COURSE — ALL RIGHTS RESERVED'
        }
      </div>
    </footer>
  );
}
