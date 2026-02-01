import Image from "next/image"
import AppleSvg from "@/images/apple.svg"
import GooglePlaySvg from "@/images/googlePlay.svg"
import Instagram from "@/images/instagram.svg"
import Telegram from "@/images/telegram.svg"
import Facebook from "@/images/facebook.svg"
import YouTube from "@/images/youtube.svg"

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
    { id: 11, href: "https://t.me/uzum_market", img: Telegram },
    { id: 11, href: "https://www.facebook.com/uzummarket", img: Facebook },
    { id: 11, href: "https://www.youtube.com/@uzummarket", img: YouTube }
]

const Footer = () => {
    return (
        <footer className="flex flex-col max-w-315 mx-auto mb-5">
            <div className="flex justify-between">
                {FooterItem.map((item) => {
                    const { children, id, title } = item
                    return (
                        <div key={id}>
                            <span className="text-[15px] font-medium">{title}</span>
                            <ul>
                                {children.map((item) => {
                                    const { href, id, name } = item
                                    return (
                                        <li key={id}>
                                            <a className="text-[12px] text-gray-600 font-medium" href={href} target="_blank" rel="noopener noreferrer">
                                                {name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2.5">
                        <span className="text-[15px] font-medium">Ilovani yuklab olish</span>
                        <ul className="flex items-center gap-5">
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
                            {tarmoqlar.map((item) => {
                                const { href, id, img } = item
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