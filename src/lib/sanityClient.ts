import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

/**
 * Client Sanity configuré pour le projet Rizi Mboa.
 * Les variables d'environnement VITE_SANITY_* sont définies dans .env
 * On utilise 'fallback' si l'ID est manquant pour éviter que Sanity ne fasse crasher l'app (page blanche).
 */
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

export const sanityClient = createClient({
  projectId: projectId || 'fallback_id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Date stable de l'API
  useCdn: true, // Utilise le CDN Sanity pour les lectures (plus rapide)
})

/**
 * Helper pour construire les URLs d'images Sanity avec transformations automatiques.
 * Usage : urlFor(image).width(800).format('webp').url()
 */
// createImageUrlBuilder ne marchera pas avec un faux projectId si on l'appelle réelement,
// mai il ne plantera pas à l'initialisation.
const builder = projectId ? createImageUrlBuilder(sanityClient) : null

export function urlFor(source: SanityImageSource) {
  // En cas d'absence de Sanity, ce code ne devrait être jamais appelé de toute façon 
  // car l'appli basculera sur le fallback statique local.
  // On retourne une chaîne vide silencieusement.
  if (!builder) {
    return { url: () => '', width: () => ({ url: () => '', auto: () => ({ url: () => '', quality: () => ({ url: () => '' }) }) }) } as any;
  }
  return builder.image(source)
}
