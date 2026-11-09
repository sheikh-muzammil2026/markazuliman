// components/about/Faculty.jsx
"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { Pause, Play, ArrowRight } from "lucide-react";
import PersonDetailsModal from "@/components/public/shared/PersonDetailsModal";
import TeacherCard from "@/components/public/shared/TeacherCard";
import { useLanguage } from "@/context/LanguageContext";

const API_BASE =
  process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:5000";

export default function Faculty({ data, onLoaded }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("about.faculty.title"),
    subtitle: t("about.faculty.desc"),
  };

  const hasPropData = Boolean(data?.list && data.list.length > 0);
  const [facultyList, setFacultyList] = useState(hasPropData ? data.list : null);
  const [loading, setLoading] = useState(!hasPropData);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (hasPropData) {
      onLoaded?.("faculty");
      return;
    }

    let isMounted = true;
    async function fetchFaculty() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/api/teachers`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch faculty: ${res.status}`);
        }

        const json = await res.json();
        if (isMounted) {
          if (json?.success && Array.isArray(json?.data)) {
            setFacultyList(json.data);
          } else {
            setFacultyList([]);
          }
        }
      } catch (err) {
        console.warn("Faculty fetch error:", err.message);
        if (isMounted) {
          setFacultyList([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          onLoaded?.("faculty");
        }
      }
    }

    fetchFaculty();

    return () => {
      isMounted = false;
    };
  }, [data, onLoaded, hasPropData]);

  const activeTitle = data?.title || fallbackData.title;
  const activeSubtitle = data?.subtitle || fallbackData.subtitle;

  const trackItems = useMemo(() => {
    const source = facultyList && facultyList.length > 0 ? facultyList : [];
    if (!source || source.length === 0) return [];
    let items = [...source];
    while (items.length < 8) {
      items = [...items, ...source];
    }
    return items;
  }, [facultyList]);

  const handleOpenDetails = (teacher) => {
    setSelectedTeacher(teacher);
    setModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* হেডার সেকশন */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-3">
          <span className="hidden sm:inline text-amber-500">❖</span>
          {activeTitle}
          <span className="hidden sm:inline text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {activeSubtitle}
        </p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full relative">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-800 rotate-45 border border-amber-400"></div>
        </div>

        {/* ইন্টারঅ্যাক্টিভ কন্ট্রোল ও ভিউ অল বাটন */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 text-xs text-gray-500 dark:text-gray-400">
          <Link
            href="/teachers"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-800 hover:bg-emerald-700 text-white transition-all shadow-sm group"
          >
            <span>{t("common.view_all")}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
          </Link>

          {!loading && trackItems.length > 0 && (
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-slate-700/60 hover:text-emerald-800 dark:hover:text-emerald-300 transition-all cursor-pointer shadow-2xs"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                  <span>Play</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-amber-600 fill-amber-600" />
                  <span>Pause</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* লোডিং স্কেলিটন স্টেট */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={`skel-${n}`}
              className="bg-white dark:bg-slate-800 border border-emerald-100/70 dark:border-slate-700 rounded-2xl p-6 text-center shadow-md animate-pulse space-y-4"
            >
              <div className="w-24 h-24 rounded-full mx-auto bg-gray-200 dark:bg-slate-700 border-4 border-emerald-100 dark:border-slate-600"></div>
              <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded-md w-3/4 mx-auto"></div>
              <div className="h-4 bg-amber-100 dark:bg-amber-950/40 rounded-full w-1/2 mx-auto"></div>
              <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-md w-5/6 mx-auto pt-2 border-t border-gray-100 dark:border-slate-700"></div>
            </div>
          ))}
        </div>
      ) : trackItems.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-emerald-200 dark:border-slate-700 p-8">
          <p className="text-gray-500 dark:text-gray-400">
            {t("common.loading")}
          </p>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden py-4 group-marquee">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-gray-50 dark:from-slate-900 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent z-10" />

          <div
            className="flex w-max gap-6"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            <div
              className="flex shrink-0 gap-6 animate-marquee"
              style={{
                animationPlayState: isPaused ? "paused" : undefined,
              }}
            >
              {trackItems.map((teacher, index) => (
                <TeacherCard
                  key={`track1-${teacher.id || teacher.email || index}-${index}`}
                  teacher={teacher}
                  variant="marquee"
                  onSelect={handleOpenDetails}
                />
              ))}
            </div>

            <div
              className="flex shrink-0 gap-6 animate-marquee"
              aria-hidden="true"
              style={{
                animationPlayState: isPaused ? "paused" : undefined,
              }}
            >
              {trackItems.map((teacher, index) => (
                <TeacherCard
                  key={`track2-${teacher.id || teacher.email || index}-${index}`}
                  teacher={teacher}
                  variant="marquee"
                  onSelect={handleOpenDetails}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* শিক্ষক বিস্তারিত তথ্য মডেল */}
      <PersonDetailsModal
        person={selectedTeacher}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="teacher"
      />
    </div>
  );
}