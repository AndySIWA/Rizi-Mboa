import { defineField, defineType } from 'sanity'

/**
 * Schéma des Paramètres Globaux du Site
 * Document singleton (un seul dans la base) pour les infos globales du site.
 * La cliente peut modifier le numéro WhatsApp, le message d'accueil, etc.
 */
export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du Site',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: '🏷️ Nom du site',
      type: 'string',
      initialValue: 'Rizi Mboa',
    }),
    defineField({
      name: 'tagline',
      title: '✨ Slogan / Accroche',
      type: 'string',
      description: 'Phrase courte qui résume le concept (affichée dans le hero)',
    }),
    defineField({
      name: 'whatsappNumber',
      title: '📱 Numéro WhatsApp (sans + ni espaces)',
      type: 'string',
      description: 'Ex: 33748634164 (code pays inclus)',
      validation: Rule => Rule.required().regex(/^\d{10,15}$/, {
        name: 'phone',
        invert: false,
      }).error('Format invalide. Ex: 33748634164'),
      initialValue: '33748634164',
    }),
    defineField({
      name: 'whatsappMessage',
      title: '💬 Message WhatsApp pré-rempli',
      type: 'string',
      description: 'Le message que le client verra quand il clique sur "Commander"',
      initialValue: 'Bonjour Rizi Mboa ! Je souhaite passer une commande.',
    }),
    defineField({
      name: 'deliveryZone',
      title: '🚚 Zone de livraison',
      type: 'string',
      description: 'Affiché dans la section livraison',
      initialValue: 'Île-de-France',
    }),
    defineField({
      name: 'deliveryTime',
      title: '⏱️ Temps de livraison moyen',
      type: 'string',
      description: 'Ex: 30-45 min',
    }),
    defineField({
      name: 'allergyNotice',
      title: '⚠️ Prévention Allergies',
      type: 'text',
      rows: 2,
      description: 'Message d\'avertissement affiché sous le menu',
      initialValue: 'En cas d\'allergies ou de régimes alimentaires spécifiques, veuillez nous contacter directement avant de passer commande.',
    }),
    defineField({
      name: 'metaDescription',
      title: '🔍 Description SEO (pour Google)',
      type: 'text',
      rows: 2,
      description: '150-160 caractères max recommandés',
    }),
    defineField({
      name: 'heroGroup',
      title: '🏠 Section d\'accueil (Hero)',
      type: 'object',
      fields: [
        defineField({
          name: 'heroTitle',
          title: 'Titres principal',
          type: 'string',
          description: 'Utilisez "|" pour séparer la ligne colorée. Ex: L\'INTENSITÉ | DU GOÛT',
          initialValue: 'L\'INTENSITÉ | DU GOÛT',
        }),
        defineField({
          name: 'heroSubtitle',
          title: 'Sous-titre',
          type: 'text',
          rows: 3,
          initialValue: 'Spécialités africaines revisitées. La chaleur du terroir combinée à une efficacité urbaine. Découvrez nos riz savoureux et sandwichs mboa.',
        }),
        defineField({
          name: 'heroImage',
          title: 'Image / Logo principal',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Texte alternatif' })
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'siteName' },
    prepare({ title }) {
      return { title: `⚙️ ${title}` }
    },
  },
})
