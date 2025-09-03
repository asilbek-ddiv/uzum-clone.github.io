import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ['uz', 'rz', 'en'],
    defaultLocale: 'uz',
    localePrefix: 'as-needed'
})