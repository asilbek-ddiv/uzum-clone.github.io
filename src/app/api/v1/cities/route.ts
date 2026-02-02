import { NextRequest, NextResponse } from "next/server";
import cities from "@/data/cities.json";
import { rateLimit } from "@/lib/rate-limit";

export const revalidate = 60 * 60 * 24;

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://uzum-clone-uz.vercel.app",
];

export async function GET(req: NextRequest) {
  const origin = req.headers.get("origin");
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

  const { allowed } = rateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests" },
      { status: 429 },
    );
  }

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json(
      {
        success: false,
        message: "Forbidden",
      },
      {
        status: 403,
      },
    );
  }
  return NextResponse.json({
    success: true,
    data: cities,
  });
}
