"use client";

import { useEffect, useState } from "react";
import { getCatalog } from "@/services/catalog.service";
import { CatalogProps } from "@/types/catalog.type";
import { Button } from "../ui/button";
import { GalleryVerticalEnd, X } from "lucide-react";

export default function Catalog() {
    const [open, setOpen] = useState<boolean>(false)



    
    const catalogToggle = () => setOpen(!open)

    return (
        <>
            <Button
                variant={"outline"}
                className="hidden lg:flex items-center gap-2 bg-[rgb(229,229,255)] hover:bg-[rgb(206,204,255)] transition-colors duration-300 py-2.25 px-4 rounded-[3px] cursor-pointer"
                onClick={catalogToggle}
            >
                {open ? <X color="#7F4DFF" className="size-5" /> : <GalleryVerticalEnd color="#7F4DFF" className="size-5" />}
                <span className="text-[#7F4DFF]">Katalog</span>
            </Button>

            {open && (
                <div className="absolute top-26 left-0 w-full h-40 bg-white shadow-2xl">
                    <div className="max-w-310 mx-auto">
                        dfghj
                    </div>
                </div>
            )}
        </>
    )
}
