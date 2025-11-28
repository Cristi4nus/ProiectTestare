import { readdirSync } from "fs";
import { join } from "path";

function getAvailableLocales() {
  const messagesDir = join(process.cwd(), "messages");
  const files = readdirSync(messagesDir);
  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(".json", ""));
}

export const locales = getAvailableLocales();
export type Locale = string;
export const defaultLocale: Locale = "en";

export async function getLocaleLabels(): Promise<Record<string, string>> {
  const labels: Record<string, string> = {};
  for (const loc of locales) {
    const messages = await import(`../../messages/${loc}.json`);
    labels[loc] = messages.LocaleSwitcher?.label || loc.toUpperCase();
  }
  return labels;
}
