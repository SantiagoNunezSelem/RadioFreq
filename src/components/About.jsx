import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { lang } = useLanguage();
  const t = (es, en) => lang === 'es' ? es : en;

  return (
    <section className="about-section">
      <div>
        <div className="section-label fade-up">{t('// SOBRE EL CURSO', '// ABOUT THE COURSE')}</div>
        <h2 className="section-title fade-up">
          <span>{t('DOMINA', 'MASTER')}</span><br />
          <span>{t('EL ', 'THE ')}</span><span className="highlight">{t('ESPECTRO', 'SPECTRUM')}</span>
        </h2>
        <p className="section-body fade-up">
          {t(
            'Una formación técnica de alto nivel diseñada para ingenieros, investigadores de seguridad y entusiastas que quieran comprender a fondo el funcionamiento de las comunicaciones inalámbricas modernas.',
            'A high-level technical training program designed for engineers, security researchers and enthusiasts who want to deeply understand how modern wireless communications work.'
          )}
        </p>
        <p className="section-body fade-up">
          {t(
            'Desde los fundamentos teóricos de la propagación electromagnética hasta la implementación práctica con hardware SDR real, este programa te llevará de la teoría a la práctica de forma progresiva y rigurosa.',
            'From the theoretical foundations of electromagnetic propagation to hands-on implementation with real SDR hardware, this program will take you from theory to practice in a progressive and rigorous way.'
          )}
        </p>
      </div>
      <div>
        <div className="highlights">
          <div className="highlight-item">
            <div className="hi-number">01</div>
            <div className="hi-content">
              <h4>{t('FUNDAMENTOS RF Y ELECTROMAGNÉTICOS', 'RF AND ELECTROMAGNETIC FUNDAMENTALS')}</h4>
              <p>{t(
                'Teoría de propagación, antenas, potencia, ganancia, atenuación y el comportamiento físico de las señales en el espectro.',
                'Propagation theory, antennas, power, gain, attenuation and the physical behavior of signals in the spectrum.'
              )}</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="hi-number">02</div>
            <div className="hi-content">
              <h4>SOFTWARE DEFINED RADIO (SDR)</h4>
              <p>{t(
                'Uso práctico de receptores RTL-SDR, HackRF, YARD Stick One. Captura, análisis y decodificación de señales con GNU Radio y SDR#.',
                'Hands-on use of RTL-SDR, HackRF, YARD Stick One receivers. Signal capture, analysis and decoding with GNU Radio and SDR#.'
              )}</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="hi-number">03</div>
            <div className="hi-content">
              <h4>{t('PROTOCOLOS INALÁMBRICOS', 'WIRELESS PROTOCOLS')}</h4>
              <p>{t(
                'Análisis en profundidad de 433 MHz, 868 MHz, 2.4 GHz, Bluetooth, Zigbee, LoRa y otros protocolos de uso masivo.',
                'In-depth analysis of 433 MHz, 868 MHz, 2.4 GHz, Bluetooth, Zigbee, LoRa and other widely-used protocols.'
              )}</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="hi-number">04</div>
            <div className="hi-content">
              <h4>{t('HARDWARE Y DISEÑO DE CIRCUITOS RF', 'RF HARDWARE AND CIRCUIT DESIGN')}</h4>
              <p>{t(
                'Diseño de etapas de amplificación, filtros, osciladores y circuitos de radiofrecuencia para aplicaciones específicas.',
                'Design of amplification stages, filters, oscillators and RF circuits for specific applications.'
              )}</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="hi-number">05</div>
            <div className="hi-content">
              <h4>{t('SEGURIDAD Y ANÁLISIS DE SEÑALES', 'SECURITY AND SIGNAL ANALYSIS')}</h4>
              <p>{t(
                'Técnicas de análisis espectral, identificación de emisiones no autorizadas, reverse engineering de protocolos propietarios.',
                'Spectral analysis techniques, unauthorized emission identification, reverse engineering of proprietary protocols.'
              )}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
