import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import Reveal from "../common/Reveal"

import { copy, galleryImages, tx } from "../../data"
import { useLanguage } from "../../lib/i18n-context"

const Gallery = () => {
  const { lang } = useLanguage()

  return (
    <section id="gallery" className="pb-32 pt-24 lg:pt-28">
      <Container>
        <Reveal>
          <SectionTitle
            title={tx(lang, copy.gallery.title)}
            subtitle={tx(lang, copy.gallery.subtitle)}
          />
        </Reveal>

        <div className="columns-1 gap-6 md:columns-2">
          {galleryImages.map((image) => (
            <Reveal key={image.src}>
              <img
                src={image.src}
                alt={tx(lang, image.alt)}
                loading="lazy"
                decoding="async"
                className="mb-6 w-full rounded-3xl object-cover"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Gallery
