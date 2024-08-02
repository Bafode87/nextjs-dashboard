import { Inter } from 'next/font/google';
import '@/app/ui/global.css'


const inter  = Inter({ 
    subsets: ['latin'],
    variable: '--font-inter'
});

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
