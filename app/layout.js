import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FundFlow",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-600">
    {/* Centered text (remains centered on small screens) */}
    <p className="text-center md:text-center w-full md:w-auto">
      Made with 💗 by Ayush
    </p>

    {/* Right-aligned social icons on desktop */}
    <div className="flex gap-4 mt-4 md:mt-0">
      <a
        href="https://github.com/AyushVishu15"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img src="/github.svg" alt="GitHub" className="h-6 w-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/ayushvishu15"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
      </a>
      <a
        href="mailto:ayushprajapati148@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Gmail"
      >
        <img src="/gmail.svg" alt="Gmail" className="h-6 w-6" />
       </a>
       </div>
       </div>
       </footer>


        </body>
      </html>
    </ClerkProvider>
  );
}
