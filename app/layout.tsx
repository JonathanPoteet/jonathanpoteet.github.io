import './globals.css'
import type { Metadata } from 'next'
import Navbar from './navbar/navbar'
import { Signika_Negative } from 'next/font/google'
import Footer from './footer/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://jonathanpoteet.com'),
  title: {
    default: 'Jonathan Poteet | Software Engineer',
    template: '%s | Jonathan Poteet',
  },
  description: 'Portfolio of Jonathan Poteet, a software engineer specializing in full-stack development, React, and modern UI/UX.',
  keywords: ['Jonathan Poteet', 'Software Engineer', 'Web Development', 'React', 'Next.js', 'General Motors', 'Vanderbilt', 'Florida State University'],
  openGraph: {
    title: 'Jonathan Poteet | Software Engineer',
    description: 'Portfolio of Jonathan Poteet, a software engineer specializing in full-stack development, React, and modern UI/UX.',
    url: 'https://jonathanpoteet.com',
    siteName: 'Jonathan Poteet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/JonathanPoteetProfessional.jpg',
        width: 800,
        height: 600,
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
  return (
    <html lang="en" className={signika.className}>
      <body>
        {/* <Navbar></Navbar> */}
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
