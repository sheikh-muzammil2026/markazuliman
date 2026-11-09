"use client";

import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

/**
 * EmployeeIdBack
 * Shared pure JSX component for the Back side of Teacher & Staff CR80 landscape ID Cards
 * Standard CR80 landscape card: 85.6mm x 53.98mm (3.375in x 2.125in)
 */
export default function EmployeeIdBack({
  variant = "teacher", // "teacher" | "staff"
  scale = 1,
}) {
  const isStaff = variant === "staff";

  return (
    <div
      className={`${
        isStaff ? "staff-id-card-back" : "teacher-id-card-back"
      } relative bg-white overflow-hidden rounded-xl shadow-md border border-slate-300 print:shadow-none print:border-none print:m-0 select-none box-border p-[4px]`}
      style={{
        width: "3.375in",
        height: "2.125in",
        minWidth: "3.375in",
        minHeight: "2.125in",
        maxWidth: "3.375in",
        maxHeight: "2.125in",
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        transformOrigin: "top left",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Inner Rounded Rectangular Border */}
      <div className="w-full h-full border-[1.5px] border-black rounded-lg p-2 flex flex-col justify-between items-center text-center bg-white">
        {/* ================= 1. RULES & NOTICE PARAGRAPHS ================= */}
        <div className="w-full space-y-[2px]">
          <p className="text-[7.5px] font-medium text-slate-800 leading-tight">
            This card remains the property of
          </p>
          <p className="text-[8.5px] font-extrabold text-black leading-tight">
            Markazul Iman Dhaka
          </p>
          <p className="text-[7.5px] font-extrabold text-black leading-tight pt-0.5">
            Not Transferable
          </p>
          <p className="text-[7px] font-medium text-slate-800 leading-tight pt-0.5">
            {isStaff
              ? "This card identifies you as a staff employee of"
              : "This card identifies you as an employee of"}
          </p>
          <p className="text-[8px] font-extrabold text-black leading-tight">
            Markazul Iman Dhaka
          </p>
          <p className="text-[6.5px] font-medium text-slate-700 leading-tight pt-0.5">
            You must produce this card on demand. If you leave the job
          </p>
          <p className="text-[6.5px] font-medium text-slate-700 leading-tight">
            you must return this card to the office of Markazul Iman Dhaka.
          </p>
        </div>

        {/* ================= 2. RETURN PILL BADGE & MADRASAH INFO ================= */}
        {isStaff ? (
          <div className="w-full my-auto flex flex-col items-center">
            <div
              className="bg-[#087F77] text-white font-extrabold text-[8px] uppercase tracking-wider px-3 py-[2px] rounded-full shadow-xs"
              style={{
                WebkitPrintColorAdjust: "exact",
                printColorAdjust: "exact",
              }}
            >
              If Found, Please Return To
            </div>

            <div className="mt-1 space-y-[1px]">
              <p className="text-[9.5px] font-black text-black tracking-tight leading-tight uppercase font-sans">
                Markazul Iman Dhaka
              </p>
              <p className="text-[6.8px] font-bold text-slate-900 leading-tight">
                House #484, Road #12, West Nakhalpara, Tejgaon, Dhaka.
              </p>
              <p className="text-[7.2px] font-black text-slate-900 font-mono leading-tight">
                Phone: 01611-375282, 01644-968911
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full my-auto flex flex-col items-center">
            <div
              className="px-2.5 py-[2px] rounded-full border border-[#0D7E75] bg-[#E6F7F5] shadow-2xs mb-1"
              style={{
                backgroundColor: "#E6F7F5",
                WebkitPrintColorAdjust: "exact",
                printColorAdjust: "exact",
              }}
            >
              <p className="text-[7.5px] font-bold text-[#DC2626] leading-none tracking-tight">
                If found Please Return to the Office of
              </p>
            </div>

            <h3 className="text-[9.5px] font-black text-black leading-tight tracking-tight uppercase">
              Markazul Iman Dhaka
            </h3>

            <p className="text-[7.5px] font-bold text-slate-800 leading-tight mt-0.5">
              House #484, Road #12, West Nakhalpara, Tejgaon, Dhaka.
            </p>

            <p className="text-[8px] font-black text-black leading-tight font-mono mt-0.5">
              Please Call : 01611-375282, 01644-968911
            </p>
          </div>
        )}

        {/* ================= 3. SOCIAL MEDIA & WEB FOOTER ================= */}
        <div className="w-full pt-1 border-t border-slate-300 flex items-center justify-between text-[6.5px] text-slate-800 font-semibold px-1">
          <div className="flex items-center gap-0.5 truncate">
            <FaFacebook className="w-2.5 h-2.5 text-[#1877F2] shrink-0" />
            <span className="truncate">facebook.com/markazulimandhaka</span>
          </div>

          <div className="flex items-center gap-0.5 truncate">
            <FaWhatsapp className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
            <span className="truncate">WhatsApp: 01644-968911</span>
          </div>
        </div>
      </div>
    </div>
  );
}
