import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const popSans = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--pop-sans",
  weight: '300 400 500 600 700',
});

export const metadata: Metadata = {
  title: "Djoux",
  description: "Online handmade accessories shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${popSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
