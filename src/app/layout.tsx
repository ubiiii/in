import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Load premium fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Utkarsh Lubal",
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
    title: "Utkarsh Lubal",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
    siteName: "Utkarsh Lubal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Lubal",
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
          poppins.variable,
          playfair.variable,
          jetbrains.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="utkarsh-theme"
        >
          <main className="flex min-h-screen flex-col">
            <div className="fixed right-4 top-4 z-50">
              <ThemeToggle />
            </div>
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}