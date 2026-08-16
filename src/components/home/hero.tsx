import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function HeroFlame() {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 0.97, 1.03, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="flex h-24 items-end justify-center"
      aria-hidden="true"
    >
      <svg width="60" height="84" viewBox="0 0 60 84" fill="none">
        <path
          d="M30 2c-4.5 5.8-20 17.5-20 36.5a20 20 0 0 0 40 0C50 19.5 34.5 7.8 30 2Z"
          fill="#ffaf4f"
          fillOpacity="0.2"
        />
        <path
          d="M30 2c-4.5 5.8-20 17.5-20 36.5a20 20 0 0 0 40 0C50 19.5 34.5 7.8 30 2Z"
          fill="#e8942f"
        />
        <motion.path
          d="M30 16c2.8 4.8 10 11.5 10 19a10 10 0 0 1-20 0c0-7.5 7.2-14.2 10-19Z"
          fill="#ffd8ab"
          animate={{ scaleY: [1, 1.12, 0.92, 1.05, 1], scaleX: [1, 0.95, 1.04, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: 0.5, originY: 0.62 }}
        />
      </svg>
    </motion.div>
  )
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
          <HeroFlame />
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
