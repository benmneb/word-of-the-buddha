import { Locale } from '@/i18n.config'

export default function Home({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	return (
		<main className="text-lg">
			<p>Current locale: {lang}</p>
		</main>
	)
}
