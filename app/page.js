import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { CtaBanner } from "../components/Banners";
import { Countup } from "../components/CounyUp";
import OfficeMap from "../components/LeafletMap";
import PartnersSlider from "../components/PartnersSlider";
import customer from "../assets/img/count/gender-neutral-user--v1.png";
import group from "../assets/img/count/group.png";
import campaign from "../assets/img/count/external-campaign-activism-flaticons-flat-flat-icons.png";
import agreement from "../assets/img/count/agreement.png";
import Link from "next/link";

const services = [
  {
    icon: "📊",
    title: "مشاوره کسب‌وکار",
    desc: "تحلیل استراتژیک، بازنگری مدل کسب‌وکار و بهبود عملکرد سازمان.",
    href: "/services/business-consulting",
  },
  {
    icon: "📈",
    title: "مشاوره فروش و بازاریابی",
    desc: "طراحی سیستم فروش، توسعه برند و بهینه‌سازی مسیر مشتری.",
    href: "/services/sales-marketing-consulting",
  },
  {
    icon: "👥",
    title: "مشاوره منابع انسانی",
    desc: "طراحی ساختار سازمانی، مدیریت عملکرد و توسعه رهبری برای نتایج ملموس.",
    href: "/services/human-resources-consulting",
  },
];

// In your parent component (Server or Client)
const stats = [
  { icon: customer, value: "۲۱۴", label: "تعداد مشتریان" },
  { icon: campaign, value: "۳۲۵", label: "کمپین‌های فعال" },
  { icon: group, value: "۲۸۹", label: "تعاملات کاربران" },
  { icon: agreement, value: "۱۵۶۳", label: "تعداد قراردادها" },
];

const faqs = [
  {
    q: "مشاوره پنداریار برای چه کسب‌وکارهایی مناسب است؟",
    a: "راهکارهای پنداریار برای کسب‌وکارهای کوچک تا سازمان‌های بزرگ طراحی می‌شود و متناسب با ساختار واقعی هر کسب‌وکار شخصی‌سازی می‌شود.",
  },
  {
    q: "فرآیند همکاری با پنداریار چگونه آغاز می‌شود؟",
    a: "همکاری با یک جلسه شناخت کسب‌وکار شما آغاز می‌شود و سپس نقشه راه اجرایی متناسب با اهداف شما تدوین خواهد شد.",
  },
  {
    q: "آیا پنداریار در اجرای راهکارها هم همراه سازمان می‌ماند؟",
    a: "بله، تیم پنداریار علاوه بر تدوین استراتژی، در مراحل اجرا نیز کنار مدیران و تیم‌های سازمان حضور دارد.",
  },
  {
    q: "هزینه دریافت مشاوره چگونه تعیین می‌شود؟",
    a: "هزینه بر اساس دامنه پروژه، حوزه تخصصی موردنیاز و مدت زمان همکاری تعیین می‌شود؛ برای برآورد دقیق فرم مشاوره را تکمیل کنید.",
  },
];

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroBanner />

      {/* Services */}
      <Section
        id="services"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 text-center"
      >
        <h2 className="text-xl font-extrabold text-brandblue md:text-2xl">
          حوزه‌های تخصصی پنداریار
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-brandblue/60">
          ما به‌جای ارائه نسخه‌های عمومی، راهکارهای اجرایی متناسب با ساختار
          واقعی هر کسب‌وکار طراحی می‌کنیم.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-2xl border border-brandblue/10 bg-white p-7 text-right shadow-card transition hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brandgreen/15 text-2xl">
                {s.icon}
              </div>

              <h3 className="font-bold text-brandblue">{s.title}</h3>

              <p className="mt-2 text-sm leading-7 text-brandblue/70">
                {s.desc}
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-brandgreen-dark transition group-hover:-translate-x-1">
                بیشتر بدانید ←
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner
        eyebrow="مسیر اجرا"
        title="از استراتژی تا اجرا، در کنار شما"
        description="پنداریار پایدار با همراهی مدیران و مشاوران ارشد فروش و بازاریابی، راهکارهایی عملی برای رشد واقعی کسب‌وکارها ارائه می‌دهد."
        ctaLabel="شروع همکاری"
        ctaHref="#contact"
      />

      <Countup stats={stats} />

      {/* FAQ */}
      <Section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-center text-lg font-extrabold text-brandblue">
          پرسش‌های متداول
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-brandblue/10 bg-white p-4 shadow-card"
            >
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-brandblue">
                {item.q}
                <span className="text-brandgreen transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-brandblue/70">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-brandblue/10 bg-brandblue/[0.03] p-6 shadow-card">
            <h3 className="text-lg font-extrabold text-brandblue">
              در تماس باشید
            </h3>
            <p className="mt-2 text-sm text-brandblue/60">
              برای دریافت مشاوره تخصصی فروش و بازاریابی، فرم زیر را تکمیل کنید.
            </p>
            <form className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="rounded-xl border border-brandblue/15 bg-white px-4 py-3 text-sm outline-none focus:border-brandgreen"
              />
              <input
                type="text"
                placeholder="شماره تماس"
                className="rounded-xl border border-brandblue/15 bg-white px-4 py-3 text-sm outline-none focus:border-brandgreen"
              />
              <textarea
                placeholder="پیام شما"
                rows={4}
                className="rounded-xl border border-brandblue/15 bg-white px-4 py-3 text-sm outline-none focus:border-brandgreen"
              />
              <button
                type="button"
                className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                ارسال
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-xl border border-brandblue/10 bg-white p-4 shadow-card">
              <span className="text-xl">📞</span>
              <span className="text-sm text-brandblue/80">۰۲۱-۸۸۶۴۰۳۵۰</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-brandblue/10 bg-white p-4 shadow-card">
              <span className="text-xl">✉️</span>
              <span className="text-sm text-brandblue/80">
                info@pendaryar.com
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-brandblue/10 bg-white p-4 shadow-card">
              <span className="text-xl">📍</span>
              <span className="text-sm text-brandblue/80">
                تهران، خیابان نلسون ماندلا، خیابان دستگردی، پلاک ۲۶۵
              </span>
            </div>
            <div className="flex h-48 items-center justify-center rounded-xl border border-brandblue/10 bg-brandblue/5 text-sm text-brandblue/50">
              <OfficeMap />
            </div>
          </div>
        </div>
      </Section>

      {/* Clients */}
      <Section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 text-center">
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          <PartnersSlider />
        </div>
      </Section>

      {/* About */}
      <Section
        id="about"
        className="bg-brand-gradient px-4 py-12 sm:px-6 sm:py-16 text-center text-white"
      >
        <h3 className="text-lg font-extrabold">درباره پنداریار پایدار</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/85">
          پنداریار پایدار تیمی از مشاوران کسب‌وکار، فروش و منابع انسانی است که
          با نگاهی اجرایی، سازمان‌ها را در مسیر رشد پایدار همراهی می‌کند.
        </p>
      </Section>

      <Footer />
    </main>
  );
}
