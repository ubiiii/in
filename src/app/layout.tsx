import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Utkarsh Lubal Portfolio",
  description: "Interactive portfolio with an AI-powered Memoji that answers questions about me, my skills, and my experience",
  keywords: [
    "Utkarsh Lubal", 
    "Portfolio", 
    "Developer", 
    "AI", 
    "Interactive", 
    "Memoji", 
    "Web Development",
    "Full Stack",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Utkarsh Lubal",
      url: "https://utkarshlubal.com",
    },
  ],
  creator: "Utkarsh Lubal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utkarshlubal.com",
    title: "Utkarsh Lubal Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
    siteName: "Utkarsh Lubal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Lubal Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
    creator: "@utkarshlubal",
  },
  icons: {
    icon: [
      {
        url: "/favicons.png",
        sizes: "any",
        type: "image/png",
      }
    ],
    shortcut: "/favicons.png",
    apple: "/favicons.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
             <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
         <link rel="icon" href="/favicons.png" sizes="any" type="image/png" />
         <link rel="shortcut icon" href="/favicons.png" type="image/png" />
         <link rel="apple-touch-icon" href="/favicons.png" />
       </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}