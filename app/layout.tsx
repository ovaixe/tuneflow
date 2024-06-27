import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import SupabseProvider from "@/providers/SupabaseProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TuneFlow",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabseProvider>
          <Sidebar>{children}</Sidebar>
        </SupabseProvider>
      </body>
    </html>
  );
}
