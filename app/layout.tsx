import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Script from "next/script";
import { Header, Footer } from "@/components/layout";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebsiteSchema,
} from "@/components/seo";
import { siteConfig } from "@/lib/seo-config";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Vehicle Body Building & Fabrication`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Vehicle Body Building & Fabrication`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/hadiid-photos/DSC09505.jpg`,
        width: 1200,
        height: 630,
        alt: "Hadiid Industries - Vehicle Body Building & Fabrication",
      },
      {
        url: `${siteConfig.url}/hadiid-photos/DSC09506.jpg`,
        width: 1200,
        height: 630,
        alt: "Hadiid Industries Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Vehicle Body Building & Fabrication`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/hadiid-photos/DSC09505.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteConfig.verification.google,
  },
  category: "Industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth overflow-x-hidden'>
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-WPM4WFFYW5'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WPM4WFFYW5');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
        <Header />
        <main className='min-h-screen pt-16 lg:pt-28'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
