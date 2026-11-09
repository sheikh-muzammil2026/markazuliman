// components/about/Policies.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Policies({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("about.policies.title"),
    subtitle: t("about.policies.desc"),
    rules: [
      { id: 1, title: t("about.policies.discipline"), detail: t("about.policies.discipline_text") },
      { id: 2, title: t("about.policies.dress_code"), detail: t("about.policies.dress_code_text") },
      { id: 3, title: t("about.policies.attendance"), detail: t("about.policies.attendance_text") },
    ]
  };

  const policyData = data || fallbackData;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-3">
          <span className="hidden sm:inline text-amber-500">❖</span>
          {policyData.title}
          <span className="hidden sm:inline text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{policyData.subtitle}</p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full relative">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-800 rotate-45 border border-amber-400"></div>
        </div>
      </div>

      <div className="space-y-4">
        {policyData.rules?.map((rule, index) => (
          <div key={rule.id || index} className="bg-white dark:bg-slate-800 border border-emerald-100/60 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:border-emerald-800 dark:hover:border-emerald-500 transition-colors">
            <h4 className="text-lg font-bold text-emerald-950 dark:text-emerald-400 flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              {rule.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify pl-5">
              {rule.detail || rule.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}