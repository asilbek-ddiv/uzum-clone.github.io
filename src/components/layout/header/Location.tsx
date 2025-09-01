import React from 'react'
import { ChevronDown, ChevronRight, MapPin, Search } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import city from "@/data/cityData"
import { Separator } from '@/components/ui/separator'

const Location = () => {
    return (
        <Dialog>
            <DialogTrigger
                className='flex items-center justify-center gap-0.5 cursor-pointer border-none shadow-none text-[15px]'>
                <MapPin className='size-5' strokeWidth={1.25} />
                Toshkent
                <ChevronDown strokeWidth={1.25} className='size-6' />
            </DialogTrigger>
            <DialogContent className='h-[580px] overflow-hidden'>
                <DialogTitle>Shaharni tanlang</DialogTitle>
                <div className='relative flex items-center mt-2.5'>
                    <Search className='ml-2 text-gray-400' />
                    <Input className='absolute h-11 pl-10 border-gray-300' />
                </div>
                <div className='flex flex-col mt-1 overflow-y-scroll'>
                    {city.map(item => (
                        <div key={item.name}>
                            <div
                                className='flex items-center justify-between w-full p-2.5 hover:bg-gray-100 cursor-pointer'
                            >
                                <p>{item.name}</p>
                                <ChevronRight strokeWidth={1} />
                            </div>
                            <Separator />
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Location
