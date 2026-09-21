import clsx from "clsx"

import Container from "../common/Container"
import Reveal from "../common/Reveal"
import SectionTitle from "../common/SectionTitle"

import { actingCredits, copy, tx } from "../../data"
import { useLanguage } from "../../lib/i18n-context"

const Acting = () => {
  const { lang } = useLanguage()
  const languages = tx(lang, copy.acting.languages)

  return (
    <section id="acting" className="py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            title={tx(lang, copy.acting.title)}
            subtitle={tx(lang, copy.acting.subtitle)}
          />
        </Reveal>

        <div>
          {actingCredits.map((credit) => (
            <Reveal key={credit.id}>
              <article className="border-t border-white/10 py-7 md:py-8">
                {credit.still && (
                  <img
                    src={credit.still}
                    alt={credit.stillAlt ? tx(lang, credit.stillAlt) : ""}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                    className={clsx(
                      "mb-6 w-full rounded-3xl object-cover md:mb-8",
                      credit.stillClassName
                    )}
                  />
                )}

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="font-['Bebas_Neue'] text-3xl uppercase leading-none tracking-wide md:text-4xl">
                    {credit.title}
                  </h3>

                  <p className="shrink-0 text-sm tracking-[0.25em] text-blue-400">
                    {credit.year}
                  </p>
                </div>

                <div className="mt-3 space-y-1 text-sm leading-relaxed text-slate-400 md:text-base">
                  {tx(lang, credit.lines).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 border-t border-white/10 pt-12">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
              {tx(lang, copy.acting.profileTitle)}
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-3">
              <p className="font-['Bebas_Neue'] text-3xl uppercase tracking-wide md:text-4xl">
                {copy.acting.heightValue}
              </p>

              {languages.map((language) => (
                <p
                  key={language}
                  className="font-['Bebas_Neue'] text-3xl uppercase tracking-wide md:text-4xl"
                >
                  {language}
                </p>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-slate-400">
              {tx(lang, copy.acting.accents)}
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500">
              {tx(lang, copy.acting.training)}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Acting
