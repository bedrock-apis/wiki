import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/mdx-components.tsx',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "highlight": "var(--highlight)",
        "accent": "var(--accent)",
        "accent-highlight": "var(--accent-highlight)",
        "text-primary": "var(--text-primary)",
        "sub": "var(--sub)"
      }
    },
  },
  plugins: [],
}
export default config
