/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
            {
                protocol:"https",
                hostname:"media.ed.edmunds-media.com"
            }
        ]
    }
}

module.exports = nextConfig
