import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Wifi, 
  Phone, 
  Navigation, 
  Cloud, 
  Tv, 
  AlertTriangle,
  Car,
  Plane,
  Tractor,
  CreditCard
} from 'lucide-react';
import AnimatedContent from '../components/ui/animated-content';
import Particles from '../components/ui/particles';
import simpleParallax from 'simple-parallax-js';

const applications = [
  {
    title: 'Internet prin Satelit',
    icon: Wifi,
    description: 'Conexiuni de internet de mare viteză în zone rurale, izolate sau în mișcare.',
    examples: ['Starlink oferă internet în zone fără fibră optică', 'Conexiuni pe avioane și nave'],
    forStudents: 'Permite accesul la educație online în zone fără infrastructură tradițională.',
    color: 'cyan',
  },
  {
    title: 'Telefonie Mobilă',
    icon: Phone,
    description: 'Sateliții completează rețelele celulare, oferind acoperire globală.',
    examples: ['Telefoane satelitare pentru expeditii', 'Comunicații de urgență în dezastre'],
    forStudents: 'Mesajele SOS de pe telefoane moderne pot folosi conexiune satelit.',
    color: 'blue',
  },
  {
    title: 'Navigație GPS',
    icon: Navigation,
    description: 'Poziționare precisă pentru vehicule, telefoane și sisteme de tracking.',
    examples: ['Google Maps, Waze', 'Navigație auto și aviatică', 'Tracking livrări'],
    forStudents: 'Aplicațiile de navigație de pe telefon folosesc 4+ sateliți GPS simultan.',
    color: 'green',
  },
  {
    title: 'Prognoză Meteo',
    icon: Cloud,
    description: 'Imagini satelitare permit prognoza pe 7-10 zile cu precizie crescută.',
    examples: ['Aplicații meteo', 'Avertizări de furtuni', 'Planificarea agriculturii'],
    forStudents: 'Imaginile meteo din știri vin direct de pe sateliții Meteosat.',
    color: 'emerald',
  },
  {
    title: 'Televiziune',
    icon: Tv,
    description: 'Distribuția programelor TV către milioane de gospodării.',
    examples: ['Digi TV, Orange TV', 'Transmisii în direct de la evenimente majore'],
    forStudents: 'Un satelit GEO poate acoperi o treime din suprafața Pământului.',
    color: 'purple',
  },
  {
    title: 'Monitorizarea Dezastrelor',
    icon: AlertTriangle,
    description: 'Detectarea și urmărirea uraganelor, incendiilor, inundațiilor.',
    examples: ['Alertă tsunami', 'Cartografierea zonelor afectate', 'Coordonarea salvării'],
    forStudents: 'Sateliții pot detecta un incendiu de pădure în câteva ore de la izbucnire.',
    color: 'red',
  },
];

const specificUses = [
  {
    icon: Car,
    title: 'Transport Rutier',
    description: 'GPS pentru navigație, tracking flotă, taxe automate (roviniete electronice).',
  },
  {
    icon: Plane,
    title: 'Aviație',
    description: 'Navigație precisă, comunicații cu turnul de control, internet la bord.',
  },
  {
    icon: Tractor,
    title: 'Agricultură',
    description: 'Agricultură de precizie: tractoare autonome, monitorizarea recoltelor.',
  },
  {
    icon: CreditCard,
    title: 'Tranzacții',
    description: 'Sincronizarea timpului pentru tranzacții bancare și bursiere.',
  },
];

export default function DailyUse() {
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
    <main id="daily-use-page">
      <section id="daily_hero" className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?search_term=smartphone,gps,navigation,city,technology&img_prompt=Modern+city+aerial+view+at+night+with+glowing+GPS+navigation+lines+overlaid+showing+routes+and+connections+smartphone+navigation+concept+data+streams+connecting+buildings+futuristic+smart+city+visualization&w=1920&h=1080&type=image"
            alt="City with digital connections"
            onLoad={() => setIsLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-space-void/80 via-space-void/60 to-space-void" />
        </div>

        <div className="absolute inset-0">
          <Particles particleCount={50} color="#00D4FF" speed={0.15} />
        </div>

        <div className="relative z-10 max-w-[2400px] mx-auto w-full pt-32">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <Wifi className="w-6 h-6 text-cosmic-cyan" />
                  <span className="text-lg font-extralight text-cosmic-cyan uppercase tracking-wider">
                    Aplicații Practice
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Sateliții în <span className="text-gradient">Viața de Zi cu Zi</span>
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  De la GPS-ul din telefon la prognoza meteo — descoperă cum sateliții 
                  artificiali fac posibilă viața modernă pe care o trăim zilnic.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="daily_applications" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-12">
                  Aplicații <span className="text-gradient">Principale</span>
                </h2>
              </AnimatedContent>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((app, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.05 * index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="h-full p-6 bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl hover:border-cosmic-cyan/40 transition-all duration-500"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 bg-cosmic-${app.color}/20 rounded-xl`}>
                          <app.icon className={`w-6 h-6 text-cosmic-${app.color}`} />
                        </div>
                        <h3 className="font-display text-xl font-light text-stellar-white">
                          {app.title}
                        </h3>
                      </div>

                      <p className="text-lg font-extralight text-stellar-muted leading-relaxed mb-4">
                        {app.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-lg font-light text-stellar-dim mb-2">Exemple:</p>
                        <ul className="space-y-1">
                          {app.examples.map((ex, i) => (
                            <li key={i} className="text-lg font-extralight text-stellar-muted flex items-start gap-2">
                              <span className="text-cosmic-cyan mt-1">•</span>
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-cosmic-cyan/10">
                        <p className="text-lg font-extralight text-cosmic-gold">
                          <strong className="font-normal">Pentru elevi:</strong> {app.forStudents}
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

      <section id="daily_specific" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-12">
                  Utilizări <span className="text-gradient">Specifice</span>
                </h2>
              </AnimatedContent>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specificUses.map((use, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.1 * index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-6 bg-space-atmosphere/20 border border-cosmic-cyan/10 rounded-xl text-center"
                    >
                      <use.icon className="w-12 h-12 text-cosmic-cyan mx-auto mb-4" />
                      <h3 className="font-display text-lg font-light text-stellar-white mb-3">
                        {use.title}
                      </h3>
                      <p className="text-lg font-extralight text-stellar-muted">
                        {use.description}
                      </p>
                    </motion.div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="daily_school" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-space-void to-space-deep" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <AnimatedContent direction="up" delay={0}>
                <div className="p-8 bg-cosmic-cyan/10 border border-cosmic-cyan/30 rounded-xl">
                  <h2 className="font-display text-2xl font-light text-cosmic-cyan mb-6">
                    Relevanță pentru Activitatea Școlară
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-light text-stellar-white mb-3">La Fizică:</h3>
                      <ul className="space-y-2 text-lg font-extralight text-stellar-muted">
                        <li>• Mecanica orbitală și legile lui Kepler</li>
                        <li>• Unde electromagnetice și frecvențe radio</li>
                        <li>• Efectul Doppler în comunicații</li>
                        <li>• Energia solară și conversie fotoelectrică</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-stellar-white mb-3">La Geografie:</h3>
                      <ul className="space-y-2 text-lg font-extralight text-stellar-muted">
                        <li>• Teledetecție și cartografiere</li>
                        <li>• Monitorizarea schimbărilor climatice</li>
                        <li>• Sisteme de coordonate geografice</li>
                        <li>• Observarea fenomenelor naturale</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="daily_conclusion" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="text-center">
                  <h2 className="font-display text-3xl md:text-4xl font-light text-stellar-white mb-8">
                    Concluzie
                  </h2>
                  <p className="text-xl font-extralight text-stellar-muted leading-relaxed">
                    Sateliții artificiali au devenit o parte invizibilă dar esențială a vieții 
                    moderne. De la navigația zilnică cu telefonul până la prognoza meteo care 
                    ne planifică ziua, tehnologia spațială ne servește în fiecare moment, 
                    demonstrând valoarea investițiilor în cercetare și dezvoltare.
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
