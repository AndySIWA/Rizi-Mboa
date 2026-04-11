import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

/**
 * Client Sanity configuré pour le projet Rizi Mboa.
 * Les variables d'environnement VITE_SANITY_* sont définies dans .env
 */
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Date stable de l'API
  useCdn: true, // Utilise le CDN Sanity pour les lectures (plus rapide)
})

/**
 * Helper pour construire les URLs d'images Sanity avec transformations automatiques.
 * Usage : urlFor(image).width(800).format('webp').url()
 */
const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
