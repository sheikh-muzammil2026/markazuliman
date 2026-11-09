// components/public/academics/ClassTeachers.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ClassTeachers({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("academics.teachers_list_title"),
    subtitle: t("academics.teachers_list_desc"),
    list: [
      { id: 1, grade: t("departments.hifzul_quran.title"), teacher: t("departments.hifzul_quran.badge"), room: "101" },
      { id: 2, grade: t("departments.play_to_five.title"), teacher: t("departments.play_to_five.badge"), room: "102" },
      { id: 3, grade: t("departments.after_school_maktab.title"), teacher: t("batches.shift_badge"), room: "103" }
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentData.list?.map((item, index) => (
          <div key={item.id || index} className="bg-white dark:bg-slate-800 border-l-4 border-emerald-700 p-5 rounded-r-xl shadow-sm">
            <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded">
              Room: {item.room}
            </span>
            <h4 className="text-base font-bold text-emerald-950 dark:text-emerald-300 mt-2">{item.grade}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">👤 {item.teacher}</p>
          </div>
        ))}
      </div>
    </div>
  );
}