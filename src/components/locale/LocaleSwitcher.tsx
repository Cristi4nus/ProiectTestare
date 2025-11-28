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
    <div className="fixed top-4 right-4">
      <select
        value={locale}
        onChange={(e) => onSelectChange(e.target.value)}
        disabled={isPending}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {localeData.locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeData.labels[loc] || loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
