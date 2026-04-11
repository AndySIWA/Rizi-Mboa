import { defineField, defineType } from 'sanity'

/**
 * Schéma pour un élément du carousel de la bannière
 */
export default defineType({
  name: 'bannerItem',
  title: 'Élément de la Bannière',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '🏷️ Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: '📝 Sous-titre / Description',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: '📸 Image de fond',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
        }),
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: '🔢 Ordre d\'affichage',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
})
