import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { i18n } from '@/i18n/config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: Record<string, string> = {}
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

	// Locales are readonly but request headers are type string
	const locales = i18n.locales as unknown as string[]

	// Get the best locale
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales
	)

	const locale = matchLocale(languages, locales, i18n.defaultLocale)

	return locale
}

const filesInPublicFolder: string[] = [
	'/android-chrome-192x192.png',
	'/android-chrome-512x512.png',
	'/apple-touch-icon.png',
	'/browserconfig.xml',
	'/favicon-16x16.png',
	'/favicon-32x32.png',
	'/favicon.ico',
	'/manifest.json',
	'/maskable-icon-180x180.png',
	'/mstile-150x150.png',
	'/robots.txt',
	'/safari-pinned-tab.svg',
	'/sw.js',
	'/sw.js.map',
	'/workbox-',
]

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname

	// Need to ignore files in `public` folder manually
	if (filesInPublicFolder.includes(pathname)) return

	// Check if there is any supported locale in the pathname
	const pathnameIsMissingLocale = i18n.locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	)

	// Redirect if there is no locale
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request)

		// e.g. incoming request is /suffering
		// The new URL is now /en/suffering
		return NextResponse.redirect(
			new URL(
				`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
				request.url
			)
		)
	}
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ['/((?!api|_next/static|_next/image).*)'],
}
