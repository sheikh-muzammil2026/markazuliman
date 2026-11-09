"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 flex flex-col justify-center items-center px-6 transition-colors duration-300 dark:bg-slate-900 dark:text-gray-100">
      <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-xl border-t-4 border-amber-500 transition-colors duration-300 dark:bg-slate-800 dark:border-emerald-600">
        <div className="text-6xl md:text-7xl mb-4 text-emerald-800 dark:text-emerald-400">
          🕌
        </div>

        <h1 className="text-4xl font-black text-emerald-950 mb-2 dark:text-white">
          404
        </h1>
        <h2 className="text-xl font-bold text-slate-800 mb-4 dark:text-amber-400">
          {t("common.not_found_title")}
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed mb-8 dark:text-slate-400">
          {t("common.not_found_desc")}
        </p>

        <Link
          href="/"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-md shadow transition transform hover:-translate-y-0.5 text-sm md:text-base dark:bg-emerald-700 dark:hover:bg-emerald-600 cursor-pointer"
        >
          {t("common.back_home")}
        </Link>
      </div>
    </div>
  );
}
