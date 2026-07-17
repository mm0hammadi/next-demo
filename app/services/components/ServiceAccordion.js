import { serviceDetails } from "../sales-marketing-consulting/data";

export default function ServiceAccordion() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-brandgreen/10 px-4 py-2 text-sm font-semibold text-brandgreen-dark">
            جزئیات خدمات
          </span>

          <h2 className="mt-5 text-4xl font-black text-brandblue">
            خدمات تخصصی فروش و بازاریابی
          </h2>

          <p className="mt-5 leading-8 text-brandblue/70">
            برای مشاهده جزئیات هر خدمت، روی عنوان آن کلیک کنید.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {serviceDetails.map((service) => (
            <details
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-8 py-6 text-xl font-bold text-brandblue">
                {service.title}

                <span className="text-3xl transition duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-slate-100 px-8 py-8">
                <div className="space-y-6">
                  {service.content.map((paragraph, index) => (
                    <p key={index} className="leading-9 text-brandblue/75">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
