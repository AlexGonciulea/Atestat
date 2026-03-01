import React from 'react';
import HeroSection from '/components/home/HeroSection';
import IntroSection from '/components/home/IntroSection';
import DidYouKnowSection from '/components/home/DidYouKnowSection';
import NavigationSection from '/components/home/NavigationSection';
import AgenciesSection from '/components/home/AgenciesSection';

export default function Home() {
  return (
    <main id="home-page">
      <HeroSection />
      <IntroSection />
      <DidYouKnowSection />
      <NavigationSection />
      <AgenciesSection />
    </main>
  );
}

