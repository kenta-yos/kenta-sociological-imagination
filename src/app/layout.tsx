import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSans = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kenta | 学術書キュレーター",
  description:
    "学術と日常をつなぐ活動をしています。シェア型書店PASSAGE棚主、読書支援アプリ開発、オーダーメイド選書、読書会の企画・運営。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
