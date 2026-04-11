import { motion } from 'motion/react';
import { useSanityData } from '../../hooks/useSanityData';
import { urlFor } from '../../lib/sanityClient';

export default function Concept() {
  const { settings } = useSanityData();

  // Données dynamiques avec fallbacks
  const concept = settings?.conceptGroup;
  
  const badge = concept?.badge || "Le goût qui réunit";
  const title = concept?.title || "RAPIDE ET | FAIT MAISON";
  const [titlePart1, titlePart2] = title.split('|').map(s => s.trim());
  
  const desc1 = concept?.description1 || "Rizi Mboa, c'est l'histoire d'une passion pour les saveurs authentiques, revisitées pour s'adapter à notre vie trépidante. Nous croyons qu'un bon repas se doit d'être à la fois rapide, copieux, et surtout, préparé avec amour.";
  const desc2 = concept?.description2 || "Que vous soyez fan de riz savoureux avec notre sauce secrète ou amateur de nos sandwichs Mboa, chaque bouchée est une explosion d'intensité. Mangez Rizi Mboa, et vous reviendrez toujours !";
  
  const imgSrc = concept?.image?.asset
    ? urlFor(concept.image).width(800).auto('format').quality(80).url()
    : "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800";

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 dark:border-white/10">
              <img 
                src={imgSrc} 
                alt={concept?.image?.alt || "La préparation artisanale chez Rizi Mboa"} 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/10 text-brand-pink font-bold text-sm mb-6">
              {badge}
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              {titlePart1} {titlePart2 && <span className="text-brand-yellow drop-shadow-sm">{titlePart2}</span>}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {desc1}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {desc2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
