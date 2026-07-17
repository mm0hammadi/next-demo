import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brandgreen/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            خدمات تخصصی پنداریار
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            مشاوره فروش و بازاریابی
          </h1>

          <h2 className="mt-5 text-xl font-semibold leading-9 text-white/90 md:text-2xl">
            طراحی سیستم فروش، توسعه برند و بهینه‌سازی مسیر مشتری
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-9 text-white/80 md:text-lg">
            در پنداریار، فروش به‌عنوان یک سیستم درآمدساز طراحی و مدیریت می‌شود،
            نه یک فعالیت فردمحور. با تحلیل داده‌های بازار، رفتار مشتری و عملکرد
            تیم فروش، ساختاری ایجاد می‌کنیم که درآمد را قابل‌پیش‌بینی و
            مقیاس‌پذیر کند.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-9 text-white/70">
            تمرکز ما بر استانداردسازی فرآیندها، افزایش بهره‌وری تیم فروش و بهبود
            نرخ تبدیل در تمام مراحل قیف فروش است. راهکارها عملیاتی، قابل اجرا و
            متناسب با بلوغ سازمان و صنعت شما طراحی می‌شوند.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-brandblue transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              درخواست مشاوره
            </Link>

            <a
              href="#services"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              مشاهده خدمات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
