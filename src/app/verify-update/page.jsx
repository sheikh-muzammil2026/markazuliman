"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, AlertCircle, Loader2, LayoutDashboard, ArrowLeft, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function VerifyUpdateContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const type = searchParams.get("type") || "email";

  const [verifying, setVerifying] = useState(Boolean(token));
  const [result, setResult] = useState(
    !token
      ? {
          success: false,
          message: t("common.error"),
        }
      : { success: false, message: "" }
  );

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:5000";

  useEffect(() => {
    if (!token) return;

    let isMounted = true;

    async function executeVerification() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/user/verify-update`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, type }),
        });

        const data = await res.json();
        if (isMounted) {
          if (data.success) {
            setResult({
              success: true,
              message:
                data.message || t("auth.verify_success"),
            });
          } else {
            setResult({
              success: false,
              message:
                data.message || t("auth.verify_failed"),
            });
          }
        }
      } catch (err) {
        console.error("Verification error:", err);
        if (isMounted) {
          setResult({
            success: false,
            message: t("common.error_desc"),
          });
        }
      } finally {
        if (isMounted) {
          setVerifying(false);
        }
      }
    }

    executeVerification();

    return () => {
      isMounted = false;
    };
  }, [token, type, API_BASE_URL, t]);

  if (verifying) {
    return (
      <div className="text-center py-8 space-y-4">
        <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mx-auto" />
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
          {t("common.loading")}
        </h3>
      </div>
    );
  }

  return (
    <div className="text-center space-y-5">
      {result.success ? (
        <>
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 mx-auto flex items-center justify-center">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {t("auth.verify_success")}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {result.message}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dashboard/profile-settings"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{t("auth.go_profile")}</span>
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer"
            >
              <span>{t("auth.submit_login")}</span>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 mx-auto flex items-center justify-center">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {t("auth.verify_failed")}
          </h3>
          <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300 leading-relaxed">
            {result.message}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dashboard/profile-settings"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("auth.go_profile")}</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default function VerifyUpdatePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-700 text-amber-300 shadow-xl mb-4 transform -rotate-3">
          <ShieldCheck className="w-8 h-8 text-amber-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          {t("auth.verify_title")}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          {t("institution.name")}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white dark:bg-slate-900 py-8 px-6 sm:px-10 shadow-xl rounded-2xl border border-emerald-900/10 dark:border-emerald-950/40">
          <Suspense
            fallback={
              <div className="text-center py-8">
                <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mx-auto" />
                <span className="mt-3 block text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {t("common.loading")}
                </span>
              </div>
            }
          >
            <VerifyUpdateContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
