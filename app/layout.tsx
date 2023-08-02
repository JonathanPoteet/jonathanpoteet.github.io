import './globals.css'
import type { Metadata } from 'next'
import Navbar from './navbar/navbar'
import { Signika_Negative } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Jonathan Poteet',
  description: 'Portfolio for Jonathan Poteet',
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
        <Navbar></Navbar>
        {children}
         <div>Copyright 2023 by Jonathan Poteet</div>
      </body>
    </html>
  )
}
