import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers"
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohnish Gorana Portfolio",
  description: "Modern and Minimalist Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider></body>
    </html>
  );
}
