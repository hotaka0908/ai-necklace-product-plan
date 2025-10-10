import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIネックレス プロダクト計画",
  description: "世界中の人々の生活をもっと良くする、ウェアラブルAIデバイス「AIネックレス」のプロダクト計画書",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
