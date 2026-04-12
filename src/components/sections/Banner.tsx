import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSanityData } from '../../hooks/useSanityData';
import { urlFor } from '../../lib/sanityClient';

const FALLBACK_BANNER_IMAGES = [
  {
    url: '/banner/restaurant.jpg',
    title: 'Une Expérience Unique',
    subtitle: 'La chaleur de l\'Afrique au cœur de la ville'
  },
  {
    url: '/banner/brand.png',
    title: 'L\'Intensité du Goût',
    subtitle: 'Une identité forte, des saveurs authentiques'
  },
  {
    url: '/banner/serving.jpg',
    title: 'Prêt à Déguster',
    subtitle: 'Rapidité, tradition et gourmandise'
  }
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const { bannerItems, isLoading } = useSanityData();

  // On utilise les données de Sanity si disponibles, sinon on prend le fallback
  const displayItems = bannerItems.length > 0
    ? bannerItems.map(item => ({
      url: urlFor(item.image).width(1600).height(900).auto('format').quality(80).url(),
      title: item.title,
      subtitle: item.subtitle
    }))
    : FALLBACK_BANNER_IMAGES;

  useEffect(() => {
    if (displayItems.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % displayItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayItems.length]);

  const next = () => setIndex((prev) => (prev + 1) % displayItems.length);
  const prev = () => setIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);

  if (isLoading && bannerItems.length === 0) {
    return (
      <div className="w-full h-[500px] md:h-[600px] bg-black animate-pulse flex items-center justify-center">
        <div className="text-white/20 font-heading text-2xl">Chargement de la bannière...</div>
      </div>
    );
  }

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
          <img
            src={displayItems[index].url}
            alt={displayItems[index].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-end justify-start p-8 md:p-16">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <h3 className="font-heading text-brand-pink font-bold tracking-[0.2em] text-sm md:text-base mb-2 uppercase drop-shadow-2xl">
                {displayItems[index].title}
              </h3>
              <h2 className="font-heading text-2xl md:text-4xl font-black text-white leading-tight mb-8 drop-shadow-2xl">
                {displayItems[index].subtitle}
              </h2>

              <div className="flex justify-start gap-3">
                {displayItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${i === index ? 'w-10 bg-brand-pink' : 'w-3 bg-white/30 hover:bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all text-white/50 hover:text-white group"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all text-white/50 hover:text-white group"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Seamless transition indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 z-40 overflow-hidden bg-white/10">
        <motion.div
          key={index}
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-brand-pink"
        />
      </div>
    </section>
  );
}
