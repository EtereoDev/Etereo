import { motion, type Variants } from 'framer-motion'
import Fire from '../common/fire'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Hero() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,175,79,0.18),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 -bottom-24 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.05),transparent_60%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.div variants={item} className="mb-10">
          <Fire className="h-20 w-auto sm:h-24" />
        </motion.div>

        <motion.p
          variants={item}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-brand-600"
        >
          Materia · Rito · Memoria
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-medium leading-[1.05] text-ink-900 sm:text-6xl md:text-7xl"
        >
          Objetos que
          <span className="block italic text-brand-600">respiran.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg"
        >
          Concreto, estuco y cera. Hecho a mano, una pieza a la vez, en Medellín,
          Colombia.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#producto"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-8 py-3.5 text-sm font-semibold text-cream-50 shadow-lg shadow-ink-900/15 transition-all hover:-translate-y-0.5 hover:bg-ink-700"
          >
            Conoce la colección
          </a>
          <a
            href="#carrusel"
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-8 py-3.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-500/50 hover:text-brand-600"
          >
            Ver galería
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#producto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-ink-500"
        aria-label="Desliza para descubrir"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Desliza</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-ink-900/20 pt-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-brand-600" />
        </motion.span>
      </motion.a>
    </div>
  )
}

export default Hero
