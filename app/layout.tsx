import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rashid Ilyas — Full Stack Developer',
  description: 'Portfolio of Rashid Ilyas, a PHP and Laravel Full Stack Developer.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
