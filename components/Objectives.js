import { TrendingUp, Globe2, Users, BarChart3, Award } from "lucide-react";

const icons = {
  TrendingUp,
  Globe2,
  Users,
  BarChart3,
  Award,
};

export default function Objectives({ items }) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">اهداف راهبردی</h2>

          <p className="mt-4 text-slate-600">
            مسیرهایی که پنداریار برای خلق ارزش پایدار دنبال می‌کند
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={item.id}
                className="
rounded-3xl
border
p-7
hover:shadow-xl
transition
"
              >
                <div className="mb-5">
                  <Icon size={35} className="text-blue-600" />
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-slate-600 leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
