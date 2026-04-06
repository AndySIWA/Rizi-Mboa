/**
 * Rizi-Mboa - Main Application Entry Point
 * 
 * Ce fichier est le point d'entrée principal de l'application React.
 * Il assemble les différentes sections du site (Hero, Banner, Concept, Menu, etc.)
 * et gère les états globaux comme le mode sombre et l'affichage des éléments flottants.
 */


import Background from './components/layout/Background';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import Hero from './components/sections/Hero';
import Concept from './components/sections/Concept';
import Values from './components/sections/Values';
import Menu from './components/sections/Menu';
import Banner from './components/sections/Banner';
import Delivery from './components/sections/Delivery';
import { useDarkMode } from './hooks/useDarkMode';
import { useScrollFloat } from './hooks/useScrollFloat';

export default function App() {
  // État du mode sombre persistant via le hook personnalisé useDarkMode
  const [isDark, setIsDark] = useDarkMode();
  
  // Contrôle l'apparition du bouton WhatsApp flottant après 400px de scroll
  const showFloating = useScrollFloat(400);

  return (
    <div className="min-h-screen relative selection:bg-brand-pink selection:text-white pb-24 md:pb-0 text-gray-900 dark:text-white overflow-hidden">
      <div className="noise-texture opacity-20 dark:opacity-[0.05]"></div>
      
      {/* Fond animé et Barre de navigation */}
      <Background />
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      <main>
        {/* Sections principales du site */}
        <Hero />
        <Banner />
        <Concept />
        <Values />
        <Menu />
        <Delivery />
      </main>

      {/* Pied de page et CTA flottant */}
      <Footer />
      <FloatingWhatsApp show={showFloating} />
    </div>
  );
}
