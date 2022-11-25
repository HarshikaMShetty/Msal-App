/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
	return [
		{
			source: 'https://private.yamunamathiasheights.com/',
			destination: 'https://yamunamathiasheights.com/private',
		},
	]
},
}

module.exports = nextConfig
