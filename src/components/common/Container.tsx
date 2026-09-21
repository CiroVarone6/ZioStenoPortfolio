import clsx from "clsx"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl px-6 lg:px-12", className)}>
      {children}
    </div>
  )
}

export default Container
