"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
// import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/About";
import GallerySection from "@/components/Gallery";
import NewsletterSection from "@/components/Newsletter";

const montserrat = Montserrat({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light dark:bg-dark`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        > */}
          {/* <Container> */}
            <Navbar />
            <HeroSection />
            <AboutUsSection />
            {children}
            <GallerySection />
            <NewsletterSection />
          {/* </Container> */}
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
