import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE || 'Raden Store - Premium Apps',
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Toko premium apps terpercaya dengan layanan terbaik di Indonesia',
  icons: {
    icon: '/Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}