import './globals.css'
import type { Metadata } from 'next'
import { Signika_Negative } from 'next/font/google'
import Footer from './footer/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://jonathanpoteet.com'),
  title: {
    default: 'Jonathan Poteet | Software Engineer',
    template: '%s | Jonathan Poteet',
  },
  description: 'Vanderbilt MSCS & FSU IT Grad. Expert in Full-stack & Distributed Systems development with a focus on BCI, IoT, and Immersive Tech (VR/AR).',
  keywords: ['Jonathan Poteet', 'Software Engineer', 'Web Development', 'React', 'Next.js', 'General Motors', 'Vanderbilt', 'Florida State University', 'BCI', 'Brain-Computer Interface', 'IoT', 'Internet of Things', 'VR', 'Virtual Reality', 'AR', 'Augmented Reality'],
  referrer: 'strict-origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    // Add CSP via meta tag
    'http-equiv': 'Content-Security-Policy',
    content: `
      default-src 'self';
      script-src 'self' https://platform.twitter.com https://embed.twitch.tv;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https://static-cdn.jtvnw.net;
      connect-src 'self' https://api.twitter.com https://api.twitch.tv;
      frame-src https://twitter.com https://www.twitch.tv;
      font-src 'self';
    `,
    },
  
  openGraph: {
    title: 'Jonathan Poteet | Software Engineer',
    description: 'Vanderbilt MSCS & FSU IT Grad. Expert in Full-stack & Distributed Systems development with a focus on BCI, IoT, and Immersive Tech (VR/AR).',
    url: 'https://jonathanpoteet.com',
    siteName: 'Jonathan Poteet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/JonathanPoteetProfessional.jpg',
        width: 750,
        height: 1000,
        alt: 'Jonathan Poteet',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
}


const signika  = Signika_Negative({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jonathan Poteet',
    url: 'https://jonathanpoteet.com',
    image: 'https://jonathanpoteet.com/JonathanPoteetProfessional.jpg',
    jobTitle: 'Software Engineer',
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Florida State University',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Vanderbilt University',
      },
    ],
    sameAs: ['https://github.com/JonathanPoteet'],
  }

  return (
    <html lang="en" className={signika.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* <Navbar></Navbar> */}
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
