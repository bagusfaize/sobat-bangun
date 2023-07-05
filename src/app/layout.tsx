import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Sobat Bangun',
  description: 'SIG Digital Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
