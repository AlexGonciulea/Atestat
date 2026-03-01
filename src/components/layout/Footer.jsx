import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Satellite, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Rocket,
  Globe,
  BookOpen
} from 'lucide-react';

const footerLinks = {
  navigare: [
    { label: 'Pagina Principală', path: '/' },
    { label: 'Istoria Sateliților', path: '/istorie' },
    { label: 'Tipuri de Sateliți', path: '/tipuri' },
    { label: 'Cum Funcționează', path: '/functionare' },
  ],
  resurse: [
    { label: 'Utilizare Cotidiană', path: '/utilizare' },
    { label: 'Provocări Actuale', path: '/probleme' },
    { label: 'Viitorul Sateliților', path: '/viitor' },
    { label: 'Galerie Multimedia', path: '/galerie' },
  ],
  informatii: [
    { label: 'Bibliografie', path: '/bibliografie' },
    { label: 'Ajutor / FAQ', path: '/ajutor' },
    { label: 'Harta Site-ului', path: '/harta' },
  ],
};

const externalLinks = [
  { label: 'NASA', url: 'https://www.nasa.gov', icon: Rocket },
  { label: 'ESA', url: 'https://www.esa.int', icon: Globe },
  { label: 'Space.com', url: 'https://www.space.com', icon: ExternalLink },
];

export default function Footer() {
  return (
    <footer id="main-footer" className="relative bg-space-void border-t border-cosmic-cyan/10">
      <div className="absolute inset-0 bg-gradient-to-t from-space-deep/50 to-transparent pointer-events-none" />
      <div className="relative max-w-[2400px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1">
                <Link to="/" className="flex items-center gap-3 mb-6 group">
                  <Satellite className="w-8 h-8 text-cosmic-cyan transition-transform duration-500 group-hover:rotate-12" />
                  <span className="font-display text-xl font-light text-stellar-white">
                    Sateliți<span className="text-cosmic-cyan">.edu</span>
                  </span>
                </Link>
                <p className="text-lg font-extralight text-stellar-muted leading-relaxed mb-6">
                  Platformă educațională despre sateliții artificiali, destinată elevilor și profesorilor din România.
                </p>
                <div className="flex items-center gap-2 text-lg font-extralight text-stellar-muted">
                  <Mail className="w-4 h-4 text-cosmic-cyan" />
                  <span>contact@sateliti.edu</span>
                </div>
              </div>

              <div>
                <h4 className="font-display text-lg font-light text-stellar-white mb-6 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cosmic-cyan" />
                  Navigare
                </h4>
                <ul className="space-y-3">
                  {footerLinks.navigare.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path}
                        className="text-lg font-extralight text-stellar-muted hover:text-cosmic-cyan transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-lg font-light text-stellar-white mb-6 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cosmic-cyan" />
                  Resurse
                </h4>
                <ul className="space-y-3">
                  {footerLinks.resurse.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path}
                        className="text-lg font-extralight text-stellar-muted hover:text-cosmic-cyan transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-lg font-light text-stellar-white mb-6 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cosmic-cyan" />
                  Surse Externe
                </h4>
                <ul className="space-y-3">
                  {externalLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-lg font-extralight text-stellar-muted hover:text-cosmic-cyan transition-colors duration-300"
                      >
                        <link.icon className="w-4 h-4" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-cosmic-cyan/10">
                  <h4 className="font-display text-lg font-light text-stellar-white mb-4">
                    Informații
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.informatii.map((link, index) => (
                      <li key={index}>
                        <Link 
                          to={link.path}
                          className="text-lg font-extralight text-stellar-muted hover:text-cosmic-cyan transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cosmic-cyan/10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-lg font-extralight text-stellar-muted">
                  © {new Date().getFullYear()} Sateliți.edu — Conținut educațional pentru elevi și profesori
                </p>
                <p className="text-lg font-extralight text-stellar-dim">
                  AI vibe coded development by{' '}
                  <a 
                    href="https://biela.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cosmic-cyan hover:text-cosmic-blue transition-colors duration-300"
                  >
                    Biela.dev
                  </a>
                  , powered by{' '}
                  <a 
                    href="https://teachmecode.ae/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cosmic-cyan hover:text-cosmic-blue transition-colors duration-300"
                  >
                    TeachMeCode® Institute
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
