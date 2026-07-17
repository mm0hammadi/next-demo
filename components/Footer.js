import Image from "next/image";
import linkedin from "../assets/img/icons/linkedin.svg";
import telegram from "../assets/img/icons/telegram.svg";
import whatsapp from "../assets/img/icons/whatsapp.svg";
import instagram from "../assets/img/icons/instagram.svg";

const footerLinks = ["صفحه اصلی", "درباره ما", "خدمات", "نظرات", "تماس با ما"];
const footerServices = ["بازیابی", "فروش", "مارکتینگ", "مقالات"];

const socials = [
  { icon: instagram, label: "اینستاگرام" },
  { icon: linkedin, label: "لینکدین" },
  { icon: telegram, label: "تلگرام" },
  { icon: whatsapp, label: "واتساپ" },
];

export default function Footer() {
  return (
    <footer className="bg-brandblue-dark px-4 pt-12 pb-8 sm:px-6 sm:pt-14 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white font-bold">
              پ
            </div>
            <span className="text-lg font-bold text-white">
              پنداریار پایدار
            </span>
          </div>
          <p className="mt-4 text-sm leading-7">
            همراه اجرایی کسب‌وکارها در مسیر رشد فروش و بازاریابی.
          </p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/20 transition-colors"
                title={s.label}
              >
                <Image
                  src={s.icon}
                  alt={s.label}
                  width={20}
                  height={20}
                  className="text-white"
                />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h5 className="mb-3 font-bold text-white">لینک‌های مرتبط</h5>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-3 font-bold text-white">خدمات</h5>
          <ul className="space-y-2 text-sm">
            {footerServices.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-3 font-bold text-white">تماس با ما</h5>
          <ul className="space-y-2 text-sm">
            <li>تهران، خیابان نلسون ماندلا، پلاک ۲۶۵</li>
            <li>۰۲۱-۸۸۶۴۰۳۵۰</li>
            <li>info@pendaryar.com</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs">
        © ۱۴۰۴ — کلیه حقوق مادی و معنوی این وب‌سایت متعلق به شرکت پنداریار
        پایدار می‌باشد.
      </div>
    </footer>
  );
}
