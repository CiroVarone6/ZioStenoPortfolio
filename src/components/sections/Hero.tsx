import { motion, useReducedMotion } from "framer-motion"

import Container from "../common/Container"
import GlowButton from "../common/GlowButton"

import { copy, tx } from "../../data"
import { useLanguage } from "../../lib/i18n-context"
import { scrollToSection } from "../../lib/lenis"

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()
  const { lang } = useLanguage()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <motion.img
        src={copy.images.hero}
        alt={tx(lang, copy.hero.imageAlt)}
        initial={shouldReduceMotion ? false : { scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 2 }}
        className="absolute inset-0 h-full w-full object-cover object-[78%_center] md:object-[72%_center]"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--bg)]" />

      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/55 via-black/20 to-transparent md:w-3/4" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <Container className="relative z-20">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1 }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-blue-400">
            {copy.hero.kicker}
          </p>

          <h1 className="font-['Bebas_Neue'] text-7xl uppercase leading-none md:text-9xl lg:text-[10rem]">
            {copy.hero.nameLine1}
            <span className="block">{copy.hero.nameLine2}</span>
          </h1>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-200 md:text-base">
            {tx(lang, copy.hero.roles)}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            {tx(lang, copy.hero.tagline)}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <GlowButton onClick={() => scrollToSection("acting")}>
              {tx(lang, copy.hero.ctaPrimary)}
            </GlowButton>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-white/10 px-8 py-4 text-sm uppercase tracking-[0.3em] text-slate-300 transition hover:border-blue-500 hover:text-white"
            >
              {tx(lang, copy.hero.ctaSecondary)}
            </button>
          </div>

          {!shouldReduceMotion && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-20 text-sm uppercase tracking-[0.4em] text-slate-500"
              aria-hidden="true"
            >
              {tx(lang, copy.hero.scrollHint)}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
