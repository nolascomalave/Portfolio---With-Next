import { defineRouting } from "next-intl/routing";

export const Locales = {
    en: "English",
    es: "Español"
};

export type LocalesType = keyof typeof Locales;

export const DefaultLocale = "en";

export const routing = defineRouting({
  locales: Object.keys(Locales),
  defaultLocale: DefaultLocale,
  localePrefix: "as-needed",          // ← este cambio es clave
  localeDetection: false,          // ← evita que el navegador interfiera
});