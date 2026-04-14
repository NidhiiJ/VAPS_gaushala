import type { Metadata } from "next";
import "./globals.scss";
import PageLoader from "@/components/PageLoader/PageLoader";


export const metadata: Metadata = {
  title: "Suri Prem Jiv Raksha Kendra Sansthan",
  description: "Dedicated to the protection, care, and welfare of cows and all living beings.",
  icons: {
    icon: [
      { url: "/logo/favicon/favicon.ico", sizes: "any" },
      { url: "/logo/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/logo/favicon/apple-touch-icon.png", sizes: "180x180" },
    other: [
      { rel: "manifest", url: "/logo/favicon/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"/>
      </head>
      <body className={`antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
