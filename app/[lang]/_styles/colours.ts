import { Truths } from '@/app/[lang]/[truth]/_data/types'

// TODO: Update to the palette in Figma (and then add to custom Tailwind config?)
export const colours: Record<Truths, string> = {
	[Truths.suffering]: 'rgb(216, 180, 254)', // 'bg-purple-300'
	[Truths.origin]: 'rgb(165 180 252)', // 'bg-indigo-300'
	[Truths.cessation]: 'rgb(196 181 253)', // 'bg-violet-300'
	[Truths['the-way']]: 'rgb(147 197 253)', // 'bg-blue-300'
}
