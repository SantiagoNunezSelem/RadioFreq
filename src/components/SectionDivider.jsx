import { useLanguage } from '../context/LanguageContext';

export default function SectionDivider({ labelEs, labelEn, style }) {
  const { lang } = useLanguage();
  return (
    <div className="section-divider" style={style}>
      <div className="line"></div>
      <div className="label">{lang === 'es' ? labelEs : labelEn}</div>
      <div className="line"></div>
    </div>
  );
}
