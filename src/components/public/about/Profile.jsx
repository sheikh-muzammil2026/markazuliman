// components/about/Profile.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Profile({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    bismillahText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • " + t("institution.name_ar"),
    title: t("about.profile.title") + " — " + t("institution.name"),
    subtitle: t("institution.tagline"),
    description: `${t("about.profile.intro")} ${t("about.profile.history")} ${t("hero.desc")}`,
    hadithQuote: t("hero.parent_callout"),
    quickFactsTitle: "🌙 " + t("institution.name"),
    facts: [
      { label: t("institution.type_badge"), value: t("institution.type_badge") },
      { label: t("institution.gender_branches"), value: t("institution.gender_branches") },
      { label: t("institution.residence_types"), value: t("institution.residence_types") },
      { label: t("contact.address_label"), value: t("institution.address") },
      { label: t("contact.phone_label"), value: `${t("institution.phone_1")}, ${t("institution.phone_2")}` }
    ]
  };

  const profile = data || fallbackData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* হেডিং সেকশন */}
      <div className="text-center mb-12">
        {profile.bismillahText && (
          <span className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-sm block mb-2">
            {profile.bismillahText}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-3">
          <span className="hidden sm:inline text-amber-500">❖</span>
          {profile.title}
          <span className="hidden sm:inline text-amber-500">❖</span>
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full relative">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-800 rotate-45 border border-amber-400"></div>
        </div>
      </div>

      {/* মেইন কন্টেন্ট গ্রিড */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* বাম পাশের টেক্সট কন্টেন্ট */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-lg font-medium text-emerald-950 dark:text-emerald-300 leading-relaxed">
            {profile.subtitle}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify whitespace-pre-line">
            {profile.description}
          </p>
          
          {profile.hadithQuote && (
            <div className="border-l-4 border-amber-500 bg-emerald-50/50 dark:bg-slate-800/50 p-4 rounded-r-xl">
              <p className="italic text-emerald-900 dark:text-emerald-400 font-medium">
                &ldquo;{profile.hadithQuote}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* ডান পাশের স্টাইলিশ ইনফো কার্ড */}
        <div className="lg:col-span-5">
          <div className="bg-emerald-900 text-white dark:bg-slate-800 dark:border dark:border-emerald-800/40 p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <h3 className="text-xl font-bold text-amber-400 border-b border-emerald-700 pb-3 mb-4 flex items-center gap-2">
              {profile.quickFactsTitle}
            </h3>
            
            <ul className="space-y-4 text-sm text-emerald-100 dark:text-gray-200">
              {profile.facts?.map((fact, index) => (
                <li key={index} className="flex justify-between gap-4 border-b border-emerald-800/60 pb-2 last:border-0 last:pb-0">
                  <span className="font-medium shrink-0">{fact.label}:</span>
                  <span className="text-amber-300 font-semibold text-right">{fact.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}