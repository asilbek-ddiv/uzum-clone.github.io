"use client"

import { useEffect, useState } from "react"
import { MapPin, ChevronDown, CircleCheckBig } from "lucide-react"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { cities } from "@/database/cities"
import type { CitiesProps } from "@/database/cities"
import { STORE_KEY_SHARED_PANEL_LOCATION } from "next/dist/next-devtools/dev-overlay/shared"

const STORAGE_KEY = "selected_city"

export function CitySelector() {
    const [open, setOpen] = useState(false)
    const [selectedCity, setSelectedCity] = useState<CitiesProps | null>(null)

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY)
            if (saved) {
                const city = JSON.parse(saved) as CitiesProps
                const exists = cities.some(c => c.id === city.id)

                if (exists) {
                    setSelectedCity(city)
                }
            }
            else {
                const defaultCity = cities.find(c => c.isDefault)
                if (defaultCity) {
                    setSelectedCity(defaultCity)
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultCity))
                }
            }
        } catch (error) {
            console.warn("Tanlangan shahar o‘qishda xato", error);

        }
    }, [])

    const handleSelect = (city: CitiesProps) => {
        setSelectedCity(city)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(city))
        setOpen(false)
    }

    const displayName = selectedCity?.name

    return (
        <>
            <Button
                variant="outline"
                className="h-6 gap-1 p-0 bg-transparent font-medium border-none shadow-none hover:bg-transparent cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <MapPin className="size-5" strokeWidth={1.6} />
                <span className="truncate max-w-27.5">{displayName}</span>
                <ChevronDown className="size-5" strokeWidth={1.8} />
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <Command shouldFilter={true}>
                    <CommandInput placeholder="Shaharni qidiring..." autoFocus />

                    <CommandList>
                        <CommandEmpty>Hozircha bu shaharga yetkazib berish yo‘q</CommandEmpty>

                        <CommandGroup heading="Barcha shaharlar">
                            {cities.map(city => (
                                <CommandItem
                                    key={city.id}
                                    value={city.name.toLowerCase()}
                                    onSelect={() => handleSelect(city)}
                                    className="cursor-pointer"
                                >
                                    <span>{city.name}</span>
                                    {city.isDefault && (
                                        <span className="ml-auto text-xs text-muted-foreground">(asosiy)</span>
                                    )}
                                    {selectedCity?.id === city.id && (
                                        <span className="ml-auto text-xs text-primary"><CircleCheckBig /></span>
                                    )}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    )
}
