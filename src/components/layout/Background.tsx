/**
 * Animated Background Component
 *
 * Crée une ambiance visuelle immersive grâce à plusieurs couches superposées :
 * 1. Fond de base (clair/sombre selon le thème)
 * 2. Grille (bg-grid-black / bg-grid-white) définie dans index.css
 * 3. "Blobs" colorés animés (brand-pink / brand-yellow) avec l'animation CSS `blob`
 * 4. Overlay grain photo pour un rendu cinématique
 * 5. Particules lumineuses pulsantes pour la profondeur
 * Ce composant est positionné en `fixed` et en `z-[-1]` pour rester
 * derrière tous les autres éléments de la page.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#FAFAFA] dark:bg-[#060608] transition-colors duration-700">
      {/* Pattern / Grid */}
      <div className="absolute inset-0 bg-grid-black dark:bg-grid-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Main Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] bg-brand-pink/20 dark:bg-brand-pink/15 rounded-full filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] bg-brand-yellow/20 dark:bg-brand-yellow/10 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-10%] left-[10%] w-[80vw] h-[80vw] max-w-[900px] bg-brand-pink/15 dark:bg-brand-pink/10 rounded-full filter blur-[140px] animate-blob animation-delay-4000"></div>
      
      {/* Extra Accents for Dark Mode */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] bg-brand-yellow/5 dark:bg-brand-yellow/5 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      
      {/* Grainy Photo Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000')", backgroundSize: 'cover', backgroundPosition: 'center' }} />

      {/* Shimmering particles */}
      <div className="absolute top-[15%] left-[15%] w-1 h-1 bg-brand-pink/40 rounded-full animate-pulse-slow shadow-[0_0_10px_brand-pink]"></div>
      <div className="absolute top-[65%] left-[85%] w-1.5 h-1.5 bg-brand-yellow/40 rounded-full animate-pulse-slow animation-delay-3000 shadow-[0_0_12px_brand-yellow]"></div>
      <div className="absolute bottom-[20%] left-[40%] w-1 h-1 bg-brand-pink/30 rounded-full animate-pulse-slow animation-delay-7000 shadow-[0_0_8px_brand-pink]"></div>
      <div className="absolute top-[40%] right-[30%] w-1 h-1 bg-white/20 rounded-full animate-pulse-slow animation-delay-2000"></div>
    </div>
  );
}
