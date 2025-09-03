'use client';

import * as React from "react";
import { useRouter, usePathname } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = [
    { value: 'uz', label: "O'zbekcha" },
    { value: 'ru', label: "Русский" },
    { value: 'en', label: "English" },
];

export function LanguageSelector() {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = pathname.split('/')[1];

    const handleLanguageChange = (lang: string) => {
        const newPath = `/${lang}${pathname.substring(3)}`;
        router.push(newPath);
    };

    return (
        <Select value={currentLocale} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tilni tanlang" />
            </SelectTrigger>
            <SelectContent>
                {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}