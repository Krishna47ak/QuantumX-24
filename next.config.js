/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
    ...withPWA({
        dest: "public",
        register: true,
        skipWaiting: true,
        cacheOnFrontEndNav: true,
        aggressiveFrontEndNavCaching: true,
        reloadOnOnline: true,
        swcMinify: true,
    }),
    env: {
        DOMAIN: process.env.DOMAIN,
    }
}

module.exports = nextConfig
