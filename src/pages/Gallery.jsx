import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Image as ImageIcon, 
  Play, 
  X, 
  ExternalLink,
  ZoomIn,
  Info
} from 'lucide-react';
import AnimatedContent from '../components/ui/animated-content';
import Particles from '../components/ui/particles';
import simpleParallax from 'simple-parallax-js';

const galleryItems = [
  {
    type: 'image',
    title: 'Sputnik 1 - Primul Satelit',
    description: 'Replica satelitului Sputnik 1, lansat la 4 octombrie 1957.',
    source: 'NASA History',
    url: 'https://images.pexels.com/photos/586102/pexels-photo-586102.jpeg?search_term=sputnik,satellite,vintage,space&img_prompt=Sputnik+1+satellite+model+spherical+metal+body+with+four+antennas+displayed+in+museum+dramatic+lighting+historical+artifact&w=800&h=600&type=image',
  },
  {
    type: 'image',
    title: 'Pământul din Spațiu',
    description: 'Vedere a Pământului din orbită, surprinsă de sateliți de observare.',
    source: 'NASA Earth Observatory',
    url: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-41162.jpeg?search_term=earth,space,orbit,planet,blue&img_prompt=Earth+viewed+from+space+bright+blue+oceans+white+clouds+thin+atmosphere+edge+visible+stunning+overview+effect+NASA+satellite+imagery&w=800&h=600&type=image',
  },
  {
    type: 'image',
    title: 'Stația Spațială Internațională',
    description: 'ISS - cel mai mare satelit artificial, vizibilă cu ochiul liber.',
    source: 'NASA/ESA',
    url: 'https://images.pexels.com/photos/12498777/pexels-photo-12498777.jpeg?search_term=iss,space,station,international,solar&img_prompt=International+Space+Station+ISS+fully+constructed+solar+panels+extended+orbiting+Earth+sunlight+reflecting+on+modules+detailed+engineering&w=800&h=600&type=image',
  },
  {
    type: 'image',
    title: 'Lansare SpaceX',
    description: 'Lansarea unei rachete Falcon 9 cu sateliți Starlink.',
    source: 'SpaceX',
    url: 'https://images.pexels.com/photos/23769/pexels-photo.jpg?search_term=rocket,launch,space,falcon,fire&img_prompt=SpaceX+Falcon+9+rocket+launch+brilliant+orange+flames+smoke+plume+night+sky+dramatic+lighting+satellite+deployment+mission&w=800&h=600&type=image',
  },
  {
    type: 'image',
    title: 'Satelit de Comunicații',
    description: 'Antene parabolice pe un satelit geostaționar modern.',
    source: 'ESA',
    url: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?search_term=satellite,communication,antenna,dish,space&img_prompt=Communication+satellite+in+orbit+large+reflector+antennas+deployed+solar+panels+Earth+background+technical+precision+engineering&w=800&h=600&type=image',
  },
  {
    type: 'image',
    title: 'Telescopul James Webb',
    description: 'Cel mai avansat telescop spațial, lansat în 2021.',
    source: 'NASA/ESA',
    url: 'https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?search_term=telescope,webb,space,mirror,gold&img_prompt=James+Webb+Space+Telescope+golden+hexagonal+mirrors+deployed+sunshield+visible+deep+space+background+groundbreaking+astronomy+instrument&w=800&h=600&type=image',
  },
  {
    type: 'video',
    title: 'Lansare Satelit',
    description: 'Secvență de lansare a unei misiuni cu sateliți.',
    source: 'NASA',
    url: 'https://videos.pexels.com/video-files/3191572/3191572-sd_640_360_30fps.mp4?search_term=rocket,launch,space,countdown&img_prompt=Dramatic+rocket+launch+sequence+countdown+ignition+liftoff+smoke+and+fire+satellite+deployment+mission+cinematic+footage&w=1280&h=720&type=video',
    thumbnail: 'https://images.pexels.com/photos/23769/pexels-photo.jpg?search_term=rocket,launch&img_prompt=Rocket+launch+thumbnail&w=800&h=600&type=image',
  },
  {
    type: 'image',
    title: 'Centrul de Control',
    description: 'Centrul de control al misiunilor ESA din Darmstadt.',
    source: 'ESA',
    url: 'https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?search_term=mission,control,center,space,monitors&img_prompt=Mission+control+center+multiple+screens+displaying+satellite+telemetry+operators+at+consoles+dramatic+blue+lighting+ESA+operations&w=800&h=600&type=image',
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
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
    <main id="gallery-page">
      <section id="gallery_hero" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src="https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?search_term=galaxy,nebula,space,stars,cosmos&img_prompt=Stunning+nebula+and+star+clusters+deep+space+photography+vibrant+colors+cosmic+dust+astronomical+observatory+imagery&w=1920&h=1080&type=image"
            alt="Cosmic gallery"
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
                  <ImageIcon className="w-6 h-6 text-cosmic-cyan" />
                  <span className="text-lg font-extralight text-cosmic-cyan uppercase tracking-wider">
                    Multimedia
                  </span>
                </div>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-stellar-white mb-6 max-w-3xl">
                  Galerie <span className="text-gradient">Multimedia</span>
                </h1>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={0.2}>
                <p className="text-xl font-extralight text-stellar-muted leading-relaxed max-w-2xl">
                  Imagini, infografice și videoclipuri educaționale despre sateliți, 
                  cu surse menționate pentru fiecare material.
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery_grid" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-space-void via-space-deep to-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryItems.map((item, index) => (
                  <AnimatedContent key={index} direction="up" delay={0.05 * index}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      onClick={() => setSelectedItem(item)}
                      className="group relative aspect-[4/3] bg-space-atmosphere/30 border border-cosmic-cyan/20 rounded-xl overflow-hidden cursor-pointer hover:border-cosmic-cyan/40 transition-all duration-500"
                    >
                      <img
                        src={item.type === 'video' ? item.thumbnail : item.url}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-space-void via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-cosmic-cyan/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-display text-lg font-light text-stellar-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-lg font-extralight text-stellar-muted line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ZoomIn className="w-6 h-6 text-cosmic-cyan" />
                      </div>
                    </motion.div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="absolute inset-0 bg-space-void/95 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-space-deep border border-cosmic-cyan/30 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-space-void/80 rounded-full hover:bg-cosmic-cyan/20 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-stellar-white" />
              </button>
              <div className="aspect-video">
                {selectedItem.type === 'video' ? (
                  <video
                    src={selectedItem.url}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-light text-stellar-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-lg font-extralight text-stellar-muted mb-4">
                  {selectedItem.description}
                </p>
                <div className="flex items-center gap-2 text-lg font-extralight text-cosmic-cyan">
                  <Info className="w-4 h-4" />
                  Sursă: {selectedItem.source}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="gallery_info" className="relative py-24 overflow-visible">
        <div className="absolute inset-0 bg-space-void" />
        <div className="relative max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
              <AnimatedContent direction="up" delay={0}>
                <div className="text-center p-8 bg-cosmic-cyan/10 border border-cosmic-cyan/30 rounded-xl">
                  <Info className="w-8 h-8 text-cosmic-cyan mx-auto mb-4" />
                  <h3 className="font-display text-xl font-light text-stellar-white mb-4">
                    Surse și Drepturi de Autor
                  </h3>
                  <p className="text-lg font-extralight text-stellar-muted">
                    Toate imaginile și videoclipurile sunt utilizate în scop educațional, 
                    cu sursele menționate pentru fiecare material. Imaginile NASA și ESA 
                    sunt în domeniul public. Pentru utilizare comercială, consultați 
                    sursele originale.
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
