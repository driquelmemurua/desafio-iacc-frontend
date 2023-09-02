/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/cursos',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
