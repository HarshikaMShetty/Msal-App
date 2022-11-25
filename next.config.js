/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() { 
    return [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "private.yamunamathiasheights.com"
        }
      ],
      "destination": "https://yamunamathiasheights.com/private/:path*"
    }
  ]
 }
}

module.exports = nextConfig
