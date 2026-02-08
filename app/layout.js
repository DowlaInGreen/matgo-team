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
  title: 'MAT-GO TEAM j.d.o.o. | Završni građevinski radovi Zagreb',
  description: 'MAT-GO TEAM j.d.o.o. - Profesionalni završni građevinski radovi u Zagrebu i okolici. Keramičarski radovi, adaptacije kupaonice, žbukanje, gletanje, podovi. Besplatna procjena!',
  keywords: 'završni građevinski radovi, keramičarski radovi, adaptacija kupaonice, žbukanje, gletanje, podovi, laminat, parket, Zagreb, MAT-GO TEAM, renovacija, soboslikarski radovi',
  authors: [{ name: 'MAT-GO TEAM j.d.o.o.' }],
  creator: 'MAT-GO TEAM j.d.o.o.',
  publisher: 'MAT-GO TEAM j.d.o.o.',
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
    title: 'MAT-GO TEAM j.d.o.o. | Završni građevinski radovi',
    description: 'Profesionalni završni građevinski radovi u Zagrebu. Keramika, adaptacije, žbukanje, podovi. Besplatna procjena!',
    url: 'https://matgo-team.online',
    siteName: 'MAT-GO TEAM j.d.o.o.',
    locale: 'hr_HR',
    type: 'website',
    images: [
      {
        url: '/images/boravak.png',
        width: 1200,
        height: 630,
        alt: 'MAT-GO TEAM - Završni građevinski radovi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAT-GO TEAM j.d.o.o. | Završni građevinski radovi',
    description: 'Profesionalni završni građevinski radovi u Zagrebu. Keramika, adaptacije, žbukanje, podovi.',
    images: ['/images/boravak.png'],
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
