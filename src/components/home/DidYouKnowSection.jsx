import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import AnimatedContent from '../ui/animated-content';

const facts = [
  {
    title: 'Viteză orbitală',
    fact: 'Sateliții de pe orbita joasă se deplasează cu aproximativ 28.000 km/h — de 25 de ori mai rapid decât un glonț!',
    source: 'NASA',
  },
  {
    title: 'Primul semnal',
    fact: 'Sputnik 1 transmitea un simplu „beep-beep" care putea fi recepționat de radioamatorii din întreaga lume.',
    source: 'ESA',
  },
  {
    title: 'Constelația GPS',
    fact: 'Sistemul GPS funcționează cu minimum 24 de sateliți, dar constelația actuală include peste 30 pentru redundanță.',
    source: 'GPS.gov',
  },
  {
    title: 'Stația Spațială',
    fact: 'ISS este cel mai mare satelit artificial, vizibilă cu ochiul liber, orbitând Pământul la fiecare 90 de minute.',
    source: 'NASA',
  },
];

export default function DidYouKnowSection() {
  return (
    <section id="home_did-you-know" className="relative py-24 overflow-visible">
      <div className="absolute inset-0 bg-space-deep" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00D4FF 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-[2400px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
            <AnimatedContent direction="up" delay={0}>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-cosmic-gold/20 rounded-xl">
                  <Lightbulb className="w-8 h-8 text-cosmic-gold" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white">
                  Știați că...?
                </h2>
              </div>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facts.map((item, index) => (
                <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative p-8 bg-space-atmosphere/20 border border-cosmic-cyan/10 rounded-xl hover:border-cosmic-cyan/30 transition-all duration-500"
                  >
                    <div className="absolute top-4 right-4">
                      <Sparkles className="w-5 h-5 text-cosmic-gold/50 group-hover:text-cosmic-gold transition-colors duration-500" />
                    </div>
                    <h3 className="font-display text-xl font-light text-cosmic-cyan mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg font-extralight text-stellar-white leading-relaxed mb-4">
                      {item.fact}
                    </p>
                    <div className="flex items-center gap-2 text-lg font-extralight text-stellar-dim">
                      <span>Sursă:</span>
                      <span className="text-cosmic-cyan">{item.source}</span>
                    </div>
                  </motion.div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 bottom-1/4 rotate-90 origin-bottom-right hidden lg:block">
        <span className="text-lg uppercase tracking-[0.3em] text-cosmic-gold/20 font-extralight">
          Fun Facts
        </span>
      </div>
    </section>
  );
}
