import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const MATERIALS = [
  {
    name: 'Concreto',
    description: 'Pesa. Sostiene. Permanece.',
  },
  {
    name: 'Estuco',
    description: 'Conserva la memoria de la superficie y del gesto.',
  },
  {
    name: 'Cera',
    description: 'Se enciende. Se transforma. Permanece en el aire.',
  },
]

function AboutUs() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.p
          variants={item}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-brand-600"
        >
          Nosotros
        </motion.p>

        <motion.h2
          variants={item}
          className="font-display text-2xl font-medium leading-snug text-ink-900 sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
        >
          Todo lo que se apresura está condenado a desaparecer.
          <span className="mt-3 block italic text-brand-600">
            Etéreo no apresura nada.
          </span>
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg"
        >
          Cada pieza es hecha a mano por una sola persona, en Medellín, Colombia.
          Sin serie. Sin prisa. Con intención completa.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-14 grid w-full grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {MATERIALS.map((material) => (
            <div
              key={material.name}
              className="border-t border-ink-900/10 pt-6 text-center"
            >
              <h3 className="font-display text-xl font-medium text-ink-900">
                {material.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {material.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutUs
