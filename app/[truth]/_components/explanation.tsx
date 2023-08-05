import { enumsToComponents } from '@/app/[truth]/_data/enumsToComponents'
import { Truths } from '@/app/[truth]/_data/types'

interface Props {
	truth: Truths
}

export default function Explanation({ truth }: Props) {
	const appropriateTruth = enumsToComponents?.[truth]

	if (!appropriateTruth) return 'throw WOT'

	return appropriateTruth
}
