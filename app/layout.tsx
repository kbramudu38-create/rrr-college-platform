import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RRR – Rent, Reuse & Return",
  description: "College-only student rental and reuse marketplace",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
