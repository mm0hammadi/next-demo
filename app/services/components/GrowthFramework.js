import {
  BriefcaseBusiness,
  Target,
  Settings2,
  Users,
  ArrowDown,
} from "lucide-react";

const items = [
  {
    title: "استراتژی",
    icon: Target,
  },
  {
    title: "مدل کسب‌وکار",
    icon: BriefcaseBusiness,
  },
  {
    title: "فرآیندها",
    icon: Settings2,
  },
  {
    title: "منابع انسانی",
    icon: Users,
  },
];

export default function GrowthFramework() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            مسیر رشد کسب‌وکار
          </h2>

          <p className="mt-4 text-slate-500">
            رویکرد ما از تحلیل شروع می‌شود و به رشد پایدار ختم می‌شود.
          </p>
        </div>

        <div className="mt-20 flex flex-col items-center">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex flex-col items-center">
                <div
                  className="
                    w-80
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-blue-500
                    hover:shadow-xl
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-100 p-4">
                      <Icon className="text-blue-600" size={28} />
                    </div>

                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>

                {index !== items.length - 1 && (
                  <ArrowDown className="my-6 text-blue-500" size={28} />
                )}
              </div>
            );
          })}

          <div
            className="
              mt-8
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-10
              py-5
              text-xl
              font-bold
              text-white
              shadow-xl
            "
          >
            رشد پایدار
          </div>
        </div>
      </div>
    </section>
  );
}
