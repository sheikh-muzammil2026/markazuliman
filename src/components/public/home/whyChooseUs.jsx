"use client";

import {
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  Smile,
  GraduationCap,
  Languages,
  PenTool,
  Sparkles,
  CheckCircle2,
  Target,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const featureItems = [
    {
      icon: ShieldCheck,
      titleKey: "features.safe_environment.title",
      descKey: "features.safe_environment.desc",
    },
    {
      icon: BookOpen,
      titleKey: "features.integrated_syllabus.title",
      descKey: "features.integrated_syllabus.desc",
    },
    {
      icon: HeartHandshake,
      titleKey: "features.character_building.title",
      descKey: "features.character_building.desc",
    },
    {
      icon: Smile,
      titleKey: "features.joyful_learning.title",
      descKey: "features.joyful_learning.desc",
    },
    {
      icon: GraduationCap,
      titleKey: "features.dual_education.title",
      descKey: "features.dual_education.desc",
    },
    {
      icon: Languages,
      titleKey: "features.spoken_language.title",
      descKey: "features.spoken_language.desc",
    },
    {
      icon: PenTool,
      titleKey: "features.handwriting_class.title",
      descKey: "features.handwriting_class.desc",
    },
  ];

  const goalKeys = [
    "goals.quran_in_childhood.title",
    "goals.khatam_by_grade_two.title",
    "goals.hafez_by_grade_five.title",
    "goals.quran_centric_life.title",
  ];

  const indexLabels = ["01", "02", "03", "04", "05", "06", "07"];

  return (
    <section
      id="features"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#f6faf8] via-white to-[#f2f8f5] dark:from-[#010a06] dark:via-[#02140c] dark:to-[#010a06] transition-colors duration-300 overflow-hidden"
    >
      {/* অ্যানিমেটেড বর্ডার কি-ফ্রেম */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes spinBorder {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .custom-border-spin {
              animation: spinBorder 6s linear infinite;
              will-change: transform;
            }
          `,
        }}
      />

      {/* ডার্ক মোড গোল্ডেন ডট প্যাটার্ন ও অ্যাম্বিয়েন্ট লাইট গ্লো */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-[0.045] transition-opacity duration-300"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.9) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[420px] h-[420px] bg-emerald-500/8 dark:bg-emerald-500/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] bg-amber-500/8 dark:bg-amber-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950/5 dark:bg-gradient-to-r dark:from-amber-500/15 dark:to-emerald-500/10 border border-emerald-800/15 dark:border-amber-400/35 px-4 py-1.5 rounded-full shadow-xs dark:shadow-[0_0_20px_rgba(245,158,11,0.12)]">

            <span className="text-emerald-900 dark:text-amber-300 font-bold text-xs uppercase tracking-widest">
              {t("features.title")}
            </span>
          </div>



          <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/75 leading-relaxed max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>

          {/* অর্নামেন্টাল ডিভাইডার */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-amber-500" />
            <div className="h-2 w-2 rotate-45 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
        </div>

        {/* ৭টি লাক্সারি বৈশিষ্ট্য কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {featureItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`relative p-[1.5px] rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_35px_-12px_rgba(2,32,20,0.08)] hover:shadow-[0_25px_55px_-12px_rgba(2,32,20,0.18)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(16,185,129,0.08)] dark:hover:shadow-[0_25px_65px_-12px_rgba(0,0,0,0.95),0_0_40px_rgba(245,158,11,0.16)] ${index === 6 ? "md:col-span-2 lg:col-span-3 max-w-2xl mx-auto w-full" : ""
                  }`}
              >
                <div
                  className="absolute inset-[-100%] custom-border-spin opacity-55 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 60%, #10b981 80%, #fbbf24 100%)`,
                  }}
                />

                <div className="relative bg-white dark:bg-gradient-to-br dark:from-[#041e14] dark:via-[#02120c] dark:to-[#010906] p-7 sm:p-8 rounded-[22.5px] h-full w-full z-10 flex flex-col justify-between overflow-hidden dark:shadow-[inset_0_1px_1px_rgba(251,191,36,0.15)]">
                  <div className="hidden dark:block absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/45 to-transparent" />
                  <div className="pointer-events-none absolute -right-12 -top-12 w-36 h-36 rounded-full bg-gradient-to-br from-emerald-500/8 to-amber-500/8 dark:from-amber-400/15 dark:to-emerald-500/15 blur-2xl group-hover:scale-150 transition-transform duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#022014] via-emerald-900 to-emerald-800 dark:from-[#062d1e] dark:via-[#041f14] dark:to-[#02100a] text-amber-300 flex items-center justify-center ring-1 ring-amber-400/35 dark:ring-amber-400/50 shadow-[0_8px_20px_-4px_rgba(2,32,20,0.35)] dark:shadow-[0_0_25px_rgba(245,158,11,0.22)] group-hover:scale-110 group-hover:ring-amber-400/80 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-amber-300 transition-transform duration-300 group-hover:rotate-6" />
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-black font-mono bg-gradient-to-b from-slate-200 to-slate-100 dark:from-amber-400/35 dark:to-emerald-500/10 bg-clip-text text-transparent group-hover:from-amber-400/60 group-hover:to-emerald-400/30 transition-all select-none">
                          {indexLabels[index]}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 dark:text-amber-300 bg-emerald-50 dark:bg-amber-400/10 border border-emerald-200/60 dark:border-amber-400/30 px-2.5 py-0.5 rounded-full">
                          {t(item.titleKey).split(" ")[0]}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-800 dark:group-hover:text-amber-200 transition-colors">
                      {t(item.titleKey)}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-emerald-100/80 leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-emerald-800/40 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-amber-300/90">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      <span>{t("institution.name")}</span>
                    </span>
                    <span className="h-1 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 group-hover:w-14 transition-all duration-300 shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* সি. আপনার সন্তানকে নিয়ে আমাদের পরিকল্পনা (Student Development Goals) */}
        <div className="mt-20 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#022014] via-[#043320] to-[#01160e] text-white border border-amber-400/35 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/35 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-amber-400" />
              <span>{t("goals.title")}</span>
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-white font-shalda">
              {t("goals.title")}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/85">
              {t("goals.subtitle")}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goalKeys.map((goalKey, idx) => (
              <div
                key={idx}
                className="bg-white/[0.06] hover:bg-white/[0.10] border border-amber-400/25 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center mb-3 shadow-md">
                  0{idx + 1}
                </div>
                <p className="text-sm sm:text-base font-bold text-amber-100 leading-snug">
                  {t(goalKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}