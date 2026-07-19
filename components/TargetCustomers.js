export default function TargetCustomers({ data }) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">{data.title}</h2>

        <p className="text-center mt-5 text-slate-600">{data.description}</p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="
rounded-2xl
bg-slate-50
p-7
text-lg
font-medium
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
