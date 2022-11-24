/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        "source": "/",
        "has": [
          {
            "type": "host",
            "value": "private.yamunamathiasheights.com"
          }
        ],
        "destination": "/https://www.yamunamathiasheights.com/private/"
      }
    ]
  },
}

module.exports = nextConfig
