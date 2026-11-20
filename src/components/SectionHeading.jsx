export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-zinc-600">{subtitle}</p>}
    </div>
  );
}
