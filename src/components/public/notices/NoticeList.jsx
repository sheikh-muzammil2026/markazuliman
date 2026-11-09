// components/public/notices/NoticeList.jsx
"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function NoticeList({ data }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const fallbackCategories = [
    { id: "all", label: t("notices.all") },
    { id: "exam", label: t("notices.exam") },
    { id: "holiday", label: t("notices.holiday") },
    { id: "admission", label: t("notices.admission") },
    { id: "general", label: t("notices.general") },
    { id: "urgent", label: t("notices.urgent") }
  ];

  const fallbackList = [
    { id: 1, type: "exam", title: "১৪৪৭ হিজরী শিক্ষাবর্ষের সাময়িক পরীক্ষার সময়সূচী প্রকাশ", date: "১০ জুলাই, २०२৬", size: "১.২ MB" },
    { id: 2, type: "holiday", title: "আসন্ন পবিত্র আশুরা উপলক্ষে মাদরাসা বন্ধের বিজ্ঞপ্তি", date: "০৮ জুলাই, २०२৬", size: "৮৫০ KB" },
    { id: 3, type: "general", title: "নতুন শিক্ষাবর্ষে কিতাব বিভাগে ছাত্র ভর্তির নিয়মাবলী ও শর্তসমূহ", date: "০১ জুলাই, २०२৬", size: "২.৪ MB" }
  ];

  const categories = data?.categories || fallbackCategories;
  const list = data?.list || fallbackList;
  const title = data?.title || t("notices.title");
  const subtitle = data?.subtitle || t("notices.subtitle");

  const filteredList = activeTab === "all" ? list : list?.filter(n => n.type === activeTab);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-2">
          <span className="text-amber-500">❖</span> {title} <span className="text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{subtitle}</p>
      </div>

      {/* ক্যাটাগরি ফিল্টার ট্যাব */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-xs font-bold px-4 py-2 rounded-full transition-all border cursor-pointer ${
              activeTab === tab.id
                ? "bg-emerald-800 text-white border-emerald-800 shadow-sm"
                : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-slate-700 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* নোটিশ তালিকা */}
      <div className="space-y-4">
        {filteredList?.map((notice) => (
          <div key={notice.id} className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700/80 p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-emerald-200 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-slate-900 rounded-xl flex flex-col items-center justify-center text-emerald-800 dark:text-emerald-400 flex-shrink-0 border border-emerald-100/50">
                <span className="text-xl">📄</span>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200 leading-snug">{notice.title}</h4>
                {notice.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{notice.description}</p>
                )}
                <div className="flex items-center gap-3 mt-1.5 text-[11px] font-medium text-gray-400">
                  <span>📅 {t("notices.published_on")} {notice.date}</span>
                  {notice.size && <span>💾 {notice.size}</span>}
                </div>
              </div>
            </div>
            {notice.attachmentUrl ? (
              <a
                href={notice.attachmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 self-end sm:self-center whitespace-nowrap cursor-pointer"
              >
                📥 {t("notices.download")}
              </a>
            ) : (
              <span className="text-xs text-gray-400 self-end sm:self-center italic px-3 py-1">
                {t("notices.title")}
              </span>
            )}
          </div>
        ))}
        {filteredList?.length === 0 && (
          <p className="text-center text-sm text-gray-400 py-8">{t("notices.no_category_notices")}</p>
        )}
      </div>
    </div>
  );
}
