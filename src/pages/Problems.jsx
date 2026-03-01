import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Trash2, 
  Zap, 
  DollarSign, 
  Shield, 
  Globe, 
  Scale,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import AnimatedContent from '../components/ui/animated-content';
import Particles from '../components/ui/particles';
import CountUp from '../components/ui/count-up';
import simpleParallax from 'simple-parallax-js';

const problems = [
  {
    title: 'Deșeuri Spațiale',
    icon: Trash2,
    description: 'Peste 36.000 de obiecte mai mari de 10 cm orbiteaza Pământul, inclusiv sateliți defuncți, trepte de rachete și fragmente de coliziuni.',
    impact: 'Riscuri de coliziune pentru sateliții activi și Stația Spațială Internațională.',
    solutions: 'Misiuni de curățare (ClearSpace-1), standarde de deorbitare, design pentru deșeuri.',
    stats: { value: 36000, label: 'obiecte urmărite' },
  },
  {
    title: 'Coliziuni Orbitale',
    icon: Zap,
    description: 'Obiectele din orbită se deplasează cu 28.000 km/h. O coliziune poate genera mii de fragmente noi.',
    impact: 'Evenimentul Iridium-Cosmos din 2009 a creat peste 2.000 de fragmente urmăribile.',
    solutions: 'Manevre de evitare, urmărire radar avansată, coordonare internațională.',
    stats: { value: 2000, label: 'fragmente din 2009' },
  },
  {
    title: 'Costuri Ridicate',
    icon: DollarSign,
    description: 'Lansarea unui satelit costă între 10 și 400 milioane de dolari, limitând accesul țărilor în dezvoltare.',
    impact: 'Inegalitate în accesul la tehnologia spațială și beneficiile acesteia.',
    solutions: 'Rachete reutilizabile (SpaceX), mini-sateliți, parteneriate internaționale.',
    stats: { value: 400, label: 'milioane $ cost maxim' },
  },
  {
    title: 'Militarizarea Spațiului',
    icon: Shield,
    description: 'Testarea armelor anti-satelit (ASAT) și competiția pentru supremație spațială între puteri.',
    impact: 'Risc de conflict în spațiu, crearea de deșeuri prin teste militare.',
    solutions: 'Tratate internaționale, diplomație spațială, zone demilitarizate.',
    stats: { value: 4, label: 'țări cu capabilități ASAT' },
  },
  {
    title: 'Poluare Orbitală',
    icon: Globe,
    description: 'Mega-constelațiile (Starlink, OneWeb) adaugă mii de sateliți care afectează observațiile astronomice.',
    impact: 'Interferență cu telescoapele terestre, schimbarea cerului nocturn.',
    solutions: 'Design cu reflectanță redusă, coordonare cu astronomii, reglementări.',
    stats: { value: 12000, label: 'sateliți Starlink planificați' },
  },
  {
    title: 'Sindromul Kessler',
    icon: AlertTriangle,
    description: 'Scenariul în care coliziunile generează suficiente fragmente pentru a declanșa reacții în lanț.',
    impact: 'Anumite orbite ar putea deveni inutilizabile pentru generații.',
    solutions: 'Prevenție prin curățare activă, standarde stricte de design, monitorizare.',
    stats: { value: 100, label: 'ani pentru curățare naturală LEO' },
  },
];

export default function Problems() {
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
    <main id="problems-page">
      <section id="problems_hero" className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?search_term=space,debris,orbit,danger,collision&img_prompt=Dramatic+visualization+of+space+debris+field+around+Earth+showing+thousands+of+fragments+satellites+and+rocket+stages+orbiting+dangerously+close+together+collision+warning+concept+NASA+tracking+imagery+style&w=1920&h=1080&type=image"
            alt="Space debris visualization"
            onLoad={() => setIsLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-space-void/80 via-space-void/60 to-space-void" />
        </div>

        <div className="absolute inset-0">
          <Particles particleCount={80} color="#FF6B6B" speed={0.2} />
        </div>

        <div className="relative z-10 max-w-[2400px] mx-auto w-full pt-32">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <span className="text-lg font-extralight text-red-400 uppercase tracking-wider">
                    Provocări Actuale
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Probleme și <span className="text-gradient">Provocări</span>
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  Exploatarea spațiului vine cu responsabilități. Descoperă provocările 
                  majore ale erei spațiale și soluțiile propuse de comunitatea internațională.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="problems_list" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {problems.map((problem, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.05 * index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="h-full p-8 bg-space-atmosphere/30 border border-red-500/20 rounded-xl hover:border-red-500/40 transition-all duration-500"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-red-500/20 rounded-xl">
                            <problem.icon className="w-6 h-6 text-red-400" />
                          </div>
                          <h3 className="font-display text-xl font-light text-stellar-white">
                            {problem.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-2xl font-light text-red-400">
                            <CountUp to={problem.stats.value} duration={2000} />
                          </div>
                          <p className="text-lg font-extralight text-stellar-dim">
                            {problem.stats.label}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg font-extralight text-stellar-muted leading-relaxed mb-4">
                        {problem.description}
                      </p>

                      <div className="mb-4 p-4 bg-red-500/10 rounded-lg">
                        <p className="text-lg font-extralight text-red-300">
                          <strong className="font-normal">Impact:</strong> {problem.impact}
                        </p>
                      </div>

                      <div className="p-4 bg-cosmic-cyan/10 rounded-lg">
                        <p className="text-lg font-extralight text-cosmic-cyan">
                          <strong className="font-normal">Soluții propuse:</strong> {problem.solutions}
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

      <section id="problems_regulations" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <div className="p-8 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <Scale className="w-8 h-8 text-cosmic-cyan" />
                    <h2 className="font-display text-2xl font-light text-stellar-white">
                      Necesitatea Reglementărilor Internaționale
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-light text-cosmic-cyan mb-4">Cadrul actual:</h3>
                      <ul className="space-y-3 text-lg font-extralight text-stellar-muted">
                        <li className="flex items-start gap-2">
                          <span className="text-cosmic-cyan mt-1">•</span>
                          Tratatul Spațiului Cosmic (1967) — principii generale
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cosmic-cyan mt-1">•</span>
                          Convenția de Înregistrare (1975) — catalog de obiecte
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cosmic-cyan mt-1">•</span>
                          Ghiduri ONU pentru deșeuri (2007) — recomandări voluntare
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-cosmic-gold mb-4">Necesități viitoare:</h3>
                      <ul className="space-y-3 text-lg font-extralight text-stellar-muted">
                        <li className="flex items-start gap-2">
                          <span className="text-cosmic-gold mt-1">•</span>
                          Tratate obligatorii pentru curățarea deșeurilor
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cosmic-gold mt-1">•</span>
                          Standarde pentru design sustenabil al sateliților
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cosmic-gold mt-1">•</span>
                          Mecanisme de coordonare pentru mega-constelații
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="problems_conclusion" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="text-center">
                  <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-8">
                    Concluzie
                  </h2>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed mb-6">
                    Provocările erei spațiale nu diminuează valoarea sateliților, ci subliniază 
                    necesitatea unei abordări responsabile. Ca și în cazul altor tehnologii, 
                    beneficiile trebuie echilibrate cu gestionarea riscurilor.
                  </p>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed">
                    Aceste teme oferă oportunități pentru dezbatere în clasă despre etică, 
                    responsabilitate ecologică și cooperare internațională — competențe 
                    transversale valoroase în programa școlară.
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
