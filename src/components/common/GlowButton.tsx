import { motion } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: "button" | "submit"
  className?: string
}

const isExternalHref = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://")

const baseClassName =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-blue-500 px-8 py-4 text-sm uppercase tracking-[0.3em] cursor-pointer"

const GlowButton = ({
  children,
  href,
  onClick,
  type = "button",
  className = "",
}: Props) => {
  const classes = `${baseClassName} ${className}`.trim()

  const content = (
    <>
      <span className="absolute inset-0 bg-blue-500 opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    const external = isExternalHref(href)

    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {content}
    </motion.button>
  )
}

export default GlowButton
