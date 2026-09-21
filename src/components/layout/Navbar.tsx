import { useEffect, useState, type MouseEvent } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"

import { copy, navLinks, tx, type Lang } from "../../data"
import { useLanguage } from "../../lib/i18n-context"
import { lenis, scrollToSection } from "../../lib/lenis"

const LANGUAGES: Lang[] = ["en", "it"]

const LanguageSwitcher = ({ id }: { id: string }) => {
  const { lang, setLang } = useLanguage()

  return (
    <div
      id={id}
      role="group"
      aria-label={tx(lang, copy.nav.language)}
      className="flex items-center gap-1"
    >
      {LANGUAGES.map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && (
            <span className="text-slate-600" aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`min-h-11 px-2.5 text-sm uppercase tracking-[0.2em] transition ${
              lang === code
                ? "text-white"
                : "text-slate-500 hover:text-blue-400"
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  )
}

const SCROLL_REVEAL_PX = 40

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { lang } = useLanguage()

  useEffect(() => {
    const reveal = () => setVisible(true)

    if (lenis.scroll > SCROLL_REVEAL_PX || window.scrollY > SCROLL_REVEAL_PX) {
      reveal()
      return
    }

    const onScroll = ({ scroll }: { scroll: number }) => {
      if (scroll > SCROLL_REVEAL_PX) {
        reveal()
        lenis.off("scroll", onScroll)
      }
    }

    lenis.on("scroll", onScroll)

    return () => {
      lenis.off("scroll", onScroll)
    }
  }, [])

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault()
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: visible ? 0 : -160 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        aria-hidden={!visible}
        className={`fixed left-0 top-0 z-[60] w-full backdrop-blur-md ${
          visible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 sm:py-3 lg:px-12">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault()
              lenis.scrollTo(0)
            }}
            className="flex shrink-0 items-center"
            aria-label={tx(lang, copy.nav.home)}
          >
            <img
              src={copy.images.logo}
              alt=""
              width={288}
              height={288}
              className="h-20 w-auto object-contain sm:h-28 lg:h-36"
            />
          </a>

          <nav className="hidden gap-8 lg:flex" aria-label={tx(lang, copy.nav.primary)}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleNavClick(event, link.id)}
                className="text-sm uppercase tracking-[0.2em] text-slate-300 transition hover:text-blue-400"
              >
                {tx(lang, link.label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher id="lang-switcher" />

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-3xl text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={
                open ? tx(lang, copy.nav.closeMenu) : tx(lang, copy.nav.openMenu)
              }
            >
              {open ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-black"
          >
            <nav className="space-y-8 text-center" aria-label={tx(lang, copy.nav.mobile)}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNavClick(event, link.id)}
                  className="block font-['Bebas_Neue'] text-5xl uppercase tracking-widest text-white"
                >
                  {tx(lang, link.label)}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
