import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

import { copy, tx } from "../../data"
import { useLanguage } from "../../lib/i18n-context"

type Props = {
  loading: boolean
}

const Loader = ({ loading }: Props) => {
  const shouldReduceMotion = useReducedMotion()
  const { lang } = useLanguage()

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          role="status"
          aria-live="polite"
          aria-label={tx(lang, copy.loader.label)}
        >
          <motion.img
            src={copy.images.logo}
            alt=""
            width={320}
            height={320}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2 }}
            className="h-28 w-auto object-contain md:h-36"
          />

          <motion.div
            initial={shouldReduceMotion ? false : { width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: shouldReduceMotion ? 0 : 2 }}
            className="mt-6 h-[2px] bg-blue-500"
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
