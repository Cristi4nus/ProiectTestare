import { NextResponse } from "next/server";
import { locales, getLocaleLabels } from "@/i18n/config";

export async function GET() {
  const labels = await getLocaleLabels();
  return NextResponse.json({ locales, labels });
}
