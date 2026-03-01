export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-3xl sm:mb-14">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">{description}</p>}
    </div>
  )
}
