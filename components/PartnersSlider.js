"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import brands from "../assets/img/clients/brands.svg";
import limome from "../assets/img/clients/limome.png";
import mahan from "../assets/img/clients/mahan.png";
import sibdiet from "../assets/img/clients/sibdiet.png";
import ssrc from "../assets/img/clients/ssrc.png";
import taamasrar from "../assets/img/clients/taamasrar.png";
import asc from "../assets/img/clients/asc.png";

const partners = [
  { name: "برندز", logo: brands },
  { name: "لیمومه", logo: limome },
  { name: "مہان", logo: mahan },
  { name: "سیب دایت", logo: sibdiet },
  { name: "SSRC", logo: ssrc },
  { name: "طعم اسرار", logo: taamasrar },
  { name: "ASC", logo: asc },
];
export default function PartnersSlider() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">همراهان ما</h2>
          <p className="text-gray-600">
            سازمان‌ها و برندهایی که با افتخار در کنارشان هستیم
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="partners-swiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-32 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 p-6">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={90}
                  className="max-h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
