import { useLanguage } from '../context/LanguageContext';

const DISCLAIMER_ES = `Este curso y todos sus contenidos — incluyendo el proyecto final de construcción de dispositivos de radiofrecuencia — están diseñados <strong style="color:rgba(240,240,240,0.65);">exclusivamente con fines educativos, de investigación y comprensión técnica</strong> del espectro electromagnético.<br><br>La operación, uso o despliegue de dispositivos inhibidores de señal de radiofrecuencia (jammers) en espacios públicos o privados <strong style="color:rgba(240,240,240,0.65);">puede estar prohibida o severamente regulada por las leyes de telecomunicaciones de cada país</strong>. En Argentina, la República de Panamá, España, México, Colombia y la mayoría de jurisdicciones, el uso no autorizado de estos dispositivos puede constituir un delito administrativo o penal.<br><br>El contenido del curso se enmarca en el ámbito del <strong style="color:rgba(240,240,240,0.65);">estudio técnico, la investigación en seguridad (security research) y la auditoría en entornos autorizados</strong>. Los instructores, organizadores y creadores del curso no se hacen responsables del uso indebido, ilícito o no autorizado de los conocimientos y técnicas aquí impartidos por parte de los alumnos.<br><br>Al inscribirte en este curso, aceptas utilizar los conocimientos adquiridos de manera responsable, ética y dentro del marco legal vigente en tu jurisdicción.`;

const DISCLAIMER_EN = `This course and all its contents — including the final project of building radio frequency devices — are designed <strong style="color:rgba(240,240,240,0.65);">exclusively for educational, research and technical understanding purposes</strong> of the electromagnetic spectrum.<br><br>The operation, use or deployment of radio frequency jamming devices in public or private spaces <strong style="color:rgba(240,240,240,0.65);">may be prohibited or severely regulated by the telecommunications laws of each country</strong>. In Argentina, Panama, Spain, Mexico, Colombia and most jurisdictions, the unauthorized use of these devices may constitute an administrative or criminal offense.<br><br>The course content falls within the scope of <strong style="color:rgba(240,240,240,0.65);">technical study, security research and auditing in authorized environments</strong>. The instructors, organizers and creators of the course take no responsibility for the improper, unlawful or unauthorized use of the knowledge and techniques taught here by students.<br><br>By enrolling in this course, you agree to use the acquired knowledge responsibly, ethically and within the legal framework in force in your jurisdiction.`;

export default function Disclaimer() {
  const { lang } = useLanguage();
  const t = (es, en) => lang === 'es' ? es : en;

  return (
    <section className="disclaimer-section">
      <div className="disclaimer-inner fade-up">
        <div className="disclaimer-header">
          <div className="disclaimer-icon">!</div>
          <div className="disclaimer-title">
            {t('DESCARGO DE RESPONSABILIDAD — USO EDUCATIVO', 'DISCLAIMER — EDUCATIONAL USE')}
          </div>
        </div>
        <p
          className="disclaimer-body"
          dangerouslySetInnerHTML={{ __html: t(DISCLAIMER_ES, DISCLAIMER_EN) }}
        />
      </div>
    </section>
  );
}
