import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "java-script-example",
  description: "provide java-script basic example for javascript lerners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
