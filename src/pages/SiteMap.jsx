import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Map, 
  Home, 
  History, 
  Layers, 
  Settings, 
  Globe, 
  AlertTriangle, 
  Rocket, 
  Image, 
  BookOpen,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import AnimatedContent from '../components/ui/animated-content';

const pages = [
  {
    title: 'Pagina Principală',
    path: '/',
    icon: Home,
    description: 'Introducere în lumea sateliților artificiali, definiții și prezentare generală.',
    sections: ['Ce este un satelit', 'Știați că...?', 'Navigare rapidă', 'Agenții spațiale'],
  },
  {
    title: 'Istoria Sateliților',
    path: '/istorie',
    icon: History,
    description: 'Cronologie completă de la Sputnik 1 (1957) până în prezent.',
    sections: ['Contextul Războiului Rece', 'Cronologie interactivă', 'Evenimente cheie'],
  },
  {
    title: 'Tipuri de Sateliți',
    path: '/tipuri',
    icon: Layers,
    description: 'Clasificarea sateliților după funcție: comunicații, meteo, navigație, etc.',
    sections: ['Comunicații', 'Meteorologici', 'Navigație', 'Militari', 'Științifici', 'Observare'],
  },
  {
    title: 'Cum Funcționează',
    path: '/functionare',
    icon: Settings,
    description: 'Explicații tehnice despre orbite, componente și transmisie.',
    sections: ['Tipuri de orbite', 'Componente principale', 'Transmiterea semnalului'],
  },
  {
    title: 'Utilizare Cotidiană',
    path: '/utilizare',
    icon: Globe,
    description: 'Aplicații practice ale sateliților în viața de zi cu zi.',
    sections: ['Internet', 'GPS', 'Meteo', 'TV', 'Monitorizare dezastre'],
  },
  {
    title: 'Probleme și Provocări',
    path: '/probleme',
    icon: AlertTriangle,
    description: 'Deșeuri spațiale, sindromul Kessler și alte provocări actuale.',
    sections: ['Deșeuri spațiale', 'Coliziuni', 'Costuri', 'Militarizare', 'Reglementări'],
  },
  {
    title: 'Viitorul Sateliților',
    path: '/viitor',
    icon: Rocket,
    description: 'Tendințe și prognoze pentru următorii 10-30 de ani.',
    sections: ['Mini-sateliți', 'Internet global', 'Inteligență artificială', 'Explorare spațială'],
  },
  {
    title: 'Galerie Multimedia',
    path: '/galerie',
    icon: Image,
    description: 'Imagini, infografice și videoclipuri educaționale.',
    sections: ['Imagini sateliți', 'Infografice', 'Videoclipuri', 'Surse'],
  },
  {
    title: 'Bibliografie',
    path: '/bibliografie',
    icon: BookOpen,
    description: 'Surse verificate și referințe academice.',
    sections: ['Agenții oficiale', 'Publicații academice', 'Manuale școlare', 'Baze de date'],
  },
  {
    title: 'Ajutor / FAQ',
    path: '/ajutor',
    icon: HelpCircle,
    description: 'Întrebări frecvente și suport pentru navigare.',
    sections: ['Întrebări frecvente', 'Harta site-ului', 'Contact'],
  },
];

export default function SiteMap() {
  return (
    <main id="sitemap-page">
      <section id="sitemap_hero" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative z-10 max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <Map className="w-6 h-6 text-cosmic-cyan" />
                  <span className="text-lg font-extralight text-cosmic-cyan uppercase tracking-wider">
                    Navigare
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Harta <span className="text-gradient">Site-ului</span>
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  Vedere de ansamblu a tuturor paginilor și secțiunilor disponibile 
                  pe platformă.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="sitemap_list" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <div className="space-y-6">
                {pages.map((page, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.05 * index}>
                    <Link to={page.path}>
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="p-6 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl hover:border-cosmic-cyan/40 transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 p-4 bg-cosmic-cyan/20 rounded-xl group-hover:bg-cosmic-cyan/30 transition-colors duration-300">
                            <page.icon className="w-8 h-8 text-cosmic-cyan" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-display text-xl font-light text-stellar-white group-hover:text-cosmic-cyan transition-colors duration-300">
                                {page.title}
                              </h3>
                              <ChevronRight className="w-5 h-5 text-stellar-muted group-hover:text-cosmic-cyan group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                            <p className="text-lg font-extralight text-stellar-muted mb-4">
                              {page.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {page.sections.map((section, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-space-atmosphere/50 rounded-full text-lg font-extralight text-stellar-dim"
                                >
                                  {section}
                                </span>
                              ))}
                            </div>
                          </div>
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
    </main>
  );
}
