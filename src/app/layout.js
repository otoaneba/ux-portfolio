import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import Providers from '@/components/Providers'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naoto\'s UX Portfolio",
  description: "A showcase of my UX work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Navbar />
          <ThemeToggle />
          <main className="mx-auto px-1 md:px-0">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
