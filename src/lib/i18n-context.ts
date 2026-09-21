import { createContext, useContext } from "react"

import type { Lang } from "../data"

export type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export function useLanguage() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}
