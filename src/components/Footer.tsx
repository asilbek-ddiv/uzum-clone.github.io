import Image from "next/image"
import AppleSvg from "@/assets/svg/apple.svg"
import GooglePlaySvg from "@/assets/svg/googlePlay.svg"
import Instagram from "@/assets/svg/instagram.svg"
import Telegram from "@/assets/svg/telegram.svg"
import Facebook from "@/assets/svg/facebook.svg"
import YouTube from "@/assets/svg/youtube.svg"

const FooterItem = [
    {
        id: 1,
        title: "Biz haqimizda",
        children: [
            { id: 2, name: "Topshirish punktlari", href: "https://uzum.uz/uz/about/delivery-points" },
            { id: 3, name: "Vakansiyalar", href: "https://uzum.uz/uz/about/careers" },
        ]
    },
    {
        id: 4,
        title: "Foydalanuvchilarga",
        children: [
            { id: 5, name: "Biz bilan bo'glanish", href: "https://uzum.uz/#contacts" },
            { id: 6, name: "Savol-javob", href: "https://uzum.uz/uz/faq" },
        ]
    },
    {
        id: 7,
        title: "Tadbirkorlarga",
        children: [
            { id: 8, name: "Uzumda soting", href: "https://seller.uzum.uz/" },
            { id: 9, name: "Sotuvchi kabinetiga kirish", href: "https://seller.uzum.uz/seller/signin?_gl=1*1il4qbl*_gcl_au*NDk2ODI1NzQwLjE3Njk4Mjk3OTguMTExMDEwMjQ2OC4xNzY5OTAwODE0LjE3Njk5MDA4MTQ.*_ga*MTY4MTI5NDM4Mi4xNzY5ODI5Nzk5*_ga_7KCSSWWYYD*czE3Njk4OTM2OTIkbzckZzEkdDE3Njk5MDA4NzgkajYwJGwwJGg5MTgzNDA1OTM.*_ga_EZ8RKY9S93*czE3Njk4OTM2OTIkbzckZzEkdDE3Njk5MDA4NzgkajYwJGwwJGgw" },
            { id: 10, name: "Topshirish punktini ochish", href: "https://uzum.uz/uz/promo/pvz" },
        ]
    },
]

const tarmoqlar = [
    { id: 11, href: "https://www.instagram.com/uzum.market", img: Instagram },
    { id: 12, href: "https://t.me/uzum_market", img: Telegram },
    { id: 13, href: "https://www.facebook.com/uzummarket", img: Facebook },
    { id: 14, href: "https://www.youtube.com/@uzummarket", img: YouTube }
]

const Footer = () => {
    return (
        <footer className="flex flex-col max-w-310 mx-auto mb-5">
            <div className="flex flex-col justify-between lg:flex-row">
                {FooterItem.map((item) => {
                    const { children, id, title } = item
                    return (
                        <div key={id} className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
                            <span className="text-[15px] font-medium my-1">{title}</span>
                            <ul className="flex flex-col items-center justify-center gap-y-1 lg:items-start lg:justify-start">
                                {children.map((item) => {
                                    const { href, id, name } = item
                                    return (
                                        <li key={id}>
                                            <a className="text-[12px] text-gray-600 font-medium hover:text-gray-800 transition-colors duration-300" href={href} target="_blank" rel="noopener noreferrer">
                                                {name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
                <div className="flex flex-col items-center gap-5 mt-5 lg:mt-0 lg:items-start">
                    <div className="flex flex-col items-center gap-2.5 lg:items-start">
                        <span className="text-[15px] font-medium">Ilovani yuklab olish</span>
                        <ul className="flex flex-col items-center gap-5 lg:flex-row lg:items-start">
                            <li>
                                <a className="flex items-center gap-1" href="http://" target="_blank" rel="noopener noreferrer">
                                    <Image className="size-8" src={AppleSvg} alt="Apple Icon" />
                                    AppStore
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2" href="http://" target="_blank" rel="noopener noreferrer">
                                    <Image className="size-7" src={GooglePlaySvg} alt="Google Play Icon" />
                                    Google Play
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-[15px] font-medium">Uzum ijtimoiy tarmoqlarda</span>
                        <ul className="flex items-center gap-3">
                            {tarmoqlar.map((tarmoq) => {
                                const { href, id, img } = tarmoq
                                return (
                                    <li key={id} className="mt-2.5">
                                        <a href={href} target="_blank" rel="noopener noreferrer">
                                            <Image className="size-10" src={img} alt="This is a icons" />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer