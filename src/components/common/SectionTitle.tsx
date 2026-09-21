type Props = {
  title: string
  subtitle?: string
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-16">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black uppercase tracking-tight lg:text-7xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle