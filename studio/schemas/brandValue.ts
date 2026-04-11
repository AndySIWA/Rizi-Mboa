import { defineField, defineType } from 'sanity'

/**
 * Schéma d'une Valeur de la marque Rizi Mboa
 * ex: "Rapidité", "Générosité", "Secret de famille"
 */
export default defineType({
  name: 'brandValue',
  title: 'Valeur de la marque',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '🏷️ Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '📝 Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: '💡 Icône (nom Lucide React)',
      type: 'string',
      description: 'Nom de l\'icône sur lucide.dev — ex: "Clock", "Heart", "ChefHat"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: '🔢 Ordre d\'affichage',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
