// app/admission/page.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function AdmissionGuidelinePage() {
    const { t } = useLanguage();
    const [guideSettings, setGuideSettings] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/api/admission-settings`);
                const data = await response.json();
                if (data.success && data.data) {
                    setGuideSettings(data.data);
                } else {
                    setGuideSettings({
                        timeline_start: t("hero.badge"),
                        timeline_exam: t("admission.test_title"),
                        timeline_class: t("hero.badge"),
                        process_details: `${t("admission.process_desc")}\n${t("admission.terms_desc")}`,
                        test_details: `${t("admission.test_desc")}\n${t("hero.desc")}`,
                        terms: `${t("admission.terms_desc")}\n${t("about.policies.discipline_text")}`,
                        fee_noorani_adm: "1000",
                        fee_noorani_monthly: "500",
                        fee_hifz_adm: "1500",
                        fee_hifz_monthly: "1000",
                        fee_kitab_adm: "1500",
                        fee_kitab_monthly: "800",
                    });
                }
            } catch (error) {
                console.error("Admission data load fallback:", error);
                setGuideSettings({
                    timeline_start: t("hero.badge"),
                    timeline_exam: t("admission.test_title"),
                    timeline_class: t("hero.badge"),
                    process_details: `${t("admission.process_desc")}\n${t("admission.terms_desc")}`,
                    test_details: `${t("admission.test_desc")}\n${t("hero.desc")}`,
                    terms: `${t("admission.terms_desc")}\n${t("about.policies.discipline_text")}`,
                    fee_noorani_adm: "1000",
                    fee_noorani_monthly: "500",
                    fee_hifz_adm: "1500",
                    fee_hifz_monthly: "1000",
                    fee_kitab_adm: "1500",
                    fee_kitab_monthly: "800",
                });
            } finally {
                setIsLoading(false);
            }
        };
        fetchSettings();
    }, [t]);

    useEffect(() => {
        if (!isLoading && guideSettings) {
            const scrollToHash = () => {
                const hash = window.location.hash;
                if (hash) {
                    const id = hash.replace("#", "");
                    if (id === "timeline") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        return;
                    }
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }
            };
            const timer = setTimeout(scrollToHash, 250);
            window.addEventListener("hashchange", scrollToHash);
            return () => {
                clearTimeout(timer);
                window.removeEventListener("hashchange", scrollToHash);
            };
        }
    }, [isLoading, guideSettings]);

    const renderListFromText = (text) => {
        if (!text) return null;
        return text.split('\n').map((item, index) => {
            if (item.trim() === '') return null;
            return (
                <li key={index} className="flex items-start gap-2.5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-900 mt-0.5">
                        {index + 1}
                    </span>
                    <span>{item}</span>
                </li>
            );
        });
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
                <div className="w-10 h-10 border-4 border-emerald-900 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-bold text-emerald-950">{t("common.loading")}</p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-10 bg-gray-50/50 dark:bg-slate-900 min-h-screen scroll-smooth">
            {/* হেডার সেকশন */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
                    {t("admission.title")}
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-emerald-950 dark:text-emerald-300 tracking-tight mt-4 font-shalda">
                    {t("admission.title")} — {t("institution.name")}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {t("admission.subtitle")}
                </p>
            </div>

            {/* ১. গুরুত্বপূর্ণ তারিখ ও সময়সূচী */}
            <div id="timeline" className="bg-white dark:bg-slate-800 border border-emerald-900/10 dark:border-slate-700 p-5 sm:p-6 rounded-2xl shadow-xs space-y-4 scroll-mt-20">
                <h3 className="text-base font-black text-emerald-950 dark:text-emerald-300 flex items-center gap-2 border-b border-gray-100 dark:border-slate-700 pb-3">
                    📅 {t("admission.timeline_title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-emerald-50/50 dark:bg-slate-900 rounded-xl border border-emerald-100 dark:border-slate-700 flex flex-col justify-between">
                        <span className="text-xs font-bold text-emerald-800/80 dark:text-emerald-400">{t("hero.badge")}</span>
                        <span className="text-base font-black text-gray-900 dark:text-white mt-2">{guideSettings?.timeline_start || t("hero.admission_going_on")}</span>
                    </div>
                    <div className="p-4 bg-amber-50/50 dark:bg-slate-900 rounded-xl border border-amber-100 dark:border-slate-700 flex flex-col justify-between">
                        <span className="text-xs font-bold text-amber-800/80 dark:text-amber-400">{t("admission.test_title")}</span>
                        <span className="text-base font-black text-gray-900 dark:text-white mt-2">{guideSettings?.timeline_exam || t("admission.test_desc")}</span>
                    </div>
                    <div className="p-4 bg-blue-50/50 dark:bg-slate-900 rounded-xl border border-blue-100 dark:border-slate-700 flex flex-col justify-between">
                        <span className="text-xs font-bold text-blue-800/80 dark:text-blue-400">{t("hero.badge")}</span>
                        <span className="text-base font-black text-gray-900 dark:text-white mt-2">{guideSettings?.timeline_class || t("hero.admission_going_on")}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ২. ভর্তি প্রক্রিয়া */}
                <div id="process" className="bg-white dark:bg-slate-800 border border-emerald-900/10 dark:border-slate-700 p-5 sm:p-6 rounded-2xl shadow-xs space-y-4 scroll-mt-20">
                    <h3 className="text-base font-black text-emerald-950 dark:text-emerald-300 flex items-center gap-2 border-b border-gray-100 dark:border-slate-700 pb-3">
                        ⚡ {t("admission.process_title")}
                    </h3>
                    <ul className="space-y-4 font-medium text-sm">
                        {renderListFromText(guideSettings?.process_details || t("admission.process_desc"))}
                    </ul>
                </div>

                {/* ৩. ভর্তি পরীক্ষা সংক্রান্ত নিয়মাবলী */}
                <div id="test" className="bg-white dark:bg-slate-800 border border-emerald-900/10 dark:border-slate-700 p-5 sm:p-6 rounded-2xl shadow-xs space-y-4 scroll-mt-20">
                    <h3 className="text-base font-black text-emerald-950 dark:text-emerald-300 flex items-center gap-2 border-b border-gray-100 dark:border-slate-700 pb-3">
                        📝 {t("admission.test_title")}
                    </h3>
                    <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-700">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                            {guideSettings?.test_details || t("admission.test_desc")}
                        </p>
                    </div>
                </div>
            </div>

            {/* ৪. ভর্তি ও মাসিক ফি স্ট্রাকচার */}
            <div id="fees" className="bg-white dark:bg-slate-800 border border-emerald-900/10 dark:border-slate-700 rounded-2xl shadow-xs overflow-hidden scroll-mt-20">
                <div className="p-5 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
                    <h3 className="text-base font-black tracking-wide flex items-center gap-2">
                        💵 {t("admission.fees_title")}
                    </h3>
                    <p className="text-[11px] text-emerald-200/90 mt-0.5">{t("admission.fees_desc")}</p>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="w-full text-left text-xs sm:text-sm text-gray-600 dark:text-gray-300 border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-emerald-950 dark:text-emerald-300 font-black">
                                <th className="p-4">{t("menu.departments")}</th>
                                <th className="p-4 text-center">{t("admission.fees_title")}</th>
                                <th className="p-4 text-center">{t("admission.fees_desc")}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-700 font-bold text-gray-800 dark:text-gray-200">
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="p-4 text-emerald-900 dark:text-emerald-400">{t("departments.play_to_five.title")}</td>
                                <td className="p-4 text-center font-mono">{guideSettings?.fee_noorani_adm || 'N/A'}/-</td>
                                <td className="p-4 text-center font-mono">{guideSettings?.fee_noorani_monthly || 'N/A'}/-</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="p-4 text-emerald-900 dark:text-emerald-400">{t("departments.hifzul_quran.title")}</td>
                                <td className="p-4 text-center font-mono">{guideSettings?.fee_hifz_adm || 'N/A'}/-</td>
                                <td className="p-4 text-center font-mono">{guideSettings?.fee_hifz_monthly || 'N/A'}/-</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="p-4 text-emerald-900 dark:text-emerald-400">{t("departments.kitab.title")}</td>
                                <td className="p-4 text-center font-mono">{guideSettings?.fee_kitab_adm || 'N/A'}/-</td>
                                <td className="p-4 text-center font-mono">{guideSettings?.fee_kitab_monthly || 'N/A'}/-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ৫. ভর্তির শর্তাবলী ও রুলস */}
            <div id="terms" className="bg-white dark:bg-slate-800 border border-rose-900/10 dark:border-slate-700 p-5 sm:p-6 rounded-2xl shadow-xs space-y-4 scroll-mt-20">
                <h3 className="text-base font-black text-rose-950 dark:text-rose-400 flex items-center gap-2 border-b border-rose-100 dark:border-slate-700 pb-3">
                    📜 {t("admission.terms_title")}
                </h3>
                <ul className="space-y-4 font-medium text-sm">
                    {renderListFromText(guideSettings?.terms || t("admission.terms_desc"))}
                </ul>
            </div>

            {/* অনলাইন ভর্তি ফরম বাটন */}
            <div className="pt-4 text-center">
                <Link
                    href="/admission/form"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-black px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm sm:text-base tracking-wide border border-emerald-950/20 cursor-pointer"
                >
                    <span>📝 {t("hero.btn_form")}</span>
                </Link>
            </div>
        </div>
    );
}