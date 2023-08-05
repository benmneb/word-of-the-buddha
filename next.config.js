/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		mdxRs: true,
	},
}

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
})

const withMDX = require('@next/mdx')()

module.exports = withPWA(withMDX(nextConfig))
