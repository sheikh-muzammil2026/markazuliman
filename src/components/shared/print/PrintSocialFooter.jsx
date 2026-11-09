import React from "react";
import { Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function PrintSocialFooter({
  className = "pt-1 border-t border-gray-300",
  innerClassName = "flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5 text-[8.5px] font-semibold text-gray-800",
  englishDigits = false,
}) {
  return (
    <div className={className}>
      <div className={innerClassName}>
        <span className="flex items-center gap-0.5">
          <Phone className="w-2.5 h-2.5 text-gray-700" />
          {englishDigits ? "01611-375282" : "০১৬১১-৩৭৫২৮২"}
        </span>

        <span className="flex items-center gap-0.5">
          <BsWhatsapp className="w-2.5 h-2.5 text-green-600" />
          {englishDigits ? "01644-968911" : "০১৬৪৪-৯৬৮৯১১"}
        </span>

        <span className="flex items-center gap-0.5">
          <FaFacebook className="w-2.5 h-2.5 text-blue-600" />
          facebook.com/markazulimandhaka
        </span>
      </div>
    </div>
  );
}
