import type { Metadata, Viewport } from "next";
import Bevel from "@/components/Bevel";
import { cn } from "@/utils/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cathode Ray",
  description: "A retro terminal simulator for tabletop role-playing games",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const STYLE = "text-3xl md:text-4xl lg:text-5xl xl:text-6xl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={STYLE}>
        <div className="relative flex min-h-svh flex-col bg-background">
          <div className="border-grid flex flex-1 flex-col">
            <main className="relative flex min-h-svh flex-1 flex-col bg-background peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow">
              <div className="m-4 lg:m-24 mb-16">
                <Bevel className={cn("hidden lg:block")}>{children}</Bevel>
                <div className={cn("block lg:hidden")}>{children}</div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
