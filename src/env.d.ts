/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_PROJECT_ID: string
  readonly VITE_SANITY_DATASET: string
  // Ajoutez d'autres variables d'environnement ici si besoin
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
