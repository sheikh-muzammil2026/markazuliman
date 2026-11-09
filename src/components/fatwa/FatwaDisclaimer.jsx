// src/components/fatwa/FatwaDisclaimer.jsx
"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FatwaDisclaimer() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-4xl mx-auto my-5 p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 shadow-2xs">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5">
          <AlertTriangle className="w-4 h-4" />
        </div>
        <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200/90 leading-relaxed">
          <p className="font-semibold mb-1 flex items-center gap-1.5 text-amber-950 dark:text-amber-100">
            <span>{t("fatwa.disclaimer_title")}</span>
          </p>
          <p>
            {t("fatwa.disclaimer_text")}
          </p>
        </div>
      </div>
    </div>
  );
}
