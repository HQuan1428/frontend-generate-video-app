import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import '@/styles/globals.css'
import Providers from '@/components/layout/Providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI Shorts Generator',
  description: 'Easily create short videos with subtitles and audio using AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <main className='mx-auto'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
