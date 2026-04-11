import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useSanityData } from '../../hooks/useSanityData';

export default function Delivery() {
  const { globalWhatsappLink } = useSanityData();
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white/80 dark:border-white/10 shadow-2xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-auto md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-white/50 dark:border-white/10"
          >
            <img src="/mockup_01.PNG" alt="Sac de livraison Rizi Mboa" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white leading-tight">
              LIVRAISON & <br />
              <span className="text-brand-pink">À EMPORTER</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Où que vous soyez en Île-de-France, la chaleur et l'intensité du goût arrivent directement chez vous. Un packaging soigné pour que vos plats restent chauds comme à la maison.
            </p>
            <a
              href={globalWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all items-center gap-2 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Commander maintenant
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
