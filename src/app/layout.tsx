import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scott AM's Portfolio",
  description: "Front-end portfolio focused on clarity, systems thinking, and precision."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
