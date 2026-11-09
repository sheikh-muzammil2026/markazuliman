"use client";

import React, { useEffect, useState } from "react";
import NoticeList from "@/components/public/notices/NoticeList";
import { useLanguage } from "@/context/LanguageContext";

const API_BASE =
  process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:5000";

export default function NoticesPage() {
  const { t, language } = useLanguage();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotices() {
      try {
        const res = await fetch(`${API_BASE}/api/notices?status=active&limit=50`, {
          cache: "no-store",
        });
        const json = await res.json();
        if (json.success && json.notices && json.notices.length > 0) {
          const localeCode = language === "bn" ? "bn-BD" : language === "ar" ? "ar-EG" : "en-US";
          const formattedList = json.notices.map((n) => ({
            id: n._id,
            type: n.category || "general",
            title: n.title,
            description: n.description,
            date: n.publishDate
              ? new Date(n.publishDate).toLocaleDateString(localeCode)
              : "-",
            size: n.attachmentUrl ? "PDF / Document" : "",
            attachmentUrl: n.attachmentUrl,
            priority: n.priority,
          }));

          setData({
            title: t("notices.title"),
            subtitle: t("notices.subtitle"),
            categories: [
              { id: "all", label: t("notices.all") },
              { id: "exam", label: t("notices.exam") },
              { id: "holiday", label: t("notices.holiday") },
              { id: "admission", label: t("notices.admission") },
              { id: "general", label: t("notices.general") },
              { id: "urgent", label: t("notices.urgent") },
            ],
            list: formattedList,
          });
        }
      } catch (err) {
        console.error("Notices page load error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchNotices();
  }, [language, t]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-16">
      {loading ? (
        <div className="text-center py-20 text-slate-500">
          <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p>{t("notices.loading_notices")}</p>
        </div>
      ) : (
        <NoticeList data={data} />
      )}
    </div>
  );
}
