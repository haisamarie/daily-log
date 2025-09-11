import type { Metadata } from "next";
import "@/app/globals.css";
import "@/app/css/style.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "鞠の記録",
  description: "このサイトは私の日々の記録です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="main-container grid min-h-[100lvh] grid-rows-[auto_1fr_auto]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
