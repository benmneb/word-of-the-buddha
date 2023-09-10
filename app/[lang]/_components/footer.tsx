import LocaleSelector from '@/app/[lang]/_components/locale-selector'
import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

interface Props {
	lang: Locale
}

export default async function Footer({ lang }: Props) {
	const dictionary = await getDictionary(lang)

	return (
		<footer className="bg-footer text-gray-200 text-sm p-8 w-full flex justify-between">
			<section>
				<p>{dictionary.footer.attribution.nyantiloka}</p>
				<p>{dictionary.footer.attribution.bodhi}</p>
				<p>{dictionary.footer.attribution.brahm}</p>
			</section>
			<section>
				<LocaleSelector text={dictionary.footer.changeLanguage} />
			</section>
		</footer>
	)
}
