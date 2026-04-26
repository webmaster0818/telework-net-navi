import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "auひかりの口コミ・評判 | テレワーク向け徹底レビュー",
  description: "auひかりはテレワークに向いている？独自回線の安定性・上り速度・au/UQスマホ割を徹底レビュー。在宅勤務ユーザーのリアルな口コミも掲載。",
};

const reviews = [
  { label: "テレワーク歴2年のユーザー", rating: 5, text: "独自回線のおかげか、フレッツ光時代に悩まされていた夜間の速度低下がほぼなくなりました。Zoom会議も安定しています。auスマホとのセット割で月々1,100円引きになるのも家計に助かっています。" },
  { label: "在宅デザイナー", rating: 4, text: "上り速度が安定しているので、数GBのデザインデータをクラウドにアップロードする際もスムーズです。ただ、マンションタイプでVDSL方式のため下りは100Mbps程度。光配線なら理想的だったのですが。" },
  { label: "テレワーク歴3年のSE", rating: 5, text: "VPN接続時の速度も良好で、社内システムへのアクセスにストレスを感じません。IPv6デュアルスタック対応なので、設定も特に必要なく高速接続できます。キャッシュバックも高額でした。" },
  { label: "テレワーク歴1年の事務職", rating: 4, text: "Web会議中に家族が動画を見ていても途切れないのが良いです。申し込みから開通まで3週間ほどでした。ただ、関西地方の実家では戸建てタイプが使えないと言われました。" },
];

const faqs = [
  { question: "auひかりの実測速度はどのくらい？", answer: "戸建ての光配線方式で、下り400〜700Mbps、上り300〜500Mbps程度の実測値が多く報告されています。独自回線のため時間帯による変動が少ないのが特徴です。" },
  { question: "auひかりの提供エリアは？", answer: "全国の大部分で提供されていますが、戸建てタイプは関西・東海・沖縄では未提供です。マンションタイプは全国対応しています。" },
  { question: "au/UQスマホ割はどのくらいお得？", answer: "auスマートバリューで1回線あたり最大1,100円/月割引。UQモバイルの自宅セット割で最大1,100円/月割引。家族全員に適用されるため、4人家族なら最大4,400円/月の節約になります。" },
  { question: "auひかりのテレワーク適性は？", answer: "独自回線のため混雑に強く、上り速度も安定しています。VPN接続時のパフォーマンスも良好で、Web会議・ファイル転送ともに快適なテレワーク環境を構築できます。" },
  { question: "マンションタイプの注意点は？", answer: "建物の配線方式により速度が大きく異なります。光配線方式なら最大1Gbps、VDSL方式だと最大100Mbpsとなります。事前に管理会社に配線方式を確認することをおすすめします。" },
  { question: "解約時の費用は？", answer: "契約更新月以外の解約で4,730円の違約金が発生します。また、工事費の残債がある場合はその分も請求されます。" },
];

export default function AuHikariReviewPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "auひかり" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">光回線レビュー</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">auひかり テレワーク向け徹底レビュー</h1>
          <p className="text-cyan-100 leading-relaxed">独自回線で混雑に強い。au/UQスマホ割でお得に使えるauひかりのテレワーク適性を検証。</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["回線名", "auひかり"],
                  ["運営会社", "KDDI"],
                  ["下り最大速度", "1Gbps"],
                  ["上り最大速度", "1Gbps"],
                  ["月額料金（戸建て）", "5,610円"],
                  ["月額料金（マンション）", "4,180円〜"],
                  ["初期費用", "事務手数料3,300円 + 工事費41,250円（実質無料）"],
                  ["契約期間", "3年（ずっとギガ得プラン）"],
                  ["提供エリア", "全国（戸建ては関西・東海・沖縄除く）"],
                  ["IPv6対応", "デュアルスタック標準対応"],
                  ["テレワーク適性", "高い"],
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
          <h2 className="text-2xl font-bold mb-6">auひかりがテレワークに強い理由</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "独自回線で混雑回避", desc: "NTTフレッツ光とは別の独自回線網を使用。利用者集中時でも速度が低下しにくく、安定したテレワーク環境を実現します。" },
              { title: "上り速度が安定", desc: "上り最大1Gbpsで、Web会議の映像送信や大容量ファイルのアップロードもスムーズ。VPN接続時のパフォーマンスも良好です。" },
              { title: "au/UQスマホ割で家計に優しい", desc: "auスマートバリューまたはUQモバイル自宅セット割で、家族全員のスマホ代が割引に。通信費トータルで大幅な節約が可能です。" },
              { title: "高額キャッシュバック", desc: "代理店経由の申し込みで高額キャッシュバックを受け取れるケースが多く、初期費用を実質的にカバーできます。" },
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
                {["独自回線で夜間も速度が安定", "au/UQスマホ割で家族全員お得", "上り速度が安定しテレワークに最適", "高額キャッシュバックで初期費用軽減", "IPv6デュアルスタック標準対応"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-[#0891B2] font-bold mt-0.5">+</span>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">デメリット</h2>
              <ul className="space-y-3">
                {["戸建ては関西・東海・沖縄で未提供", "マンションはVDSL方式だと速度制限", "プロバイダの選択肢が少ない", "撤去工事費が発生する場合あり"].map((c) => (
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
          <h2 className="text-2xl font-bold mb-6">auひかりに関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">auひかりでテレワーク環境を整えよう</h2>
          <p className="text-cyan-100 mb-8">独自回線の安定性とスマホ割のお得さを両立。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/review/docomo/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">次: ドコモ光</Link>
          </div>
        </div>
      </section>
    </>
  );
}
