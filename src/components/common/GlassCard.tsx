import clsx from "clsx"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

const GlassCard = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  )
}

export default GlassCard
