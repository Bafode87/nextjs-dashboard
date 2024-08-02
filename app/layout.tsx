import { Inter } from 'next/font/google';
import '@/app/ui/global.css'
import { inter } from './ui/fonts';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
