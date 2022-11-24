/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        "source": "/:U*",
        "has": [
          {
            "type": "host",
            "value": "private.yamunamathiasheights.com"
          }
        ],
        "destination": "/yamunamathiasheights.com/private/*"
      }
    ]
  },
}

module.exports = nextConfig
