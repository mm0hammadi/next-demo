import Image from "next/image";
import heroImg from "../assets/img/hero/hero-5/banner2.png";

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative flex h-[80vh] items-center overflow-hidden bg-brand-gradient"
    >
      <Image
        src={heroImg}
        alt=""
        fill
        priority
        className="object-cover opacity-25 mix-blend-overlay c"
      />

      <div className="absolute inset-x-0 bottom-0 z-[5] h-20 rounded-t-[50%] bg-white" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-20 pt-14 text-center sm:px-6 sm:pb-28 sm:pt-20">
        <h1 className="text-xl font-extrabold leading-relaxed text-white sm:text-2xl md:text-4xl">
          شریک راهبردی شما در رشد پایدار کسب‌وکار
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:mt-6 sm:leading-8 md:text-base py-2">
          ما با ترکیب تحلیل داده، تجربه عملیاتی و استراتژی هدفمند، به شما کمک
          می‌کنیم ارزش ماندگار برای مشتریان، سازمان و ذی‌نفعان خلق کنید.
        </p>
        <a
          href="#contact"
          className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-brandblue transition hover:bg-white/90 sm:mt-8 sm:px-7"
        >
          فرم درخواست مشاوره
        </a>
      </div>
      <a
        href="#services"
        aria-label="اسکرول به پایین"
        className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white sm:bottom-28"
      >
        <span className="relative flex h-9 w-6 items-start justify-center rounded-full border-2 border-white">
          <span className="mt-1.5 h-2 w-2 animate-scroll-dot rounded-full bg-white" />
        </span>
        <span className="text-xs font-semibold tracking-wide">اسکرول</span>
      </a>
    </section>
  );
}
