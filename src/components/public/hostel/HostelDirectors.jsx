// components/public/hostel/HostelDirectors.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HostelDirectors({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("hostel.directors_title"),
    subtitle: t("hostel.directors_desc"),
    list: [
      { id: 1, name: t("about.founder.name"), role: t("hostel.directors_title"), room: "101" },
      { id: 2, name: t("about.faculty.title"), role: t("institution.name"), room: "102" },
      { id: 3, name: t("about.staff.title"), role: t("hostel.about_title"), room: "103" }
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
        {currentData.list?.map((director, index) => (
          <div key={director.id || index} className="bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 p-5 rounded-2xl shadow-sm text-center relative overflow-hidden group">
            <div className="w-14 h-14 bg-emerald-900 dark:bg-slate-700 text-white font-bold rounded-full flex items-center justify-center mx-auto text-xl mb-3">
              🕌
            </div>
            <h4 className="text-base font-bold text-emerald-950 dark:text-emerald-300">{director.name}</h4>
            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mt-1">{director.role}</p>
            <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-900 py-1 px-3 rounded-full inline-block mt-3 border border-gray-100 dark:border-slate-800">
              📍 Room: {director.room}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}