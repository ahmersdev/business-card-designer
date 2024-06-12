import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import "./globals.scss";
import Loader from "@/components/loader";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Card Designer",
  description: "Design a Card for your Business.",
  applicationName: "Business Card Designer",
  authors: [{ name: "Ahmer's Dev" }],
  referrer: "origin-when-cross-origin",
  creator: "Ahmer's Dev",
  publisher: "Ahmer's Dev",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://business-card-designer.vercel.app/"),
  openGraph: {
    title: "Business Card Designer",
    description: "Design a Card for your Business.",
    url: "https://business-card-designer.vercel.app/",
    siteName: "Dynamic Form Builder",
    images: [
      { url: "/og-image.png", width: 800, height: 600 },
      {
        url: "/og-image.png",
        width: 1800,
        height: 1600,
        alt: "Dynamic Form Builder",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Card Designer",
    description: "Design a Card for your Business.",
    creator: "Ahmer's Dev",
    images: {
      url: "/og-image.png",
      alt: "Dynamic Form Builder Cover",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
  themeColor: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Loader />
        {children}
      </body>
    </html>
  );
}
