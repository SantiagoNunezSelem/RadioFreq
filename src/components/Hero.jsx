import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FREQS = ['433 MHz — LIVE', '868 MHz — LIVE', '915 MHz — LIVE', '2.4 GHz — LIVE', '5.8 GHz — LIVE', '433 MHz — LIVE'];

export default function Hero() {
  const { lang, toggleLanguage } = useLanguage();
  const [freq, setFreq] = useState(FREQS[0]);
  const t = (es, en) => lang === 'es' ? es : en;

  useEffect(() => {
    let fi = 0;
    const interval = setInterval(() => {
      fi = (fi + 1) % FREQS.length;
      setFreq(FREQS[fi]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="signal-rings">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
      <div className="scanline"></div>

      <svg className="rf-wave-bg" viewBox="0 0 1400 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,100 Q35,20 70,100 Q105,180 140,100 Q175,20 210,100 Q245,180 280,100 Q315,20 350,100 Q385,180 420,100 Q455,20 490,100 Q525,180 560,100 Q595,20 630,100 Q665,180 700,100 Q735,20 770,100 Q805,180 840,100 Q875,20 910,100 Q945,180 980,100 Q1015,20 1050,100 Q1085,180 1120,100 Q1155,20 1190,100 Q1225,180 1260,100 Q1295,20 1330,100 Q1365,180 1400,100"
              fill="none" stroke="rgba(232,240,32,1)" strokeWidth="1.5"/>
        <path d="M0,120 Q70,40 140,120 Q210,200 280,120 Q350,40 420,120 Q490,200 560,120 Q630,40 700,120 Q770,200 840,120 Q910,40 980,120 Q1050,200 1120,120 Q1190,40 1260,120 Q1330,200 1400,120"
              fill="none" stroke="rgba(32,240,160,0.6)" strokeWidth="1"/>
      </svg>

      <div className="logo">RF<span>.</span>MASTERY</div>
      <div className="freq-indicator">{freq}</div>

      <div className="lang-switch">
        <span className={`lang-label${lang === 'es' ? ' active' : ''}`} id="label-es">ES</span>
        <div
          className={`lang-toggle${lang === 'en' ? ' en' : ''}`}
          id="langToggle"
          onClick={toggleLanguage}
        ></div>
        <span className={`lang-label${lang === 'en' ? ' active' : ''}`} id="label-en">EN</span>
      </div>

      <div className="hero-badge">
        {t('Formación Técnica Especializada', 'Specialized Technical Training')}
      </div>
      <h1 className="hero-title">
        RADIO<span className="accent-word">FREQ</span>
      </h1>
      <p
        className="hero-sub"
        dangerouslySetInnerHTML={{
          __html: t(
            'DOMINA EL ESPECTRO ELECTROMAGNÉTICO&nbsp;—&nbsp;TECNOLOGÍA RF / SDR / PROTOCOLO INALÁMBRICO',
            'MASTER THE ELECTROMAGNETIC SPECTRUM&nbsp;—&nbsp;RF / SDR / WIRELESS PROTOCOL TECHNOLOGY'
          )
        }}
      />
      <div className="hero-cta">
        <a className="btn-primary" href={`mailto:rdiofreq@info.com.ar?subject=${encodeURIComponent('Consulta de información - RadioFreq')}&body=${encodeURIComponent('Hola,\n\nMe gustaría obtener más información sobre el curso de RadioFrecuencia.\n\nMuchas gracias!')}`}>
          {t('Inscribirse ahora', 'Enroll now')}
        </a>
        <a href="#programa" className="btn-secondary">
          {t('Ver programa', 'View program')}</a>
      </div>
      {/*
      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
      */}

      <a 
        href={`mailto:rdiofreq@info.com.ar?subject=${encodeURIComponent('Consulta de información - RadioFreq')}&body=${encodeURIComponent('Hola,\n\nMe gustaría obtener más información sobre el curso de RadioFrecuencia.\n\nMuchas gracias!')}`}
        className="contact-button"
        title={t('Contactar por correo', 'Contact by email')}
      >
        ✉
      </a>
    </section>
  );
}
