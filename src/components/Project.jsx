import { useLanguage } from '../context/LanguageContext';
import blackoutDevice from '../assets/blackout-device.png';

export default function Project() {
  const { lang } = useLanguage();
  const t = (es, en) => lang === 'es' ? es : en;

  return (
    <section className="project-section">
      <div className="project-image-wrap" data-label={t('PROYECTO FINAL', 'FINAL PROJECT')}>
        <img
          className="device-img"
          src={blackoutDevice}
          alt={t('Dispositivo inhibidor de radiofrecuencia — Blackout 1', 'Radio frequency jamming device — Blackout 1')}
        />
        <div className="image-scanlines"></div>
        <div className="device-corner tl"></div>
        <div className="device-corner tr"></div>
        <div className="device-corner bl"></div>
        <div className="device-corner br"></div>
      </div>

      <div className="project-content">
        <div className="section-label">{t('// PROYECTO FINAL DEL CURSO', '// COURSE FINAL PROJECT')}</div>
        <h2 className="section-title">
          <span>{t('CONSTRUYE TU', 'BUILD YOUR')}</span><br />
          <span>{t('PROPIO ', 'OWN ')}</span><span className="highlight">{t('DISPOSITIVO', 'DEVICE')}</span>
        </h2>
        <p
          className="section-body"
          dangerouslySetInnerHTML={{
            __html: t(
              'Como proyecto culminante del curso, guiaremos a los alumnos a través de la construcción desde cero de un <strong>dispositivo inhibidor de radiofrecuencia</strong> — una aplicación real que integra todos los conceptos aprendidos durante la formación.',
              'As the capstone project of the course, we will guide students through building from scratch a <strong>radio frequency jamming device</strong> — a real application that integrates all the concepts learned throughout the training.'
            )
          }}
        />
        <p className="section-body" style={{ marginTop: '16px' }}>
          {t(
            'Aprenderás a diseñar el circuito, seleccionar componentes, construir la PCB y programar el firmware para operar en frecuencias específicas del espectro.',
            'You will learn to design the circuit, select components, build the PCB and program the firmware to operate at specific frequencies of the spectrum.'
          )}
        </p>

        <div className="project-specs">
          <div className="spec-row">
            <div className="spec-key">{t('DISPOSITIVO', 'DEVICE')}</div>
            <div className="spec-val">BLACKOUT 1</div>
          </div>
          <div className="spec-row">
            <div className="spec-key">{t('BANDA', 'BAND')}</div>
            <div className="spec-val">2.4 GHz</div>
          </div>
          <div className="spec-row">
            <div className="spec-key">{t('HARDWARE', 'HARDWARE')}</div>
            <div className="spec-val">Transmisor + MICROCONTROLADOR</div>
          </div>
          <div className="spec-row">
            <div className="spec-key">{t('ANTENA', 'ANTENNA')}</div>
            <div className="spec-val">{t('DISEÑO PROPIO (CUSTOM)', 'CUSTOM DESIGN')}</div>
          </div>
          <div className="spec-row">
            <div className="spec-key">{t('ENCLOSURE', 'ENCLOSURE')}</div>
            <div className="spec-val">IMPRESIÓN 3D + BRASS INSERTS</div>
          </div>
          <div className="spec-row">
            <div className="spec-key">{t('FIRMWARE', 'FIRMWARE')}</div>
            <div className="spec-val">CODIGO ARDUINO</div>
          </div>
        </div>

        <div className="project-cta" id="inscripcion">
          <a className="btn-primary" href={`mailto:rdiofreq@info.com.ar?subject=${encodeURIComponent('Consulta de información - RadioFreq')}&body=${encodeURIComponent('Hola,\n\nMe gustaría obtener más información sobre el curso de RadioFrecuencia.\n\nMuchas gracias!')}`}>
            {t('INSCRIBIRSE AL CURSO', 'ENROLL IN THE COURSE')}
          </a>
        </div>
      </div>
    </section>
  );
}
