import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  History, 
  Layers, 
  Settings, 
  Globe, 
  AlertTriangle, 
  Rocket, 
  Image, 
  BookOpen,
  ArrowRight 
} from 'lucide-react';
import AnimatedContent from '../ui/animated-content';

const pages = [
  {
    title: 'Istoria Sateliților',
    description: 'De la Sputnik 1 la constelațiile moderne — o călătorie prin 60+ ani de explorare spațială.',
    icon: History,
    path: '/istorie',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Tipuri de Sateliți',
    description: 'Comunicații, navigație, meteorologie, observare — descoperă diversitatea sateliților.',
    icon: Layers,
    path: '/tipuri',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Cum Funcționează',
    description: 'Orbite, componente, transmisie de date — înțelege tehnologia din spatele sateliților.',
    icon: Settings,
    path: '/functionare',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Utilizare Cotidiană',
    description: 'GPS, internet, meteo, televiziune — sateliții în viața de zi cu zi.',
    icon: Globe,
    path: '/utilizare',
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Provocări Actuale',
    description: 'Deșeuri spațiale, sindromul Kessler, reglementări — problemele erei spațiale.',
    icon: AlertTriangle,
    path: '/probleme',
    color: 'from-red-500/20 to-rose-500/20',
  },
  {
    title: 'Viitorul Sateliților',
    description: 'CubeSats, internet global, AI la bord — ce ne rezervă viitorul.',
    icon: Rocket,
    path: '/viitor',
    color: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    title: 'Galerie Multimedia',
    description: 'Imagini, infografice și videoclipuri educaționale despre sateliți.',
    icon: Image,
    path: '/galerie',
    color: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    title: 'Bibliografie',
    description: 'Surse verificate: NASA, ESA, publicații academice și manuale școlare.',
    icon: BookOpen,
    path: '/bibliografie',
    color: 'from-slate-500/20 to-gray-500/20',
  },
];

export default function NavigationSection() {
  return (
    <section id="home_navigation" className="relative py-24 overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-space-void to-space-deep" />

      <div className="relative max-w-[2400px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
            <AnimatedContent direction="up" delay={0}>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-stellar-white mb-6">
                  Explorează <span className="text-gradient">toate subiectele</span>
                </h2>
                <p className="text-xl font-extralight text-stellar-muted max-w-2xl mx-auto">
                  Navighează prin secțiunile site-ului pentru a descoperi informații complete 
                  despre sateliții artificiali.
                </p>
              </div>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pages.map((page, index) => (
                <AnimatedContent key={index} direction="up" delay={0.05 * index}>
                  <Link to={page.path}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative h-full p-6 bg-space-atmosphere/20 border border-cosmic-cyan/10 rounded-xl hover:border-cosmic-cyan/30 transition-all duration-500 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <page.icon className="w-8 h-8 text-cosmic-cyan" />
                          <ArrowRight className="w-5 h-5 text-stellar-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500" />
                        </div>
                        <h3 className="font-display text-xl font-light text-stellar-white mb-3 group-hover:text-cosmic-cyan transition-colors duration-500">
                          {page.title}
                        </h3>
                        <p className="text-lg font-extralight text-stellar-muted leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
