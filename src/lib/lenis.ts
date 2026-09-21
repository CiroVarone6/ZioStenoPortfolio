import Lenis from "lenis"

export const NAV_OFFSET = 160

export const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
})

export function initLenis() {
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

export function scrollToSection(id: string) {
  const section = document.getElementById(id)

  if (section) {
    lenis.scrollTo(section, { offset: -NAV_OFFSET })
  }
}
