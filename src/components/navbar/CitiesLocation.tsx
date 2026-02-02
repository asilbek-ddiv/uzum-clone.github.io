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
import type { CitiesProps } from "@/types/cities.type"
import { getCities } from "@/services/cities.service"

const STORAGE_KEY = "selected_city"

export function CitySelector() {
    const [open, setOpen] = useState(false)
    const [selectedCity, setSelectedCity] = useState<CitiesProps | null>(null)
    const [cities, setCities] = useState<CitiesProps[]>([])

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const data = await getCities()
                setCities(data)

                const saved = localStorage.getItem(STORAGE_KEY)
                if (saved) {
                    const city = JSON.parse(saved) as CitiesProps
                    const exists = data.some((c: any) => c.id === city.id)
                    if (exists) {
                        setSelectedCity(city)
                        return
                    }
                }

                const defaultCity = data.find((c: any) => c.isDefault)
                if (defaultCity) {
                    setSelectedCity(defaultCity)
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultCity))
                }
            } catch (error) {
                console.warn("Shaharlar yuklanishda xato:", error)
            }
        }

        fetchCities()
    }, [])

    const handleSelect = (city: CitiesProps) => {
        setSelectedCity(city)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(city))
        setOpen(false)
    }

    const displayName = selectedCity?.name || "Shaharni tanlang"

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
                            {cities.map(citi => (
                                <CommandItem
                                    key={citi.id}
                                    value={citi.name.toLowerCase()}
                                    onSelect={() => handleSelect(citi)}
                                    className="cursor-pointer"
                                >
                                    <span>{citi.name}</span>
                                    {citi.isDefault && (
                                        <span className="ml-auto text-xs text-muted-foreground">(asosiy)</span>
                                    )}
                                    {selectedCity?.id === citi.id && (
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
