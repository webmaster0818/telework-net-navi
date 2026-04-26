import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "テレワーク回線ナビ | 在宅勤務に最適なネット回線比較",
    template: "%s | テレワーク回線ナビ",
  },
  description:
    "テレワーク・リモートワークに最適な光回線を徹底比較。Web会議の安定性、上り速度、料金を10社以上から厳選してランキング形式でご紹介。",
  metadataBase: new URL("https://telework-net-navi.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "テレワーク回線ナビ",
  },
};

function Header() {
  return (
    <header className="bg-[#0C4A6E] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#0891B2] text-2xl font-bold">///</span>
            <span className="text-lg font-bold tracking-tight">テレワーク回線ナビ</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/#ranking" className="hover:text-[#0891B2] transition-colors">ランキング</Link>
            <Link href="/#comparison" className="hover:text-[#0891B2] transition-colors">比較</Link>
            <Link href="/faq/" className="hover:text-[#0891B2] transition-colors">トラブル対策</Link>
            <Link href="/faq/" className="hover:text-[#0891B2] transition-colors">お役立ち</Link>
          </nav>
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#0C4A6E] rounded-lg shadow-xl border border-cyan-800 py-2 z-50">
                <Link href="/#ranking" className="block px-4 py-2 hover:bg-cyan-800 transition-colors">ランキング</Link>
                <Link href="/#comparison" className="block px-4 py-2 hover:bg-cyan-800 transition-colors">比較</Link>
                <Link href="/faq/" className="block px-4 py-2 hover:bg-cyan-800 transition-colors">トラブル対策</Link>
                <Link href="/faq/" className="block px-4 py-2 hover:bg-cyan-800 transition-colors">お役立ち</Link>
              </div>
            </details>
          </div>
        </div>
      </div>
      <div className="bg-[#0891B2] text-center text-xs py-1 text-cyan-100">
        PRを含みます
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0C4A6E] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#0891B2] text-xl font-bold">///</span>
              <span className="font-bold">テレワーク回線ナビ</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              テレワーク・リモートワークに最適なインターネット回線を、速度実測データとユーザーレビューをもとに比較・紹介するサイトです。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-[#0891B2]">コンテンツ</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/#ranking" className="hover:text-white transition-colors">回線ランキング</Link></li>
              <li><Link href="/review/nuro/" className="hover:text-white transition-colors">NURO光レビュー</Link></li>
              <li><Link href="/review/au-hikari/" className="hover:text-white transition-colors">auひかりレビュー</Link></li>
              <li><Link href="/review/docomo/" className="hover:text-white transition-colors">ドコモ光レビュー</Link></li>
              <li><Link href="/faq/" className="hover:text-white transition-colors">よくある質問</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-[#0891B2]">サイト情報</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>運営: テレワーク回線ナビ編集部</li>
              <li>お問い合わせ: info@example.com</li>
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              当サイトはアフィリエイトプログラムに参加しています。PRを含みます。
            </p>
          </div>
        </div>
        <div className="border-t border-cyan-800 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} テレワーク回線ナビ All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${notoSansJP.className} min-h-full flex flex-col bg-white text-gray-800`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
