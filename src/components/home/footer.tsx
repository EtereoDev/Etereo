import { motion, type Variants } from 'framer-motion'
import Fire from '../common/fire'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Footer() {
  return (
    <footer className="relative flex h-screen snap-start flex-col overflow-hidden bg-ink-900 text-cream-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(ellipse_at_top,rgba(255,175,79,0.10),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 border-t border-cream-50/10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 text-center"
      >
        <motion.div variants={item} className="mb-10">
          <Fire className="h-10 w-auto sm:h-12" />
        </motion.div>

        <motion.p
          variants={item}
          className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-400"
        >
          Etéreo
        </motion.p>

        <motion.h2
          variants={item}
          className="font-display text-3xl font-medium leading-snug text-cream-50 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
        >
          Para quienes saben que un hogar no solo se llena de objetos:
          <span className="block italic text-brand-400">se llena de sentido.</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream-50/60 sm:text-lg"
        >
          Etéreo · Materia, rito y memoria. Hecho a mano, una pieza a la vez.
        </motion.p>

        <motion.a
          variants={item}
          href="https://wa.me/573117460312"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-cream-50/20 px-7 py-3 text-sm font-semibold text-cream-50 transition-all hover:border-brand-400/60 hover:text-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
        >
          @etereo.co
        </motion.a>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-50/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Etéreo · Medellín, Colombia</p>
          <p className="font-display italic text-cream-50/60">
            Lo que permanece. Lo que desaparece.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
