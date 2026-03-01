import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Orbit, 
  Sun, 
  Radio, 
  Cpu, 
  Fuel, 
  Building2,
  ArrowRight,
  CircleDot
} from 'lucide-react';
import AnimatedContent from '../components/ui/animated-content';
import Particles from '../components/ui/particles';
import simpleParallax from 'simple-parallax-js';

const orbits = [
  {
    name: 'LEO - Orbita Joasă',
    altitude: '160 - 2.000 km',
    period: '90 - 120 minute',
    description: 'Cea mai apropiată de Pământ, folosită pentru observarea terestră, ISS și constelații de internet.',
    examples: ['ISS', 'Starlink', 'Landsat'],
    advantages: 'Latență mică, imagine de înaltă rezoluție, lansare mai ieftină.',
    color: 'cyan',
  },
  {
    name: 'MEO - Orbita Medie',
    altitude: '2.000 - 35.786 km',
    period: '2 - 24 ore',
    description: 'Zonă intermediară, ideală pentru constelații de navigație care necesită acoperire globală.',
    examples: ['GPS', 'Galileo', 'GLONASS'],
    advantages: 'Acoperire globală cu mai puțini sateliți decât LEO, vizibilitate bună.',
    color: 'blue',
  },
  {
    name: 'GEO - Orbita Geostaționar',
    altitude: '35.786 km',
    period: '24 ore (sincron cu Pământul)',
    description: 'Satelitul pare staționar deasupra unui punct. Ideal pentru comunicații și meteo.',
    examples: ['Meteosat', 'SES Astra', 'GOES'],
    advantages: 'Poziție fixă, acoperire continuă a unei regiuni, antene terestre fixe.',
    color: 'purple',
  },
];

const components = [
  {
    name: 'Panouri Solare',
    icon: Sun,
    description: 'Convertesc lumina solară în energie electrică. Pot genera de la sute de wați la zeci de kilowați.',
    function: 'Alimentare energie',
  },
  {
    name: 'Antene de Comunicație',
    icon: Radio,
    description: 'Transmit și recepționează semnale de la/către stațiile terestre sau alți sateliți.',
    function: 'Transmisie date',
  },
  {
    name: 'Computer de Bord',
    icon: Cpu,
    description: 'Controlează toate sistemele: orientare, comunicații, senzori, executarea comenzilor.',
    function: 'Control central',
  },
  {
    name: 'Sistem de Propulsie',
    icon: Fuel,
    description: 'Permite ajustări de orbită și orientare. Include propulsoare chimice sau ionice.',
    function: 'Manevrare',
  },
];

export default function HowItWorks() {
  const heroImageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!heroImageRef.current || !isLoaded) return;
    let parallaxInstance = null;

    const timeout = setTimeout(() => {
      try {
        parallaxInstance = new simpleParallax(heroImageRef.current, {
          scale: 1.8,
          orientation: 'down',
          overflow: false,
          delay: 0.4,
        });
      } catch (e) {}
    }, 100);

    return () => {
      clearTimeout(timeout);
      try {
        if (parallaxInstance) parallaxInstance.destroy();
      } catch (e) {}
    };
  }, [isLoaded]);

  return (
    <main id="how-it-works-page">
      <section id="works_hero" className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src="https://images.pexels.com/photos/256379/pexels-photo-256379.jpeg?search_term=satellite,technology,orbit,engineering,space&img_prompt=Detailed+technical+view+of+satellite+in+orbit+showing+solar+panels+fully+deployed+antenna+arrays+extended+Earth+reflection+on+metallic+surfaces+engineering+precision+visible+cinematic+NASA+documentation+style&w=1920&h=1080&type=image"
            alt="Satellite technical view"
            onLoad={() => setIsLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-space-void/80 via-space-void/60 to-space-void" />
        </div>

        <div className="absolute inset-0">
          <Particles particleCount={50} color="#00D4FF" speed={0.15} />
        </div>

        <div className="relative z-10 max-w-[2400px] mx-auto w-full pt-32">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <Orbit className="w-6 h-6 text-cosmic-cyan" />
                  <span className="text-lg font-extralight text-cosmic-cyan uppercase tracking-wider">
                    Ghid Tehnic
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Cum <span className="text-gradient">Funcționează</span> un Satelit?
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  Înțelege mecanica orbitării, componentele esențiale și modul în care 
                  sateliții comunică cu Pământul. Explicații accesibile cu termeni definiți.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="works_orbits" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-6">
                  Tipuri de <span className="text-gradient">Orbite</span>
                </h2>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed mb-12 max-w-3xl">
                  Orbita este traiectoria pe care un satelit o urmează în jurul Pământului. 
                  Alegerea orbitei depinde de misiunea satelitului.
                </p>
              </AnimatedContent>

              <div className="relative mb-16">
                <div className="flex justify-center items-center py-12">
                  <div className="relative w-80 h-80">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cosmic-blue to-cosmic-cyan rounded-full shadow-lg shadow-cosmic-cyan/30" />
                    </div>
                    {orbits.map((orbit, index) => {
                      const sizes = ['w-40 h-40', 'w-56 h-56', 'w-72 h-72'];
                      const colors = ['border-cosmic-cyan', 'border-cosmic-blue', 'border-purple-500'];
                      return (
                        <motion.div
                          key={index}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30 + index * 15, repeat: Infinity, ease: 'linear' }}
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${sizes[index]} border ${colors[index]} rounded-full opacity-40`}
                        >
                          <motion.div
                            className={`absolute -top-2 left-1/2 w-4 h-4 bg-${orbit.color}-500 rounded-full shadow-lg`}
                            style={{ boxShadow: `0 0 10px var(--tw-shadow-color)` }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="absolute top-4 right-4 hidden lg:block">
                  <div className="space-y-2">
                    {orbits.map((orbit, index) => (
                      <div key={index} className="flex items-center gap-2 text-lg font-extralight text-stellar-muted">
                        <div className={`w-3 h-3 rounded-full bg-${orbit.color}-500`} />
                        {orbit.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {orbits.map((orbit, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="h-full p-6 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <CircleDot className={`w-6 h-6 text-${orbit.color}-500`} />
                        <h3 className="font-display text-xl font-light text-stellar-white">
                          {orbit.name}
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-lg font-extralight text-stellar-dim">Altitudine</p>
                          <p className="text-lg font-light text-cosmic-cyan">{orbit.altitude}</p>
                        </div>
                        <div>
                          <p className="text-lg font-extralight text-stellar-dim">Perioadă</p>
                          <p className="text-lg font-light text-cosmic-cyan">{orbit.period}</p>
                        </div>
                      </div>

                      <p className="text-lg font-extralight text-stellar-muted leading-relaxed mb-4">
                        {orbit.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {orbit.examples.map((ex, i) => (
                          <span key={i} className="px-3 py-1 bg-space-atmosphere/50 rounded-full text-lg font-extralight text-stellar-white">
                            {ex}
                          </span>
                        ))}
                      </div>

                      <p className="text-lg font-extralight text-cosmic-gold">
                        <strong className="font-normal">Avantaje:</strong> {orbit.advantages}
                      </p>
                    </motion.div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works_components" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-6">
                  Componente <span className="text-gradient">Principale</span>
                </h2>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed mb-12 max-w-3xl">
                  Un satelit este format din mai multe subsisteme esențiale care lucrează 
                  împreună pentru îndeplinirea misiunii.
                </p>
              </AnimatedContent>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {components.map((comp, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex gap-6 p-6 bg-space-atmosphere/20 border border-cosmic-cyan/10 rounded-xl hover:border-cosmic-cyan/30 transition-all duration-500"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-cosmic-cyan/20 rounded-xl flex items-center justify-center">
                        <comp.icon className="w-8 h-8 text-cosmic-cyan" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-display text-xl font-light text-stellar-white">
                            {comp.name}
                          </h3>
                          <span className="px-2 py-0.5 bg-cosmic-cyan/20 rounded text-lg font-extralight text-cosmic-cyan">
                            {comp.function}
                          </span>
                        </div>
                        <p className="text-lg font-extralight text-stellar-muted leading-relaxed">
                          {comp.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works_transmission" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-space-void to-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-6">
                  Transmiterea <span className="text-gradient">Semnalului</span>
                </h2>
              </AnimatedContent>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                <AnimatedContent direction="up" delay={0.1}>
                  <div className="text-center p-8 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl">
                    <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-cyan/20 rounded-full flex items-center justify-center">
                      <Radio className="w-10 h-10 text-cosmic-cyan" />
                    </div>
                    <h3 className="font-display text-xl font-light text-stellar-white mb-4">
                      1. Uplink
                    </h3>
                    <p className="text-lg font-extralight text-stellar-muted">
                      Stația terestră transmite comenzi și date către satelit folosind 
                      frecvențe radio specifice.
                    </p>
                  </div>
                </AnimatedContent>

                <AnimatedContent direction="up" delay={0.2}>
                  <div className="text-center p-8 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl">
                    <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-gold/20 rounded-full flex items-center justify-center">
                      <Cpu className="w-10 h-10 text-cosmic-gold" />
                    </div>
                    <h3 className="font-display text-xl font-light text-stellar-white mb-4">
                      2. Procesare
                    </h3>
                    <p className="text-lg font-extralight text-stellar-muted">
                      Satelitul primește semnalul, îl procesează și pregătește răspunsul 
                      sau retransmisia.
                    </p>
                  </div>
                </AnimatedContent>

                <AnimatedContent direction="up" delay={0.3}>
                  <div className="text-center p-8 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl">
                    <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-blue/20 rounded-full flex items-center justify-center">
                      <Building2 className="w-10 h-10 text-cosmic-blue" />
                    </div>
                    <h3 className="font-display text-xl font-light text-stellar-white mb-4">
                      3. Downlink
                    </h3>
                    <p className="text-lg font-extralight text-stellar-muted">
                      Satelitul transmite date înapoi către Pământ, către stații 
                      terestre sau direct utilizatorilor.
                    </p>
                  </div>
                </AnimatedContent>
              </div>

              <AnimatedContent direction="up" delay={0.4}>
                <div className="mt-12 p-8 bg-cosmic-cyan/10 border border-cosmic-cyan/30 rounded-xl">
                  <h3 className="font-display text-xl font-light text-cosmic-cyan mb-4 flex items-center gap-3">
                    <Building2 className="w-6 h-6" />
                    Rolul Stațiilor Terestre
                  </h3>
                  <p className="text-lg font-extralight text-stellar-muted leading-relaxed">
                    Stațiile terestre sunt infrastructura de pe Pământ care comunică cu sateliții. 
                    Ele includ antene parabolice mari, sisteme de tracking pentru urmărirea 
                    sateliților pe orbită, și centre de control care monitorizează starea 
                    sateliților și emit comenzi. Exemple: Centrul de Control ESA din Darmstadt 
                    (Germania), Rețeaua Deep Space Network a NASA.
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="works_conclusion" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="text-center">
                  <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-8">
                    Concluzie
                  </h2>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed mb-6">
                    Funcționarea unui satelit implică principii fundamentale din fizică: 
                    mecanică orbitală (legile lui Kepler), unde electromagnetice 
                    (comunicații), conversie fotoelectrică (panouri solare) și termodinamică 
                    (gestionarea căldurii în vid).
                  </p>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed">
                    Aceste concepte sunt studiate în programa de fizică din liceu, 
                    iar sateliții oferă exemple perfecte de aplicare practică.
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
