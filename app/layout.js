import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-opensans',
  display: 'swap',
})

export const metadata = {
  title: 'MAT GO team d.o.o. | Adaptacija i izgradnja - Zagreb, Hrvatska',
  description: 'MAT GO team d.o.o. - Vaš pouzdani partner za adaptaciju i izgradnju stambenih i poslovnih objekata u Zagrebu i okolici. Profesionalno, pouzdano i prilagođeno vašim potrebama.',
  keywords: 'adaptacija, izgradnja, renovacija, građevina, Zagreb, Hrvatska, MAT GO team, gradnja kuće, adaptacija stana, poslovni prostor',
  authors: [{ name: 'MAT GO team d.o.o.' }],
  creator: 'MAT GO team d.o.o.',
  publisher: 'MAT GO team d.o.o.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://matgo-team.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MAT GO team d.o.o. | Adaptacija i izgradnja',
    description: 'Vaš pouzdani partner za adaptaciju i izgradnju stambenih i poslovnih objekata u Zagrebu.',
    url: 'https://matgo-team.online',
    siteName: 'MAT GO team d.o.o.',
    locale: 'hr_HR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MAT GO team d.o.o. - Adaptacija i izgradnja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAT GO team d.o.o. | Adaptacija i izgradnja',
    description: 'Vaš pouzdani partner za adaptaciju i izgradnju stambenih i poslovnih objekata u Zagrebu.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="hr" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00A3E0" />
        <meta name="geo.region" content="HR-21" />
        <meta name="geo.placename" content="Zagreb" />
      </head>
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
