"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronRight, GalleryVerticalEnd, X } from "lucide-react";
import { getCatalog } from "@/services/catalog.service";
import { CatalogProps } from "@/types/catalog.type";
import Link from "next/link";
import Image from "next/image";

export default function Catalog() {
    const [open, setOpen] = useState(false);
    const [catalog, setCatalog] = useState<CatalogProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchCatalog = async () => {
            try {
                const data = await getCatalog()
                setCatalog(data)
                setLoading(true)
            } catch (error) {
                console.error("Catalog yuklashdagi xatolik:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchCatalog()
    }, [])

    // * catalog animate props start
    const paperVariants: Variants = {
        closed: {
            opacity: 0,
            scaleY: 0.05,
            rotateX: 80,
            originY: 0,
            filter: "brightness(0.6) blur(2px)",
            transition: { duration: 0.6, ease: "easeInOut" }
        },
        open: {
            opacity: 1,
            scaleY: 1,
            rotateX: 0,
            filter: "brightness(1) blur(0px)",
            transition: {
                duration: 0.9,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.12
            }
        },
        exit: {
            opacity: 0,
            scaleY: 0.2,
            rotateX: -40,
            filter: "brightness(0.8)",
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };
    const contentVariants = {
        closed: { opacity: 0, y: 40, scale: 0.92 },
        open: { opacity: 1, y: 0, scale: 1 }
    };
    // * catalog animate props end

    if (loading) return <p>Yuklanmoqda...</p>

    return (
        <>
            <Button
                variant="outline"
                className="hidden lg:flex items-center gap-2 bg-[rgb(229,229,255)] hover:bg-[rgb(206,204,255)] transition-colors duration-300 py-2.5 px-4 rounded-[3px] cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <div className="relative size-5">
                    <motion.div
                        initial={false}
                        animate={{
                            opacity: open ? 0 : 1,
                            scale: open ? 0.6 : 1,
                            rotateX: open ? -90 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <GalleryVerticalEnd color="#7F4DFF" className="size-5" />
                    </motion.div>

                    <motion.div
                        initial={false}
                        animate={{
                            opacity: open ? 1 : 0,
                            scale: open ? 1 : 0.6,
                            rotateX: open ? 0 : 90,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <X color="#7F4DFF" className="size-5" />
                    </motion.div>
                </div>
                <span className="text-[#7F4DFF]">Katalog</span>
            </Button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="absolute top-27 left-0 right-0 z-50 bg-linear-to-b bg-white border-none from-white shadow-xl overflow-hidden"
                        variants={paperVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                    >
                        <motion.div
                            className="max-w-7xl mx-auto px-4 py-1"
                            variants={contentVariants}
                        >
                            <ul className="w-70 flex flex-col border-r gap-y-1">
                                {catalog.map((item) => {
                                    const { children, id, image_url, slug, title } = item
                                    return (
                                        <li key={id}>
                                            <Link href={slug} className="flex items-center justify-between p-2.5 rounded-l-sm hover:bg-[rgb(240,242,245)] hover:text-[#7000FF] text-sm font-medium transition-colors duration-300">
                                                <span>
                                                    {/* <Image src={image_url} alt={title} /> */}
                                                    <span>{title}</span>
                                                </span>
                                                <ChevronRight strokeWidth={1.5} color="#ABADB1" size={22} />
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
}