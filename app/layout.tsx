export const metadata = {
  title: "RRR - Rent, Reuse & Return",
  description: "College-only peer rental platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
