import { useLanguage } from '../context/LanguageContext';

const modules = [
  {
    tagEs: 'MÓDULO 01 — 02', tagEn: 'MODULE 01 — 02',
    titleEs: 'Fundamentos del Espectro RF', titleEn: 'RF Spectrum Fundamentals',
    descEs: 'Base teórica sólida para comprender cómo viajan las señales electromagnéticas.',
    descEn: 'Solid theoretical foundation to understand how electromagnetic signals travel.',
    topics: [
      { es: 'Espectro electromagnético y bandas de frecuencia', en: 'Electromagnetic spectrum and frequency bands' },
      { es: 'Propagación, reflexión, difracción y absorción', en: 'Propagation, reflection, diffraction and absorption' },
      { es: 'Potencia, dBm, ganancia y pérdida de trayecto', en: 'Power, dBm, gain and path loss' },
      { es: 'Tipos de modulación: AM, FM, PM, ASK, FSK, OOK', en: 'Modulation types: AM, FM, PM, ASK, FSK, OOK' },
    ],
  },
  {
    tagEs: 'MÓDULO 03 — 04', tagEn: 'MODULE 03 — 04',
    titleEs: 'Antenas y Líneas de Transmisión', titleEn: 'Antennas and Transmission Lines',
    descEs: 'Diseño y selección de antenas para cada aplicación específica.',
    descEn: 'Antenna design and selection for each specific application.',
    topics: [
      { es: 'Tipos de antena: dipolo, yagi, helicoidal, patch', en: 'Antenna types: dipole, yagi, helical, patch' },
      { es: 'Impedancia, VSWR y adaptación de impedancias', en: 'Impedance, VSWR and impedance matching' },
      { es: 'Cables coaxiales y conectores RF', en: 'Coaxial cables and RF connectors' },
      { es: 'Diseño y construcción de antenas DIY', en: 'DIY antenna design and construction' },
    ],
  },
  {
    tagEs: 'MÓDULO 05 — 06', tagEn: 'MODULE 05 — 06',
    titleEs: 'SDR: Radio Definida por Software', titleEn: 'SDR: Software Defined Radio',
    descEs: 'El laboratorio digital en tu computadora para capturar y analizar señales reales.',
    descEn: 'The digital lab on your computer to capture and analyze real signals.',
    topics: [
      { es: 'Hardware SDR: RTL-SDR, HackRF, LimeSDR', en: 'SDR Hardware: RTL-SDR, HackRF, LimeSDR' },
      { es: 'GNU Radio: diseño de bloques y signal processing', en: 'GNU Radio: block design and signal processing' },
      { es: 'SDR# y GQRX para análisis espectral', en: 'SDR# and GQRX for spectral analysis' },
      { es: 'Captura, grabación y replay de señales', en: 'Signal capture, recording and replay' },
    ],
  },
  {
    tagEs: 'MÓDULO 07 — 08', tagEn: 'MODULE 07 — 08',
    titleEs: 'Protocolos Sub-GHz y 2.4 GHz', titleEn: 'Sub-GHz and 2.4 GHz Protocols',
    descEs: 'Análisis práctico de los protocolos más utilizados en IoT, domótica y control remoto.',
    descEn: 'Practical analysis of the most widely used protocols in IoT, home automation and remote control.',
    topics: [
      { es: '433/868 MHz: mandos, sensores y alarmas', en: '433/868 MHz: remotes, sensors and alarms' },
      { es: 'LoRa / LoRaWAN para redes IoT de largo alcance', en: 'LoRa / LoRaWAN for long-range IoT networks' },
      { es: 'Bluetooth / BLE: sniffing y análisis', en: 'Bluetooth / BLE: sniffing and analysis' },
      { es: 'Zigbee y Z-Wave en redes domóticas', en: 'Zigbee and Z-Wave in home automation networks' },
    ],
  },
  {
    tagEs: 'MÓDULO 09 — 10', tagEn: 'MODULE 09 — 10',
    titleEs: 'Circuitos RF y Hardware', titleEn: 'RF Circuits and Hardware',
    descEs: 'De la simulación al protoboard: diseño e implementación de circuitos RF funcionales.',
    descEn: 'From simulation to protoboard: design and implementation of functional RF circuits.',
    topics: [
      { es: 'Amplificadores de RF: LNA, PA y etapas intermedias', en: 'RF amplifiers: LNA, PA and intermediate stages' },
      { es: 'Filtros pasabanda, pasa-altos y pasa-bajos para RF', en: 'Bandpass, high-pass and low-pass filters for RF' },
      { es: 'Mezcladores, osciladores y sintetizadores de frecuencia', en: 'Mixers, oscillators and frequency synthesizers' },
      { es: 'Microcontroladores con módulos RF (CC1101, SX1278)', en: 'Microcontrollers with RF modules (CC1101, SX1278)' },
    ],
  },
  {
    tagEs: 'MÓDULO 11 — 12', tagEn: 'MODULE 11 — 12',
    titleEs: 'Análisis de Seguridad RF', titleEn: 'RF Security Analysis',
    descEs: 'Metodologías profesionales para evaluación de seguridad en sistemas inalámbricos.',
    descEn: 'Professional methodologies for security assessment of wireless systems.',
    topics: [
      { es: 'Identificación y fingerprinting de emisores', en: 'Emitter identification and fingerprinting' },
      { es: 'Reverse engineering de protocolos propietarios', en: 'Reverse engineering of proprietary protocols' },
      { es: 'Detección de emisiones no autorizadas (TSCM básico)', en: 'Detection of unauthorized emissions (basic TSCM)' },
      { es: 'Marco legal y ético en análisis RF', en: 'Legal and ethical framework in RF analysis' },
    ],
  },
];

export default function Curriculum() {
  const { lang } = useLanguage();
  const t = (es, en) => lang === 'es' ? es : en;

  return (
    <section className="curriculum-section" id="programa">
      <div className="curriculum-inner">
        <div className="curriculum-header">
          <div className="section-label fade-up">{t('// TEMARIO COMPLETO', '// FULL SYLLABUS')}</div>
          <h2 className="section-title fade-up">
            <span>{t('LO QUE ', "WHAT YOU'LL ")}</span>
            <span className="highlight">{t('APRENDERÁS', 'LEARN')}</span>
          </h2>
        </div>
        <div className="modules-grid">
          {modules.map((mod, i) => (
            <div className="module-card" key={i}>
              <div className="module-tag">{t(mod.tagEs, mod.tagEn)}</div>
              <div className="module-title">{t(mod.titleEs, mod.titleEn)}</div>
              <p className="module-desc">{t(mod.descEs, mod.descEn)}</p>
              <ul className="module-topics">
                {mod.topics.map((topic, j) => (
                  <li key={j}>{t(topic.es, topic.en)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
