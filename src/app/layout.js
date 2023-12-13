import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  openGraph: {
    title: 'QuantumX-24',
    description: 'Created by Ananda Krishnan Nair',
    siteName: 'QuantumX',
    images: [
      {
        url: 'https://www.quantumxfest.com/_next/image?url=%2Flogo.png&w=750&q=75',
        width: 512,
        height: 512,
      },
      {
        url: 'https://www.quantumxfest.com/_next/image?url=%2Flogo.png&w=750&q=75',
        width: 1800,
        height: 1600,
        alt: 'QX',
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
  manifest: '/manifest.json'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
