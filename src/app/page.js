import Image from 'next/image'
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
    <Head>
      <title>Your Page Title</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

  

    <main className="container mx-auto p-4">
      {/* Your page content goes here */}
    </main>

    <Footer />
  </div>
  )
}
