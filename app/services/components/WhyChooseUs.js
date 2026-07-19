import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function WhyUs({ data }) {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left */}

        <div>
          <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            {data.badge}
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            {data.title}
          </h2>

          <p className="mt-6 leading-8 text-slate-600">{data.description}</p>

          <div className="mt-10 space-y-7">
            {data.items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-blue-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>

                  <p className="mt-2 leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-10 text-white">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm">
              رویکرد ما
            </span>

            <h3 className="mt-6 text-3xl font-bold leading-relaxed">
              همراه شما از تحلیل تا اجرای موفق
            </h3>

            <p className="mt-6 leading-8 text-blue-100">
              هدف ما ارائه گزارش نیست؛ بلکه ایجاد تغییرات واقعی و
              قابل‌اندازه‌گیری در عملکرد سازمان شماست.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4 backdrop-blur">
                <span>تحلیل و ارزیابی</span>
                <ArrowUpRight size={18} />
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4 backdrop-blur">
                <span>طراحی راهکار</span>
                <ArrowUpRight size={18} />
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4 backdrop-blur">
                <span>پیاده‌سازی و پایش</span>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
