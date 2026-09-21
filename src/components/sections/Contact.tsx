import { motion, useReducedMotion } from "framer-motion"
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa6"
import type { IconType } from "react-icons"

import Container from "../common/Container"
import GlowButton from "../common/GlowButton"

import { copy, socials, tx } from "../../data"
import { useLanguage } from "../../lib/i18n-context"

const socialIcons: Record<string, IconType> = {
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Twitch: FaTwitch,
  TikTok: FaTiktok,
  Facebook: FaFacebookF,
}

const Contact = () => {
  const shouldReduceMotion = useReducedMotion()
  const { lang } = useLanguage()

  const motionProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: delay > 0 ? 30 : 40 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay, duration: delay > 0 ? 0.8 : 1 },
        }

  return (
    <section id="contact" className="relative overflow-hidden py-40">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>
        <div className="relative z-10 text-center">
          <motion.p
            {...motionProps()}
            className="mb-6 text-sm uppercase tracking-[0.5em] text-blue-400"
          >
            {tx(lang, copy.contact.kicker)}
          </motion.p>

          <motion.h2
            {...motionProps()}
            className="mx-auto max-w-5xl font-['Bebas_Neue'] text-6xl uppercase leading-none md:text-8xl lg:text-[10rem]"
          >
            {tx(lang, copy.contact.titleLine1)}
            <br />
            {tx(lang, copy.contact.titleLine2)}
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: 1 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            {tx(lang, copy.contact.body)}
          </motion.p>

          <motion.div {...motionProps(0.4)} className="mt-12">
            <GlowButton href={copy.urls.email}>
              {tx(lang, copy.contact.cta)}
            </GlowButton>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: 1 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-6"
          >
            {socials.map((social) => {
              const Icon = socialIcons[social.name]

              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group flex min-h-11 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-slate-300 backdrop-blur-xl transition duration-500 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
                >
                  {Icon && (
                    <span className="text-xl text-blue-400">
                      <Icon aria-hidden="true" />
                    </span>
                  )}

                  <span className="text-sm uppercase tracking-[0.2em]">
                    {social.name}
                  </span>
                </a>
              )
            })}
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: 1 }}
            className="mt-24"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
              {copy.contact.footer}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
