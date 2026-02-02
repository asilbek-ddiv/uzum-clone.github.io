import Image from "next/image"
import Link from "next/link"
import { GalleryVerticalEnd, Heart, Search, User } from "lucide-react"
import { InputGroup, InputGroupButton, InputGroupInput } from "../ui/input-group"
import { Button } from "../ui/button"
import { CitySelector } from "@/components/navbar/CitiesLocation"
import uzumMarketSvg from "@/assets/svg/uzummarket.svg"
import BaskedSvg from "@/assets/svg/basked.svg"

const NavLink1 = [
    { id: 1, name: "Sotuvchi bo'lish", href: "https://seller.uzum.uz/" },
    { id: 2, name: "Topshirish punktini ochish", href: "https://uzum.uz/uz/promo/pvz" }
]

const Navbar = () => {
    return (
        <header>
            {/* // * Navbar Top Header */}
            <div className="bg-transparent lg:bg-[rgb(240,242,245)] py-1 px-2.5 md:px-5 lg:px-0">
                <div className="max-w-310 mx-auto flex items-center justify-between">
                    <div className="flex items-center lg:gap-3">
                        <CitySelector />
                        <a className="text-sm font-medium text-gray-800 hidden lg:block" href="https://uzum.uz/uz/about/delivery-points">Topshirish punktlari</a>
                    </div>
                    <ul className="hidden items-center gap-3 lg:flex">
                        {NavLink1.map((item) => {
                            const { id, href, name } = item
                            return (
                                <li key={id}>
                                    <a className="text-violet-600 hover:text-violet-800 text-sm font-medium transition-colors duration-300" href={href}>{name}</a>
                                </li>
                            )
                        })}
                        <li>
                            <a className="text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors duration-300" href="https://uzum.uz/uz/faq">Savol-javob</a>
                        </li>
                        <li>
                            <Button variant={"ghost"} className="cursor-pointer border p-0.5 text-sm text-gray-600 border-none shadow-none font-medium hover:text-gray-800 transition-colors duration-300">
                                Buyurtmalarim
                            </Button>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-600 lg:hidden">yetkazib beriladigan shahar</span>
                </div>
            </div>

            {/* // * Navbar Bottom Header */}
            <nav className="max-w-310 mx-auto flex items-center justify-between py-2.5 lg:py-5 px-2.5 md:px-5 lg:p-0">
                <Link href={"/"} className="hidden lg:block">
                    <Image className="w-55 h-8" src={uzumMarketSvg} alt="This is a uzum market icon" />
                </Link>
                <div className="w-full lg:w-170 flex items-center gap-2.5">
                    <div className="hidden lg:flex items-center gap-2 bg-[rgb(229,229,255)] hover:bg-[rgb(206,204,255)] transition-colors duration-300 py-2 px-4 rounded-[3px]">
                        <GalleryVerticalEnd strokeWidth={1.75} size={23} color="#7F4DFF" />
                        Katalog
                    </div>
                    <InputGroup className="h-10 rounded-[3px] border-gray-300 shadow-none">
                        <Search strokeWidth={1.75} className="size-5 ml-2 lg:hidden" />
                        <InputGroupInput placeholder="Mahsulotlar va turkumlar izlash" />
                        <InputGroupButton className="w-20 h-full bg-[rgb(237,239,242)] hover:bg-[rgb(229,229,255)] rounded-none transition-colors duration-300 cursor-pointer hidden lg:flex"><Search strokeWidth={1.75} className="size-5" /></InputGroupButton>
                    </InputGroup>
                </div>
                <ul className="hidden lg:flex items-center gap-2">
                    <li className="hover:bg-[rgb(222,224,229)] p-2 rounded-[3px] transition-colors duration-300">
                        <Link href={""} className="flex items-center gap-1">
                            <User strokeWidth={1.75} size={22} />
                            <span className="text-sm font-medium">Kirish</span>
                        </Link>
                    </li>
                    <li className="hover:bg-[rgb(222,224,229)] p-2 rounded-[3px] transition-colors duration-300">
                        <Link href={"wishes"} className="flex items-center gap-1">
                            <Heart strokeWidth={1.5} size={22} />
                            <span className="text-sm font-medium">Saralangan</span>
                        </Link>
                    </li>
                    <li className="hover:bg-[rgb(222,224,229)] rounded-[3px] transition-colors duration-300">
                        <Link href={"cart"} className="flex items-center gap-1 p-2">
                            <Image className="size-5.5" src={BaskedSvg} alt="This is a basked icon" />
                            <span className="text-sm font-medium">Savat</span>
                        </Link>
                    </li>
                </ul>
                <Link href={"wishes"} className="ml-2 lg:hidden">
                    <Heart strokeWidth={1.5} size={22} />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar