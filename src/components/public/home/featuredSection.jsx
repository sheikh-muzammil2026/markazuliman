"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Award,
  Layers,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedSections() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const departmentKeys = [
    { num: "01", key: "departments.play_to_five" },
    { num: "02", key: "departments.hifzul_quran" },
    { num: "03", key: "departments.kitab" },
    { num: "04", key: "departments.after_school_maktab" },
    { num: "05", key: "departments.after_school_hifz" },
    { num: "06", key: "departments.alem_alema" },
  ];

  const maktabBatchKeys = [
    "batches.batch_1",
    "batches.batch_2",
    "batches.batch_3",
    "batches.batch_4",
    "batches.batch_5",
  ];

  const showcaseDepts = [
    {
      id: "hifz",
      icon: BookOpen,
      watermark: "تحفيظ القرآن",
      tag: t("departments.hifzul_quran.title"),
      title: t("departments.hifzul_quran.title"),
      sub: t("goals.quran_in_childhood.title"),
      highlightPill: t("goals.hafez_by_grade_five.title"),
      description: t("departments.hifzul_quran.desc"),
      points: [
        t("goals.quran_in_childhood.title"),
        t("goals.khatam_by_grade_two.title"),
        t("goals.hafez_by_grade_five.title"),
        t("goals.quran_centric_life.title"),
        t("institution.gender_branches"),
        t("institution.residence_types"),
      ],
      primaryHref: "/admission/form",
      secondaryHref: "/academics#levels",
    },
    {
      id: "academic",
      icon: GraduationCap,
      watermark: "الأكاديمية",
      tag: `${t("departments.play_to_five.title")} & ${t("departments.kitab.title")}`,
      title: `${t("departments.play_to_five.title")} & ${t("departments.kitab.title")}`,
      sub: t("features.integrated_syllabus.title"),
      highlightPill: `${t("features.dual_education.title")} • ${t("features.spoken_language.title")}`,
      description: t("departments.play_to_five.desc"),
      points: [
        t("departments.play_to_five.title"),
        t("departments.kitab.title"),
        t("departments.alem_alema.title"),
        t("features.spoken_language.title"),
        t("features.handwriting_class.title"),
        t("features.joyful_learning.title"),
      ],
      primaryHref: "/admission/form",
      secondaryHref: "/academics#syllabus",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-white dark:bg-gradient-to-b dark:from-[#010b07] dark:via-[#031810] dark:to-[#010b07] transition-colors duration-300 overflow-hidden"
    >
      {/* ডার্ক মোড গোল্ডেন ডট প্যাটার্ন ও অ্যাম্বিয়েন্ট লাইট ডেকোরেশন */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-[0.04] transition-opacity duration-300"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.9) 1px, transparent 0)`,
          backgroundSize: "34px 34px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-emerald-500/8 dark:bg-emerald-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-amber-500/8 dark:bg-amber-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* সেকশন হেডার */}
        <div
          className={`text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-950/5 dark:bg-gradient-to-r dark:from-amber-500/15 dark:to-emerald-500/10 border border-emerald-800/15 dark:border-amber-400/35 px-4 py-1.5 rounded-full shadow-xs dark:shadow-[0_0_20px_rgba(245,158,11,0.12)]">

            <span className="text-emerald-900 dark:text-amber-300 font-bold text-xs uppercase tracking-widest">
              {t("departments.title")}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">

            <span className="bg-gradient-to-r pt-2 from-emerald-800 via-emerald-600 to-amber-600 dark:from-amber-200 dark:via-amber-400 dark:to-emerald-300 bg-clip-text text-transparent font-shalda">
              {t("departments.title")}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/75 leading-relaxed max-w-2xl mx-auto">
            {t("departments.subtitle")}
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-amber-500" />
            <div className="h-2 w-2 rotate-45 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
        </div>

        {/* ৪.এ: ৬টি একাডেমিক বিভাগসমূহ (Academic Departments Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {departmentKeys.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-gradient-to-br from-[#f8fcfa] to-white dark:from-[#042217] dark:to-[#02130c] border border-emerald-800/15 dark:border-amber-400/25 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-900 text-amber-300 text-xs font-extrabold">
                    {item.num}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 dark:text-amber-300">
                    {t(`${item.key}.badge`)}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 font-shalda">
                  {t(`${item.key}.title`)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-emerald-100/80 leading-relaxed">
                  {t(`${item.key}.desc`)}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100 dark:border-emerald-800/40 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-amber-300">
                <span>{t("hero.admission_going_on")}</span>
                <Link href="/admission/form" className="hover:underline inline-flex items-center gap-1">
                  <span>{t("hero.btn_form")}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ২টি রয়েল ডিপার্টমেন্ট শোকেস কার্ড (#hifz & #academic) */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 transition-all duration-1000 ease-out ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
            }`}
        >
          {showcaseDepts.map((dept, index) => {
            const IconComponent = dept.icon;
            const isHifz = index === 0;

            return (
              <div
                key={dept.id}
                id={dept.id}
                className={`group relative rounded-[28px] p-[1.5px] transition-all duration-500 hover:-translate-y-2 scroll-mt-28 ${isHifz
                  ? "bg-gradient-to-b from-amber-400/60 via-emerald-500/35 to-amber-500/40 shadow-[0_20px_60px_-15px_rgba(2,32,20,0.18)] hover:shadow-[0_30px_70px_-15px_rgba(2,32,20,0.28)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(245,158,11,0.12)]"
                  : "bg-gradient-to-b from-emerald-600/45 via-amber-400/35 to-emerald-900/40 dark:from-emerald-400/55 dark:via-amber-400/35 dark:to-emerald-600/40 shadow-[0_20px_60px_-15px_rgba(2,32,20,0.12)] hover:shadow-[0_30px_70px_-15px_rgba(2,32,20,0.22)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(16,185,129,0.12)]"
                  }`}
              >
                <div
                  className={`relative h-full w-full rounded-[26.5px] p-7 sm:p-10 flex flex-col justify-between overflow-hidden ${isHifz
                    ? "bg-gradient-to-br from-[#022014] via-[#042f1e] to-[#01160e] dark:from-[#05291b] dark:via-[#031910] dark:to-[#010a06] text-white dark:shadow-[inset_0_1px_1px_rgba(251,191,36,0.2)]"
                    : "bg-gradient-to-br from-white via-[#f9fcfb] to-[#f1f8f5] dark:from-[#042418] dark:via-[#02160f] dark:to-[#010906] text-slate-900 dark:text-white dark:shadow-[inset_0_1px_1px_rgba(52,211,153,0.2)]"
                    }`}
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-85" />

                  <div
                    className={`pointer-events-none select-none absolute -right-4 -bottom-6 text-7xl sm:text-8xl font-bold kufi-custom transition-transform duration-700 group-hover:scale-110 ${isHifz
                      ? "text-white/[0.04] dark:text-amber-300/[0.05]"
                      : "text-emerald-950/[0.04] dark:text-emerald-300/[0.05]"
                      }`}
                    dir="rtl"
                    lang="ar"
                  >
                    {dept.watermark}
                  </div>

                  <div
                    className={`pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl transition-opacity duration-500 ${isHifz
                      ? "bg-amber-400/15 dark:bg-amber-400/20"
                      : "bg-emerald-500/10 dark:bg-emerald-400/20"
                      }`}
                  />

                  <div className="relative z-10 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider border ${isHifz
                          ? "bg-amber-400/15 text-amber-300 border-amber-400/35 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                          : "bg-emerald-950/8 dark:bg-amber-400/15 text-emerald-900 dark:text-amber-300 border-emerald-800/20 dark:border-amber-400/35 dark:shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                          }`}
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{dept.tag}</span>
                      </span>

                      <div
                        className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${isHifz
                          ? "bg-gradient-to-br from-amber-400/20 to-emerald-500/20 border border-amber-400/45 text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.25)]"
                          : "bg-gradient-to-br from-[#022014] to-emerald-800 dark:from-emerald-500/20 dark:to-amber-400/20 text-amber-300 ring-1 ring-amber-400/45 shadow-lg dark:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
                          }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <div>
                      <h3
                        className={`text-2xl sm:text-3xl font-black tracking-tight ${isHifz
                          ? "bg-gradient-to-r from-white via-amber-50 to-amber-200 bg-clip-text text-transparent"
                          : "text-slate-900 dark:bg-gradient-to-r dark:from-white dark:via-amber-50 dark:to-amber-200 dark:bg-clip-text dark:text-transparent"
                          }`}
                      >
                        {dept.title}
                      </h3>
                      <p
                        className={`text-xs font-semibold mt-1 ${isHifz
                          ? "text-amber-300/90"
                          : "text-emerald-700 dark:text-amber-300/90"
                          }`}
                      >
                        {dept.sub}
                      </p>
                    </div>

                    <div
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-xs sm:text-[13px] font-bold ${isHifz
                        ? "bg-white/[0.06] dark:bg-gradient-to-r dark:from-amber-500/15 dark:to-emerald-500/10 border-amber-400/35 text-amber-200"
                        : "bg-emerald-950/[0.04] dark:bg-gradient-to-r dark:from-emerald-500/15 dark:to-amber-500/10 border-emerald-800/15 dark:border-amber-400/35 text-emerald-900 dark:text-amber-200"
                        }`}
                    >
                      {isHifz ? (
                        <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      ) : (
                        <Award className="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0" />
                      )}
                      <span>{dept.highlightPill}</span>
                    </div>

                    <p
                      className={`text-sm leading-relaxed ${isHifz
                        ? "text-emerald-100/85"
                        : "text-slate-600 dark:text-emerald-100/85"
                        }`}
                    >
                      {dept.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {dept.points.map((pt, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-xs sm:text-[13px] font-medium transition-all duration-200 ${isHifz
                            ? "bg-white/[0.04] dark:bg-[#062d1e]/55 hover:bg-white/[0.08] dark:hover:bg-[#083a27]/70 border-white/10 dark:border-emerald-500/20 dark:hover:border-amber-400/40 text-slate-100"
                            : "bg-white/80 dark:bg-[#05291b]/55 hover:bg-emerald-50/60 dark:hover:bg-[#073624]/70 border-slate-200/70 dark:border-emerald-500/20 dark:hover:border-amber-400/40 text-slate-700 dark:text-slate-100"
                            }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isHifz
                              ? "text-amber-400"
                              : "text-emerald-600 dark:text-amber-400"
                              }`}
                          />
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`relative z-10 mt-8 pt-6 border-t flex flex-wrap items-center gap-3 ${isHifz
                      ? "border-white/10 dark:border-emerald-800/50"
                      : "border-slate-200/80 dark:border-emerald-800/50"
                      }`}
                  >
                    <Link
                      href={dept.primaryHref}
                      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${isHifz
                        ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 shadow-[0_8px_25px_rgba(245,158,11,0.35)]"
                        : "bg-gradient-to-r from-[#022014] via-emerald-900 to-emerald-800 dark:from-amber-400 dark:via-amber-500 dark:to-amber-400 text-white dark:text-slate-950 shadow-md dark:shadow-[0_8px_25px_rgba(245,158,11,0.35)]"
                        }`}
                    >
                      <span>{t("admission.apply_now")}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </Link>

                    <Link
                      href={dept.secondaryHref}
                      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${isHifz
                        ? "bg-white/[0.07] hover:bg-white/[0.14] text-white border-white/20 dark:border-amber-400/25 dark:hover:border-amber-400/50"
                        : "bg-slate-100 hover:bg-emerald-50 dark:bg-white/[0.07] dark:hover:bg-white/[0.14] text-slate-800 dark:text-white border-slate-200 dark:border-amber-400/25 dark:hover:border-amber-400/50"
                        }`}
                    >
                      <span>{t("common.details")}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ৪.ডি: আফটার স্কুল মাকতাব প্রোগ্রাম ব্যানার (After-School Maktab Program - দৈনিক ১ ঘণ্টা) */}
        <div
          id="after-school-maktab"
          className="mt-16 rounded-3xl p-7 sm:p-10 bg-gradient-to-r from-[#022014] via-emerald-900 to-[#043320] text-white border-2 border-amber-400/50 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>{t("batches.shift_badge")}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-shalda leading-snug">
                {t("hero.parent_callout")}
              </h3>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-amber-400/40 text-amber-300 text-sm sm:text-base font-extrabold">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t("departments.after_school_maktab.desc")}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-emerald-100">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>
                    {t("institution.phone_1")}, {t("institution.phone_2")}
                  </span>
                </span>
                <Link
                  href="/admission/form"
                  className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-2.5 rounded-xl shadow-md transition-all"
                >
                  <span>{t("hero.btn_form")}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>

            {/* আমাদের ব্যাচসমূহ (Daily Batch Schedules) */}
            <div className="lg:col-span-5 bg-black/25 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 space-y-3">
              <h4 className="text-base sm:text-lg font-extrabold text-amber-300 border-b border-white/15 pb-2 flex items-center justify-between">
                <span>{t("batches.title")}</span>
                <span className="text-xs bg-emerald-800 text-emerald-100 px-2.5 py-0.5 rounded-full">
                  {t("batches.shift_badge")}
                </span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {maktabBatchKeys.map((key, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between bg-white/[0.06] hover:bg-white/[0.12] px-3.5 py-2.5 rounded-xl border border-white/10 transition-colors"
                  >
                    <span className="font-bold text-amber-200">{t(`${key}.title`)}:</span>
                    <span className="font-semibold text-white">{t(`${key}.time`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}