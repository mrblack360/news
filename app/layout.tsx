import React from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Urbanist } from "next/font/google";
import Footer from "@/components/layout/Footer";

const inter = Urbanist({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProp {
  children: React.ReactNode;
}

function RootLayout(props: Readonly<RootLayoutProp>) {
  const { children } = props;
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Header />
        <div className="bg-white max-w-6xl mx-auto container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
