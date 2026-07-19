import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CTA({ data }) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 px-10 py-20 text-center text-white">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto mt-8 max-w-3xl text-5xl font-extrabold leading-tight">
              {data.title}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              {data.description}
            </p>

            <Link
              href={data.button.href}
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              {data.button.text}
              <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
