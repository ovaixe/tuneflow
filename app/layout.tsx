import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import SupabseProvider from "@/providers/SupabaseProvider";

import getSongsByUserId from "@/actions/getSongsByUserId";

import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
import Menubar from "@/components/Menubar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TuneFlow",
  description: "Listen to music!",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
            <Menubar />
          </UserProvider>
        </SupabseProvider>
      </body>
    </html>
  );
}
