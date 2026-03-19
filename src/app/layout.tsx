import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "神秘塔罗 · 命运之门",
  description: "一款具有仪式感、深度解读的沉浸式塔罗牌占卜应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}