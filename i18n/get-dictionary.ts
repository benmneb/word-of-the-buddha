import { Locale } from '@/i18n/config'
import 'server-only'

const dictionaries: Record<Locale, () => Promise<any>> = {
	en: () => import('./dictionaries/en.json').then((module) => module.default),
	nl: () => import('./dictionaries/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
	dictionaries[locale]?.() ?? dictionaries.en()
