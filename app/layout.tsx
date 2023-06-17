import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header/page'
import Footer from './footer/page'
import NextAuthProvider from '@/component/Providers'
import Head from 'next/head';
import { Providers } from "@/redux/provider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import ReactToast from '@/component/ReactToast'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Hello Next js',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Providers>
        <body className={`${inter.className}`}>
          <NextAuthProvider>
            <Header />
            <div className='mb-20'>
              {children}
            </div>
            <ReactToast/>
            <Footer />
          </NextAuthProvider>
        </body>
      </Providers>
    </html>
  )
}