import { NextResponse } from "next/server";

type Product = {
    id: number;
    title: string;
    price: number;
    slug: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "Birinchi nextjsda yozilgan api",
        slug: "igrovaya-pristavka-sony-playstation-ps5-slim-digital-edition",
        price: 5000,
    }
]

export async function GET({ params }: { params: { slug: string } }) {
    const product = products.find(p => p.slug === params.slug);
    if (!product) return NextResponse.json({ error: "Topilmadi" }, { status: 404 });
    return NextResponse.json(product)
}