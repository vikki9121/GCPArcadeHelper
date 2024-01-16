import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arcade Helper',
  description: 'Google cloud arcade event helper',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
       <Header />
        <Topbar />
        {children}</body>
        <Footer />
    </html>
  )
}
