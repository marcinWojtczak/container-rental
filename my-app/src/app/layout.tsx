import type { Metadata } from "next";
import '@/app/global.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: [ '100','200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
  gallery
}: Readonly<{
  children: React.ReactNode;
  gallery: React.ReactNode
}>) {


  console.log(gallery)
  return (
    <html 
      lang="en" 
      className={poppins.className} 
      style={{ scrollBehavior: 'smooth', overflowX: 'hidden'}}
    >
      <body className="flex flex-col items-center justify-center bg-white">
        {children}
        {gallery}
      </body>
    </html>
  );
}
