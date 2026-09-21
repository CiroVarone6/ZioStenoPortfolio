import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"

import { copy, type Lang } from "../data"
import { I18nContext } from "./i18n-context"

const STORAGE_KEY = "lang"

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "it") return stored
  } catch {
    // localStorage may be unavailable
  }
  return "en"
}

function applyDocumentLang(lang: Lang) {
  document.documentElement.lang = lang
  document.title = copy.meta.title[lang]

  const description = copy.meta.description[lang]
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute("content", description)

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute("content", copy.meta.title[lang])

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute("content", description)

  const ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) {
    ogLocale.setAttribute("content", lang === "it" ? "it_IT" : "en_US")
  }

  const ogImage = document.querySelector('meta[property="og:image"]')
  if (ogImage) ogImage.setAttribute("content", copy.images.hero)

  const icon = document.querySelector('link[rel="icon"]')
  if (icon) icon.setAttribute("href", copy.images.favicon)
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  useEffect(() => {
    applyDocumentLang(lang)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage may be unavailable
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
  }, [])

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
