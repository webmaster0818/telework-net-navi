import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "GMO光アクセスの口コミ・評判 | テレワーク向け徹底レビュー",
  description: "GMO光アクセスはテレワークに使える？月額4,818円の最安級料金・v6プラス標準・縛りなしの実力を徹底レビュー。在宅勤務ユーザーの口コミも。",
};

const reviews = [
  { label: "テレワーク歴2年のユーザー", rating: 4, text: "とにかく安い。月額4,818円でv6プラス対応、Wi-Fiルーター無料、しかも契約縛りなし。テレワーク始めたばかりで初期費用を抑えたかったので助かりました。速度も日中は200Mbps以上出ています。" },
  { label: "フリーランスWebデザイナー", rating: 4, text: "コスパ最強だと思います。v6プラスのおかげで昼間のWeb会議は問題なし。Wi-Fiルーターも高性能なものが無料で届きました。縛りなしなので、もっと速い回線が必要になったらいつでも乗り換えられるのが安心。" },
  { label: "テレワーク歴1年の営業職", rating: 3, text: "価格と速度には満足していますが、サポートに電話がつながりにくいのが難点。設定で困った時に1時間以上待ちました。ネットの設定に慣れている人なら問題ないですが、初心者には少しハードルが高いかも。" },
  { label: "テレワーク歴3年のコンサルタント", rating: 5, text: "以前は別の光回線を使っていましたが、GMO光アクセスに乗り換えて月額2,000円近く安くなりました。v6プラスの速度も十分で、Teamsの画面共有も問題なし。契約縛りがないので精神的にも楽です。" },
];

const faqs = [
  { question: "GMO光アクセスの実測速度は？", answer: "v6プラス接続時で、下り200〜350Mbps、上り150〜250Mbps程度の実測値が報告されています。フレッツ光回線ですがv6プラスにより混雑を回避しています。" },
  { question: "v6プラスとは何ですか？", answer: "v6プラスは、IPv6 IPoE接続とIPv4 over IPv6技術を組み合わせた高速通信方式です。従来のPPPoE接続の混雑を回避し、IPv4サイトへのアクセスもIPv6経路で高速化します。" },
  { question: "Wi-Fiルーターは本当に無料ですか？", answer: "はい。v6プラス対応の高性能Wi-Fiルーターが無料でレンタルされます。3年以上利用すると返却不要でそのままもらえます。" },
  { question: "契約縛りなしとは？", answer: "最低利用期間や自動更新がなく、いつ解約しても違約金が発生しません。ただし工事費の分割払い中に解約すると残債の支払いは必要です。" },
  { question: "テレワークに十分な速度は出ますか？", answer: "v6プラス接続により、日中のWeb会議やVPN接続に十分な速度が出ます。ただし独自回線（NURO光やauひかり）と比べると、夜間のピーク時にやや速度が落ちる可能性があります。" },
  { question: "GMOとくとくBBとの違いは？", answer: "GMO光アクセスはGMOインターネットグループが提供する光コラボレーション回線です。GMOとくとくBBはドコモ光やauひかりのプロバイダとしても展開していますが、GMO光アクセスは独自ブランドの光回線サービスです。" },
];

export default function GmoReviewPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "GMO光アクセス" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">光回線レビュー</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">GMO光アクセス テレワーク向け徹底レビュー</h1>
          <p className="text-cyan-100 leading-relaxed">月額4,818円の最安級料金にv6プラス標準対応。契約縛りなしで始められるGMO光アクセスを検証。</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["回線名", "GMO光アクセス（GMOとくとくBB光）"],
                  ["運営会社", "GMOインターネットグループ"],
                  ["下り最大速度", "1Gbps"],
                  ["上り最大速度", "1Gbps"],
                  ["月額料金（戸建て）", "4,818円"],
                  ["月額料金（マンション）", "3,773円"],
                  ["初期費用", "事務手数料3,300円 + 工事費26,400円（実質無料）"],
                  ["契約期間", "なし（縛りなし）"],
                  ["提供エリア", "全国（フレッツ光提供エリア）"],
                  ["IPv6対応", "v6プラス標準対応"],
                  ["テレワーク適性", "高い（コスパ重視）"],
                ].map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-100">
                    <th className="bg-[#F0F9FF] px-4 py-3 text-left font-medium text-gray-700 w-40">{key}</th>
                    <td className="px-4 py-3 text-gray-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">GMO光アクセスがテレワークに強い理由</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "業界最安級の月額料金", desc: "戸建て4,818円・マンション3,773円は光回線の中でもトップクラスの安さ。テレワークの固定費を最小限に抑えられます。" },
              { title: "v6プラス標準対応", desc: "IPv6 IPoE + IPv4 over IPv6のv6プラスが標準装備。追加料金なしで混雑を回避した高速通信を利用できます。" },
              { title: "Wi-Fiルーター無料レンタル", desc: "v6プラス対応の高性能Wi-Fiルーターが無料でレンタルされ、3年以上の利用でもらえます。別途購入する必要がありません。" },
              { title: "契約縛りなし", desc: "最低利用期間や自動更新の縛りがないため、いつでも違約金なしで解約可能。気軽にテレワーク環境を整えられます。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-[#0891B2] mb-4">メリット</h2>
              <ul className="space-y-3">
                {["月額4,818円で光回線最安クラス", "v6プラス標準で混雑回避", "Wi-Fiルーター無料レンタル", "契約縛りなしで違約金不要", "全国エリア対応（フレッツ光網）"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-[#0891B2] font-bold mt-0.5">+</span>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">デメリット</h2>
              <ul className="space-y-3">
                {["フレッツ光回線で混雑の影響を受ける可能性", "サポートの電話がつながりにくい場合あり", "独自回線ほどの安定性は期待しにくい", "スマホセット割の対象が限定的"].map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-orange-400 font-bold mt-0.5">-</span>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワーカーの口コミ</h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#0891B2]">{r.label}</span>
                  <span className="text-sm text-yellow-500">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">GMO光アクセスに関するよくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-[#F0F9FF] rounded-lg border border-gray-200 group">
                <summary className="p-5 cursor-pointer font-medium text-gray-800 flex items-center justify-between hover:text-[#0891B2]">
                  <span className="flex items-center gap-3"><span className="text-[#0891B2] font-bold text-sm">Q{i + 1}</span>{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">GMO光アクセスでコスパ最強のテレワーク環境を</h2>
          <p className="text-cyan-100 mb-8">最安級の月額料金と縛りなしで、気軽にテレワーク回線を導入。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/review/nuro/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">1位: NURO光を見る</Link>
          </div>
        </div>
      </section>
    </>
  );
}
