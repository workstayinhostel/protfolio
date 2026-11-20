import { useCallback, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhatIBuild from './components/WhatIBuild.jsx';
import TechStack from './components/TechStack.jsx';
import FeaturedWork from './components/FeaturedWork.jsx';
import HowIWork from './components/HowIWork.jsx';
import Footer from './components/Footer.jsx';
import WorkWithModal from './components/WorkWithModal.jsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onWorkWithMe={openModal} />
      <main>
        <Hero onWorkWithMe={openModal} />
        <WhatIBuild />
        <TechStack />
        <FeaturedWork />
        <HowIWork />
      </main>
      <Footer onWorkWithMe={openModal} />
      <WorkWithModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}
