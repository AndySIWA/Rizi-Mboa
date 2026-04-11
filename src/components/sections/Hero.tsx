import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useSanityData } from '../../hooks/useSanityData';
import { urlFor } from '../../lib/sanityClient';

export default function Hero() {
  const { settings, globalWhatsappLink } = useSanityData();

  // Valeurs par défaut (fallback)
  const title = settings?.heroGroup?.heroTitle || "L'INTENSITÉ | DU GOÛT";
  const [titlePart1, titlePart2] = title.split('|').map(s => s.trim());
  
  const subtitle = settings?.heroGroup?.heroSubtitle || "Spécialités africaines revisitées. La chaleur du terroir combinée à une efficacité urbaine. Découvrez nos riz savoureux et sandwichs mboa.";
  
  const imgSrc = settings?.heroGroup?.heroImage?.asset
    ? urlFor(settings.heroGroup.heroImage).width(800).auto('format').quality(80).url()
    : "/logo_rizimboa.png";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 mb-6 shadow-sm">
              <MapPin className="w-4 h-4 text-brand-pink" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Livraison partout en Île-de-France 🚚💨</span>
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-black leading-[1.1] mb-6 text-gray-900 dark:text-white">
              {titlePart1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-yellow">
                {titlePart2}
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={globalWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-base md:text-lg shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1"
              >
                <FaWhatsapp size={24} />
                Commander sur WhatsApp
              </a>
              <a
                href="#menu"
                className="bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-white/70 dark:text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 text-lg border border-white/60 dark:border-white/10 shadow-sm hover:shadow-md"
              >
                Voir le menu
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-brand-pink/20 blur-[100px] rounded-full" />
              <img
                src={imgSrc}
                alt={settings?.heroGroup?.heroImage?.alt || "Rizi Mboa Logo"}
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
