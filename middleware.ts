import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const i18n = {
        defaultLocale: 'uz',
        locales: ['uz', 'ru', 'en'],
    };

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const locale = request.headers.get('accept-language')?.split(',')[0].substring(0, 2) || i18n.defaultLocale;
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next|static|public|favicon.ico).*)'],
};
