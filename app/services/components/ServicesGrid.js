"use client";

import { ArrowLeft } from "lucide-react";

export default function ServicesGrid({ services, onSelect }) {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-blue-600 font-semibold">خدمات</span>

          <h2 className="mt-4 text-4xl font-bold">خدمات مشاوره کسب‌وکار</h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            خدمات ما تمام ابعاد رشد سازمان را پوشش می‌دهد.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                onClick={() => onSelect(service.id)}
                className="
                  group
                  rounded-3xl
                  border
                  bg-white
                  p-8
                  text-right
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-600
                  hover:shadow-xl
                "
              >
                <div className="mb-8 inline-flex rounded-2xl bg-blue-100 p-4">
                  <Icon
                    className="
                      text-blue-600
                      transition-transform
                      group-hover:scale-110
                    "
                    size={28}
                  />
                </div>

                <h3 className="text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-8 text-slate-500">{service.short}</p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600">
                  مشاهده جزئیات
                  <ArrowLeft
                    size={18}
                    className="
                      transition-transform
                      group-hover:-translate-x-1
                    "
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
