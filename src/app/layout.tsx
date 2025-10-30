import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IBDPDT - Design in Panic",
  description: "Fail early. Fail often. Fail beautifully. A satirical design project exploring creativity and panic as twin forces in design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
