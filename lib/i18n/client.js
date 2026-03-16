"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

const DEFAULT_LANGUAGE = "pt";
const LANGUAGE_STORAGE_KEY = "portfolio.language";

const normalizeLanguage = (language) =>
  language && language.toLowerCase().startsWith("en") ? "en" : DEFAULT_LANGUAGE;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: ["pt", "en"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export const changeAppLanguage = async (language) => {
  const nextLanguage = normalizeLanguage(language);
  await i18n.changeLanguage(nextLanguage);

  if (typeof window !== "undefined") {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  }

  return nextLanguage;
};

export const syncAppLanguage = async () => {
  if (typeof window === "undefined") {
    return i18n.language;
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const preferredLanguage = normalizeLanguage(savedLanguage || window.navigator.language);

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, preferredLanguage);

  if (i18n.language !== preferredLanguage) {
    await i18n.changeLanguage(preferredLanguage);
  }

  return preferredLanguage;
};

export const getAppLanguage = () => normalizeLanguage(i18n.resolvedLanguage || i18n.language);

export default i18n;
