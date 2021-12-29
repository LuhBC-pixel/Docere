/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  }
}
