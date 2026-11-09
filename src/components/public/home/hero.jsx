"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  const badges = [
    t("institution.type_badge"),
    t("institution.gender_branches"),
    t("institution.residence_types"),
  ];

  return (
    <section className="relative w-full overflow-hidden -mt-[104px] sm:-mt-[112px]">
      {/* 1. Main Hero Container with Static Background Image & Overlay */}
      <div className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] w-full flex flex-col justify-between pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16">
        {/* Background Image: Static /Assembly2.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Assembly2.jpg"
            alt={t("institution.name_en")}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />

          {/* Dark Overlay so typography is crisp and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />

          {/* Decorative Islamic Geometric Star Pattern on the left */}
          <div className="hidden md:flex pointer-events-none absolute -bottom-6 -left-10 w-80 h-80 sm:w-96 sm:h-96 opacity-15 text-white">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-full h-full"
            >
              <polygon points="100,10 120,60 170,40 150,90 195,120 145,140 150,190 100,165 50,190 55,140 5,120 50,90 30,40 80,60" />
              <polygon points="100,25 115,65 155,50 140,90 175,115 135,130 140,170 100,150 60,170 65,130 25,115 60,90 45,50 85,65" />
              <circle cx="100" cy="100" r="50" />
              <circle cx="100" cy="100" r="25" />
            </svg>
          </div>
        </div>

        {/* 2. Left Side: Left-aligned bold white typography & action buttons */}
        <div className="flex items-center justify-center relative z-10 max-w-[1380px] mx-auto w-full px-4 sm:px-6 lg:px-6">
          <div className="max-w-[1380px] w-full space-y-4 sm:space-y-5 py-10">
            {/* Arabic Inscription & English Subtitle Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 bg-emerald-950/75 border border-amber-400/40 backdrop-blur-md px-4 py-1.5 rounded-full text-amber-300 text-xs sm:text-sm font-bold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span dir="rtl" lang="ar" className="font-serif text-sm sm:text-base">
                {t("institution.name_ar")}
              </span>
              <span className="text-emerald-400">•</span>
              <span className="tracking-wide">{t("institution.name_en")}</span>
            </div>

            {/* Bold White Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-tight font-shalda">
              {t("institution.name")}
            </h1>

            {/* Sub-headline / Tagline */}
            <div className="space-y-1">
              <p className="text-base sm:text-xl text-amber-300 font-bold tracking-wide">
                &quot;{t("institution.tagline")}&quot;
              </p>
              <p className="text-xs sm:text-sm text-emerald-300 font-semibold italic">
                {t("institution.tagline")}
              </p>
            </div>

            {/* Classification Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-amber-400/35 text-white text-xs sm:text-sm font-semibold backdrop-blur-xs shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>

            {/* Concise Description Text */}
            <p className="text-xs sm:text-sm md:text-[15px] text-gray-200 font-normal leading-relaxed max-w-2xl">
              {t("hero.desc")}
            </p>

            {/* Address & Quick Contact Bar */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-emerald-100/90 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t("institution.address")}</span>
              </span>
              <span className="inline-flex items-center gap-2 font-mono font-semibold text-amber-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${t("institution.phone_1").replace(/[^0-9]/g, "")}`} className="hover:underline">
                  {t("institution.phone_1")}
                </a>
                <span>,</span>
                <a href={`tel:${t("institution.phone_2").replace(/[^0-9]/g, "")}`} className="hover:underline">
                  {t("institution.phone_2")}
                </a>
              </span>
            </div>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/admission/form"
                className="inline-flex items-center justify-center bg-[#00733a] hover:bg-amber-400 hover:text-black text-white font-semibold px-6 py-2.5 rounded-md shadow-md transition-colors text-sm sm:text-base cursor-pointer"
              >
                {t("hero.btn_form")}
              </Link>

              <Link
                href="/results"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-medium border border-white/80 px-6 py-2.5 rounded-md shadow-sm transition-colors text-sm sm:text-base cursor-pointer"
              >
                {t("menu.results")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
