import { Button } from "../ui/button"
import { CitySelector } from "@/components/navbar/CitiesLocation"

const NavLink1 = [
    { id: 1, name: "Sotuvchi bo'lish", href: "https://seller.uzum.uz/" },
    { id: 2, name: "Topshirish punktini ochish", href: "https://uzum.uz/uz/promo/pvz" }
]

const Navbar = () => {
    return (
        <>
            {/* // * Navbar Top Header */}
            <div className="bg-[rgb(240,242,245)] py-1">
                <div className="max-w-315 mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <CitySelector />
                        <a className="text-sm font-medium text-gray-800" href="https://uzum.uz/uz/about/delivery-points">Topshirish punktlari</a>
                    </div>
                    <ul className="flex items-center gap-3">
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
                </div>
            </div>

            {/* // * Navbar Bottom Header */}
            <nav className="max-w-315 mx-auto flex items-center justify-between">
                dfg
            </nav>
        </>
    )
}

export default Navbar