// components/public/hostel/HostelIntro.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

// ১. ছাত্রাবাস পরিচিতি কম্পোনেন্ট
export function HostelAbout({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("hostel.about_title"),
    subtitle: `${t("institution.name")} — ${t("hostel.subtitle")}`,
    desc: t("hostel.about_desc"),
  };
  const currentData = data || fallbackData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-2">
          <span className="text-amber-500">❖</span> {currentData.title} <span className="text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{currentData.subtitle}</p>
      </div>
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700/80 p-6 md:p-8 rounded-2xl shadow-sm text-center">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          {currentData.desc}
        </p>
      </div>
    </div>
  );
}

// ২. আবাসন চার্ট কম্পোনেন্ট
export function HostelChart({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("hostel.chart_title"),
    subtitle: t("hostel.chart_desc"),
    stats: [
      { label: t("institution.gender_branches"), value: "Separate" },
      { label: t("institution.residence_types"), value: "Standard" },
      { label: t("stats.students"), value: t("stats.students_count") },
      { label: t("stats.success_rate"), value: t("stats.success_rate_count") }
    ]
  };
  const currentData = data || fallbackData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-2">
          <span className="text-amber-500">❖</span> {currentData.title} <span className="text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{currentData.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {currentData.stats?.map((stat, idx) => (
          <div key={idx} className="bg-emerald-50/40 dark:bg-slate-800/50 border border-emerald-100 dark:border-slate-700 p-5 rounded-xl text-center">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">{stat.label}</span>
            <span className="text-xl md:text-2xl font-black text-emerald-800 dark:text-amber-400">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}