const steps = [
  {
    number: "01",
    title: "تحلیل وضعیت موجود",
    desc: "بررسی بازار، ساختار فروش، فرآیندها، تیم و داده‌های سازمان برای شناسایی فرصت‌ها و چالش‌ها.",
  },
  {
    number: "02",
    title: "طراحی استراتژی",
    desc: "تدوین استراتژی فروش، طراحی قیف فروش، شاخص‌های عملکرد و نقشه راه اجرایی.",
  },
  {
    number: "03",
    title: "پیاده‌سازی و استقرار",
    desc: "اجرای فرآیندها، استقرار CRM، آموزش تیم فروش و بهینه‌سازی ساختار سازمانی.",
  },
  {
    number: "04",
    title: "پایش و بهبود مستمر",
    desc: "اندازه‌گیری نتایج، تحلیل داده‌ها و بهبود مستمر برای دستیابی به رشد پایدار درآمد.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-brandgreen/10 px-4 py-2 text-sm font-semibold text-brandgreen-dark">
            فرآیند همکاری
          </span>

          <h2 className="mt-5 text-4xl font-black text-brandblue">
            مسیر همکاری با پنداریار
          </h2>

          <p className="mt-5 leading-8 text-brandblue/70">
            از تحلیل اولیه تا استقرار و بهبود مستمر، در هر مرحله همراه شما هستیم
            تا سیستم فروش سازمانتان به شکلی پایدار رشد کند.
          </p>
        </div>

        <div className="relative mt-20">
          {/* خط عمودی فقط در دسکتاپ */}
          <div className="absolute right-6 top-0 hidden h-full w-0.5 bg-brandgreen/20 lg:block"></div>

          <div className="space-y-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:flex-row lg:items-start"
              >
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brandgreen text-lg font-bold text-white">
                  {step.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brandblue">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-8 text-brandblue/70">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
