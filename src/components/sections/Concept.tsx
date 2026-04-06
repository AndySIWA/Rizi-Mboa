import { motion } from 'motion/react';

export default function Concept() {
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
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" 
                alt="La préparation artisanale chez Rizi Mboa" 
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
              Le goût qui réunit
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              RAPIDE ET <span className="text-brand-yellow drop-shadow-sm">FAIT MAISON</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Rizi Mboa, c'est l'histoire d'une passion pour les saveurs authentiques, revisitées pour s'adapter à notre vie trépidante. Nous croyons qu'un bon repas se doit d'être à la fois rapide, copieux, et surtout, préparé avec amour.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Que vous soyez fan de riz savoureux avec notre sauce secrète ou amateur de nos sandwichs Mboa, chaque bouchée est une explosion d'intensité. Mangez Rizi Mboa, et vous reviendrez toujours !
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
