// export default function Hero({ title, subtitle, description, image }) {
//   return (
//     <section>
//       <h1>{title}</h1>
//       <h2>{subtitle}</h2>
//       <p>{description}</p>

//       <img src={image} alt={title} />
//     </section>
//   );
// }

import Link from "next/link";
import Image from "next/image";

export default function Hero({
  badge,
  title,
  subtitle,
  description,
  image,
  primaryButton,
  secondaryButton,
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        {/* Left */}
        <div>
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            {badge}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl xl:text-6xl">
            {title}
          </h1>

          <h2 className="mt-5 text-xl leading-9 text-blue-200 md:text-2xl">
            {subtitle}
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-slate-300">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={primaryButton.href}
              className="rounded-xl bg-blue-600 px-7 py-3 font-medium transition hover:bg-blue-700"
            >
              {primaryButton.text}
            </Link>

            <Link
              href={secondaryButton.href}
              className="rounded-xl border border-white/20 px-7 py-3 transition hover:bg-white/10"
            >
              {secondaryButton.text}
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative hidden lg:flex justify-center">
          <div className="relative h-[500px] w-[500px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 opacity-20 blur-3xl" />

            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
