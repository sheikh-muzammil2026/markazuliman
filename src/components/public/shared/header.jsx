"use client";

import React from "react";
import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="w-full bg-[#00441B] text-white py-3 px-4 sm:px-6 border-b border-[#D4AF37]/30 shadow-sm font-sans antialiased print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* --- বাম পাশে: ৩ ভাষায় মাদ্রাসার নাম ও স্লোগান --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex flex-wrap justify-center md:justify-start items-baseline gap-2.5">
            <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-wide font-shalda">
              {t("institution.name")}
            </h1>
            <span
              className="text-sm sm:text-base font-bold text-[#E8C87C] tracking-wide dir-rtl"
              style={{ fontFamily: "'Traditional Arabic', 'Amiri', serif" }}
            >
              {t("institution.name_ar")}
            </span>
          </div>

          <h2 className="text-xs sm:text-sm font-semibold text-gray-300">
            {t("institution.name_en")}
          </h2>

          <p className="text-[11px] sm:text-xs font-medium tracking-wider text-[#E8C87C]/90 italic mt-0.5">
            &quot;{t("institution.tagline")}&quot;
          </p>
        </div>

        {/* --- ডান পাশে: যোগাযোগের তথ্য --- */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-200">
          <a
            href="tel:01611375282"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t("institution.phone_1")}</span>
          </a>

          <a
            href="tel:01644968911"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t("institution.phone_2")}</span>
          </a>

          <span className="flex items-center gap-1.5 text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t("institution.address")}</span>
          </span>
        </div>
      </div>
    </header>
  );
}
