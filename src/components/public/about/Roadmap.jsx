// components/about/Roadmap.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Roadmap({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("about.roadmap.title"),
    subtitle: t("about.roadmap.desc"),
    steps: [
      { year: "Phase 1", title: t("about.roadmap.p1_title"), desc: t("about.roadmap.p1_desc") },
      { year: "Phase 2", title: t("about.roadmap.p2_title"), desc: t("about.roadmap.p2_desc") },
      { year: "Phase 3", title: t("about.roadmap.p3_title"), desc: t("about.roadmap.p3_desc") },
    ]
  };

  const roadmapData = data || fallbackData;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-3">
          <span className="hidden sm:inline text-amber-500">❖</span>
          {roadmapData.title}
          <span className="hidden sm:inline text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{roadmapData.subtitle}</p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full relative">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-800 rotate-45 border border-amber-400"></div>
        </div>
      </div>

      <div className="relative border-l-2 border-emerald-800/30 dark:border-emerald-600/30 ml-4 md:ml-32 space-y-12">
        {roadmapData.steps?.map((step, index) => (
          <div key={index} className="relative">
            {/* টাইমলাইন ইয়ার মার্কার */}
            <div className="absolute -left-4 md:-left-36 top-1 bg-amber-500 text-slate-950 px-3 py-1 rounded-md text-sm font-bold shadow-md w-28 text-center">
              {step.year}
            </div>
            
            {/* টাইমলাইন ডট */}
            <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-emerald-800 dark:bg-emerald-500 border-2 border-white dark:border-slate-900"></div>
            
            {/* কন্টেন্ট বক্স */}
            <div className="bg-white dark:bg-slate-800 border border-emerald-50 dark:border-slate-700/60 p-6 rounded-2xl shadow-sm ml-6 md:ml-0">
              <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-400 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}