/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        DOMAIN: process.env.DOMAIN,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
    }
}

module.exports = nextConfig
