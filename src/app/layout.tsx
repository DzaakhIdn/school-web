import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import Script from "next/script";
import SplashScreen from "@/animate/SplashScreen";

import "./globals.css";



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
