import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

import { fadeUp, revealTransition } from "../../lib/motion"

type Props = {
  children: ReactNode
  className?: string
}

const Reveal = ({ children, className = "" }: Props) => {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={revealTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
