"use client";

import { useEffect, useState, useRef } from "react";
import {
  Users,
  BookOpenCheck,
  Award,
  Trophy,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const formatLocalizedNumber = (num, language) => {
  const formatted = num
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (language === "bn") {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return formatted.replace(/\d/g, (digit) => bengaliDigits[digit]);
  }

  if (language === "ar") {
    const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return formatted.replace(/\d/g, (digit) => arabicDigits[digit]);
  }

  return formatted;
};

function AnimatedCounter({ targetNumber, suffix = "", language = "bn" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * targetNumber);

            if (currentStep >= steps) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(currentVal);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  return (
    <span ref={elementRef}>
      {formatLocalizedNumber(count, language)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { t, language } = useLanguage();

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: t("stats.students"),
      desc: t("institution.residence_types"),
      icon: Users,
    },
    {
      value: 100,
      suffix: "+",
      label: t("stats.huffaz"),
      desc: t("goals.hafez_by_grade_five.title"),
      icon: Award,
    },
    {
      value: 25,
      suffix: "+",
      label: t("stats.teachers"),
      desc: t("about.faculty.desc"),
      icon: BookOpenCheck,
    },
    {
      value: 100,
      suffix: "%",
      label: t("stats.success_rate"),
      desc: t("institution.name"),
      icon: Trophy,
    },
  ];

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-r from-[#01140d] via-[#03281a] to-[#01140d] dark:from-[#010704] dark:via-[#041d13] dark:to-[#010704] text-white overflow-hidden border-y border-amber-400/25 dark:border-amber-400/35 transition-colors duration-300">
      {/* সূক্ষ্ম ডট প্যাটার্ন ও অ্যাম্বিয়েন্ট গোল্ডেন গ্লো */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.85) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-400/40 px-4 py-1.5 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t("stats.title")}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-shalda">
            {t("stats.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative bg-white/[0.05] hover:bg-white/[0.09] border border-amber-400/20 hover:border-amber-400/45 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-amber-300 mb-1">
                    <AnimatedCounter
                      targetNumber={stat.value}
                      suffix={stat.suffix}
                      language={language}
                    />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-shalda">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-emerald-100/75 leading-relaxed pt-3 border-t border-white/10">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}