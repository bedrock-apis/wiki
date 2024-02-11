//const remarkGfm = require("remark-gfm");

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true
  },
  distDir: "./dist"
}
module.exports = withMDX(nextConfig)
