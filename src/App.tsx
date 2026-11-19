/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {MotionConfig} from 'motion/react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {AboutSection} from './components/AboutSection';
import {SpecializationsSection} from './components/SpecializationsSection';
import {PillarsSection} from './components/PillarsSection';
import {CtaSection} from './components/CtaSection';
import {Footer} from './components/Footer';
import {FloatingWhatsApp} from './components/FloatingWhatsApp';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#050505] text-white font-sans">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SpecializationsSection />
          <PillarsSection />
          <CtaSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
