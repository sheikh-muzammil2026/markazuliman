// components/public/hostel/HostelRules.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HostelRules({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("hostel.rules_title"),
    subtitle: t("hostel.rules_desc"),
    rules: [
      t("about.policies.discipline_text"),
      t("about.policies.dress_code_text"),
      t("about.policies.attendance_text"),
      t("admission.terms_desc"),
      t("hero.desc")
    ]
  };

  const currentData = data || fallbackData;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-2">
          <span className="text-amber-500">❖</span> {currentData.title} <span className="text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{currentData.subtitle}</p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-dashed border-emerald-300 dark:border-slate-700 shadow-sm space-y-3">
        {currentData.rules?.map((rule, idx) => (
          <div key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors">
            <span className="w-5 h-5 bg-amber-500 text-white font-mono text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{rule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}