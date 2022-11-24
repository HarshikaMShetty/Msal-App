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
          "value": "private.yamunamathiasheights.com.com"
        }
      ],
      "destination": "/private/:path*"
    }
    ]
  },
}

module.exports = nextConfig
