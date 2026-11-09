import React from "react";
import Image from "next/image";

export default function PrintInstitutionalHeader({
  logoSrc = "/aimlogo1.png",
  logoWrapperClassName = "w-22 h-22 rounded-full overflow-hidden flex-shrink-0 relative flex items-center justify-center",
  logoWidth = 120,
  logoHeight = 120,
  logoClassName = "w-full h-full object-cover scale-[1.05] transform-gpu",
  containerClassName = "flex justify-between items-center relative gap-2 flex-shrink-0 w-full overflow-hidden",
  children,
}) {
  return (
    <div className={containerClassName}>
      {/* মাদ্রাসার লোগো */}
      <div className={logoWrapperClassName}>
        <Image
          src={logoSrc}
          alt="Markazul Iman Dhaka Logo"
          width={logoWidth}
          height={logoHeight}
          quality={100}
          priority
          className={logoClassName}
        />
      </div>

      {/* প্রতিষ্ঠানের অফিসিয়াল হেডার ব্যানার */}
      <div className="flex-1 text-center min-w-0">
        <div className="w-full text-center space-y-0.5">
          <p className="text-[11px] font-bold text-emerald-800 tracking-wide">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • مركز الإيمان داكا
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-emerald-950 font-shalda leading-tight tracking-tight">
            মারকাযুল ঈমান ঢাকা
          </h1>
          <p className="text-xs sm:text-sm font-extrabold text-gray-800 uppercase tracking-wider">
            Markazul Iman Dhaka
          </p>
          <p className="text-[10px] sm:text-xs font-bold text-emerald-900">
            একটি বহুমুখী দ্বীনি শিক্ষা কেন্দ্র • কিন্ডারগার্টেন ও হিফয মাদ্রাসা (পৃথক বালক/বালিকা শাখা)
          </p>
          <p className="text-[9.5px] sm:text-[11px] font-semibold text-gray-700">
            বাড়ি# ৪৮৪, রোড# ১২, পশ্চিম নাখালপাড়া, তেজগাঁও, ঢাকা। | মোবাইল: ০১৬১১-৩৭৫২৮২, ০১৬৪৪-৯৬৮৯১১
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
