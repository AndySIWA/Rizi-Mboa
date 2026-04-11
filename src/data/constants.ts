export const WHATSAPP_NUMBER = "33748634164";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20Rizi%20Mboa%20!%20Je%20souhaite%20passer%20une%20commande.`;

/**
 * Données statiques de secours (fallback).
 * Utilisées si Sanity n'est pas configuré ou si l'API est indisponible.
 * Le site reste toujours fonctionnel grâce à ces valeurs par défaut.
 */
export const SITE_SETTINGS_FALLBACK = {
  siteName: 'Rizi Mboa',
  tagline: 'Le Goût Authentique du Pays',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: 'Bonjour Rizi Mboa ! Je souhaite passer une commande.',
  deliveryZone: 'Île-de-France',
  deliveryTime: '30-45 min',
  metaDescription: 'Rizi Mboa — Cuisine africaine authentique livrée en Île-de-France.',
  allergyNotice: 'En cas d\'allergies alimentaires, merci de nous contacter directement lors de votre commande.',
}
