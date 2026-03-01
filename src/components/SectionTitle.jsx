export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-mint">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-white/70 sm:text-lg">{description}</p>}
    </div>
  )
}
