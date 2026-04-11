/**
 * Footer Component
 *
 * Pied de page contenant les informations de contact (téléphone, WhatsApp),
 * les réseaux sociaux (Snapchat, Instagram) et les crédits de l'application.
 * Les données de contact (numéro, lien WhatsApp) sont centralisées dans data/constants.ts.
 */
import { Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaSnapchatGhost, FaInstagram } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../../data/constants';
import { useSanityData } from '../../hooks/useSanityData';

export default function Footer() {
  const { settings, globalWhatsappLink } = useSanityData();
  const currentNumber = settings?.whatsappNumber ?? WHATSAPP_NUMBER;
  
  // Formatage simple pour affichage (ex: +33 7 48 63 41 64)
  const displayPhone = currentNumber.startsWith('33') 
    ? `+33 ${currentNumber.substring(2).replace(/(.{2})/g, '$1 ').trim()}` 
    : `+${currentNumber}`;

  return (
    <footer className="bg-white/30 dark:bg-white/5 backdrop-blur-xl pt-20 pb-10 border-t border-white/60 dark:border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <span className="font-heading font-black text-3xl tracking-tighter text-gray-900 dark:text-white mb-6 block">
              RIZI <span className="text-brand-pink">MBOA</span>
            </span>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              L'intensité du goût livrée directement chez vous. Fast-food moderne aux saveurs authentiques.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gray-900 dark:text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:+${currentNumber}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-brand-pink transition-colors">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span>{displayPhone}</span>
                </a>
              </li>
              <li>
                <a href={globalWhatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-[#25D366] transition-colors">
                  <span className="text-gray-400"><FaWhatsapp size={20} /></span>
                  <span>Commander sur WhatsApp</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>Livraison IDF</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gray-900 dark:text-white">Réseaux Sociaux</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://snapchat.com/add/karenmboa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-[#FFFC00] transition-colors">
                  <span className="text-gray-400"><FaSnapchatGhost size={20} /></span>
                  <span>@karenmboa</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-[#E1306C] transition-colors">
                  <span className="text-gray-400"><FaInstagram size={20} /></span>
                  <span>@rizimboa</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rizi Mboa. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm font-medium">
            L'intensité du goût.
          </p>
        </div>
      </div>
    </footer>
  );
}
