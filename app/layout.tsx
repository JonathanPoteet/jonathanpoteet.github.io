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
  description: 'Full-stack software engineer specializing in TypeScript, distributed systems, and modern web frameworks. Building toward formal verification and simulation, with creative interests in procedural art and technical artistry.',
  keywords: ['Jonathan Poteet', 'Software Engineer', 'Web Development', 'React', 'Next.js', 'General Motors', 'Vanderbilt', 'Florida State University', 'IoT', 'Internet of Things', 'VR', 'Virtual Reality', 'AR', 'Augmented Reality', 'formal verification', 'simulation', 'PRISM', 'StormPy', 'TypeScript', 
'Angular', 'distributed systems', 'generative art', 'Godot', 'Vanderbilt MSCS'],
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
    description: 'Full-stack software engineer specializing in TypeScript, distributed systems, and modern web frameworks. Building toward formal verification and simulation, with creative interests in procedural art and technical artistry.',
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
    seeks: {
      "@type": "JobPosting",
      "title": "Software Engineer"
    },
    sameAs: [
    'https://github.com/JonathanPoteet',
    'https://www.linkedin.com/in/jonathan-poteet/',
    'https://twitter.com/teetopjon',
    'https://www.twitch.tv/teetopjon',],
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
