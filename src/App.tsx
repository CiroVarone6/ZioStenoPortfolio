import { useEffect, useState } from "react"

import Navbar from "./components/layout/Navbar"

import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Acting from "./components/sections/Acting"
import Creator from "./components/sections/Creator"
import Gallery from "./components/sections/Gallery"
import Contact from "./components/sections/Contact"

import Loader from "./components/common/Loader"
import ScrollProgress from "./components/common/ScrollProgress"

import { copy } from "./data"
import { lenis } from "./lib/lenis"

const MIN_LOADER_MS = 1200

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.src = copy.images.hero

    const minDisplay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, MIN_LOADER_MS)
    })

    const imageReady = new Promise<void>((resolve) => {
      if (img.complete) {
        resolve()
        return
      }

      img.onload = () => resolve()
      img.onerror = () => resolve()
    })

    void Promise.all([minDisplay, imageReady]).then(() => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
      lenis.stop()
      return
    }

    document.body.style.overflow = ""
    lenis.start()
  }, [loading])

  return (
    <>
      <Loader loading={loading} />

      {!loading && <ScrollProgress />}

      <main className="relative overflow-hidden bg-[var(--bg)] text-white">
        <div className="fixed left-[-200px] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

        <div className="fixed right-[-200px] top-[50%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <Navbar />

        <Hero />

        <About />

        <Acting />

        <Creator />

        <Gallery />

        <Contact />
      </main>
    </>
  )
}

export default App
