import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'LNCT - Lakshmi Narain College of Technology',
  description:
    'Lakshmi Narain College of Technology - Empowering students through quality education',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 5.0,
    userScalable: true,
    viewportFit: 'cover',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="prevent-scroll-x">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover"
        />
        <meta name="google-site-verification" content="Ny8qpvxT634gHZaMHq1gLYfKb52KmQz7lYBzCoCxrus" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased responsive-container`}
      >
        <div className="min-h-screen w-full overflow-x-hidden">{children}</div>
      </body>
    </html>
  )
}
