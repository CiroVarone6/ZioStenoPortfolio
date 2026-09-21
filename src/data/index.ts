export type Lang = "en" | "it"

export type Localized<T = string> = Record<Lang, T>

export function tx<T>(lang: Lang, value: Localized<T>): T {
  return value[lang]
}

export function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`
}

export type NavLink = {
  id: string
  label: Localized
}

export type TimelineEntry = {
  year: string
  title: Localized
  description: Localized
}

export type ActingCredit = {
  id: string
  title: string
  year: string
  lines: Localized<string[]>
  still?: string
  stillAlt?: Localized
  stillClassName?: string
}

export type SelectedVideo = {
  id: string
  youtubeId: string
  url: string
  title: string
  thumbnail: string
}

export type SocialLink = {
  name: string
  link: string
}

export const navLinks: NavLink[] = [
  { id: "about", label: { en: "About", it: "Chi sono" } },
  { id: "acting", label: { en: "Acting", it: "Recitazione" } },
  { id: "creator", label: { en: "Creator", it: "Creator" } },
  { id: "gallery", label: { en: "Gallery", it: "Gallery" } },
  { id: "contact", label: { en: "Contact", it: "Contatti" } },
]

export const socials: SocialLink[] = [
  { name: "Instagram", link: "https://www.instagram.com/zio.steno/" },
  { name: "YouTube", link: "https://www.youtube.com/@ziostenotv" },
  { name: "Twitch", link: "https://www.twitch.tv/ziostenotv" },
  { name: "TikTok", link: "https://www.tiktok.com/@ziostenotv" },
  { name: "Facebook", link: "https://www.facebook.com/stefano.j.accardo/" },
]

export const selectedVideos: SelectedVideo[] = [
  {
    id: "trunks",
    youtubeId: "IXnxNoZfqG4",
    url: "https://www.youtube.com/watch?v=IXnxNoZfqG4",
    title: "Teoria Dragon Ball: E SE TRUNKS FOSSE IL BROLY DEL FUTURO?!",
    thumbnail: "https://i.ytimg.com/vi/IXnxNoZfqG4/hqdefault.jpg",
  },
  {
    id: "imaginary-characters",
    youtubeId: "Qc7fAayfrg8",
    url: "https://www.youtube.com/watch?v=Qc7fAayfrg8",
    title: "Perché amiamo personaggi immaginari?",
    thumbnail: "https://i.ytimg.com/vi/Qc7fAayfrg8/hqdefault.jpg",
  },
  {
    id: "pokemon-trade",
    youtubeId: "l0OJsmPhxtc",
    url: "https://www.youtube.com/watch?v=l0OJsmPhxtc",
    title: "Come scambiare Pokémon su emulatore via wireless",
    thumbnail: "https://i.ytimg.com/vi/l0OJsmPhxtc/hqdefault.jpg",
  },
]

export const galleryImages = [
  {
    src: publicAsset("images/gallery/gallery-01.png"),
    alt: {
      en: "Stefano Accardo with a fellow performer at a theatre event",
      it: "Stefano Accardo con un collega durante un evento teatrale",
    },
  },
  {
    src: publicAsset("images/gallery/gallery-02.png"),
    alt: {
      en: "Cast, crew and audience gathered in the theatre after a performance",
      it: "Compagnia, staff e pubblico riuniti in teatro dopo lo spettacolo",
    },
  },
  {
    src: publicAsset("images/gallery/gallery-03.png"),
    alt: {
      en: "Company curtain call on a lit stage",
      it: "Saluti finali della compagnia sul palco illuminato",
    },
  },
  {
    src: publicAsset("images/gallery/gallery-04.png"),
    alt: {
      en: "Stefano Accardo on stage with a microphone",
      it: "Stefano Accardo sul palco con un microfono",
    },
  },
  {
    src: publicAsset("images/gallery/gallery-05.png"),
    alt: {
      en: "Stefano Accardo in a manga shop, kneeling with arms open in front of the shelves",
      it: "Stefano Accardo in una fumetteria, in ginocchio a braccia aperte davanti agli scaffali",
    },
  },
  {
    src: publicAsset("images/gallery/gallery-06.png"),
    alt: {
      en: "Two performers posing on stage in contrasting yellow and black costumes",
      it: "Due performer in posa sul palco in costumi giallo e nero a contrasto",
    },
  },
  {
    src: publicAsset("images/gallery/gallery-07.png"),
    alt: {
      en: "Boom microphone recording an outdoor interview in a park",
      it: "Registrazione con microfono boom di un'intervista all'aperto in un parco",
    },
  },
]

export const timeline: TimelineEntry[] = [
  {
    year: "01",
    title: {
      en: "Stories",
      it: "Storie",
    },
    description: {
      en: "Videogames, films, series, manga and pop culture — the material I keep returning to.",
      it: "Videogiochi, film, serie, manga e cultura pop: i linguaggi a cui torno sempre.",
    },
  },
  {
    year: "02",
    title: {
      en: "Craft",
      it: "Mestiere",
    },
    description: {
      en: "From the idea and the writing to shooting and editing, including short-form for social.",
      it: "Dall'idea e dalla scrittura alle riprese e al montaggio, anche nei formati brevi per i social.",
    },
  },
  {
    year: "03",
    title: {
      en: "Audience",
      it: "Pubblico",
    },
    description: {
      en: "Local journalism, Funside, and the daily conversation with the people who watch.",
      it: "Il giornalismo locale, Funside e il dialogo quotidiano con chi guarda.",
    },
  },
]

export const actingCredits: ActingCredit[] = [
  {
    id: "greenland",
    title: "Greenland 2: Migration",
    year: "2024",
    lines: {
      en: ["Special background appearance", "Director: Ric Roman Waugh"],
      it: ["Figurazione speciale", "Regia: Ric Roman Waugh"],
    },
    still: publicAsset("images/acting/greenland/greenland-02.jpg"),
    stillAlt: {
      en: "Stefano Accardo on the set of Greenland 2: Migration",
      it: "Stefano Accardo sul set di Greenland 2: Migration",
    },
    stillClassName:
      "aspect-[16/9] object-[78%_center] md:aspect-[21/9] md:object-[72%_center]",
  },
  {
    id: "acquallegoria",
    title: "Acquallegoria",
    year: "2025",
    lines: {
      en: ["Short film", "Role: Beppe", "Director: Matteo Piacenti"],
      it: ["Cortometraggio", "Ruolo: Beppe", "Regia: Matteo Piacenti"],
    },
    still: publicAsset("images/acting/acquallegoria/acquallegoria-01.png"),
    stillAlt: {
      en: "Scene from Acquallegoria: two characters facing each other in a kitchen",
      it: "Scena da Acquallegoria: due personaggi uno di fronte all'altro in cucina",
    },
    stillClassName: "aspect-[16/9] object-center md:aspect-[21/9]",
  },
  {
    id: "panini",
    title: "La famiglia Panini",
    year: "2026–27",
    lines: {
      en: ["Background appearance", "RAI · expected late 2026 / early 2027"],
      it: ["Comparsa", "RAI · uscita prevista: fine 2026 / inizio 2027"],
    },
  },
  {
    id: "goffredo",
    title: "Le vicende del buon Goffredo",
    year: "2014–15",
    lines: {
      en: [
        "Role: Goffredo",
        "Teatro Storchi / Emilia Romagna Teatro",
        "Earlier theatre experience",
      ],
      it: [
        "Ruolo: Goffredo",
        "Teatro Storchi / Emilia Romagna Teatro",
        "Esperienza teatrale precedente",
      ],
    },
    still: publicAsset("images/acting/goffredo/goffredo-01.png"),
    stillAlt: {
      en: "Stefano Accardo as Goffredo, in a flat cap and wool coat",
      it: "Stefano Accardo nel ruolo di Goffredo, con coppola e cappotto di lana",
    },
    stillClassName: "aspect-[16/9] object-[center_28%]",
  },
]

export const copy = {
  meta: {
    title: {
      en: "Stefano Accardo — ZioSteno | Actor, YouTuber & Streamer",
      it: "Stefano Accardo — ZioSteno | Attore, YouTuber e Streamer",
    },
    description: {
      en: "Official portfolio of Stefano Accardo, known online as ZioSteno — actor, YouTuber and Twitch streamer exploring cinema, gaming, pop culture and personal storytelling.",
      it: "Portfolio ufficiale di Stefano Accardo, conosciuto online come ZioSteno — attore, YouTuber e streamer Twitch. Cinema, videogiochi, cultura pop e storytelling personale.",
    },
  },
  loader: {
    brand: "ZIOSTENO",
    label: {
      en: "Loading portfolio",
      it: "Caricamento del portfolio",
    },
  },
  nav: {
    home: {
      en: "ZioSteno home",
      it: "Home di ZioSteno",
    },
    language: {
      en: "Language",
      it: "Lingua",
    },
    openMenu: {
      en: "Open menu",
      it: "Apri il menu",
    },
    closeMenu: {
      en: "Close menu",
      it: "Chiudi il menu",
    },
    primary: {
      en: "Primary",
      it: "Principale",
    },
    mobile: {
      en: "Mobile",
      it: "Mobile",
    },
  },
  hero: {
    kicker: "ZioSteno",
    nameLine1: "Stefano",
    nameLine2: "Accardo",
    roles: {
      en: "Actor · YouTuber · Twitch Streamer",
      it: "Attore · YouTuber · Streamer Twitch",
    },
    tagline: {
      en: "All my passions, told through the language of emotions.",
      it: "Tutte le mie passioni raccontate con il linguaggio delle emozioni",
    },
    ctaPrimary: {
      en: "Explore my work",
      it: "Scopri il mio lavoro",
    },
    ctaSecondary: {
      en: "Get in touch",
      it: "Contattami",
    },
    scrollHint: {
      en: "Discover",
      it: "Scopri",
    },
    imageAlt: {
      en: "Stefano Accardo in a conversational close-up",
      it: "Stefano Accardo in un primo piano conversazionale",
    },
  },
  about: {
    subtitle: {
      en: "About",
      it: "Chi sono",
    },
    title: {
      en: "Stefano",
      it: "Stefano",
    },
    location: "Castellarano, Reggio Emilia, Italy",
    imageAlt: {
      en: "Headshot of Stefano Accardo",
      it: "Ritratto di Stefano Accardo",
    },
    bio: {
      en: "My name is Stefano Accardo, a content creator known online as ZioSteno. I make videos about videogames, manga and pop culture, mixing entertainment with reflections on the emotions and stories that stay with us. I handle ideation, writing, filming and editing for YouTube and short-form social. I have worked as a social media manager and creator for Funside, and spent four years in local journalism. I bring creativity, storytelling and a close relationship with the audience to every project.",
      it: "Mi chiamo Stefano Accardo e sono un content creator conosciuto online come ZioSteno. Creo contenuti su videogiochi, manga e cultura pop, unendo intrattenimento e riflessioni sulle emozioni e sulle storie che ci coinvolgono. Curo ideazione, scrittura, riprese e montaggio per YouTube e i formati brevi. Ho lavorato come social media manager e creator per Funside e ho quattro anni di giornalismo locale. Porto nei progetti creatività, capacità narrativa e attenzione al pubblico.",
    },
  },
  acting: {
    subtitle: {
      en: "Acting",
      it: "Recitazione",
    },
    title: {
      en: "Screen & stage",
      it: "Schermo e palco",
    },
    profileTitle: {
      en: "Profile",
      it: "Profilo",
    },
    heightValue: "170 cm",
    languages: {
      en: ["Italian", "English", "French"],
      it: ["Italiano", "Inglese", "Francese"],
    },
    accents: {
      en: "Comfortable experimenting with and imitating a variety of accents.",
      it: "Capacità di sperimentare e imitare diversi accenti.",
    },
    training: {
      en: "Film acting course at L'Abracadam, Spezzano / Fiorano Modenese — September 2023 to present. Teachers: Matteo Piacenti (director) and Giuseppe Sepe (actor). Theatre workshop at Teatro Storchi / Emilia Romagna Teatro, 2014: writing, acting and staging of theatrical material.",
      it: "Corso di recitazione cinematografica presso L'Abracadam, Spezzano / Fiorano Modenese — settembre 2023 – in corso. Docenti: Matteo Piacenti (regista) e Giuseppe Sepe (attore). Laboratorio teatrale al Teatro Storchi / Emilia Romagna Teatro, 2014: scrittura, recitazione e messa in scena di materiale teatrale.",
    },
  },
  creator: {
    subtitle: {
      en: "Creator",
      it: "Creator",
    },
    title: {
      en: "ZioSteno",
      it: "ZioSteno",
    },
    youtubeKicker: "YouTube",
    youtubeHandle: "@ziostenotv",
    youtube: {
      en: "Videos about videogames, films, TV series, manga, pop culture and personal experiences, combining entertainment with personal storytelling.",
      it: "Video su videogiochi, film, serie TV, manga, cultura pop ed esperienze personali, unendo intrattenimento e storytelling.",
    },
    youtubeCta: {
      en: "Watch on YouTube",
      it: "Guarda su YouTube",
    },
    twitchKicker: "Twitch",
    twitch: {
      en: "Gaming streams mixed with personal stories, experiences and conversations with the community.",
      it: "Dirette gaming tra racconti personali, esperienze e conversazioni con la community.",
    },
    twitchCta: {
      en: "Watch on Twitch",
      it: "Guarda su Twitch",
    },
    videosKicker: {
      en: "Selected videos",
      it: "Video selezionati",
    },
    imageAlt: {
      en: "Stefano Accardo recording a YouTube video",
      it: "Stefano Accardo durante la registrazione di un video YouTube",
    },
  },
  gallery: {
    subtitle: {
      en: "Gallery",
      it: "Gallery",
    },
    title: {
      en: "Moments",
      it: "Momenti",
    },
  },
  contact: {
    kicker: {
      en: "Contact",
      it: "Contatti",
    },
    titleLine1: {
      en: "Get in",
      it: "Resta in",
    },
    titleLine2: {
      en: "Touch",
      it: "Contatto",
    },
    body: {
      en: "For professional contact, creative collaborations, acting opportunities and creator projects.",
      it: "Per contatti professionali, collaborazioni creative, opportunità di recitazione e progetti da creator.",
    },
    cta: {
      en: "Write to me",
      it: "Scrivimi",
    },
    footer: "Stefano Accardo · ZioSteno · Castellarano, Reggio Emilia, Italy",
  },
  urls: {
    youtube: "https://www.youtube.com/@ziostenotv",
    twitch: "https://www.twitch.tv/ziostenotv",
    email: "mailto:ziostenotv@gmail.com",
  },
  images: {
    hero: publicAsset("images/hero/stefano-hero.jpg"),
    about: publicAsset("images/acting/headshots/stefano-headshot-01.jpg"),
    creator: publicAsset("images/creator/youtube-01.jpg"),
    logo: publicAsset("images/branding/logo.png"),
    favicon: publicAsset("images/branding/favicon.png"),
  },
}
