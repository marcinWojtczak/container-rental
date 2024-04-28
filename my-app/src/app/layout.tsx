import type { Metadata } from "next";
import '@/app/global.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: [ '100','200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={poppins.className} 
      style={{ scrollBehavior: 'smooth'}}
    >
      <body className="flex w-screen flex-col items-center justify-center bg-white">{children}</body>
    </html>
  );
}
