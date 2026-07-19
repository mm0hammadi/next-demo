export default function AboutHero({ data }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 text-white">
      {/* Glow */}
      <div
        className="
        absolute
        -top-40
        right-0
        h-96
        w-96
        rounded-full
        bg-blue-600/30
        blur-3xl
      "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <span
            className="
            inline-flex
            rounded-full
            border
            border-blue-400/30
            bg-blue-400/10
            px-5
            py-2
            text-sm
            text-blue-300
          "
          >
            {data.badge}
          </span>

          <h1
            className="
            mt-8
            text-5xl
            font-black
            leading-tight
            md:text-7xl
          "
          >
            {data.title}
          </h1>

          <p
            className="
            mt-8
            text-xl
            leading-10
            text-slate-300
          "
          >
            {data.description}
          </p>
        </div>

        {/* Strategy Card */}

        <div
          className="
          mt-16
          grid
          md:grid-cols-3
          gap-6
        "
        >
          {["استراتژی", "رشد پایدار", "تحول سازمانی"].map((item, index) => (
            <div
              key={index}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur
              "
            >
              <div
                className="
              text-3xl
              font-bold
              text-blue-400
              "
              >
                0{index + 1}
              </div>

              <p className="mt-3 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
