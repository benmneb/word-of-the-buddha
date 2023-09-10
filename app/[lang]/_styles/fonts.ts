import { Fasthand, Lemon, Nunito } from 'next/font/google'

export const lemon = Lemon({
	weight: '400',
	display: 'swap',
	preload: true,
	subsets: ['latin'],
	variable: '--font-lemon',
})

export const nunito = Nunito({
	weight: '900',
	display: 'swap',
	preload: true,
	subsets: ['latin'],
	variable: '--font-nunito',
})

export const fasthand = Fasthand({
	weight: '400',
	display: 'swap',
	preload: true,
	subsets: ['latin'],
	variable: '--font-fasthand',
})
