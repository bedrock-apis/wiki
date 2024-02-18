import w from "@next/mdx";
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import remarkGfp from "remark-gfm";

const withMDX = w({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfp,remarkFrontmatter,[remarkMdxFrontmatter, {name:'metadata'}]],
    rehypePlugins: [rehypePrism, rehypeCodeTitles],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
  images: {
    unoptimized: true
  },
  basePath: "/wiki",
  distDir: "./dist"
}
export default withMDX(nextConfig)
