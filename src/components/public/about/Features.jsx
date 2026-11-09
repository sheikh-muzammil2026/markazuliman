// components/about/Features.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Features({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("features.title"),
    subtitle: t("features.subtitle"),
    items: [
      { id: 1, icon: "🛡️", title: t("features.safe_environment.title"), desc: t("features.safe_environment.desc") },
      { id: 2, icon: "📚", title: t("features.integrated_syllabus.title"), desc: t("features.integrated_syllabus.desc") },
      { id: 3, icon: "🤝", title: t("features.character_building.title"), desc: t("features.character_building.desc") },
      { id: 4, icon: "💖", title: t("features.joyful_learning.title"), desc: t("features.joyful_learning.desc") },
      { id: 5, icon: "🎓", title: t("features.dual_education.title"), desc: t("features.dual_education.desc") },
      { id: 6, icon: "🗣️", title: t("features.spoken_language.title"), desc: t("features.spoken_language.desc") },
      { id: 7, icon: "✍️", title: t("features.handwriting_class.title"), desc: t("features.handwriting_class.desc") }
    ]
  };

  const featureData = data || fallbackData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-3">
          <span className="hidden sm:inline text-amber-500">❖</span>
          {featureData.title}
          <span className="hidden sm:inline text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{featureData.subtitle}</p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full relative">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-800 rotate-45 border border-amber-400"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureData.items?.map((item, index) => (
          <div key={item.id || index} className="bg-white dark:bg-slate-800 border-t-4 border-emerald-800 dark:border-emerald-600 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4 bg-emerald-50 dark:bg-slate-700 w-14 h-14 rounded-full flex items-center justify-center border border-emerald-100 dark:border-slate-600">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-emerald-950 dark:text-emerald-300 mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}