"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Loading() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50/80 flex flex-col justify-center items-center px-6 transition-colors duration-300 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        {/* Luxury Islamic Rotating Ring */}
        <div className="w-16 h-16 rounded-full border-4 border-t-amber-500 border-r-transparent border-b-emerald-800 border-l-transparent animate-spin dark:border-b-emerald-400"></div>

        {/* Inner pulsing core logo mark */}
        <div className="absolute top-3 bg-white text-emerald-950 font-black text-xs w-10 h-10 rounded-full flex items-center justify-center shadow-md animate-pulse border border-emerald-100 dark:bg-slate-800 dark:text-emerald-400 dark:border-slate-700">
          MI
        </div>

        {/* Loading text */}
        <p className="mt-5 text-sm font-bold text-emerald-950 tracking-wide dark:text-emerald-400 animate-pulse">
          {t("common.loading")}
        </p>
      </div>
    </div>
  );
}
