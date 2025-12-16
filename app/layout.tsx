import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "HADIID INDUSTRIES LTD. - Vehicle Body Building & Fabrication",
  description:
    "Your trusted partner in vehicle body building, fabrication, and repairs. We combine modern technology with expert craftsmanship to deliver unmatched quality.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth overflow-x-hidden'>
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        <Header />
        <main className='min-h-screen pt-16 lg:pt-28'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
