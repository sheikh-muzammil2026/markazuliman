// components/public/hostel/HostelRoutine.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HostelRoutine({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("hostel.routine_title"),
    subtitle: t("hostel.routine_desc"),
    schedule: [
      { time: "04:30 AM - 05:15 AM", task: "Tahajjud, Fajr & Quran Recitation" },
      { time: "07:30 AM - 08:30 AM", task: "Breakfast & Morning Academic Session" },
      { time: "01:15 PM - 02:30 PM", task: "Zuhr Prayer, Lunch & Rest" },
      { time: "04:30 PM - 05:30 PM", task: "Asr Prayer & Sports / Leisure" },
      { time: "06:00 PM - 08:00 PM", task: "Maghrib, Evening Study & Dinner" },
      { time: "08:30 PM - 10:00 PM", task: "Isha Prayer & Night Rest" }
    ]
  };

  const currentData = data || fallbackData;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-2">
          <span className="text-amber-500">❖</span> {currentData.title} <span className="text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{currentData.subtitle}</p>
      </div>

      <div className="relative border-l border-emerald-200 dark:border-slate-700 pl-6 space-y-6 max-w-2xl mx-auto">
        {currentData.schedule?.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* টাইমলাইন ডট */}
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform"></div>
            
            <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700/60 p-4 rounded-xl shadow-sm">
              <span className="text-xs font-mono font-bold text-emerald-800 dark:text-amber-400 block mb-1">
                ⏱ {item.time}
              </span>
              <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">
                {item.task}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}