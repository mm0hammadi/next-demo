export default function Benefits({ items }) {
  //const Icon = item.icon;

  // <Icon size={30} />;
  return (
    <section className="py-28 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <h2 className="mt-4 text-4xl font-bold">مزایای همکاری با پنداریار</h2>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto">
            راهکارهای ما تنها ارائه پیشنهاد نیست؛ هدف ایجاد نتایج
            قابل‌اندازه‌گیری برای کسب‌وکار شماست.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur
                  transition
                  hover:border-blue-500
                  hover:bg-white/10
                "
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-600/20 p-4">
                  <Icon size={30} className="text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-8 text-slate-300">
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
