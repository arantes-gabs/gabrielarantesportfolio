"use client";

import { useEffect, useState } from "react";
import { changeAppLanguage, getAppLanguage } from "@/lib/i18n/client";
import { useAppTranslation } from "@/lib/i18n/useAppTranslation";

const languageOptions = [
  { code: "pt", labelKey: "language.pt" },
  { code: "en", labelKey: "language.en" },
];

export default function LanguageSwitch({ className = "" }) {
  const { t, i18n } = useAppTranslation();
  const [activeLanguage, setActiveLanguage] = useState(getAppLanguage());

  useEffect(() => {
    const syncLanguage = () => setActiveLanguage(getAppLanguage());
    syncLanguage();
    i18n.on("languageChanged", syncLanguage);

    return () => {
      i18n.off("languageChanged", syncLanguage);
    };
  }, [i18n]);

  const handleLanguageChange = async (language) => {
    const nextLanguage = await changeAppLanguage(language);
    setActiveLanguage(nextLanguage);
  };

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-[#2A2A2A] bg-[#111111]/92 p-1 shadow-[0_8px_22px_rgba(0,0,0,0.45)] backdrop-blur-xl ${className}`.trim()}
    >
      {languageOptions.map((option) => {
        const isActive = activeLanguage === option.code;
        const ariaLabel =
          option.code === "pt" ? t("language.switchToPortuguese") : t("language.switchToEnglish");

        return (
          <button
            aria-label={ariaLabel}
            className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors ${
              isActive
                ? "bg-[#FF6A00] text-[#F5F5F5]"
                : "bg-transparent text-[#A3A3A3] hover:text-[#F5F5F5]"
            }`}
            key={option.code}
            onClick={() => handleLanguageChange(option.code)}
            type="button"
          >
            {t(option.labelKey)}
          </button>
        );
      })}
    </div>
  );
}
