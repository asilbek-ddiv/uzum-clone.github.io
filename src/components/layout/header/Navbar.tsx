import React from 'react'
import Link from 'next/link'
import Location from './Location'
import { LanguageSelector } from './TranslateDrobdown'

const Navbar = () => {
    return (
        <header>
            <div className='bg-gray-200'>
                <div className='containers py-1.5 flex items-center justify-between'>
                    <div className='flex items-center gap-2.5'>
                        <Location />
                        <a
                            href="https://uzum.uz/uz/about/delivery-points"
                            className='text-[15px] hidden lg:block'
                        >
                            Topshirish punktlari
                        </a>
                    </div>
                    <div className='lg:flex items-center gap-2.5 hidden'>
                        <div className='flex items-center gap-2.5'>
                            <a
                                href={"https://seller.uzum.uz/"}
                                className='flex items-center gap-2.5 text-[15px] text-blue-500'
                            >
                                Sotuvchi bo&#39;lish
                                <span className='border h-5 border-blue-400' />
                            </a>
                            <a
                                href={"https://uzum.uz/uz/promo/pvz"}
                                className='flex items-center gap-2.5 text-[15px] text-blue-500'
                            >
                                Topshirish punktini ochish
                            </a>
                            <Link
                                href={"/faq"}
                                className='text-[15px]'
                            >
                                Savol-javob
                            </Link>
                            <span
                                className='text-[15px] cursor-pointer'
                            >
                                Buyurtmalarim
                            </span>
                        </div>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
            <nav>

            </nav>
        </header>
    )
}

export default Navbar
