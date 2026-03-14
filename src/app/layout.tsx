import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anil Kumar | Full Stack Developer",
  description:
    "Explore the portfolio of Anil Kumar, a Professional Full Stack Developer specializing in React, Next.js, and modern web technologies. Built for performance and user experience.",
  keywords: [
    "Anil Kumar",
    "Full Stack Developer",
    "Next.js Portfolio",
    "Web Development",
    "Software Engineer",
    "React Developer",
  ],
  authors: [{ name: "Anil Kumar" }],
  openGraph: {
    title: "Abdul Basit | Personal Portfolio",
    description:
      "Full Stack Developer & AI Automation Expert — Building the future of the web.",
    url: "https://abdulbasit-005.vercel.app",
    siteName: "Abdul Basit Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Anil Kumar Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Kumar | Full Stack Developer",
    description: "Building modern web applications with Next.js and React.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
