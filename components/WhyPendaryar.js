export default function WhyPendaryar({ data }) {
  return (
    <section className="py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">{data.title}</h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-slate-300 leading-8">
          {data.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="
rounded-2xl
bg-white/10
p-6
border
border-white/10
"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
