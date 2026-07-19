export default function GrowthChart({ data }) {
  const { title, subtitle, topItems, bottomItems } = data;

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            معماری خدمات {title}
          </h2>
        </div>

        <div className="relative">
          {/* Root */}
          <div
            className="
            mx-auto
            w-fit
            rounded-xl
            border
            bg-white
            px-10
            py-6
            shadow-lg
            text-center
            relative
            z-10
            "
          >
            <h3 className="font-bold text-xl text-slate-800">{title}</h3>

            <p className="mt-3 text-sm text-slate-500 max-w-xs">{subtitle}</p>
          </div>

          {/* Vertical line */}
          <div className="mx-auto h-16 w-px bg-blue-400" />

          {/* Top connector */}
          <div
            className="
            hidden
            md:block
            absolute
            top-[170px]
            left-[12%]
            right-[12%]
            h-px
            bg-blue-300
            "
          />

          {/* Top cards */}
          <div
            className="
            mt-10
            grid
            grid-cols-1
            md:grid-cols-4
            gap-8
            "
          >
            {topItems.map((item, index) => (
              <Card key={index} text={item} />
            ))}
          </div>

          {/* Bottom connector */}
          <div
            className="
            hidden
            md:block
            mx-auto
            mt-20
            h-px
            w-[75%]
            bg-blue-300
            "
          />

          {/* Bottom cards */}
          <div
            className="
            mt-10
            grid
            grid-cols-1
            md:grid-cols-4
            gap-8
            "
          >
            {bottomItems.map((item, index) => (
              <Card key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ text }) {
  return (
    <div
      className="
      relative
      rounded-xl
      border
      bg-white
      p-6
      min-h-[130px]
      flex
      items-center
      justify-center
      text-center
      shadow-md
      hover:-translate-y-2
      transition
      "
    >
      <div
        className="
        absolute
        -top-10
        left-1/2
        h-10
        w-px
        bg-blue-300
        "
      />

      <span className="font-semibold text-slate-700">{text}</span>
    </div>
  );
}
