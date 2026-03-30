import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { CustomCursor } from '@/components/custom-cursor'
import { PageTransitionProvider } from '@/components/page-transition-provider'
import { Footer } from '@/components/footer'

const _geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
})
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Henry Aranzales | Embedded Software Engineer & AI Developer',
  description: 'Portfolio of Henry Aranzales Lopez - Mechatronic Engineer specializing in Embedded Software, Artificial Intelligence, and Digital Transformation',
  generator: 'henrylabstack.tech',
  keywords: ['Embedded Software', 'AI', 'Machine Learning', 'Mechatronics', 'Python', 'C++', 'AWS', 'Power Platform'],
  authors: [{ name: 'Henry Aranzales Lopez' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        <CustomCursor />
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <PageTransitionProvider>
            <main className="flex-1">
              {children}
            </main>
          </PageTransitionProvider>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
