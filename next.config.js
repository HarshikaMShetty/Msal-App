/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: [
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

module.exports = nextConfig
