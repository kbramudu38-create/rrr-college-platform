import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RRR – Rent, Reuse & Return",
  description: "RRR college-only student marketplace",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
