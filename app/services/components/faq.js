"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ questions }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            سوالات متداول
          </h2>

          <p className="mt-5 text-slate-500">
            پاسخ به رایج‌ترین سوالات درباره خدمات مشاوره کسب‌وکار
          </p>
        </div>

        <div className="space-y-5">
          {questions.map((item, index) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-right"
              >
                <span className="text-lg font-semibold">{item.question}</span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-8 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
