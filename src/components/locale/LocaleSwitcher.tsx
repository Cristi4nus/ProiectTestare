"use client";
import { useTransition, useState, useEffect } from "react";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const [localeData, setLocaleData] = useState<{
    locales: string[];
    labels: Record<string, string>;
  }>({ locales: [], labels: {} });

  useEffect(() => {
    fetch("/api/locales")
      .then((res) => res.json())
      .then(setLocaleData);
  }, []);

  const onSelectChange = (newLocale: string) => {
    startTransition(() => {
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
      window.location.reload();
    });
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <select
        value={locale}
        onChange={(e) => onSelectChange(e.target.value)}
        disabled={isPending}
        className="px-3 pr-1 py-3 rounded-xl border-2 border-white/30 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-md text-white font-semibold text-base cursor-pointer hover:from-indigo-700/90 hover:to-purple-700/90 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {localeData.locales.map((loc) => (
          <option key={loc} value={loc} className="bg-purple-900 text-white">
            {localeData.labels[loc] || loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}