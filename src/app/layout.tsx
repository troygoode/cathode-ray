import type { Metadata, Viewport } from "next";
import "./globals.css";
import Bevel from "@/components/Bevel";

export const metadata: Metadata = {
  title: "Cathode Ray",
  description: "A retro terminal simulator for tabletop role-playing games",
  manifest: "manifest.json", // https://github.com/vercel/next.js/issues/56687
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Bevel>{children}</Bevel>
      </body>
    </html>
  );
}
