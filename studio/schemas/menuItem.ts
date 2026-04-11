import { defineField, defineType } from 'sanity'

/**
 * Schéma d'un Plat individuel du menu
 * Représente un article dans une catégorie (ex: "Riz au Porc", "Bissap Maison")
 */
export default defineType({
  name: 'menuItem',
  title: 'Plat',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '🍽️ Nom du plat',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(100),
    }),
    defineField({
      name: 'description',
      title: '📝 Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300),
    }),
    defineField({
      name: 'price',
      title: '💰 Prix (nombre seul)',
      description: 'Le symbole € est ajouté automatiquement sur le site.',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'image',
      title: '📸 Photo du plat',
      type: 'image',
      options: {
        hotspot: true, // Permet de choisir le point focal de l'image
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif (pour accessibilité)',
        }),
      ],
    }),
    defineField({
      name: 'available',
      title: '✅ Disponible à la commande',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isPopular',
      title: '🔥 Plat populaire (badge mis en avant)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'whatsappMessage',
      title: '💬 Message WhatsApp personnalisé',
      description: 'Si vide, un message sera automatiquement généré : "Bonjour, je souhaiterais commander le [Nom du plat]".',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
    },
  },
})
