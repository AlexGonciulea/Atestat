import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Radio, 
  Cloud, 
  Navigation, 
  Shield, 
  Microscope, 
  Globe, 
  ChevronRight,
  Satellite,
  Zap
} from 'lucide-react';
import AnimatedContent from '../components/ui/animated-content';
import Particles from '../components/ui/particles';
import simpleParallax from 'simple-parallax-js';

const satelliteTypes = [
  {
    id: 'communications',
    name: 'Sateliți de Comunicații',
    icon: Radio,
    color: 'from-blue-500 to-cyan-500',
    definition: 'Sateliți proiectați pentru transmiterea semnalelor de comunicații între puncte de pe Pământ.',
    role: 'Asigură telefonie, televiziune, internet și transmisii de date la nivel global.',
    examples: ['Intelsat', 'SES Astra', 'Eutelsat', 'Telekom Vantage'],
    impact: 'Conectează miliarde de oameni, permit transmisii TV în direct și internet în zone izolate.',
    orbita: 'Geostaționar (GEO) - 35.786 km altitudine',
    details: 'Primul satelit de comunicații comerciale, Telstar 1 (1962), a realizat prima transmisie TV transatlantică. Astăzi, peste 400 de sateliți de comunicații operează în orbită geostaționar.',
  },
  {
    id: 'weather',
    name: 'Sateliți Meteorologici',
    icon: Cloud,
    color: 'from-emerald-500 to-teal-500',
    definition: 'Sateliți dedicați observării atmosferei și fenomenelor meteorologice.',
    role: 'Monitorizează norii, temperaturile, precipitațiile și evenimentele extreme.',
    examples: ['Meteosat (Europa)', 'GOES (SUA)', 'Himawari (Japonia)', 'Meteor (Rusia)'],
    impact: 'Permit prognoza meteo pe 7-10 zile și avertizări timpurii pentru uragane și tornade.',
    orbita: 'Geostaționar și polar (LEO)',
    details: 'TIROS-1 (1960) a fost primul satelit meteorologic de succes. Imaginile satelitare meteo salvează anual mii de vieți prin avertizări de furtuni.',
  },
  {
    id: 'navigation',
    name: 'Sateliți de Navigație',
    icon: Navigation,
    color: 'from-amber-500 to-orange-500',
    definition: 'Constelații de sateliți care permit determinarea precisă a poziției pe Pământ.',
    role: 'Oferă servicii de localizare, navigație și sincronizare temporală.',
    examples: ['GPS (SUA)', 'Galileo (Europa)', 'GLONASS (Rusia)', 'BeiDou (China)'],
    impact: 'Utilizate în navigație auto, aviație, transport maritim, agricultură de precizie.',
    orbita: 'Orbită medie (MEO) - ~20.000 km altitudine',
    details: 'GPS a devenit disponibil civil în 1983.Sistemul necesită minimum 4 sateliți vizibili pentru calculul poziției 3D.',
  },
  {
    id: 'military',
    name: 'Sateliți Militari',
    icon: Shield,
    color: 'from-red-500 to-rose-500',
    definition: 'Sateliți operați de forțele armate pentru recunoaștere, comunicații și alertă.',
    role: 'Supraveghere, spionaj, comunicații securizate, detectarea lansărilor de rachete.',
    examples: ['KH-11 (SUA)', 'Cosmos (Rusia)', 'Yaogan (China)', 'Ofek (Israel)'],
    impact: 'Verificarea tratatelor de dezarmare, monitorizarea conflictelor, securitate națională.',
    orbita: 'Variabile - LEO pentru recunoaștere, GEO pentru comunicații',
    details: 'Primii sateliți de spionaj foloseau cameră pe film care era recuperat fizic. Astăzi folosesc senzori digitali de înaltă rezoluție.',
  },
  {
    id: 'scientific',
    name: 'Sateliți Științifici',
    icon: Microscope,
    color: 'from-purple-500 to-violet-500',
    definition: 'Sateliți dedicați cercetării spațiului, astronomiei și fizicii.',
    role: 'Studiază universul, câmpul magnetic terestru, radiația cosmică, exoplanete.',
    examples: ['Hubble', 'James Webb', 'Chandra', 'Planck', 'LISA Pathfinder'],
    impact: 'Descoperiri fundamentale despre univers, galaxii, găuri negre, origini cosmice.',
    orbita: 'Variabile - LEO, puncte Lagrange, orbite helicentrice',
    details: 'James Webb Space Telescope (2021) poate observa galaxii formate la 100 milioane ani după Big Bang, revoluționând astrofizica.',
  },
  {
    id: 'earth-observation',
    name: 'Sateliți de Observare a Pământului',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
    definition: 'Sateliți care monitorizează suprafața terestră, oceanele și atmosfera.',
    role: 'Cartografiere, monitorizarea mediului, agricultură, gestionarea dezastrelor.',
    examples: ['Landsat', 'Sentinel (Copernicus)', 'Terra', 'MODIS', 'WorldView'],
    impact: 'Monitorizarea defrișărilor, schimbărilor climatice, recoltelor agricole, dezastrelor naturale.',
    orbita: 'Polar sincronă cu soarele (LEO) - ~700 km',
    details: 'Programul Landsat (din 1972) oferă cel mai lung record continuu de imagini satelitare ale Pământului, esențial pentru studiul schimbărilor climatice.',
  },
];

export default function Types() {
  const [activeType, setActiveType] = useState(satelliteTypes[0].id);
  const activeData = satelliteTypes.find(t => t.id === activeType);
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
    <main id="types-page">
      <section id="types_hero" className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src="https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?search_term=satellite,array,space,technology,communication&img_prompt=Array+of+different+satellite+types+floating+in+orbit+around+Earth+communication+antenna+dishes+solar+panels+reflecting+sunlight+earth+curvature+visible+below+cinematic+wide+shot+hyper+realistic+NASA+imagery+style&w=1920&h=1080&type=image"
            alt="Satellite array in orbit"
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
                  <Satellite className="w-6 h-6 text-cosmic-cyan" />
                  <span className="text-lg font-extralight text-cosmic-cyan uppercase tracking-wider">
                    Clasificare Completă
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Tipuri de <span className="text-gradient">Sateliți Artificiali</span>
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  Sateliții artificiali se clasifică în funcție de misiunea lor principală. 
                  Descoperă cele șase categorii majore și rolul lor în societatea modernă.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="types_explorer" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <div className="flex flex-wrap gap-3 mb-12">
                {satelliteTypes.map((type) => {
                  const isActive = activeType === type.id;
                  return (
                    <motion.button
                      key={type.id}
                      onClick={() => setActiveType(type.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-5 py-3 rounded-lg border transition-all duration-300 ${
                        isActive
                          ? 'bg-cosmic-cyan/20 border-cosmic-cyan text-cosmic-cyan'
                          : 'bg-space-atmosphere/30 border-cosmic-cyan/20 text-stellar-muted hover:border-cosmic-cyan/40'
                      }`}
                    >
                      <type.icon className="w-5 h-5" />
                      <span className="text-lg font-extralight">{type.name}</span>
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <div className="space-y-6">
                    <div className="p-8 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${activeData.color}`}>
                          <activeData.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-light text-stellar-white">
                            {activeData.name}
                          </h2>
                          <p className="text-lg font-extralight text-stellar-muted">
                            {activeData.orbita}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-light text-cosmic-cyan mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Definiție
                          </h3>
                          <p className="text-lg font-extralight text-stellar-muted leading-relaxed">
                            {activeData.definition}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-light text-cosmic-cyan mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Rol Principal
                          </h3>
                          <p className="text-lg font-extralight text-stellar-muted leading-relaxed">
                            {activeData.role}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-light text-cosmic-cyan mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Impact Social
                          </h3>
                          <p className="text-lg font-extralight text-stellar-muted leading-relaxed">
                            {activeData.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-8 bg-space-atmosphere/20 border border-cosmic-cyan/10 rounded-xl">
                      <h3 className="text-lg font-light text-cosmic-cyan mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Exemple Reprezentative
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {activeData.examples.map((example, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-space-atmosphere/40 border border-cosmic-cyan/20 rounded-full text-lg font-extralight text-stellar-white"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-space-atmosphere/30 to-space-void/50 border border-cosmic-cyan/20 rounded-xl">
                      <h3 className="text-lg font-light text-cosmic-gold mb-4">
                        Detalii Suplimentare
                      </h3>
                      <p className="text-lg font-extralight text-stellar-muted leading-relaxed">
                        {activeData.details}
                      </p>
                    </div>

                    <div className="p-6 bg-cosmic-cyan/10 border border-cosmic-cyan/30 rounded-xl">
                      <p className="text-lg font-extralight text-cosmic-cyan">
                        <strong className="font-normal">Legătură cu programa școlară:</strong> Acest tip de 
                        satelit ilustrează concepte din fizică (orbite, unde electromagnetice) și 
                        geografie (observarea Pământului, climă).
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section id="types_conclusion" className="relative py-24 overflow-visible">
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
                    Clasificarea sateliților după funcție ne ajută să înțelegem diversitatea 
                    aplicațiilor spațiale. Fiecare categorie răspunde unor nevoi specifice ale 
                    societății moderne, de la comunicații globale la monitorizarea mediului.
                  </p>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed">
                    Înțelegerea acestor tipuri este esențială pentru elevi, deoarece 
                    demonstrează cum știința și tehnologia rezolvă probleme reale, făcând 
                    legătura între teoria din manuale și aplicațiile practice.
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
