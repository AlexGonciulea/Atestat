import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Satellite, 
  Search,
  Home,
  History,
  Layers,
  Settings,
  Globe,
  AlertTriangle,
  Rocket,
  Image,
  BookOpen,
  HelpCircle
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Acasă', icon: Home },
  { path: '/istorie', label: 'Istorie', icon: History },
  { 
    label: 'Despre Sateliți', 
    icon: Satellite,
    children: [
      { path: '/tipuri', label: 'Tipuri de Sateliți', icon: Layers },
      { path: '/functionare', label: 'Cum Funcționează', icon: Settings },
      { path: '/utilizare', label: 'Utilizare Cotidiană', icon: Globe },
    ]
  },
  { path: '/probleme', label: 'Provocări', icon: AlertTriangle },
  { path: '/viitor', label: 'Viitorul', icon: Rocket },
  { path: '/galerie', label: 'Galerie', icon: Image },
  { path: '/bibliografie', label: 'Surse', icon: BookOpen },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <motion.nav
        id="main-navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-space-void/95 backdrop-blur-xl border-b border-cosmic-cyan/10' 
            : 'bg-gradient-to-b from-space-void/80 to-transparent'
        }`}
      >
        <div className="max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <div className="flex items-center justify-between h-20">
                <Link 
                  to="/" 
                  className="flex items-center gap-3 group"
                >
                  <div className="relative">
                    <Satellite className="w-8 h-8 text-cosmic-cyan transition-transform duration-500 group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-cosmic-cyan/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <span className="font-display text-xl font-light tracking-wide text-stellar-white">
                    Sateliți<span className="text-cosmic-cyan">.edu</span>
                  </span>
                </Link>

                <div className="hidden lg:flex items-center gap-1">
                  {navItems.map((item, index) => (
                    item.children ? (
                      <div 
                        key={index}
                        className="relative"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button className="flex items-center gap-1.5 px-4 py-2 text-lg font-extralight text-stellar-white/80 hover:text-cosmic-cyan transition-colors duration-300">
                          <item.icon className="w-4 h-4" />
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 py-2 bg-space-deep/95 backdrop-blur-xl border border-cosmic-cyan/20 rounded-lg min-w-[220px] shadow-xl shadow-cosmic-cyan/5"
                            >
                              {item.children.map((child, childIndex) => (
                                <NavLink
                                  key={childIndex}
                                  to={child.path}
                                  className={({ isActive }) => `
                                    flex items-center gap-3 px-4 py-3 text-lg font-extralight transition-all duration-300
                                    ${isActive 
                                      ? 'text-cosmic-cyan bg-cosmic-cyan/10' 
                                      : 'text-stellar-white/70 hover:text-cosmic-cyan hover:bg-cosmic-cyan/5'
                                    }
                                  `}
                                >
                                  <child.icon className="w-4 h-4" />
                                  {child.label}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `
                          flex items-center gap-1.5 px-4 py-2 text-lg font-extralight transition-all duration-300
                          ${isActive 
                            ? 'text-cosmic-cyan' 
                            : 'text-stellar-white/80 hover:text-cosmic-cyan'
                          }
                        `}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </NavLink>
                    )
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 text-stellar-white/70 hover:text-cosmic-cyan transition-colors duration-300"
                    aria-label="Caută"
                  >
                    <Search className="w-5 h-5" />
                  </button>

                  <Link
                    to="/ajutor"
                    className="hidden md:flex items-center gap-2 px-4 py-2 text-lg font-extralight text-cosmic-cyan border border-cosmic-cyan/30 rounded-lg hover:bg-cosmic-cyan/10 transition-all duration-300"
                  >
                    <HelpCircle className="w-4 h-4" />
                    Ajutor
                  </Link>

                  <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="lg:hidden p-2 text-stellar-white"
                    aria-label="Meniu"
                  >
                    {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-space-void/80 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-space-deep border-l border-cosmic-cyan/20 p-6 pt-24 overflow-y-auto">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  item.children ? (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-3 px-4 py-3 text-lg font-extralight text-stellar-muted">
                        <item.icon className="w-5 h-5" />
                        {item.label}
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.children.map((child, childIndex) => (
                          <NavLink
                            key={childIndex}
                            to={child.path}
                            className={({ isActive }) => `
                              flex items-center gap-3 px-4 py-3 text-lg font-extralight rounded-lg transition-all duration-300
                              ${isActive 
                                ? 'text-cosmic-cyan bg-cosmic-cyan/10' 
                                : 'text-stellar-white/70 hover:text-cosmic-cyan hover:bg-cosmic-cyan/5'
                              }
                            `}
                          >
                            <child.icon className="w-4 h-4" />
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={index}
                      to={item.path}
                      className={({ isActive }) => `
                        flex items-center gap-3 px-4 py-3 text-lg font-extralight rounded-lg transition-all duration-300
                        ${isActive 
                          ? 'text-cosmic-cyan bg-cosmic-cyan/10' 
                          : 'text-stellar-white/70 hover:text-cosmic-cyan hover:bg-cosmic-cyan/5'
                        }
                      `}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </NavLink>
                  )
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-32 px-4"
          >
            <div 
              className="absolute inset-0 bg-space-void/90 backdrop-blur-xl"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="relative w-full max-w-2xl"
            >
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-stellar-muted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Caută informații despre sateliți..."
                    className="w-full pl-16 pr-6 py-5 text-xl font-extralight bg-space-deep border border-cosmic-cyan/30 rounded-2xl text-stellar-white placeholder:text-stellar-muted focus:outline-none focus:border-cosmic-cyan transition-colors duration-300"
                    autoFocus
                  />
                </div>
              </form>
              <p className="mt-4 text-lg font-extralight text-stellar-muted text-center">
                Apasă Enter pentru a căuta sau Esc pentru a închide
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
