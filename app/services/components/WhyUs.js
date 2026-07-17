const benefits = [
  {
    title: "رشد پایدار درآمد",
    desc: "طراحی فرآیندهای فروش با تمرکز بر درآمد قابل‌پیش‌بینی و بلندمدت.",
    icon: "📈",
  },
  {
    title: "افزایش نرخ تبدیل",
    desc: "بهینه‌سازی قیف فروش و حذف نقاط اتلاف فرصت در مسیر مشتری.",
    icon: "🎯",
  },
  {
    title: "تصمیم‌گیری داده‌محور",
    desc: "استفاده از داده‌ها و شاخص‌های عملکرد برای مدیریت فروش.",
    icon: "📊",
  },
  {
    title: "مزیت رقابتی پایدار",
    desc: "استانداردسازی سیستم فروش و کاهش وابستگی به افراد.",
    icon: "🚀",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-brandgreen/10 px-4 py-2 text-sm font-semibold text-brandgreen-dark">
            چرا پنداریار؟
          </span>

          <h2 className="mt-5 text-4xl font-black text-brandblue">
            فروش را به یک سیستم تبدیل می‌کنیم، نه یک فعالیت فردی
          </h2>

          <p className="mt-5 leading-8 text-brandblue/70">
            نتیجه این رویکرد، رشد پایدار درآمد، کاهش وابستگی به فروش‌های مقطعی و
            ایجاد مزیت رقابتی ماندگار برای سازمان خواهد بود.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brandgreen/10 text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-brandblue">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-brandblue/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
