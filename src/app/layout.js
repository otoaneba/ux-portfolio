import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> |{' '} <a href="/projects">Projects</a> | <a href="/contact">Contact</a>
          </nav>
        </header>
          <main>{children}</main>
          <footer>© 2025 Naoto Abe. All rights reserved.</footer>
      </body>
    </html>
  );
}
