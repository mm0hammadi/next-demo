"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/img/logo/logo-white.png";
import Link from "next/link";

const nav = [
  { label: "صفحه اصلی", href: "/" },
  { label: "خدمات", href: "/#services" },
  { label: "مقالات", href: "/blog" },
  { label: "تماس با ما", href: "/contact" },
  { label: "درباره ما", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the drawer automatically if the viewport grows back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on Escape too
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50  bg-brand-gradient backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <a className="navbar-brand ms-lg-3 flex items-center" href="/">
            <div className="flex h-10 items-center justify-center">
              <Image
                src={logo}
                alt="Logo"
                width={140}
                height={44}
                className="h-8 w-auto object-contain md:h-10"
                priority
              />
            </div>
          </a>
          <span className="text-lg font-bold text-white">پنداریار پایدار</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center font-bold  gap-7 text-sm text-white/90 md:flex  persian-numbers">
          <nav className="hidden items-center gap-7 font-bold text-sm text-white/90 md:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </nav>
        <a
          href="۰۲۱-۸۸۶۴۰۳۵۰"
          className="hidden text-sm text-white/90 md:block font-bold  space-y-5 persian-numbers"
        >
          ۰۲۱-۸۸۶۴۰۳۵۰
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 md:hidden"
        >
          <span className="absolute -translate-y-[6px] h-0.5 w-5 rounded-full bg-white" />
          <span className="absolute h-0.5 w-5 rounded-full bg-white" />
          <span className="absolute translate-y-[6px] h-0.5 w-5 rounded-full bg-white" />
        </button>
      </div>

      {/* Overlay — only exists in the DOM while open, so it can never block clicks when closed */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-brandblue/40 backdrop-blur-sm animate-[fadeIn_.2s_ease-out] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Right-side drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[85%] transform bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-brandblue/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white text-sm font-bold">
              پ
            </div>
            <span className="text-sm font-bold text-brandblue">
              پنداریار پایدار
            </span>
          </div>
          <button
            type="button"
            aria-label="بستن منو"
            onClick={() => setOpen(false)}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-brandblue/10"
          >
            <span className="absolute h-0.5 w-4 rotate-45 rounded-full bg-brandblue" />
            <span className="absolute h-0.5 w-4 -rotate-45 rounded-full bg-brandblue" />
          </button>
        </div>

        <nav className="flex flex-col divide-y divide-brandblue/10 px-5">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 text-base font-semibold text-brandblue transition hover:text-brandgreen"
            >
              {item.label}
              <span className="text-brandgreen">←</span>
            </Link>
          ))}
        </nav>

        <a
          href="tel:۰۲۱-۸۸۶۴۰۳۵۰"
          onClick={() => setOpen(false)}
          className="mx-5 mt-6 block rounded-full bg-brand-gradient px-6 py-3 text-center text-sm font-semibold text-white vazir "
        >
          ۰۲۱-۸۸۶۴۰۳۵۰
        </a>
      </div>
    </header>
  );
}
