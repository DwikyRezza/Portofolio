import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dwiky Rezza",
  description:
    "Engineering portfolio. Production architecture decisions, infrastructure tradeoffs, and execution metrics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
