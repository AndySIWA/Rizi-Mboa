import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
/**
 * Navigation Bar Component
 * 
 * Gère la navigation principale, le logo et le sélecteur de mode sombre.
 * S'adapte dynamiquement au défilement pour un rendu premium et discret.
 */
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK } from '../../data/constants';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/90 dark:bg-black/80 backdrop-blur-2xl border-b border-gray-200/80 dark:border-white/10 shadow-xl py-0" 
        : "bg-white/30 dark:bg-black/20 backdrop-blur-md border-b border-white/20 dark:border-white/5 py-1"
    }`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "h-16" : "h-20"
      }`}>
        <div className="flex items-center gap-3">
          <img
            src="/logo_rizimboa.png"
            alt="Rizi Mboa Logo"
            className={`w-auto object-contain drop-shadow-sm transition-all duration-500 ${
              scrolled ? "h-11" : "h-16"
            }`}
          />
          <span className="font-exquisite font-extrabold text-2xl tracking-tighter text-gray-900 dark:text-white hidden sm:block uppercase">
            RIZI <span className="text-exquisite">MBOA</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#menu" className="nav-link text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-pink">Menu</a>
          <a href="#valeurs" className="nav-link text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-pink">Nos Valeurs</a>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/10 transition-colors text-gray-800 dark:text-gray-200"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 shadow-sm shadow-[#25D366]/20"
          >
            <FaWhatsapp size={20} />
            Commander
          </a>
        </div>
      </div>
    </nav>
  );
}
