import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import SplashScreen from "@/animate/SplashScreen";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HSI Boarding School",
  description: "Offical Website of HSI Boarding School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://analytics.hsiboardingschool.id/script.js"
          data-website-id="a7c5bcfd-bf8a-4be7-9b56-14b34e351e54"
          strategy="afterInteractive"
        />
        <SplashScreen>
          {children}
        </SplashScreen>
      </body>
    </html>
  );
}
