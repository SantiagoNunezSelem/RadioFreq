import { useLanguage } from '../context/LanguageContext';

export default function StatsStrip() {
  const { lang } = useLanguage();
  const t = (es, en) => lang === 'es' ? es : en;

  return (
    <div className="stats-strip">
      <div className="stat">
        <div className="stat-num">12</div>
        <div className="stat-label">{t('MÓDULOS', 'MODULES')}</div>
      </div>
      <div className="stat">
        <div className="stat-num">60+</div>
        <div className="stat-label">{t('HORAS DE CONTENIDO', 'HOURS OF CONTENT')}</div>
      </div>
      <div className="stat">
        <div className="stat-num">SDR</div>
        <div className="stat-label">{t('RADIO DEFINIDA POR SOFTWARE', 'SOFTWARE DEFINED RADIO')}</div>
      </div>
      <div className="stat">
        <div className="stat-num">100%</div>
        <div className="stat-label">{t('ORIENTADO A LA PRÁCTICA', 'HANDS-ON FOCUSED')}</div>
      </div>
      <div className="stat">
        <div className="stat-num">1</div>
        <div className="stat-label">{t('PROYECTO FINAL REAL', 'REAL FINAL PROJECT')}</div>
      </div>
    </div>
  );
}
