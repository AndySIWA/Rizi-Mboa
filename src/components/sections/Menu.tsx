import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES } from '../../data/menu';
import { WHATSAPP_LINK } from '../../data/constants';

export default function Menu() {
  return (
    <section id="menu" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">NOTRE CARTE</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Des recettes généreuses, préparées avec amour et nos sauces secrètes.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Poster Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="sticky top-28 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white dark:border-zinc-800 z-10 rotate-1 hover:rotate-0 transition-transform duration-500">
              <img src="/Menu_Rizi_Mboa.jpg" alt="Menu Rizi Mboa Stylisé" className="w-full h-auto object-cover" />
            </div>
          </motion.div>

          {/* Menu Items Column */}
          <div className="lg:col-span-8 space-y-20">
            {MENU_CATEGORIES.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  <div className="h-px bg-gray-200/50 dark:bg-white/10 flex-1" />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="group bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/60 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/30 hover:border-brand-pink/40 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all hover:-translate-y-1 flex flex-col"
                    >
                      <div className="relative h-56 overflow-hidden p-2">
                        <div className="absolute inset-0 bg-black/5 dark:bg-white/5 group-hover:bg-transparent transition-colors z-10 rounded-t-[1.3rem]" />
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-t-[1.3rem] group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-6 right-6 z-20 bg-white/80 dark:bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/80 dark:border-white/10 shadow-sm">
                          <span className="font-heading font-bold text-gray-900 dark:text-white">{item.price}</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h4 className="font-heading text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-brand-pink transition-colors">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1">{item.desc}</p>
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-brand-pink/80 transition-colors mt-auto"
                        >
                          Commander <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
