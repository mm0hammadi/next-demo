"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function ProcessTimeline({ steps }) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            فرآیند همکاری
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-500">
            از شناخت کسب‌وکار تا اجرای راهکارها و ارزیابی نتایج، در تمام مراحل
            همراه شما هستیم.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative hidden lg:block">
          {/* Main Line */}
          <div className="absolute top-7 left-0 right-0 h-1 rounded-full bg-slate-200" />

          {/* Active Line */}
          <div
            className="absolute top-7 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
            style={{
              width: `${(active / (steps.length - 1)) * 100}%`,
            }}
          />

          <div className="relative grid grid-cols-5">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <button
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`
                    z-10 flex h-14 w-14 items-center justify-center rounded-full
                    border-4 border-white transition-all duration-300

                    ${
                      index <= active
                        ? "bg-blue-600 text-white shadow-xl scale-110"
                        : "bg-white text-slate-500"
                    }
                  `}
                >
                  <Check size={22} />
                </button>

                <h3
                  className={`mt-6 text-lg font-bold transition ${
                    index === active ? "text-blue-600" : "text-slate-700"
                  }`}
                >
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Card */}

        <div className="mx-auto mt-20 max-w-3xl rounded-3xl border bg-white p-10 shadow-xl transition-all duration-500">
          <span className="text-sm font-semibold text-blue-600">
            مرحله {active + 1}
          </span>

          <h3 className="mt-3 text-3xl font-bold">{steps[active].title}</h3>

          <p className="mt-6 leading-9 text-slate-600">
            {steps[active].description}
          </p>
        </div>

        {/* Mobile */}

        <div className="space-y-6 lg:hidden">
          {steps.map((step, index) => (
            <div key={step.id} className="rounded-3xl bg-white p-6 shadow">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  {index + 1}
                </div>

                <h3 className="font-bold">{step.title}</h3>
              </div>

              <p className="mt-5 leading-8 text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
