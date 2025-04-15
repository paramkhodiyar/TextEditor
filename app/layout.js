import { Geist, Geist_Mono } from "next/font/google";
import { Satisfy } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vento",
  description: "Write it. Save it. Or forget it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
            rel="stylesheet"
          />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
