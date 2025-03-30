const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

const nextConfig = withMDX({
  pageExtensions: ['tsx', 'mdx'],
  experimental: {
    mdxRs: true
  },
  images: {
    domains: ['ddragon.leagueoflegends.com'], // Agrega el dominio aquí
  },
});

export default nextConfig;
