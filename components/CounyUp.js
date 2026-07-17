"use client";

import CountUp from "react-countup";
import Image from "next/image";

export function Countup({ stats }) {
  return (
    <section className="bg-brand-gradient px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s) => {
          // Convert Persian numbers to English numbers
          const value =
            typeof s.value === "number" ? s.value : parsePersianNumber(s.value);

          return (
            <div
              key={s.label}
              className="rounded-2xl bg-white/10 p-6 text-white"
            >
              <div className="flex justify-center">
                <Image
                  src={s.icon}
                  alt={s.label}
                  width={100}
                  height={100}
                  className="h-12 w-12 object-contain"
                />
              </div>

              <div className="mt-3 text-2xl font-extrabold">
                <CountUp
                  end={value}
                  duration={5}
                  separator=","
                  suffix="+"
                  decimals={0}
                />
              </div>

              <div className="mt-1 text-xs text-white/80">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Helper function to convert Persian numbers
function parsePersianNumber(str) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let result = str;
  persianDigits.forEach((digit, index) => {
    result = result.replace(new RegExp(digit, "g"), index.toString());
  });
  return parseInt(result) || 0;
}
