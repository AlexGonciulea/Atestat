import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Satellite, ChevronDown, Sparkles, Rocket } from 'lucide-react';
import Particles from '../ui/particles';
import BlurText from '../ui/blur-text';
import simpleParallax from 'simple-parallax-js';

export default function HeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (!imageRef.current || !isLoaded) return;

    let parallaxInstance = null;

    const timeout = setTimeout(() => {
      try {
        parallaxInstance = new simpleParallax(imageRef.current, {
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
        if (parallaxInstance) {
          parallaxInstance.destroy();
        }
      } catch (e) {
        console.warn('Parallax destroy failed:', e);
      }
    };
  }, [isLoaded]);

  return (
    <section
      id="home_hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-41162.jpeg?search_term=earth,space,satellite,orbit,cosmos&img_prompt=Cinematic+wide+shot+of+Earth+from+low+orbit+with+brilliant+blue+atmosphere+edge+glowing+against+deep+space+void+sun+rising+on+horizon+creating+golden+lens+flare+satellite+solar+panels+visible+in+foreground+reflecting+sunlight+stars+twinkling+in+background+hyper+realistic+NASA+photography+style+8k+film+grain&w=1920&h=1080&type=image"
          alt="Earth from space"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-space-void/70 via-space-void/50 to-space-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-space-void/80 via-transparent to-space-void/80" />
      </div>

      <div className="absolute inset-0">
        <Particles particleCount={100} color="#00D4FF" speed={0.2} />
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cosmic-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cosmic-blue/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-[2400px] mx-auto w-full"
      >
        <div className="grid grid-cols-12">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-cosmic-cyan/10 border border-cosmic-cyan/30 rounded-full">
                <Sparkles className="w-4 h-4 text-cosmic-cyan" />
                <span className="text-lg font-extralight text-cosmic-cyan">Platformă Educațională</span>
              </div>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-stellar-white leading-tight mb-8 max-w-4xl">
              <BlurText 
                text="Sateliții Artificiali"
                delay={0.3}
                staggerDelay={0.08}
              />
              <span className="block mt-2">
                <BlurText 
                  text="Tehnologia care conectează planeta"
                  className="text-gradient"
                  delay={0.8}
                  staggerDelay={0.05}
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl font-extralight text-stellar-muted leading-relaxed mb-10 max-w-2xl"
            >
              Descoperă lumea fascinantă a sateliților artificiali — de la primul Sputnik 
              lansat în 1957, până la constelațiile moderne care înconjoară Pământul.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/istorie"
                className="group flex items-center gap-3 px-8 py-4 bg-cosmic-cyan text-space-void font-display text-lg font-light rounded-lg hover:bg-cosmic-blue transition-all duration-500 glow-cyan"
              >
                <Rocket className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                Explorează Istoria
              </Link>
              <Link
                to="/tipuri"
                className="group flex items-center gap-3 px-8 py-4 border border-cosmic-cyan/40 text-cosmic-cyan font-display text-lg font-light rounded-lg hover:bg-cosmic-cyan/10 transition-all duration-500"
              >
                <Satellite className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                Tipuri de Sateliți
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-lg font-extralight text-stellar-muted">Derulează pentru a explora</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-cosmic-cyan" />
        </motion.div>
      </motion.div>

      <div className="absolute -left-4 bottom-1/3 -rotate-90 origin-bottom-left z-10 pointer-events-none hidden lg:block">
        <span className="text-lg uppercase tracking-[0.3em] text-stellar-white/20 font-extralight">
          Space Education
        </span>
      </div>
    </section>
  );
}
