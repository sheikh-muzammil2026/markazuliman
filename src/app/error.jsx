"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Error({ error, reset }) {
  const { t } = useLanguage();

  useEffect(() => {
    console.error("System Error Log:", error);
  }, [error]);

  const formatErrorMessage = () => {
    if (!error) return t("common.error_desc");
    if (typeof error === "string") return error;
    if (typeof error?.message === "string") return error.message;
    if (typeof error === "object") {
      try {
        return JSON.stringify(error, null, 2);
      } catch {
        return String(error);
      }
    }
    return String(error);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 flex flex-col justify-center items-center px-6 transition-colors duration-300 dark:bg-slate-900 dark:text-gray-100">
      <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-xl border-t-4 border-rose-500 transition-colors duration-300 dark:bg-slate-800 dark:border-rose-600">
        <div className="text-5xl mb-4 animate-bounce">
          ⚠️
        </div>

        <h2 className="text-xl font-black text-slate-900 mb-3 dark:text-white">
          {t("common.error_title")}
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 dark:text-slate-400">
          {t("common.error_desc")}
        </p>

        {error && (
          <div className="mb-6 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-left">
            <pre className="text-xs font-mono text-rose-700 dark:text-rose-400 whitespace-pre-wrap break-all">
              {formatErrorMessage()}
            </pre>
          </div>
        )}

        <button
          onClick={() => reset()}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-md shadow transition transform hover:-translate-y-0.5 text-sm md:text-base dark:bg-emerald-700 dark:hover:bg-emerald-600 cursor-pointer"
        >
          {t("common.try_again")}
        </button>
      </div>
    </div>
  );
}
