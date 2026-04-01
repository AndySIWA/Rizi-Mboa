/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Heart, ChefHat, ChevronRight } from 'lucide-react';
import { FaSnapchatGhost, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = "33748634164";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20Rizi%20Mboa%20!%20Je%20souhaite%20passer%20une%20commande.`;

const MENU_CATEGORIES = [
  {
    title: "Nos Riz Savoureux",
    items: [
      {
        name: "Riz au Porc",
        desc: "Riz parfumé accompagné de morceaux de porc tendres, nappé de notre sauce secrète maison.",
        price: "12€",
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Riz au Poulet",
        desc: "Poulet juteux et riz délicatement épicé, relevé par notre sauce secrète unique.",
        price: "12€",
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Fried Rice",
        desc: "Riz sauté aux saveurs authentiques, au choix avec boulettes de viande ou poulet grillé.",
        price: "13€",
        img: "https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    title: "Nos Hotdogs Signature",
    items: [
      {
        name: "Hotdog Poisson haché",
        desc: "Savoureux, bien épicé et généreusement garni de poisson haché et de sauce.",
        price: "8€",
        img: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Hotdog Boulettes au bœuf",
        desc: "Boulettes fondantes avec une sauce maison irrésistible.",
        price: "8€",
        img: "https://images.unsplash.com/photo-1599599810069-8ed171d50c49?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Hotdog Jazz",
        desc: "Le mix signature Mboa, plein de goût et de surprises.",
        price: "9€",
        img: "https://images.unsplash.com/photo-1541214113241-212e8d2ce6b4?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Hotdog Omelette spaghettis",
        desc: "Gourmand et copieux, le combo qui cale bien avec spaghettis et omelette.",
        price: "9€",
        img: "https://images.unsplash.com/photo-1627308595229-7830f5c922b4?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    title: "Nos Boissons",
    items: [
      {
        name: "Bissap Maison (Foléré)",
        desc: "Fait par nos soins, rafraîchissant et authentique.",
        price: "3€",
        img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Gamme Top & Djino",
        desc: "Ananas, Pamplemousse, Grenadine, Djino, Coca-Cola.",
        price: "2.5€",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];

const VALUES = [
  {
    icon: <Clock className="w-8 h-8 text-brand-pink" />,
    title: "Rapidité",
    desc: "Livraison efficace partout en Île-de-France."
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-pink" />,
    title: "Générosité",
    desc: "Des plats complets, savoureux et rassasiants."
  },
  {
    icon: <ChefHat className="w-8 h-8 text-brand-pink" />,
    title: "Secret de famille",
    desc: "Nos fameuses sauces secrètes inimitables."
  }
];

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-brand-pink selection:text-white pb-24 md:pb-0 text-gray-900 overflow-hidden">
      
      {/* Enriched Glassmorphism Background */}
      <div className="fixed inset-0 z-[-1] bg-[#FAFAFA]">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-brand-pink/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-brand-yellow/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-brand-pink/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-xl border-b border-white/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://storage.googleapis.com/aistudio-janus-prod-us-central1/2n60t0z8p142/1.png" 
              alt="Rizi Mboa Logo" 
              className="h-14 w-auto object-contain drop-shadow-sm"
            />
            <span className="font-heading font-black text-2xl tracking-tighter text-gray-900 hidden sm:block">
              RIZI <span className="text-brand-pink">MBOA</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-sm font-medium text-gray-600 hover:text-brand-pink transition-colors">Menu</a>
            <a href="#valeurs" className="text-sm font-medium text-gray-600 hover:text-brand-pink transition-colors">Nos Valeurs</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 shadow-sm shadow-[#25D366]/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              Commander
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 mb-6 shadow-sm">
                <MapPin className="w-4 h-4 text-brand-pink" />
                <span className="text-sm font-medium text-gray-800">Livraison partout en Île-de-France 🚚💨</span>
              </div>
              <h1 className="font-heading text-5xl lg:text-7xl font-black leading-[1.1] mb-6 text-gray-900">
                L'INTENSITÉ <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-yellow">
                  DU GOÛT
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Spécialités africaines revisitées. La chaleur du terroir combinée à une efficacité urbaine. Découvrez nos riz savoureux et hotdogs signatures.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 text-lg shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  Commander sur WhatsApp
                </a>
                <a 
                  href="#menu"
                  className="bg-white/50 backdrop-blur-md hover:bg-white/70 text-gray-900 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 text-lg border border-white/60 shadow-sm hover:shadow-md"
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
              <div className="relative w-full aspect-square max-w-md mx-auto bg-black rounded-[3rem] p-4 shadow-2xl overflow-hidden border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-brand-pink/20 blur-[100px] rounded-full" />
                <img 
                  src="https://storage.googleapis.com/aistudio-janus-prod-us-central1/2n60t0z8p142/1.png" 
                  alt="Rizi Mboa Logo" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl scale-110"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-xl shadow-black/5 hover:border-brand-pink/30 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-pink/30 transition-all">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-4 text-gray-900">NOTRE CARTE</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Des recettes généreuses, préparées avec amour et nos sauces secrètes.</p>
          </div>

          <div className="space-y-24">
            {MENU_CATEGORIES.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h3>
                  <div className="h-px bg-gray-200/50 flex-1" />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <motion.div 
                      key={itemIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="group bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/60 shadow-xl shadow-black/5 hover:border-brand-pink/40 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all hover:-translate-y-1 flex flex-col"
                    >
                      <div className="relative h-56 overflow-hidden p-2">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 rounded-t-[1.3rem]" />
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-t-[1.3rem] group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-6 right-6 z-20 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/80 shadow-sm">
                          <span className="font-heading font-bold text-gray-900">{item.price}</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h4 className="font-heading text-xl font-bold mb-2 text-gray-900 group-hover:text-brand-pink transition-colors">{item.name}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{item.desc}</p>
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
      </section>

      {/* Footer */}
      <footer className="bg-white/30 backdrop-blur-xl pt-20 pb-10 border-t border-white/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <span className="font-heading font-black text-3xl tracking-tighter text-gray-900 mb-6 block">
                RIZI <span className="text-brand-pink">MBOA</span>
              </span>
              <p className="text-gray-600 mb-6 max-w-sm">
                L'intensité du goût livrée directement chez vous. Fast-food moderne aux saveurs authentiques.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-gray-900">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-pink transition-colors">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span>07 48 63 41 64</span>
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[#25D366] transition-colors">
                    <FaWhatsapp className="w-5 h-5 text-gray-400" />
                    <span>Commander sur WhatsApp</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span>Livraison IDF</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-gray-900">Réseaux Sociaux</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://snapchat.com/add/karenmboa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[#FFFC00] transition-colors">
                    <FaSnapchatGhost className="w-5 h-5 text-gray-400" />
                    <span>@karenmboa</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-[#E1306C] transition-colors">
                    <FaInstagram className="w-5 h-5 text-gray-400" />
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

      {/* Floating Mobile WhatsApp Button */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-50">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/20 active:scale-95 transition-transform"
        >
          <FaWhatsapp className="w-6 h-6" />
          Commander sur WhatsApp
        </a>
      </div>

      {/* Floating Desktop WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-transform"
        aria-label="Commander sur WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>

    </div>
  );
}
