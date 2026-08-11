import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Transfiguration Slavic Baptist Church",
  description:
    "Service times, directions, and contact information for Transfiguration Slavic Baptist Church in Port Charlotte, Florida.",
  icons: {
    icon: [{ url: `${basePath}/favicon.png`, type: "image/png" }],
    shortcut: `${basePath}/favicon.png`,
    apple: `${basePath}/transfiguration-logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
