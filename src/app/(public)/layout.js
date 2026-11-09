import Footer from "@/components/public/shared/footer";
import BottomNavbar from "@/components/public/shared/BottomNavbar";
import AIChatbot from "@/components/AIChatbot";
import React from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/public/shared/navbar";

export const metadata = {
  metadataBase: new URL("https://markazuliman.vercel.app"),

  title: {
    default: "মারকাযুল ঈমান ঢাকা | Markazul Iman Dhaka",
    template: "%s | Markazul Iman Dhaka (মারকাযুল ঈমান ঢাকা)",
  },
  description:
    "একটি বহুমুখী দ্বীনি শিক্ষা কেন্দ্র — One Institute Provides path of the here and hereafter. কিন্ডারগার্টেন ও হিফয মাদ্রাসা (পৃথক বালক/বালিকা শাখা | আবাসিক, অনাবাসিক, ডে-কেয়ার)। বাড়ি# ৪৮৪, রোড# ১২, পশ্চিম নাখালপাড়া, তেজগাঁও, ঢাকা।",

  keywords: [
    "markazuliman",
    "Markazul Iman Dhaka",
    "মারকাযুল ঈমান ঢাকা",
    "مركز الإيمان داكا",
    "কিন্ডারগার্টেন ও হিফয মাদ্রাসা",
    "আফটার স্কুল মাকতাব",
    "আফটার স্কুল হিফজ",
    "তেজগাঁও মাদ্রাসা",
    "নাখালপাড়া মাদ্রাসা",
    "Hifz Madrasah Dhaka",
    "Islamic School Tejgaon Dhaka",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "মারকাযুল ঈমান ঢাকা | Markazul Iman Dhaka (مركز الإيمان داكا)",
    description:
      "একটি বহুমুখী দ্বীনি শিক্ষা কেন্দ্র — কিন্ডারগার্টেন ও হিফয মাদ্রাসা (পৃথক বালক/বালিকা শাখা | আবাসিক, অনাবাসিক, ডে-কেয়ার)। বাড়ি# ৪৮৪, রোড# ১২, পশ্চিম নাখালপাড়া, তেজগাঁও, ঢাকা।",
    url: "https://markazuliman.vercel.app",
    siteName: "Markazul Iman Dhaka",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Markazul Iman Dhaka Banner",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Markazul Iman Dhaka | মারকাযুল ঈমান ঢাকা",
    description:
      "একটি বহুমুখী দ্বীনি শিক্ষা কেন্দ্র — One Institute Provides path of the here and hereafter. House #484, Road #12, West Nakhalpara, Tejgaon, Dhaka.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://markazuliman.vercel.app",
  },
};

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen">{children}</main>

      <BottomNavbar />

      <Footer />
    </div>
  );
};

export default layout;
