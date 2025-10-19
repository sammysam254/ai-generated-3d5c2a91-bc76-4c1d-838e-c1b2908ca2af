import type { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Handmade Crafts</title>
        <meta name="description" content="Handmade Crafts E-commerce Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-100">
        <Header />
        <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}