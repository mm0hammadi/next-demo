import { Target, Globe2 } from "lucide-react";

const icons = {
  Target,
  Globe2,
};

export default function VisionMission({ vision, mission }) {
  const renderCard = (item) => {
    const Icon = icons[item.icon];

    return (
      <div
        className="
rounded-3xl
bg-white
border
border-slate-200
p-8
shadow-sm
"
      >
        <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4">
          <Icon className="text-blue-600" size={32} />
        </div>

        <h3 className="text-2xl font-bold">{item.title}</h3>

        <h4 className="mt-3 text-blue-600 font-semibold">{item.subtitle}</h4>

        <p className="mt-5 leading-8 text-slate-600">{item.description}</p>
      </div>
    );
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {renderCard(vision)}

          {renderCard(mission)}
        </div>
      </div>
    </section>
  );
}
