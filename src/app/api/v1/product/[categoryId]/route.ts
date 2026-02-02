import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import products from "@/data/product.json";

export const revalidate = 60 * 60 * 24;

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://uzum-clone-uz.vercel.app",
];

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ categoryId: string }> },
) {
  const { categoryId: categoryIdStr } = await context.params;
  const categoryId = parseInt(categoryIdStr, 10);
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

  if (isNaN(categoryId)) {
    return NextResponse.json(
      { success: false, message: "Invalid category" },
      { status: 400 },
    );
  }

  const filteredProducts = products.filter((p) => p.categoryId === categoryId);

  return NextResponse.json({
    success: true,
    data: filteredProducts,
  });
}
