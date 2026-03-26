import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Suri Prem Jiv Raksha Kendra Sansthan",
  description: "Dedicated to the protection, care, and welfare of cows and all living beings.",
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
        {children}
      </body>
    </html>
  );
}
