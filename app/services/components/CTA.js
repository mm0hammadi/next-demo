import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-24">
      {/* Glow */}
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brandgreen/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
          آماده شروع هستید؟
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
          فروش را از یک فعالیت روزمره
          <br />
          به یک سیستم درآمدساز تبدیل کنید.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/80">
          اگر به دنبال افزایش نرخ تبدیل، بهبود عملکرد تیم فروش و طراحی یک سیستم
          فروش پایدار هستید، کارشناسان پنداریار آماده‌اند تا در کنار شما مسیر
          رشد کسب‌وکارتان را طراحی و اجرا کنند.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-8 py-4 font-bold text-brandblue transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            درخواست جلسه مشاوره
          </Link>

          <Link
            href="/about"
            className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            درباره پنداریار
          </Link>
        </div>
      </div>
    </section>
  );
}
