import { StructureBuilder } from 'sanity/structure'

/**
 * Structure personnalisée du Studio Sanity
 * Simplifie l'interface pour la cliente en organisant les sections clairement.
 * "siteSettings" est un singleton (une seule entrée possible).
 */
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('🍚 Rizi Mboa')
    .items([
      // ─── Menu ─────────────────────────────────────────────────────────────
      S.listItem()
        .title('📋 Mon Menu')
        .child(
          S.list()
            .title('Menu')
            .items([
              S.documentTypeListItem('menuCategory').title('📂 Catégories'),
              S.documentTypeListItem('menuItem').title('🍽️ Plats'),
            ])
        ),

      S.divider(),

      // ─── Bannière ──────────────────────────────────────────────────────────
      S.documentTypeListItem('bannerItem').title('🖼️ Bannière'),

      S.divider(),

      // ─── Valeurs ──────────────────────────────────────────────────────────
      S.documentTypeListItem('brandValue').title('⭐ Nos Valeurs'),

      S.divider(),

      // ─── Paramètres singleton ─────────────────────────────────────────────
      S.listItem()
        .title('⚙️ Paramètres du site')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings') // Singleton : toujours le même document
            .title('Paramètres du site')
        ),
    ])
