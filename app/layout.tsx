import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transfiguration Slavic Baptist Church",
  description:
    "Service times, directions, and contact information for Transfiguration Slavic Baptist Church in Port Charlotte, Florida.",
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
