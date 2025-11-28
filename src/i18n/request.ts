import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, Locale } from "./config";

function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [locale, priority] = lang.trim().split(";q=");
      return {
        locale: locale.split("-")[0],
        priority: priority ? parseFloat(priority) : 1.0,
      };
    })
    .sort((a, b) => b.priority - a.priority);

  for (const lang of languages) {
    if (locales.includes(lang.locale)) {
      return lang.locale;
    }
  }

  return defaultLocale;
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const headersList = await headers();

  const cookieLocale = store.get("locale")?.value;
  const acceptLanguage = headersList.get("accept-language");
  const detectedLocale = getPreferredLocale(acceptLanguage);

  const locale = cookieLocale || detectedLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
