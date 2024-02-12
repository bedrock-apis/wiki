import w from "@next/mdx";
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

const withMDX = w({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkFrontmatter,[remarkMdxFrontmatter, {name:'metadata'}]],
    rehypePlugins: [rehypePrism, rehypeCodeTitles],
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
  basePath: "/wiki",
  distDir: "./dist"
}
export default withMDX(nextConfig)
