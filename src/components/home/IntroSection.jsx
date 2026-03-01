import React from 'react';
import { motion } from 'motion/react';
import { Satellite, Radio, Globe, Zap } from 'lucide-react';
import AnimatedContent from '../ui/animated-content';
import CountUp from '../ui/count-up';

const stats = [
  { value: 8000, suffix: '+', label: 'Sateliți activi', icon: Satellite },
  { value: 60, suffix: '+', label: 'Ani de explorare', icon: Radio },
  { value: 100, suffix: '+', label: 'Țări participante', icon: Globe },
  { value: 24, suffix: '/7', label: 'Monitorizare continuă', icon: Zap },
];

export default function IntroSection() {
  return (
    <section id="home_intro" className="relative py-24 overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #00D4FF 0%, transparent 70%)',
          clipPath: 'ellipse(80% 60% at 100% 0%)',
        }}
      />

      <div className="relative max-w-[2400px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
            <AnimatedContent direction="up" delay={0}>
              <div className="max-w-3xl mb-16">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-stellar-white mb-8">
                  Ce este un <span className="text-gradient">satelit artificial</span>?
                </h2>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed mb-6">
                  Un satelit artificial este un obiect construit de om, plasat pe orbită în jurul 
                  Pământului sau al altui corp ceresc. Spre deosebire de sateliții naturali precum Luna, 
                  sateliții artificiali sunt proiectați pentru misiuni specifice: comunicații, observarea 
                  Pământului, navigație sau cercetare științifică.
                </p>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed">
                  Primul satelit artificial, <strong className="text-cosmic-cyan font-normal">Sputnik 1</strong>, 
                  a fost lansat de Uniunea Sovietică la 4 octombrie 1957, marcând începutul erei spațiale. 
                  Astăzi, mii de sateliți înconjoară planeta noastră, oferind servicii esențiale pentru 
                  viața modernă.
                </p>
              </div>
            </AnimatedContent>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative p-6 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-lg backdrop-blur-sm group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cosmic-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    <stat.icon className="w-8 h-8 text-cosmic-cyan mb-4" />
                    <div className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-2">
                      <CountUp to={stat.value} duration={2000} />
                      <span className="text-cosmic-cyan">{stat.suffix}</span>
                    </div>
                    <p className="text-lg font-extralight text-stellar-muted">
                      {stat.label}
                    </p>
                  </motion.div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="w-48 h-48 border border-cosmic-cyan/20 rounded-full flex items-center justify-center"
        >
          <div className="w-32 h-32 border border-cosmic-cyan/30 rounded-full flex items-center justify-center">
            <Satellite className="w-8 h-8 text-cosmic-cyan" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
