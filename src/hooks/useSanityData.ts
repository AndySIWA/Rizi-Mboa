import { useState, useEffect } from 'react'
import { sanityClient, isSanityConfigured } from '../lib/sanityClient'
import { menuQuery, settingsQuery, valuesQuery, bannerQuery } from '../lib/queries'

import { MENU_CATEGORIES } from '../data/menu'
import { SITE_SETTINGS_FALLBACK, WHATSAPP_LINK } from '../data/constants'

/* ── Types ───────────────────────────────────────────────────────────────── */

export interface SanityImage {
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number }
  alt?: string
}

export interface SanityMenuItem {
  _id: string
  name: string
  description: string
  price: string
  available: boolean
  isPopular?: boolean
  whatsappMessage?: string
  image?: SanityImage
}

export interface SanityMenuCategory {
  _id: string
  title: string
  order: number
  items: SanityMenuItem[]
}

export interface SanitySettings {
  siteName: string
  tagline?: string
  whatsappNumber: string
  whatsappMessage?: string
  deliveryZone?: string
  deliveryTime?: string
  allergyNotice?: string
  metaDescription?: string
  heroGroup?: {
    heroTitle?: string
    heroSubtitle?: string
    heroImage?: SanityImage
  }
}

export interface SanityBannerItem {
  _id: string
  title: string
  subtitle: string
  image: SanityImage
  order: number
}

export interface SanityBrandValue {
  _id: string
  title: string
  description: string
  icon: string
  order: number
}

/* ── Hook principal ──────────────────────────────────────────────────────── */

interface UseSanityDataReturn {
  menuCategories: SanityMenuCategory[]
  settings: SanitySettings | null
  brandValues: SanityBrandValue[]
  bannerItems: SanityBannerItem[]
  isLoading: boolean
  error: string | null
  isFromFallback: boolean
  globalWhatsappLink: string
}

/**
 * Hook React qui charge toutes les données depuis Sanity.
 * En cas d'erreur ou si Sanity n'est pas configuré, utilise les données
 * statiques locales comme fallback (le site reste fonctionnel).
 */
export function useSanityData(): UseSanityDataReturn {
  const [menuCategories, setMenuCategories] = useState<SanityMenuCategory[]>([])
  const [settings, setSettings] = useState<SanitySettings | null>(null)
  const [brandValues, setBrandValues] = useState<SanityBrandValue[]>([])
  const [bannerItems, setBannerItems] = useState<SanityBannerItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFromFallback, setIsFromFallback] = useState(false)

  // Le client est-il prêt à l'emploi ?

  useEffect(() => {
    // Si Sanity n'est pas encore configuré, on utilise les données statiques
    if (!isSanityConfigured) {
      console.info('[Sanity] Client non configuré — utilisation des données statiques.')

      setMenuCategories(MENU_CATEGORIES as unknown as SanityMenuCategory[])
      setSettings(SITE_SETTINGS_FALLBACK)
      setIsFromFallback(true)
      setIsLoading(false)
      return
    }


    let cancelled = false

    async function fetchAll() {
      setIsLoading(true)
      setError(null)
      try {
        const [menu, siteConfig, values, banner] = await Promise.all([
          sanityClient.fetch<SanityMenuCategory[]>(menuQuery),
          sanityClient.fetch<SanitySettings>(settingsQuery),
          sanityClient.fetch<SanityBrandValue[]>(valuesQuery),
          sanityClient.fetch<SanityBannerItem[]>(bannerQuery),
        ])

        if (cancelled) return

        setMenuCategories(menu ?? [])
        setSettings(siteConfig ?? SITE_SETTINGS_FALLBACK)
        setBrandValues(values ?? [])
        setBannerItems(banner ?? [])
        setIsFromFallback(false)
      } catch (err) {
        if (cancelled) return
        console.error('[Sanity] Erreur de chargement :', err)
        setError('Impossible de charger les données depuis le CMS.')
        // Fallback sur les données statiques pour que le site reste fonctionnel
        setMenuCategories(MENU_CATEGORIES as unknown as SanityMenuCategory[])
        setSettings(SITE_SETTINGS_FALLBACK)
        setIsFromFallback(true)
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    fetchAll()
    return () => { cancelled = true }
  }, [projectId])

  const globalWhatsappLink = settings
    ? `https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(settings.whatsappMessage || "Bonjour Rizi Mboa ! Je souhaite passer une commande.")}`
    : WHATSAPP_LINK;

  return { menuCategories, settings, brandValues, bannerItems, isLoading, error, isFromFallback, globalWhatsappLink }
}
