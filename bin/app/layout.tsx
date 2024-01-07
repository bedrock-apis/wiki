import './styles/global.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from './components/sidebar/sidebar'
import styles from "./styles/layout.module.css"
import Header from './components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bedrock Scripting Wiki',
  description: 'The One And Only',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Sidebar />
        <div className={styles.mainContent}>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}