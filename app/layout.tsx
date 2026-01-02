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
