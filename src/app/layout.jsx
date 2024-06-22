import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Tochukwu Nwosa Portfolio",
  description:
    "This is the portfolio website of Tochukwu, a Web developer and a Technical writer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description}
        />
      </head>
      <body className={"bg-primary-obereBlack flex flex-col"}>
        <Navbar/>
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
