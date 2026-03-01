import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Globe, 
  ExternalLink, 
  GraduationCap,
  FileText,
  Database
} from 'lucide-react';
import AnimatedContent from '../components/ui/animated-content';

const sources = {
  agencies: [
    {
      name: 'NASA - National Aeronautics and Space Administration',
      url: 'https://www.nasa.gov',
      description: 'Agenția spațială americană, sursă primară pentru informații despre explorarea spațială.',
      sections: ['NASA History', 'NASA Science', 'NASA Earth Observatory'],
    },
    {
      name: 'ESA - European Space Agency',
      url: 'https://www.esa.int',
      description: 'Agenția spațială europeană cu 22 state membre.',
      sections: ['ESA Space for Kids', 'ESA Science', 'Copernicus Program'],
    },
    {
      name: 'Roscosmos',
      url: 'https://www.roscosmos.ru',
      description: 'Corporația spațială de stat a Federației Ruse.',
      sections: ['Program Soyuz', 'Istorie spațială sovietică'],
    },
  ],
  academic: [
    {
      title: 'Satellite Communications',
      author: 'Dennis Roddy',
      publisher: 'McGraw-Hill Education',
      year: '2017',
      isbn: '978-0071841825',
      type: 'Manual universitar',
    },
    {
      title: 'Orbital Mechanics for Engineering Students',
      author: 'Howard D. Curtis',
      publisher: 'Butterworth-Heinemann',
      year: '2019',
      isbn: '978-0081021330',
      type: 'Manual universitar',
    },
    {
      title: 'Introduction to Space Dynamics',
      author: 'William T. Thomson',
      publisher: 'Dover Publications',
      year: '1986',
      isbn: '978-0486651132',
      type: 'Carte de referință',
    },
  ],
  educational: [
    {
      title: 'Fizică - Manual pentru clasa a IX-a',
      subject: 'Capitolul despre mecanica orbitală și gravitație',
      relevance: 'Legile lui Kepler, viteza orbitală, gravitația newtoniană',
    },
    {
      title: 'Fizică - Manual pentru clasa a XI-a',
      subject: 'Capitolul despre unde electromagnetice',
      relevance: 'Propagarea undelor radio, spectrul electromagnetic, comunicații',
    },
    {
      title: 'Geografie - Manual pentru clasa a X-a',
      subject: 'Capitolul despre teledetecție',
      relevance: 'Observarea Pământului, schimbări climatice, cartografiere',
    },
  ],
  databases: [
    {
      name: 'Union of Concerned Scientists Satellite Database',
      url: 'https://www.ucsusa.org/resources/satellite-database',
      description: 'Bază de date completă a tuturor sateliților activi din orbită.',
    },
    {
      name: 'CelesTrak',
      url: 'https://celestrak.com',
      description: 'Date orbitale publice (TLE) pentru toate obiectele urmărite.',
    },
    {
      name: 'Space-Track.org',
      url: 'https://www.space-track.org',
      description: 'Catalogul oficial NORAD al obiectelor spațiale (necesită cont).',
    },
  ],
};

export default function Bibliography() {
  return (
    <main id="bibliography-page">
      <section id="bib_hero" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative z-10 max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-cosmic-cyan" />
                  <span className="text-lg font-extralight text-cosmic-cyan uppercase tracking-wider">
                    Surse Verificate
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Bibliografie și <span className="text-gradient">Surse</span>
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  Toate informațiile de pe acest site provin din surse verificabile: 
                  agenții spațiale oficiale, publicații academice și manuale școlare.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="bib_agencies" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-4 mb-8">
                  <Globe className="w-8 h-8 text-cosmic-cyan" />
                  <h2 className="font-display text-2xl font-light text-stellar-white">
                    Agenții Spațiale Oficiale
                  </h2>
                </div>
              </AnimatedContent>

              <div className="space-y-6">
                {sources.agencies.map((agency, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="p-6 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-display text-xl font-light text-cosmic-cyan">
                          {agency.name}
                        </h3>
                        <a
                          href={agency.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-lg font-extralight text-stellar-muted hover:text-cosmic-cyan transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Vizitează
                        </a>
                      </div>
                      <p className="text-lg font-extralight text-stellar-muted mb-4">
                        {agency.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {agency.sections.map((section, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-cosmic-cyan/10 rounded-full text-lg font-extralight text-cosmic-cyan"
                          >
                            {section}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bib_academic" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-space-void to-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-4 mb-8">
                  <FileText className="w-8 h-8 text-cosmic-gold" />
                  <h2 className="font-display text-2xl font-light text-stellar-white">
                    Publicații Academice
                  </h2>
                </div>
              </AnimatedContent>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sources.academic.map((book, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                    <div className="h-full p-6 bg-space-atmosphere/20 border border-cosmic-gold/20 rounded-xl">
                      <span className="inline-block px-3 py-1 bg-cosmic-gold/20 rounded-full text-lg font-extralight text-cosmic-gold mb-4">
                        {book.type}
                      </span>
                      <h3 className="font-display text-lg font-light text-stellar-white mb-2">
                        {book.title}
                      </h3>
                      <p className="text-lg font-extralight text-stellar-muted mb-1">
                        {book.author}
                      </p>
                      <p className="text-lg font-extralight text-stellar-dim mb-2">
                        {book.publisher}, {book.year}
                      </p>
                      <p className="text-lg font-extralight text-stellar-dim font-mono">
                        ISBN: {book.isbn}
                      </p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bib_educational" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-4 mb-8">
                  <GraduationCap className="w-8 h-8 text-cosmic-blue" />
                  <h2 className="font-display text-2xl font-light text-stellar-white">
                    Manuale Școlare - Legături cu Programa
                  </h2>
                </div>
              </AnimatedContent>

              <div className="space-y-4">
                {sources.educational.map((manual, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                    <div className="p-6 bg-space-atmosphere/30 border border-cosmic-blue/20 rounded-xl">
                      <h3 className="font-display text-lg font-light text-cosmic-blue mb-2">
                        {manual.title}
                      </h3>
                      <p className="text-lg font-extralight text-stellar-muted mb-2">
                        <strong className="font-normal text-stellar-white">Subiect:</strong> {manual.subject}
                      </p>
                      <p className="text-lg font-extralight text-stellar-muted">
                        <strong className="font-normal text-stellar-white">Relevanță:</strong> {manual.relevance}
                      </p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bib_databases" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-4 mb-8">
                  <Database className="w-8 h-8 text-purple-400" />
                  <h2 className="font-display text-2xl font-light text-stellar-white">
                    Baze de Date și Resurse Online
                  </h2>
                </div>
              </AnimatedContent>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sources.databases.map((db, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                    <a
                      href={db.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full p-6 bg-space-atmosphere/20 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg font-light text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                          {db.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-stellar-muted group-hover:text-purple-400 transition-colors duration-300" />
                      </div>
                      <p className="text-lg font-extralight text-stellar-muted">
                        {db.description}
                      </p>
                    </a>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bib_citation" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="p-8 bg-cosmic-cyan/10 border border-cosmic-cyan/30 rounded-xl">
                  <h3 className="font-display text-xl font-light text-cosmic-cyan mb-4 text-center">
                    Cum să citezi acest site
                  </h3>
                  <div className="p-4 bg-space-void/50 rounded-lg font-mono text-lg text-stellar-muted">
                    <p>Sateliți.edu. (2024). <em>Sateliții Artificiali - Platformă Educațională</em>.</p>
                    <p>Accesat la [data], de la https://sateliti.edu</p>
                  </div>
                  <p className="text-lg font-extralight text-stellar-muted text-center mt-4">
                    Format recomandnat pentru lucrări școlare și proiecte
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
