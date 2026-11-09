// components/about/Committee.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Committee({ data }) {
  const { t } = useLanguage();

  const fallbackData = {
    title: t("about.committee.title"),
    subtitle: t("about.committee.desc"),
    members: [
      { id: 1, name: t("about.founder.name"), role: t("about.founder.designation"), image: "" },
      { id: 2, name: t("about.faculty.title"), role: t("about.profile.mission_heading"), image: "" },
      { id: 3, name: t("about.staff.title"), role: t("about.roster.title"), image: "" },
    ]
  };

  const committee = data || fallbackData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* হেডিং সেকশন */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-400 flex items-center justify-center gap-3">
          <span className="hidden sm:inline text-amber-500">❖</span>
          {committee.title}
          <span className="hidden sm:inline text-amber-500">❖</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {committee.subtitle}
        </p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full relative">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-800 rotate-45 border border-amber-400"></div>
        </div>
      </div>

      {/* মেম্বার কার্ড গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {committee.members?.map((member, index) => (
          <div 
            key={member.id || index} 
            className="bg-white dark:bg-slate-800 border border-emerald-50 dark:border-slate-700/50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            {/* মেম্বার ইমেজ / প্লেসহোল্ডার */}
            <div className="w-24 h-24 rounded-full mx-auto p-1 border-2 border-emerald-700 dark:border-emerald-600 bg-emerald-50 dark:bg-slate-700 flex items-center justify-center overflow-hidden shadow-inner mb-4">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
              ) : (
                <svg className="w-12 h-12 text-emerald-800/40 dark:text-emerald-400/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z" />
                </svg>
              )}
            </div>

            {/* নাম ও পদবী */}
            <h4 className="text-base font-bold text-emerald-950 dark:text-emerald-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {member.name}
            </h4>
            <p className="text-xs font-semibold text-emerald-700 dark:text-amber-500/80 mt-1 bg-emerald-50 dark:bg-emerald-950/30 py-1 px-3 rounded-full inline-block">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}