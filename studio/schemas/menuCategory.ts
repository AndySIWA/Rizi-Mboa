import { defineField, defineType } from 'sanity'

/**
 * Schéma d'une Catégorie du menu
 * ex: "Nos Riz Savoureux", "Nos Sandwichs Mboa", "Nos Boissons"
 */
export default defineType({
  name: 'menuCategory',
  title: 'Catégorie du Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '📂 Nom de la catégorie',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: '🔢 Ordre d\'affichage (1 = en premier)',
      type: 'number',
      initialValue: 1,
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'items',
      title: '🍽️ Plats de cette catégorie',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'menuItem' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'order',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `Ordre d'affichage : ${subtitle}`,
      }
    },
  },
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
