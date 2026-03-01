import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import AnimatedContent from '../ui/animated-content';

const agencies = [
  {
    name: 'NASA',
    fullName: 'National Aeronautics and Space Administration',
    country: 'SUA',
    founded: '1958',
    description: 'Cea mai mare agenție spațială din lume, responsabilă pentru misiunile Apollo, Space Shuttle și explorarea Marte.',
    url: 'https://www.nasa.gov',
    logo: 'https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?search_term=nasa,logo,space,agency&img_prompt=NASA+official+meatball+logo+on+dark+background+clean+vector+style+high+contrast+space+agency+branding&w=200&h=200&type=image',
  },
  {
    name: 'ESA',
    fullName: 'European Space Agency',
    country: 'Europa',
    founded: '1975',
    description: 'Agenția spațială europeană cu 22 state membre, operând sateliți de observare, navigație și știință.',
    url: 'https://www.esa.int',
    logo: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?search_term=esa,europe,space,agency&img_prompt=ESA+European+Space+Agency+logo+blue+and+white+clean+design+official+branding+dark+background&w=200&h=200&type=image',
  },
  {
    name: 'Roscosmos',
    fullName: 'Roscosmos State Corporation',
    country: 'Rusia',
    founded: '1992',
    description: 'Succesorul programului spațial sovietic, operat lansări Soyuz și contribuit la ISS.',
    url: 'https://www.roscosmos.ru',
    logo: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?search_term=roscosmos,russia,space,rocket&img_prompt=Roscosmos+Russian+space+agency+logo+red+and+white+clean+design+official+branding+dark+cosmic+background&w=200&h=200&type=image',
  },
];

export default function AgenciesSection() {
  return (
    <section id="home_agencies" className="relative py-24 overflow-visible">
      <div className="absolute inset-0 bg-space-void" />
      <div 
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #3B82F6 0%, transparent 70%)',
          clipPath: 'ellipse(60% 80% at 0% 100%)',
        }}
      />

      <div className="relative max-w-[2400px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
            <AnimatedContent direction="up" delay={0}>
              <div className="mb-16">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-stellar-white mb-6">
                  Agenții <span className="text-gradient">spațiale majore</span>
                </h2>
                <p className="text-xl font-extralight text-stellar-muted max-w-2xl">
                  Organizațiile care au modelat explorarea spațială și continuă să lanseze 
                  sateliți pentru beneficiul umanității.
                </p>
              </div>
            </AnimatedContent>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {agencies.map((agency, index) => (
                <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative h-full p-8 bg-space-atmosphere/20 border border-cosmic-cyan/10 rounded-xl hover:border-cosmic-cyan/30 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="font-display text-2xl font-light text-cosmic-cyan mb-2">
                          {agency.name}
                        </h3>
                        <p className="text-lg font-extralight text-stellar-muted">
                          {agency.fullName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-6 text-lg font-extralight text-stellar-dim">
                      <span>{agency.country}</span>
                      <span className="w-1 h-1 bg-cosmic-cyan rounded-full" />
                      <span>Fondată: {agency.founded}</span>
                    </div>
                    <p className="text-lg font-extralight text-stellar-muted leading-relaxed mb-6">
                      {agency.description}
                    </p>
                    <a
                      href={agency.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-extralight text-cosmic-cyan hover:text-cosmic-blue transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Vizitează site-ul oficial
                    </a>
                  </motion.div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
