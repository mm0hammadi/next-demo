
export function CtaBanner({ eyebrow, title, description, ctaLabel, ctaHref }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-10 rounded-3xl bg-brandblue/[0.03] p-6 sm:p-8 md:grid-cols-2 md:p-14">
        <div className="text-center md:text-right">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-wide text-brandgreen-dark">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-xl font-extrabold text-brandblue md:text-2xl">
            {title}
          </h2>
          <p className="mt-5 text-sm leading-8 text-brandblue/70">
            {description}
          </p>
          <a
            href={ctaHref}
            className="mt-6 inline-block rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {ctaLabel}
          </a>
        </div>
        <div className="mx-auto flex aspect-square max-w-xs items-center justify-center rounded-full bg-brand-gradient-soft text-6xl text-white shadow-card">
          🧭
        </div>
      </div>
    </section>
  );
}
