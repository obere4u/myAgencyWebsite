import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { lusitana } from "@/lib/fonts";


export const metadata = {
  title: "tochukwu Nwosa Portfolio",
  description: "This is the portfolio website of Tochukwu a Web developer and a Tebchnical writer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={'bg-primary-obereBlack p-6'}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
