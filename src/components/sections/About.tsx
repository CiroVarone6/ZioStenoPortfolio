import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import Reveal from "../common/Reveal"

import { copy, timeline, tx } from "../../data"
import { useLanguage } from "../../lib/i18n-context"

const About = () => {
  const { lang } = useLanguage()

  return (
    <section id="about" className="relative pb-24 pt-32 lg:pb-28">
      <Container>
        <Reveal>
          <SectionTitle
            title={tx(lang, copy.about.title)}
            subtitle={tx(lang, copy.about.subtitle)}
          />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <img
              src={copy.images.about}
              alt={tx(lang, copy.about.imageAlt)}
              width={800}
              height={1066}
              loading="lazy"
              decoding="async"
              className="mb-8 aspect-[3/4] w-full max-w-md rounded-3xl object-cover object-top"
            />

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
              {copy.about.location}
            </p>

            <p className="text-lg leading-relaxed text-slate-300">
              {tx(lang, copy.about.bio)}
            </p>
          </Reveal>

          <Reveal>
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="border-l border-blue-500 pl-6">
                  <p className="text-sm tracking-widest text-blue-400">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {tx(lang, item.title)}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {tx(lang, item.description)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default About
