import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown,
  Search,
  BookOpen,
  Users,
  Mail,
  Map
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedContent from '../components/ui/animated-content';

const faqs = [
  {
    question: 'Pentru cine este destinat acest site?',
    answer: 'Site-ul este destinat elevilor de gimnaziu și liceu, profesorilor de fizică, geografie și știință, precum și publicului larg interesat de tehnologia spațială. Conținutul este adaptat pentru a fi accesibil, dar riguros științific.',
  },
  {
    question: 'Pot folosi informațiile pentru proiecte școlare?',
    answer: 'Da, absolut! Toate informațiile sunt documentate cu surse verificabile. În secțiunea Bibliografie găsești formatul corect de citare pentru lucrările tale școlare.',
  },
  {
    question: 'Cât de actualizate sunt informațiile?',
    answer: 'Ne străduim să menținem conținutul actualizat cu cele mai recente dezvoltări din domeniu. Sursele principale sunt agențiile spațiale oficiale (NASA, ESA) care publică informații în timp real.',
  },
  {
    question: 'Pot contribui cu conținut sau sugestii?',
    answer: 'Apreciem feedback-ul! Poți contacta echipa prin adresa de email din footer. Sugestiile pentru îmbunătățirea conținutului sunt binevenite.',
  },
  {
    question: 'Site-ul funcționează pe telefon mobil?',
    answer: 'Da, site-ul este complet responsive și optimizat pentru dispozitive mobile și tablete. Poți accesa toate funcționalitățile de pe orice dispozitiv.',
  },
  {
    question: 'De ce unele pagini au animații?',
    answer: 'Animațiile discrete sunt folosite pentru a face experiența de învățare mai captivantă. Ele nu afectează performanța și pot fi dezactivate prin setările de accesibilitate.',
  },
  {
    question: 'Cum pot naviga rapid între secțiuni?',
    answer: 'Folosește meniul principal din partea de sus a paginii. Pe dispozitive mobile, apasă pe iconița de meniu (trei linii). Butonul „Înapoi sus" te ajută să revii rapid în partea de sus.',
  },
  {
    question: 'Sursele sunt de încredere?',
    answer: 'Da, toate informațiile provin din surse oficiale: NASA, ESA, publicații academice peer-reviewed și manuale școlare aprobate. Fiecare afirmație poate fi verificată.',
  },
];

const siteMap = [
  { title: 'Pagina Principală', path: '/', description: 'Introducere în lumea sateliților artificiali' },
  { title: 'Istoria Sateliților', path: '/istorie', description: 'Cronologie de la Sputnik 1 până în prezent' },
  { title: 'Tipuri de Sateliți', path: '/tipuri', description: 'Clasificarea după funcție și misiune' },
  { title: 'Cum Funcționează', path: '/functionare', description: 'Orbite, componente și transmisie' },
  { title: 'Utilizare Cotidiană', path: '/utilizare', description: 'Aplicații în viața de zi cu zi' },
  { title: 'Probleme și Provocări', path: '/probleme', description: 'Deșeuri spațiale și alte provocări' },
  { title: 'Viitorul Sateliților', path: '/viitor', description: 'Tendințe și prognoze' },
  { title: 'Galerie Multimedia', path: '/galerie', description: 'Imagini și videoclipuri educaționale' },
  { title: 'Bibliografie', path: '/bibliografie', description: 'Surse și referințe' },
];

export default function Help() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main id="help-page">
      <section id="help_hero" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative z-10 max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-6 h-6 text-cosmic-cyan" />
                  <span className="text-lg font-extralight text-cosmic-cyan uppercase tracking-wider">
                    Suport
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Ajutor și <span className="text-gradient">Întrebări Frecvente</span>
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  Găsește răspunsuri la întrebările frecvente și descoperă cum să 
                  navighezi eficient prin conținutul site-ului.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="help_faq" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <h2 className="font-display text-2xl font-light text-stellar-white mb-8 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-cosmic-cyan" />
                  Întrebări Frecvente (FAQ)
                </h2>
              </AnimatedContent>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.05 * index}>
                    <div className="border border-cosmic-cyan/20 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left bg-space-atmosphere/30 hover:bg-space-atmosphere/50 transition-colors duration-300"
                      >
                        <span className="text-lg font-light text-stellar-white pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-cosmic-cyan flex-shrink-0 transition-transform duration-300 ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="p-6 pt-0 text-lg font-extralight text-stellar-muted leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="help_sitemap" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-space-void to-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <h2 className="font-display text-2xl font-light text-stellar-white mb-8 flex items-center gap-3">
                  <Map className="w-6 h-6 text-cosmic-cyan" />
                  Harta Site-ului
                </h2>
              </AnimatedContent>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {siteMap.map((page, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.05 * index}>
                    <Link to={page.path}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="p-6 bg-space-atmosphere/20 border border-cosmic-cyan/10 rounded-xl hover:border-cosmic-cyan/30 transition-all duration-300"
                      >
                        <h3 className="font-display text-lg font-light text-cosmic-cyan mb-2">
                          {page.title}
                        </h3>
                        <p className="text-lg font-extralight text-stellar-muted">
                          {page.description}
                        </p>
                      </motion.div>
                    </Link>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="help_contact" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="p-8 bg-cosmic-cyan/10 border border-cosmic-cyan/30 rounded-xl text-center">
                  <Mail className="w-12 h-12 text-cosmic-cyan mx-auto mb-6" />
                  <h2 className="font-display text-2xl font-light text-stellar-white mb-4">
                    Nu ai găsit răspunsul?
                  </h2>
                  <p className="text-lg font-extralight text-stellar-muted mb-6">
                    Contactează-ne și vom răspunde cât mai curând posibil.
                  </p>
                  <a
                    href="mailto:contact@sateliti.edu"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cosmic-cyan text-space-void font-display text-lg font-light rounded-lg hover:bg-cosmic-blue transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    contact@sateliti.edu
                  </a>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
