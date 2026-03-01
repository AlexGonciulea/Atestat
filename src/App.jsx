import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import History from './pages/History';
import Types from './pages/Types';
import HowItWorks from './pages/HowItWorks';
import DailyUse from './pages/DailyUse';
import Problems from './pages/Problems';
import Future from './pages/Future';
import Gallery from './pages/Gallery';
import Bibliography from './pages/Bibliography';
import Help from './pages/Help';
import SiteMap from './pages/SiteMap';

export default function App() {
  return (
    <div className="min-h-screen bg-space-void text-stellar-white">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/istorie" element={<History />} />
        <Route path="/tipuri" element={<Types />} />
        <Route path="/functionare" element={<HowItWorks />} />
        <Route path="/utilizare" element={<DailyUse />} />
        <Route path="/probleme" element={<Problems />} />
        <Route path="/viitor" element={<Future />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/bibliografie" element={<Bibliography />} />
        <Route path="/ajutor" element={<Help />} />
        <Route path="/harta" element={<SiteMap />} />
      </Routes>

      <Footer />
      <BackToTop />
    </div>
  );
}
