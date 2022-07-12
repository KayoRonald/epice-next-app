/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	publicRuntimeConfig: {
		apiEpiceDatabase: process.env.EPICE_DATABASE_API
	}
}

module.exports = nextConfig