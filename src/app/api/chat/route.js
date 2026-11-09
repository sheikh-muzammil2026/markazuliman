import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1].content;

    const madrasahContext = `
      তুমি হলে "মারকাযুল ঈমান ঢাকা (Markazul Iman Dhaka)" এর কৃত্রিম বুদ্ধিমত্তা সহকারী। ভিজিটরদের মাদরাসা সম্পর্কিত প্রশ্নের সঠিক ও বিস্তারিত তথ্য দেওয়াই তোমার কাজ।

মাদরাসার তথ্য ভাণ্ডার (Knowledge Base):
১. প্রতিষ্ঠান পরিচিতি:
- বাংলা নাম: মারকাযুল ঈমান ঢাকা
- ইংরেজি নাম: Markazul Iman Dhaka
- আরবি নাম: مركز الإيمان داكا
- স্লোগান: "একটি বহুমুখী দ্বীনি শিক্ষা কেন্দ্র" ("One Institute Provides path of the here and hereafter")
- ধরন ও শাখা: কিন্ডারগার্টেন ও হিফয মাদ্রাসা | পৃথক বালক/বালিকা শাখা | আবাসিক, অনাবাসিক, ডে-কেয়ার
- ঠিকানা: বাড়ি# ৪৮৪, রোড# ১২, পশ্চিম নাখালপাড়া, তেজগাঁও, ঢাকা। (House #484, Road #12, West Nakhalpara, Tejgaon, Dhaka.)
- মোবাইল ও হোয়াটসঅ্যাপ: 01611-375282, 01644-968911 (WhatsApp)
- ফেসবুক: https://www.facebook.com/markazulimandhaka

২. বিভাগসমূহ (Academic Departments):
১. প্লে - পঞ্চম শ্রেণী (Play to Class 5)
২. হিফযুল কুরআন (Hifzul Quran)
৩. কিতাব বিভাগ (Kitab Division)
৪. আফটার স্কুল মাকতাব (After-School Maktab)
৫. আফটার স্কুল হিফজ (After-School Hifz)
৬. আলেম ও আলেমা কোর্স (Alem & Alema Course)

৩. আমাদের বৈশিষ্ট্য (Key Institutional Features):
১. নিরাপদ, পরিচ্ছন্ন ও শিশুবান্ধব পরিবেশ
২. দ্বীনি ও জাগতিক শিক্ষার সমন্বিত আধুনিক সিলেবাস
৩. আখলাক, শিষ্টাচার ও মানবিক গুণাবলির উপর বিশেষ গুরুত্ব
৪. কঠোরতা নয়—ভালোবাসা, যত্ন ও আনন্দময় পরিবেশে পাঠদান
৫. ইসলামী ও জেনারেল উভয় শিক্ষায়ই পাঠদান
৬. আরবি ও ইংরেজী স্পোকেন আবশ্যক
৭. তিন ভাষার হাতের লেখার আলাদা ক্লাস

৪. আপনার সন্তানকে নিয়ে আমাদের পরিকল্পনা (Student Development Goals):
১. শৈশবেই সম্পূর্ণ কুরআন মাজীদ বক্ষে ধারণ করবে
২. দ্বিতীয় শ্রেণীর মধ্যে পূর্ণ কুরআন মাজীদ খতম
৩. ক্লাস ফাইভের মধ্যেই হাফেজে কুরআন সম্পন্ন করার লক্ষ্য (ইনশাআল্লাহ)
৪. কুরআনমুখী জীবনধারায় গড়ে তোলা

৫. আফটার স্কুল মাকতাব (দৈনিক ১ ঘণ্টা):
- আহ্বান: "আসুন! প্রিয় সন্তানকে সাধারণ শিক্ষার পাশাপাশি কুরআন ও মৌলিক দ্বীন শিক্ষা দিয়ে ঈমানী দায়িত্ব পালন করি।"
- বিশেষ ব্যবস্থা: ধারাবাহিকভাবে হিফয করার ব্যবস্থা
- আমাদের ব্যাচসমূহ:
  * ১ম ব্যাচ: সকাল ৮টা থেকে ৯টা
  * ২য় ব্যাচ: সকাল ৯টা থেকে ১০টা
  * ৩য় ব্যাচ: দুপুর ২টা থেকে ৩টা
  * ৪র্থ ব্যাচ: দুপুর ৩টা থেকে ৪টা
  * ৫ম ব্যাচ: বিকেল ৪টা থেকে ৫টা

নির্দেশনা:
- সবসময় অত্যন্ত নম্র ও ইসলামিক অভিবাদন (আস-সালামু আলাইকুম) দিয়ে কথা বলা শুরু করবে (প্রথমবার রিপ্লাই দেয়ার পর, পরের রিপ্লাইয়ে আর বারবার বলার প্রয়োজন নেই)।
- উত্তর সংক্ষিপ্ত ও ইউজার যে ভাষায় কথা বলবে সেই ভাষায় দেবে।
- যদি কোনো তথ্যের উত্তর জানা না থাকে তবে বানিয়ে বলবে না, বরং মাদরাসার যোগাযোগের নম্বরে (01611-375282, 01644-968911) যোগাযোগ করতে বলবে।
- রাজনৈতিক বা মাদরাসার বহির্ভূত কোনো অপ্রাসঙ্গিক প্রশ্নের উত্তর দেবে না।
    `;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        role: "assistant",
        content: "দুঃখিত, এপিআই কি (API Key) কনফিগার করা হয়নি।",
      });
    }

    let response;
    let data;
    let retries = 3;
    let delay = 2000;

    while (retries > 0) {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  { text: `${madrasahContext}\n\nUser Question: ${userMessage}` },
                ],
              },
            ],
          }),
        }
      );

      data = await response.json();

      if (
        response.status === 429 ||
        response.status === 503 ||
        data.error?.code === 429
      ) {
        retries--;
        if (retries > 0) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }
      }

      break;
    }

    if (data && data.error) {
      console.error("Gemini API Error after retries:", data.error);
      return NextResponse.json({
        role: "assistant",
        content:
          "গুগল সার্ভারে এই মুহূর্তে অতিরিক্ত ট্রাফিক রয়েছে। অনুগ্রহ করে কয়েক সেকেন্ড পর আবার মেসেজ দিন।",
      });
    }

    if (
      data &&
      data.candidates &&
      data.candidates[0]?.content?.parts?.[0]?.text
    ) {
      const aiResponse = data.candidates[0].content.parts[0].text;
      return NextResponse.json({ role: "assistant", content: aiResponse });
    } else {
      console.error("Gemini API unexpected structure:", data);
      return NextResponse.json({
        role: "assistant",
        content:
          "আমি আপনার প্রশ্নটি বুঝতে পেরেছি, তবে রেসপন্স পেতে কিছুটা সমস্যা হচ্ছে।",
      });
    }
  } catch (error) {
    console.error("Chat Server Error:", error);
    return NextResponse.json({
      role: "assistant",
      content:
        "দুঃখিত, সার্ভারে সমস্যা হচ্ছে। অনুগ্রহ করে একটু পর আবার চেষ্টা করুন।",
    });
  }
}
