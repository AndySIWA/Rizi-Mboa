import { motion } from 'motion/react';
import { VALUES } from '../../data/values';

export default function Values() {
  return (
    <section id="valeurs" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {VALUES.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/40 dark:bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/60 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/30 hover:border-brand-pink/30 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm border border-white/80 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-pink/30 transition-all">
                {value.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
