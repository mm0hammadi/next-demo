import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Intro({ title, description, features }) {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}

          <div>
           

            <h2 className="mt-4 text-4xl font-bold text-slate-900">{title}</h2>

            <p className="mt-8 leading-8 text-slate-600">{description}</p>

            <div className="mt-10 grid gap-4">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-blue-600" />

                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card */}

          <div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-lg">
              <span className="text-blue-600 font-semibold">
                نتیجه این خدمت
              </span>

              <h3 className="mt-4 text-3xl font-bold text-slate-900">
                رشد پایدار سازمان
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                با تحلیل دقیق وضعیت فعلی سازمان، طراحی استراتژی و بهینه‌سازی
                فرآیندها، مسیر رشد سودآور و قابل‌اندازه‌گیری ایجاد می‌شود.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                مشاهده فرآیند همکاری
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
