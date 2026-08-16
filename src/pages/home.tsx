import { useRef } from 'react'
import NavBar from '../components/home/navBar'
import Hero from '../components/home/hero'
import AboutUs from '../components/about/aboutUs'

function Home() {
  const scrollRef = useRef<HTMLElement>(null)

  return (
    <main
      ref={scrollRef}
      className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-cream-50"
    >
      <NavBar scrollRef={scrollRef} />

      <section id="inicio" className="h-screen snap-start bg-cream-50">
        <Hero />
      </section>

      <section
        id="nosotros"
        className="flex h-screen snap-start items-center bg-cream-100"
      >
        <AboutUs />
      </section>

      <section
        id="producto"
        className="flex h-screen snap-start items-center justify-center bg-cream-100"
      >
        <span className="font-display text-3xl italic text-ink-400">Producto</span>
      </section>

      <section
        id="carrusel"
        className="flex h-screen snap-start items-center justify-center bg-cream-50"
      >
        <span className="font-display text-3xl italic text-ink-400">Galería</span>
      </section>

      <section
        id="contacto"
        className="flex h-screen snap-start items-center justify-center bg-cream-100"
      >
        <span className="font-display text-3xl italic text-ink-400">Contacto</span>
      </section>
    </main>
  )
}

export default Home
