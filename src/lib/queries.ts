/**
 * Requêtes GROQ pour récupérer les données du CMS Sanity.
 * GROQ (Graph-Relational Object Queries) est le langage de requête de Sanity.
 * 
 * Documentation : https://www.sanity.io/docs/groq
 */

/**
 * Récupère toutes les catégories du menu, triées par ordre d'affichage,
 * avec les plats associés (uniquement ceux disponibles).
 */
export const menuQuery = `
  *[_type == "menuCategory"] | order(order asc) {
    _id,
    title,
    order,
    "items": items[]->{
      _id,
      name,
      description,
      price,
      available,
      isPopular,
      whatsappMessage,
      image {
        asset->,
        hotspot,
        alt
      }
    }
  }
`

/**
 * Récupère le singleton des paramètres du site.
 * [0] prend le premier (et unique) document correspondant.
 */
export const settingsQuery = `
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    whatsappNumber,
    whatsappMessage,
    deliveryZone,
    deliveryTime,
    allergyNotice,
    metaDescription,
    heroGroup {
      heroTitle,
      heroSubtitle,
      heroImage {
        asset->,
        hotspot,
        alt
      }
    },
    conceptGroup {
      badge,
      title,
      description1,
      description2,
      image {
        asset->,
        hotspot,
        alt
      }
    }
  }
`

/**
 * Récupère tous les éléments de la bannière carousel.
 */
export const bannerQuery = `
  *[_type == "bannerItem"] | order(order asc) {
    _id,
    title,
    subtitle,
    image {
      asset->,
      hotspot,
      alt
    },
    order
  }
`

/**
 * Récupère les valeurs de la marque, triées par ordre.
 */
export const valuesQuery = `
  *[_type == "brandValue"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
`
