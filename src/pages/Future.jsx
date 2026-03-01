import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Box, 
  Wifi, 
  Brain, 
  Moon,
  Sparkles,
  ArrowRight,
  Cpu
} from 'lucide-react';
import AnimatedContent from '../components/ui/animated-content';
import Particles from '../components/ui/particles';
import simpleParallax from 'simple-parallax-js';

const futureTrends = [
  {
    title: 'Mini-Sateliți și CubeSats',
    icon: Box,
    description: 'Sateliți miniaturizați (1-10 kg) produși în serie, lansați în grupuri mari. Democratizează accesul la spațiu.',
    timeline: '2024-2030',
    examples: ['Planet Labs - 200+ CubeSats pentru imagini zilnice ale Pământului', 'Swarm Technologies - IoT global'],
    impact: 'Universitățile și startup-urile pot lansa propriii sateliți cu bugete reduse.',
  },
  {
    title: 'Internet Global prin Satelit',
    icon: Wifi,
    description: 'Mega-constelații care oferă internet de mare viteză oriunde pe planetă, eliminând zonele albe.',
    timeline: '2024-2035',
    examples: ['Starlink (SpaceX) - 4.000+ sateliți activi', 'Project Kuiper (Amazon)', 'OneWeb'],
    impact: 'Conectarea ultimului miliard de oameni fără acces la internet.',
  },
  {
    title: 'Inteligență Artificială la Bord',
    icon: Brain,
    description: 'Sateliți care procesează date direct în spațiu, reducând latența și volumul de transmisie.',
    timeline: '2025-2035',
    examples: ['Procesare imagine AI pentru detectare incendii', 'Decizie autonomă pentru evitare coliziuni'],
    impact: 'Răspuns în timp real la dezastre, autonomie crescută.',
  },
  {
    title: 'Sateliți pentru Explorare',
    icon: Moon,
    description: 'Constelații în jurul Lunii și Marte pentru comunicații și navigație în explorarea spațiului profund.',
    timeline: '2025-2040',
    examples: ['Lunar Gateway - stația orbitală lunară', 'Mars relay satellites'],
    impact: 'Infrastructura necesară pentru prezența umană permanentă în spațiu.',
  },
  {
    title: 'Servicii în Orbită',
    icon: Cpu,
    description: 'Sateliți care pot fi reparați, realimentați sau upgradați direct în spațiu.',
    timeline: '2026-2035',
    examples: ['MEV (Mission Extension Vehicle)', 'Northrop Grumman servicing'],
    impact: 'Extinderea duratei de viață și reducerea deșeurilor spațiale.',
  },
  {
    title: 'Sateliți cu Propulsie Laser',
    icon: Sparkles,
    description: 'Propulsie prin fascicule laser de pe Pământ - sateliți fără combustibil la bord.',
    timeline: '2030-2050',
    examples: ['Breakthrough Starshot', 'Cercetări JAXA și NASA'],
    impact: 'Misiuni interplanetare cu sateliți ultraușori.',
  },
];

export default function Future() {
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
    <main id="future-page">
      <section id="future_hero" className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src="https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?search_term=future,space,technology,innovation,cosmos&img_prompt=Futuristic+space+station+concept+with+advanced+satellite+arrays+orbiting+Earth+holographic+displays+sleek+design+next+generation+technology+cinematic+concept+art+style+ultra+detailed&w=1920&h=1080&type=image"
            alt="Future space technology"
            onLoad={() => setIsLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-space-void/80 via-space-void/60 to-space-void" />
        </div>

        <div className="absolute inset-0">
          <Particles particleCount={60} color="#A855F7" speed={0.2} />
        </div>

        <div className="relative z-10 max-w-[2400px] mx-auto w-full pt-32">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-6 h-6 text-purple-400" />
                  <span className="text-lg font-extralight text-purple-400 uppercase tracking-wider">
                    Tendințe și Prognoze
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Viitorul <span className="text-gradient">Sateliților Artificiali</span>
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  De la CubeSats la sateliți cu AI și explorarea Lunii — descoperă ce ne 
                  rezervă următorii 10-30 de ani în tehnologia spațială.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="future_trends" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-12">
                  Tendințe <span className="text-gradient">Principale</span>
                </h2>
              </AnimatedContent>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {futureTrends.map((trend, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.05 * index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="h-full p-8 bg-space-atmosphere/30 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-500"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-purple-500/20 rounded-xl">
                            <trend.icon className="w-6 h-6 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-light text-stellar-white">
                              {trend.title}
                            </h3>
                            <span className="text-lg font-extralight text-purple-400">
                              {trend.timeline}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg font-extralight text-stellar-muted leading-relaxed mb-6">
                        {trend.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-lg font-light text-stellar-dim mb-2">Exemple actuale:</p>
                        <ul className="space-y-2">
                          {trend.examples.map((ex, i) => (
                            <li key={i} className="text-lg font-extralight text-stellar-muted flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-cosmic-cyan mt-1 flex-shrink-0" />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-cosmic-cyan/10 rounded-lg">
                        <p className="text-lg font-extralight text-cosmic-cyan">
                          <strong className="font-normal">Impact preconizat:</strong> {trend.impact}
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

      <section id="future_vision" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <div className="p-8 bg-gradient-to-br from-purple-500/20 to-cosmic-cyan/20 border border-purple-500/30 rounded-xl">
                  <h2 className="font-display text-2xl font-light text-stellar-white mb-6 text-center">
                    Viziunea pentru 2050
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="font-display text-4xl font-light text-cosmic-cyan mb-2">100.000+</div>
                      <p className="text-lg font-extralight text-stellar-muted">Sateliți în orbită</p>
                    </div>
                    <div>
                      <div className="font-display text-4xl font-light text-cosmic-cyan mb-2">100%</div>
                      <p className="text-lg font-extralight text-stellar-muted">Conectivitate globală</p>
                    </div>
                    <div>
                      <div className="font-display text-4xl font-light text-cosmic-cyan mb-2">Lunar</div>
                      <p className="text-lg font-extralight text-stellar-muted">Infrastructură permanentă</p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="future_conclusion" className="relative py-24 overflow-visible">
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
                    Viitorul sateliților este strâns legat de progresele în miniaturizare, 
                    inteligență artificială și reducerea costurilor de lansare. Aceste 
                    dezvoltări vor transforma modul în care interacționăm cu spațiul cosmic.
                  </p>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed">
                    Elevii de astăzi vor trăi într-o lume unde accesul la spațiu va fi 
                    mai democratic ca niciodată — inspirație pentru cariere în STEM și 
                    industria aerospațială.
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
