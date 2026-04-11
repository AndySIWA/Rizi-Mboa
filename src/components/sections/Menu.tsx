import { motion } from 'motion/react';
import { ChevronRight, Flame } from 'lucide-react';
import { useSanityData } from '../../hooks/useSanityData';
import { urlFor } from '../../lib/sanityClient';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../../data/constants';

/* ── Skeleton de chargement ─────────────────────────────────────────────── */
function MenuSkeleton() {
  return (
    <div className="lg:col-span-8 space-y-20 animate-pulse">
      {[1, 2].map((catIdx) => (
        <div key={catIdx}>
          <div className="h-8 w-48 bg-gray-200 dark:bg-white/10 rounded-full mb-10" />
          <div className="grid sm:grid-cols-2 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10">
                <div className="h-56 bg-gray-200 dark:bg-white/10" />
                <div className="p-6 space-y-3">
                  <div className="h-5 w-3/4 bg-gray-200 dark:bg-white/10 rounded-full" />
                  <div className="h-4 w-full bg-gray-100 dark:bg-white/5 rounded-full" />
                  <div className="h-4 w-2/3 bg-gray-100 dark:bg-white/5 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Utilitaires ─────────────────────────────────────────────────────────── */
/**
 * Formate le prix pour s'assurer qu'il affiche toujours le symbole "€"
 * @param price - Le prix sous forme de nombre ou de chaîne
 */
const formatPrice = (price: string | number) => {
  if (typeof price === 'number') return `${price} €`;
  if (!price) return '—';
  // Si le symbole € est déjà présent, on retourne tel quel, sinon on l'ajoute
  return price.toString().includes('€') ? price : `${price} €`;
};

/* ── Composant principal ─────────────────────────────────────────────────── */
export default function Menu() {
  const { menuCategories, settings, isLoading, isFromFallback } = useSanityData();

  // Numéro de base pour les liens WhatsApp
  const whatsappNumber = settings?.whatsappNumber ?? WHATSAPP_NUMBER;

  return (
    <section id="menu" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            NOTRE CARTE
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Des recettes généreuses, préparées avec amour et nos sauces secrètes.
          </p>
          {/* Indicateur discret si les données viennent du CMS ou du fallback */}
          {isFromFallback && (
            <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">
              ℹ️ Données locales — connecter Sanity pour les gérer en ligne
            </p>
          )}
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
          {isLoading ? (
            <MenuSkeleton />
          ) : (
            <div className="lg:col-span-8 space-y-20">
              {menuCategories.map((category, catIdx) => (
                <div key={category._id ?? catIdx}>
                  <div className="flex items-center gap-4 mb-10">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <div className="h-px bg-gray-200/50 dark:bg-white/10 flex-1" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {category.items?.map((item, itemIdx) => {
                      // Résolution de l'URL de l'image : Sanity asset ou chemin local (fallback)
                      const imgSrc = item.image?.asset
                        ? urlFor(item.image).width(500).height(333).auto('format').quality(80).url()
                        : (item as any).img ?? '';

                      // Message WhatsApp spécifique au produit
                      // Priorité : Message personnalisé du plat > Message par défaut avec nom du plat > Message global du site
                      const customMessage = item.whatsappMessage 
                        ? item.whatsappMessage 
                        : `Bonjour Rizi Mboa ! Je souhaiterais commander le produit suivant : ${item.name}`;

                      const itemWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

                      return (
                        <motion.div
                          key={item._id ?? itemIdx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIdx * 0.1 }}
                          className="group bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/60 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/30 hover:border-brand-pink/40 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all hover:-translate-y-1 flex flex-col"
                        >
                          <div className="relative h-56 overflow-hidden p-2">
                            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 group-hover:bg-transparent transition-colors z-10 rounded-t-[1.3rem]" />
                            {imgSrc && (
                              <img
                                src={imgSrc}
                                alt={item.image?.alt ?? item.name}
                                className="w-full h-full object-cover rounded-t-[1.3rem] group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                              />
                            )}
                            {/* Badge prix */}
                            <div className="absolute top-6 right-6 z-20 bg-white/80 dark:bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/80 dark:border-white/10 shadow-sm">
                              <span className="font-heading font-bold text-gray-900 dark:text-white">
                                {formatPrice(item.price)}
                              </span>
                            </div>
                            {/* Badge "Populaire" */}
                            {item.isPopular && (
                              <div className="absolute top-6 left-6 z-20 bg-brand-pink/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                                <Flame className="w-3.5 h-3.5 text-white" />
                                <span className="text-xs font-bold text-white">Populaire</span>
                              </div>
                            )}
                            {/* Badge "Indisponible" */}
                            {item.available === false && (
                              <div className="absolute inset-0 z-30 bg-black/50 rounded-t-[1.3rem] flex items-center justify-center">
                                <span className="text-white font-bold text-sm bg-black/60 px-4 py-2 rounded-full">
                                  Temporairement indisponible
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="p-6 flex flex-col flex-1">
                            <h4 className="font-heading text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-brand-pink transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1">
                              {item.description ?? (item as any).desc}
                            </p>
                            {item.available !== false && (
                              <a
                                href={itemWhatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-brand-pink/80 transition-colors mt-auto"
                              >
                                Commander <ChevronRight className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Message Prévention Allergies */}
        {settings?.allergyNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-6 rounded-3xl bg-white/30 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm italic flex items-center justify-center gap-2">
              <span className="text-brand-pink text-2xl">⚠️</span>
              {settings.allergyNotice}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
