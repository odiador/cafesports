const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

const nextConfig = withMDX({
  pageExtensions: ['tsx', 'mdx'],
  experimental: {
    mdxRs: true
  }
});

export default nextConfig;
