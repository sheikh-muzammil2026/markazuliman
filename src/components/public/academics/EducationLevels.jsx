// components/public/academics/EducationLevels.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function EducationLevels({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("departments.title"),
    subtitle: `${t("institution.name")} — ${t("institution.tagline")} (${t("institution.gender_branches")} • ${t("institution.residence_types")})`,
    list: [
      { id: 1, name: t("departments.play_to_five.title"), duration: t("departments.play_to_five.badge"), desc: t("departments.play_to_five.desc") },
      { id: 2, name: t("departments.hifzul_quran.title"), duration: t("departments.hifzul_quran.badge"), desc: t("departments.hifzul_quran.desc") },
      { id: 3, name: t("departments.kitab.title"), duration: t("departments.kitab.badge"), desc: t("departments.kitab.desc") },
      { id: 4, name: t("departments.after_school_maktab.title"), duration: t("departments.after_school_maktab.badge"), desc: t("departments.after_school_maktab.desc") },
      { id: 5, name: t("departments.after_school_hifz.title"), duration: t("departments.after_school_hifz.badge"), desc: t("departments.after_school_hifz.desc") },
      { id: 6, name: t("departments.alem_alema.title"), duration: t("departments.alem_alema.badge"), desc: t("departments.alem_alema.desc") }
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentData.list?.map((level, index) => (
          <div key={level.id || index} className="bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700/80 p-6 rounded-2xl relative shadow-md text-center group">
            <div className="w-12 h-12 bg-amber-500 text-white font-bold rounded-full flex items-center justify-center mx-auto -mt-12 shadow-md">
              {index + 1}
            </div>
            <h4 className="text-lg font-bold text-emerald-950 dark:text-emerald-300 mt-4">{level.name}</h4>
            <span className="text-xs font-semibold text-emerald-800 dark:text-amber-400/90 block mt-1">🕒 {level.duration}</span>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">{level.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}