import { services } from "../sales-marketing-consulting/data";

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-brandgreen/10 px-4 py-2 text-sm font-semibold text-brandgreen-dark">
            خدمات تخصصی
          </span>

          <h2 className="mt-5 text-4xl font-black text-brandblue">
            خدمات مشاوره فروش و بازاریابی
          </h2>

          <p className="mt-5 leading-8 text-brandblue/70">
            خدمات ما تمام مراحل طراحی، استقرار و بهینه‌سازی سیستم فروش را پوشش
            می‌دهد تا سازمان شما به درآمدی پایدار و قابل پیش‌بینی برسد.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brandgreen/10 text-3xl transition group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-brandblue">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-brandblue/70">{service.desc}</p>

              <button className="mt-6 font-semibold text-brandgreen-dark transition group-hover:translate-x-1">
                بیشتر بدانید ←
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
