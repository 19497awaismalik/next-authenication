"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from 'next-auth/react'
import ThemeProviders from "./utils/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
          <body className={`${inter.className} bg-no-repeat h-screen bg-gradient-to-b dark:from-gray-900  dark:to-black duration-300`}>
        <ThemeProviders
          attribute="class"
          defaultTheme="system"
          enableSystem
          >
          <SessionProvider>
            {children}
      </SessionProvider>
        </ThemeProviders>
            </body>
    </html>
  );
}
