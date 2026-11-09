// components/about/Vision.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Vision({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("about.vision.title"),
    visionTitle: t("about.vision.vision_title"),
    visionText: t("about.profile.vision_text"),
    missionTitle: t("goals.title"),
    missions: [
      { id: 1, text: t("goals.quran_in_childhood.title") },
      { id: 2, text: t("goals.khatam_by_grade_two.title") },
      { id: 3, text: t("goals.hafez_by_grade_five.title") },
      { id: 4, text: t("goals.quran_centric_life.title") },
    ],
  };

  const visionData = data || fallbackData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* হেডিং সেকশন */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-3">
          <span className="hidden sm:inline text-amber-500">❖</span>
          {visionData.title}
          <span className="hidden sm:inline text-amber-500">❖</span>
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full relative">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-800 rotate-45 border border-amber-400"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* লক্ষ্য (Vision) কার্ড */}
        <div className="bg-emerald-950 text-white dark:bg-slate-800 border border-emerald-800/60 p-8 rounded-2xl shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-7xl font-serif select-none pointer-events-none">
            👁️‍🗨️
          </div>
          <h3 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            🕌 {visionData.visionTitle}
          </h3>
          <p className="text-emerald-100 dark:text-gray-200 leading-relaxed text-justify">
            {visionData.visionText}
          </p>
        </div>

        {/* উদ্দেশ্য (Mission) কার্ড */}
        <div className="bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700/60 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-4 flex items-center gap-2">
            🎯 {visionData.missionTitle}
          </h3>
          <ul className="space-y-4">
            {visionData.missions?.map((item, index) => (
              <li key={item.id || index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center mt-1">
                  {index + 1}
                </span>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}