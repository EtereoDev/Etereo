import { motion, useInView, useReducedMotion, type Transition } from 'framer-motion'
import { useId, useRef } from 'react'

interface FireProps {
  className?: string
}

const GLOW = 'M30 2 C 18 12, 6 26, 6 36 C 6 44, 10 48, 30 48 C 50 48, 54 44, 54 36 C 54 26, 42 12, 30 2 Z'
const BODY = 'M30 6 C 22 14, 12 24, 12 34 C 12 38, 16 44, 30 44 C 44 44, 48 38, 48 34 C 48 24, 38 14, 30 6 Z'
const CORE = 'M30 16 C 24 22, 18 30, 18 37 C 18 41, 20 44, 30 44 C 40 44, 42 41, 42 37 C 42 30, 36 22, 30 16 Z'
const HIGHLIGHT = 'M30 26 C 26.5 29, 23.5 34, 23.5 38 C 23.5 41, 25 43, 30 43 C 35 43, 36.5 41, 36.5 38 C 36.5 34, 33.5 29, 30 26 Z'

const SAMPLES = 48

function compound(primary: number, secondary: number, phase: number): number[] {
  const values: number[] = []
  for (let i = 0; i <= SAMPLES; i++) {
    const t = i / SAMPLES
    const wave =
      Math.sin(2 * Math.PI * primary * t) * 0.62 +
      Math.sin(2 * Math.PI * secondary * t + phase) * 0.38
    values.push(wave)
  }
  return values
}

const breathe = { scaleY: compound(1, 3, 0).map((v) => 1 + v * 0.014) }
const breatheTransition: Transition = { duration: 7.4, ease: 'linear', repeat: Infinity }

const body = { scaleY: compound(2, 5, 1.1).map((v) => 1 + v * 0.055), rotate: compound(1, 2, 0.4).map((v) => v * 1.4) }
const bodyTransition: Transition = { duration: 4.6, ease: 'linear', repeat: Infinity }

const core = { scaleY: compound(3, 4, 2.2).map((v) => 1 + v * 0.085) }
const coreTransition: Transition = { duration: 3.8, ease: 'linear', repeat: Infinity }

const glow = { opacity: compound(2, 4, 0.9).map((v) => 0.23 + v * 0.06) }
const glowTransition: Transition = { duration: 5.6, ease: 'linear', repeat: Infinity }

const highlight = { opacity: compound(3, 5, 1.7).map((v) => 0.75 + v * 0.2) }
const highlightTransition: Transition = { duration: 2.6, ease: 'linear', repeat: Infinity }

function Fire({ className }: FireProps) {
  const reduce = useReducedMotion()
  const uid = useId()
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { amount: 0.15 })

  const animated = !reduce && inView

  const bodyGradient = `fire-body-${uid}`
  const coreGradient = `fire-core-${uid}`

  return (
    <motion.svg
      ref={ref}
      className={className}
      viewBox="0 0 60 84"
      fill="none"
      aria-hidden="true"
      animate={animated ? breathe : undefined}
      transition={animated ? breatheTransition : undefined}
      style={{ originX: 0.5, originY: 0.6 }}
    >
      <defs>
        <linearGradient id={bodyGradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c97a1d" />
          <stop offset="0.55" stopColor="#ffaf4f" />
          <stop offset="1" stopColor="#ffd8ab" />
        </linearGradient>
        <linearGradient id={coreGradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffc98a" />
          <stop offset="1" stopColor="#fff6e8" />
        </linearGradient>
      </defs>

      <motion.path
        d={GLOW}
        fill="#ffaf4f"
        animate={animated ? glow : undefined}
        transition={animated ? glowTransition : undefined}
      />

      <motion.path
        d={BODY}
        fill={`url(#${bodyGradient})`}
        animate={animated ? body : undefined}
        transition={animated ? bodyTransition : undefined}
        style={{ transformBox: 'fill-box', originX: 0.5, originY: 1 }}
      />

      <motion.path
        d={CORE}
        fill={`url(#${coreGradient})`}
        animate={animated ? core : undefined}
        transition={animated ? coreTransition : undefined}
        style={{ transformBox: 'fill-box', originX: 0.5, originY: 1 }}
      />

      <motion.path
        d={HIGHLIGHT}
        fill="#fffaf0"
        animate={animated ? highlight : undefined}
        transition={animated ? highlightTransition : undefined}
        style={{ transformBox: 'fill-box', originX: 0.5, originY: 1 }}
      />
    </motion.svg>
  )
}

export default Fire
