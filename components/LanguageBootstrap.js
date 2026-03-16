"use client";

import { useEffect } from "react";
import { syncAppLanguage } from "@/lib/i18n/client";

export default function LanguageBootstrap() {
  useEffect(() => {
    void syncAppLanguage();
  }, []);

  return null;
}
