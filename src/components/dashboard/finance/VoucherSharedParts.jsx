"use client";

import React from "react";
import Image from "next/image";
import { MdInstallMobile } from "react-icons/md";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export function resolveVoucherParty(tx, parsePayerName) {
  const isIncome = tx?.type !== "expense";
  const isStudent =
    tx?.payerType === "student" ||
    Boolean(tx?.studentId) ||
    Boolean(tx?.studentName) ||
    Boolean(tx?.payerName && tx.payerName.includes(" / "));

  const parsed = parsePayerName
    ? parsePayerName(tx?.payerName)
    : {
        donorName: tx?.donorName || tx?.payerName || "N/A",
        studentId: tx?.studentId || "",
      };

  const displayName = isStudent
    ? tx?.studentName || parsed.donorName || "N/A"
    : tx?.donorName || parsed.donorName || "N/A";

  const subInfo = isStudent
    ? `${tx?.studentId || parsed.studentId || "N/A"} (${tx?.className || "N/A"})`
    : "দাতা / অনুদানকারী";

  return {
    isIncome,
    isStudent,
    parsed,
    displayName,
    subInfo,
  };
}

export function VoucherHeader({
  showRightLogo = false,
  showContactRow = false,
  className = "flex items-center justify-between gap-2 border-b-2 border-[#C5A059] pb-2",
}) {
  return (
    <div className={className}>
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-slate-50 border border-[#C5A059]">
        <Image
          src="/aimlogo1.png"
          alt="Markazul Iman Dhaka Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="flex-1 text-center min-w-0 px-1">
        <p className="text-[10px] font-bold text-emerald-800 leading-none">
          مركز الإيمان داكا
        </p>
        <h2 className="text-base sm:text-lg font-black text-emerald-950 leading-tight mt-0.5">
          মারকাযুল ঈমান ঢাকা
        </h2>
        <p className="text-[10px] font-bold text-slate-700 uppercase tracking-wide leading-tight">
          Markazul Iman Dhaka
        </p>
        <p className="text-[9px] text-slate-600 font-semibold mt-0.5">
          বাড়ি# ৪৮৪, রোড# ১২, পশ্চিম নাখালপাড়া, তেজগাঁও, ঢাকা।
        </p>
        {showContactRow && (
          <div className="flex flex-wrap items-center justify-center gap-2 text-[8.5px] text-emerald-800 font-medium mt-0.5">
            <span className="flex items-center gap-0.5">
              <MdInstallMobile className="text-[10px] shrink-0" /> ০১৬১১-৩৭৫২৮২
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-0.5">
              <FaWhatsapp className="text-[10px] shrink-0" /> ০১৬৪৪-৯৬৮৯১১
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-0.5">
              <FaFacebook className="text-[10px] shrink-0" /> markazulimandhaka
            </span>
          </div>
        )}
      </div>

      {showRightLogo && (
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-slate-50 border border-[#C5A059]">
          <Image
            src="/aimlogo1.png"
            alt="Markazul Iman Dhaka Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
