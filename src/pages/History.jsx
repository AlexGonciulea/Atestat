import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Rocket, Globe, Radio, Satellite, Star, ChevronRight } from 'lucide-react';
import AnimatedContent from '../components/ui/animated-content';
import Particles from '../components/ui/particles';
import simpleParallax from 'simple-parallax-js';

const timelineEvents = [
  {
    year: '1957',
    title: 'Sputnik 1',
    description: 'Primul satelit artificial lansat de Uniunea Sovietică la 4 octombrie. A orbit Pământul timp de 3 luni, transmițând semnale radio.',
    icon: Radio,
    significance: 'Începutul erei spațiale',
    source: 'NASA History',
  },
  {
    year: '1958',
    title: 'Explorer 1',
    description: 'Primul satelit american, a descoperit centurile de radiație Van Allen din jurul Pământului.',
    icon: Globe,
    significance: 'Prima descoperire științifică din spațiu',
    source: 'NASA',
  },
  {
    year: '1960',
    title: 'TIROS-1',
    description: 'Primul satelit meteorologic de succes, a revoluționat prognoza meteo trimițând imagini ale norilor din orbit.',
    icon: Satellite,
    significance: 'Nașterea meteorologiei spațiale',
    source: 'NOAA',
  },
  {
    year: '1962',
    title: 'Telstar 1',
    description: 'Primul satelit de comunicații comerciale, a realizat prima transmisie TV transatlantică.',
    icon: Radio,
    significance: 'Revoluția comunicațiilor globale',
    source: 'NASA',
  },
  {
    year: '1964',
    title: 'Seria COSMOS',
    description: 'URSS lansează serii de sateliți pentru cercetare științifică, observare și comunicații.',
    icon: Star,
    significance: 'Programul spațial sovietic la scară largă',
    source: 'RKA',
  },
  {
    year: '1972',
    title: 'Landsat 1',
    description: 'Primul satelit dedicat observării resurse ale Pământului, începând monitorizarea de mediu din spațiu.',
    icon: Globe,
    significance: 'Bazele teledetecției moderne',
    source: 'USGS',
  },
  {
    year: '1978',
    title: 'GPS Block I',
    description: 'Primii sateliți ai sistemului de poziționare globală, inițial pentru uz militar american.',
    icon: Satellite,
    significance: 'Fundația navigației moderne',
    source: 'GPS.gov',
  },
  {
    year: '1990',
    title: 'Hubble Space Telescope',
    description: 'Cel mai faimos telescop spațial, a revoluționat astronomia cu imagini fără precedent ale universului.',
    icon: Star,
    significance: 'Fereastra către univers',
    source: 'NASA/ESA',
  },
  {
    year: '1998',
    title: 'ISS - Primul Modul',
    description: 'Lansarea modulului Zarya marchează începutul construcției Stației Spațiale Internaționale.',
    icon: Rocket,
    significance: 'Cel mai mare satelit artificial',
    source: 'NASA',
  },
  {
    year: '2016',
    title: 'Galileo Operațional',
    description: 'Sistemul european de navigație Galileo devine operațional, oferind alternativă la GPS.',
    icon: Globe,
    significance: 'Independența navigației europene',
    source: 'ESA',
  },
  {
    year: '2019',
    title: 'Starlink',
    description: 'SpaceX începe lansarea constelației de internet Starlink, cu mii de sateliți planificați.',
    icon: Satellite,
    significance: 'Era mega-constelațiilor',
    source: 'SpaceX',
  },
  {
    year: '2024',
    title: 'Era Curentă',
    description: 'Peste 8.000 de sateliți activi orbiteaza Pământul, cu zeci de lansări lunare.',
    icon: Rocket,
    significance: 'Democratizarea accesului la spațiu',
    source: 'UCS Database',
  },
];

export default function History() {
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
      } catch (e) {
        console.warn('Parallax init failed:', e);
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      try {
        if (parallaxInstance) parallaxInstance.destroy();
      } catch (e) {}
    };
  }, [isLoaded]);

  return (
    <main id="history-page">
      <section id="history_hero" className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src="https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?search_term=sputnik,satellite,vintage,space,history&img_prompt=Black+and+white+vintage+photograph+of+early+space+program+satellite+model+with+antennas+extending+Sputnik+style+spherical+design+displayed+in+museum+setting+dramatic+lighting+historical+significance&w=1920&h=1080&type=image"
            alt="Early space satellite"
            onLoad={() => setIsLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-space-void/80 via-space-void/60 to-space-void" />
        </div>

        <div className="absolute inset-0">
          <Particles particleCount={60} color="#00D4FF" speed={0.15} />
        </div>

        <div className="relative z-10 max-w-[2400px] mx-auto w-full pt-32">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-cosmic-cyan" />
                  <span className="text-lg font-extralight text-cosmic-cyan uppercase tracking-wider">
                    Cronologie Completă
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Istoria <span className="text-gradient">Sateliților Artificiali</span>
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  De la bipul Sputnik 1 la mega-constelațiile moderne — o călătorie prin 
                  60+ ani de explorare spațială care a transformat comunicațiile, știința 
                  și viața pe Pământ.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="history_context" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <div className="max-w-3xl mb-16">
                  <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-8">
                    Contextul istoric: <span className="text-gradient">Războiul Rece</span>
                  </h2>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed mb-6">
                    Era spațială a început în contextul tensionat al Războiului Rece, când 
                    Statele Unite și Uniunea Sovietică concurau pentru supremație tehnologică. 
                    Lansarea Sputnik 1 a șocat America și a declanșat „cursa spațială".
                  </p>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed">
                    Această competiție a accelerat dramatic dezvoltarea tehnologiei spațiale, 
                    ducând la progrese care astăzi beneficiază întreaga umanitate: comunicații 
                    globale, GPS, monitorizarea climei și multe altele.
                  </p>
                </div>
              </AnimatedContent>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {[
                  { label: 'Prima lansare', value: '4 oct 1957', detail: 'Sputnik 1' },
                  { label: 'Primul american', value: '31 ian 1958', detail: 'Explorer 1' },
                  { label: 'Prima comunicație', value: '10 iul 1962', detail: 'Telstar 1' },
                ].map((item, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-6 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-lg"
                    >
                      <p className="text-lg font-extralight text-stellar-muted mb-2">{item.label}</p>
                      <p className="font-display text-2xl font-light text-cosmic-cyan mb-1">{item.value}</p>
                      <p className="text-lg font-extralight text-stellar-dim">{item.detail}</p>
                    </motion.div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history_timeline" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-16 text-center">
                  Cronologie <span className="text-gradient">Interactivă</span>
                </h2>
              </AnimatedContent>

              <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cosmic-cyan via-cosmic-blue to-cosmic-cyan" />

                <div className="space-y-12">
                  {timelineEvents.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <AnimatedContent 
                        key={index} 
                        direction={isEven ? 'left' : 'right'} 
                        delay={0.05 * index}
                      >
                        <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                          <div className={`hidden md:block w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className="inline-block p-6 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl hover:border-cosmic-cyan/40 transition-all duration-500"
                            >
                              <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                <event.icon className="w-5 h-5 text-cosmic-cyan" />
                                <span className="font-display text-lg font-light text-cosmic-gold">
                                  {event.significance}
                                </span>
                              </div>
                              <h3 className="font-display text-2xl font-light text-stellar-white mb-3">
                                {event.title}
                              </h3>
                              <p className="text-lg font-extralight text-stellar-muted leading-relaxed mb-3">
                                {event.description}
                              </p>
                              <p className="text-lg font-extralight text-stellar-dim">
                                Sursă: {event.source}
                              </p>
                            </motion.div>
                          </div>

                          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-16 h-16 bg-space-void border-2 border-cosmic-cyan rounded-full flex items-center justify-center"
                            >
                              <span className="font-display text-lg font-light text-cosmic-cyan">
                                {event.year}
                              </span>
                            </motion.div>
                          </div>

                          <div className="md:hidden ml-24 flex-1">
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className="p-6 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl"
                            >
                              <div className="flex items-center gap-3 mb-4">
                                <event.icon className="w-5 h-5 text-cosmic-cyan" />
                                <span className="font-display text-lg font-light text-cosmic-gold">
                                  {event.significance}
                                </span>
                              </div>
                              <h3 className="font-display text-xl font-light text-stellar-white mb-3">
                                {event.title}
                              </h3>
                              <p className="text-lg font-extralight text-stellar-muted leading-relaxed mb-3">
                                {event.description}
                              </p>
                              <p className="text-lg font-extralight text-stellar-dim">
                                Sursă: {event.source}
                              </p>
                            </motion.div>
                          </div>

                          <div className="hidden md:block w-1/2" />
                        </div>
                      </AnimatedContent>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history_conclusion" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="text-center">
                  <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-8">
                    Concluzie
                  </h2>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed mb-8">
                    În mai puțin de 70 de ani, omenirea a trecut de la primul bip transmis 
                    din orbită la o constelație de mii de sateliți care fac posibilă viața 
                    modernă. Această evoluție rapidă demonstrează capacitatea umană de inovație 
                    și adaptare.
                  </p>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed">
                    Istoria sateliților artificiali este strâns legată de programa școlară 
                    de fizică (mecanica orbitală, unde electromagnetice) și istorie (Războiul Rece, 
                    cooperarea internațională), oferind exemple concrete ale aplicării cunoștințelor 
                    teoretice.
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
