"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
    const { t } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselImages = [
        {
            url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200",
            title: t("institution.tagline"),
            subtitle: t("hero.desc"),
        },
        {
            url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200",
            title: t("hostel.subtitle"),
            subtitle: t("hostel.about_desc"),
        },
        {
            url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200",
            title: t("goals.hafez_by_grade_five.title"),
            subtitle: t("about.faculty.desc"),
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [carouselImages.length]);

    return (
        <div className="bg-slate-50 min-h-screen text-gray-800 font-sans">
            {/* ব্যানার ক্যারোসল (Hero Banner Carousel) */}
            <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden bg-slate-900">
                {carouselImages.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0 invisible"
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent z-10" />
                        <img
                            src={slide.url}
                            alt={slide.title}
                            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[5000ms]"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-24 z-20 max-w-3xl text-white">
                            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-emerald-400 drop-shadow">
                                {slide.title}
                            </h1>
                            <p className="text-base md:text-xl text-slate-200 mb-8 font-light">
                                {slide.subtitle}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/admission/form"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-md shadow transition transform hover:-translate-y-0.5 text-sm md:text-base"
                                >
                                    {t("hero.btn_form")}
                                </Link>
                                <Link
                                    href="/about"
                                    className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold px-6 py-3 rounded-md transition text-sm md:text-base"
                                >
                                    {t("hero.btn_about")}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 w-3 rounded-full transition-all ${index === currentSlide ? "bg-amber-500 w-6" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* ৩. এক নজরে পুরো মাদ্রাসা (At a Glance Matrix) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-emerald-600 pb-3 inline-block">
                        {t("institution.name")} ({t("institution.name_en")})
                    </h2>
                    <p className="text-gray-600 mt-4 text-sm md:text-base">
                        {t("stats.title")}
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-emerald-600 text-center transition hover:shadow-lg">
                        <div className="bg-emerald-100 text-emerald-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            🎓
                        </div>
                        <h3 className="text-3xl font-black text-slate-800 mb-1">{t("stats.students_count")}</h3>
                        <p className="text-gray-500 font-medium text-sm md:text-base">{t("stats.students")}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-600 text-center transition hover:shadow-lg">
                        <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            🕌
                        </div>
                        <h3 className="text-3xl font-black text-slate-800 mb-1">{t("stats.teachers_count")}</h3>
                        <p className="text-gray-500 font-medium text-sm md:text-base">{t("stats.teachers")}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-amber-500 text-center transition hover:shadow-lg">
                        <div className="bg-amber-100 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            🏢
                        </div>
                        <h3 className="text-3xl font-black text-slate-800 mb-1">{t("stats.huffaz_count")}</h3>
                        <p className="text-gray-500 font-medium text-sm md:text-base">{t("stats.huffaz")}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-purple-600 text-center transition hover:shadow-lg">
                        <div className="bg-purple-100 text-purple-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            ❤️
                        </div>
                        <h3 className="text-3xl font-black text-slate-800 mb-1">{t("stats.success_rate_count")}</h3>
                        <p className="text-gray-500 font-medium text-sm md:text-base">{t("stats.success_rate")}</p>
                    </div>
                </div>
            </section>

            {/* ৪. কুইক অ্যাকশন গেটওয়ে */}
            <section className="bg-emerald-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-amber-400 mb-2">{t("admission.title")}</h3>
                        <p className="text-emerald-100 text-sm">{t("hero.desc")}</p>
                    </div>
                    <div className="md:col-span-2 flex flex-wrap gap-4 md:justify-end">
                        <Link
                            href="/login"
                            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-md shadow transition"
                        >
                            {t("auth.submit_login")}
                        </Link>
                        <Link
                            href="/admission"
                            className="bg-transparent hover:bg-white/10 text-white border border-white font-medium px-6 py-3 rounded-md transition"
                        >
                            {t("admission.title")}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}