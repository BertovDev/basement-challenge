import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const BasementGrotesque = localfont({
  src: "./BasementGrotesque-Black_v1.202.woff2",
  weight: "500",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basement Challenge",
  description: "Basement Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={BasementGrotesque.className}>
      <head>
        {/* <link
          rel="preload"
          href="./BasementGrotesque-Black_v1.202.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
