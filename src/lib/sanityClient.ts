import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

/**
 * Client Sanity configuré pour le projet Rizi Mboa.
 * Les variables d'environnement VITE_SANITY_* sont définies dans .env
 */
const rawProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
// On nettoie les espaces et on vérifie que le format est valide (a-z, 0-9, -)
const projectId = rawProjectId?.trim();
const isValidId = projectId && /^[a-z0-9-]+$/.test(projectId);

export const sanityClient = createClient({
  projectId: isValidId ? projectId : 'placeholder', // Évite le crash de validation au chargement
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// Indicateur pour savoir si le client est réellement configuré
export const isSanityConfigured = !!isValidId;


/**
 * Helper pour construire les URLs d'images Sanity avec transformations automatiques.
 * Usage : urlFor(image).width(800).format('webp').url()
 */
const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
