import type { Metadata } from 'next';
import { Overpass } from 'next/font/google';
import Providers from '@/app/providers';
import './globals.css';

const overpass = Overpass({
  variable: '--font-overpass',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Media Index',
  description: 'A comprehensive index of media content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${overpass.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
