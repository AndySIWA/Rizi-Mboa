/**
 * Navigation Bar Component
 * 
 * Gère la navigation principale, le logo et le sélecteur de mode sombre.
 * Utilise un effet de flou (backdrop-blur) pour un rendu premium.
 */
import { Sun, Moon } from 'lucide-react';
/**
 * Floating WhatsApp CTA
 * 
 * Bouton d'action flottant qui apparaît après un certain seuil de scroll
 * pour faciliter la prise de commande rapide.
 */
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK } from '../../data/constants';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 dark:bg-white/5 backdrop-blur-xl border-b border-white/60 dark:border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo_rizimboa.png"
            alt="Rizi Mboa Logo"
            className="h-14 w-auto object-contain drop-shadow-sm"
          />
          <span className="font-exquisite font-extrabold text-2xl tracking-tighter text-gray-900 dark:text-white hidden sm:block uppercase">
            RIZI <span className="text-exquisite">MBOA</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-pink transition-colors">Menu</a>
          <a href="#valeurs" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-pink transition-colors">Nos Valeurs</a>
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
