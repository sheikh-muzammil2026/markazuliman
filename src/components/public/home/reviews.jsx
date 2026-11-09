"use client";

import { Star, Quote, Sparkles, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ReviewsTestimonial() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t("reviews.guardian_1_name"),
      role: t("reviews.guardian_1_role"),
      comment: t("reviews.guardian_1"),
    },
    {
      name: t("reviews.guardian_2_name"),
      role: t("reviews.guardian_2_role"),
      comment: t("reviews.guardian_2"),
    },
    {
      name: t("reviews.guardian_3_name"),
      role: t("reviews.guardian_3_role"),
      comment: t("reviews.guardian_3"),
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#f4fbf7] dark:bg-gradient-to-b dark:from-[#010a06] dark:via-[#02130c] dark:to-[#010a06] text-slate-800 dark:text-white transition-colors duration-300 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950/5 dark:bg-amber-400/15 border border-emerald-800/15 dark:border-amber-400/35 px-4 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" />
            <span className="text-emerald-900 dark:text-amber-300 font-bold text-xs uppercase tracking-widest">
              {t("reviews.title")}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white font-shalda">
            {t("reviews.title")}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/75 leading-relaxed">
            {t("reviews.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-[#031d13] border border-emerald-900/10 dark:border-amber-400/25 rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-emerald-800/20 dark:text-amber-400/20" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-emerald-100/85 leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-emerald-800/40 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-shalda">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">
                    {rev.role}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t("reviews.verified")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}