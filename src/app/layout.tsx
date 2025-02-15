import type { Metadata } from "next";
import localFont from "next/font/local";
import { Work_Sans } from 'next/font/google'
import "./globals.css";

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: "--font-work-sans"
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MATSPlan",
  description: "End to end construction solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
