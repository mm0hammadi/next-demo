"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServiceAccordion({ services }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl space-y-6">

        {services.map((service, index) => {
          const Icon = service.icon;
          const active = open === index;

          return (
            <div
              key={service.id}
              className="rounded-3xl border bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(active ? -1 : index)
                }
                className="flex w-full items-center justify-between p-8 text-right"
              >
                <div className="flex gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon className="text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-gray-500">
                      {service.short}
                    </p>
                  </div>

                </div>

                <ChevronDown
                  className={`transition ${
                    active ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active && (
                <div className="border-t px-8 py-8">

                  <p className="leading-9 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-8 grid md:grid-cols-2 gap-4">
                    {service.bullets.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
                    درخواست مشاوره
                  </button>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}