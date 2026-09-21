import { motion } from "framer-motion"

import Container from "../common/Container"
import GlassCard from "../common/GlassCard"
import GlowButton from "../common/GlowButton"
import Reveal from "../common/Reveal"
import SectionTitle from "../common/SectionTitle"

import { copy, selectedVideos, tx } from "../../data"
import { useLanguage } from "../../lib/i18n-context"

const Creator = () => {
  const { lang } = useLanguage()

  return (
    <section id="creator" className="pb-24 pt-24 lg:pb-28 lg:pt-28">
      <Container>
        <Reveal>
          <SectionTitle
            title={tx(lang, copy.creator.title)}
            subtitle={tx(lang, copy.creator.subtitle)}
          />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <img
              src={copy.images.creator}
              alt={tx(lang, copy.creator.imageAlt)}
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full rounded-3xl object-cover object-center"
            />
          </Reveal>

          <Reveal>
            <div className="space-y-10">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  {copy.creator.youtubeKicker}
                </p>
                <p className="mt-2 text-slate-500">{copy.creator.youtubeHandle}</p>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  {tx(lang, copy.creator.youtube)}
                </p>
                <div className="mt-6">
                  <GlowButton href={copy.urls.youtube}>
                    {tx(lang, copy.creator.youtubeCta)}
                  </GlowButton>
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  {copy.creator.twitchKicker}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  {tx(lang, copy.creator.twitch)}
                </p>
                <div className="mt-6">
                  <GlowButton href={copy.urls.twitch}>
                    {tx(lang, copy.creator.twitchCta)}
                  </GlowButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-blue-400">
            {tx(lang, copy.creator.videosKicker)}
          </p>
        </Reveal>

        <div className="space-y-8">
          {selectedVideos.map((video, index) => (
            <Reveal key={video.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard className="group relative overflow-hidden p-6 md:p-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

                    <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                        <img
                          src={video.thumbnail}
                          alt=""
                          width={480}
                          height={360}
                          loading="lazy"
                          decoding="async"
                          className="aspect-video w-full max-w-xs shrink-0 rounded-2xl object-cover sm:w-56"
                        />

                        <div>
                          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
                            0{index + 1}
                          </p>

                          <h3 className="text-lg font-black uppercase leading-snug break-words md:text-xl lg:text-2xl">
                            {video.title}
                          </h3>

                          <p className="mt-3 text-slate-400">YouTube</p>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ x: 10 }}
                        className="hidden text-5xl text-blue-400 md:block"
                        aria-hidden="true"
                      >
                        →
                      </motion.div>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Creator
