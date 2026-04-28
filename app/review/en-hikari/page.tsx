import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "enひかりの口コミ・評判 | 縛りなし最安級回線のテレワーク実力",
  description: "enひかりは月額4,620円・契約縛りなしの最安級光回線。v6プラス対応でテレワークに十分な速度が出るか、実測値・口コミ・料金を徹底レビュー。",
};

const reviews = [
  { label: "フリーランスWebデザイナー", rating: 5, text: "契約縛りがないのが最大の魅力です。フリーランスは収入が不安定なので、いつでも解約できる安心感は大きい。v6プラスオプションをつければ速度も十分で、Zoom会議も問題なくこなせています。" },
  { label: "テレワーク歴2年の事務職", rating: 4, text: "とにかく安い。月額4,620円でv6プラスも使えるので、コスパは最強クラスです。速度はNURO光には及びませんが、下り200〜400Mbpsは出るのでテレワークには十分です。" },
  { label: "副業ブロガー", rating: 4, text: "UQ mobileとのセット割が地味に嬉しいです。回線速度は時間帯によって多少変動しますが、ブログ執筆やリサーチ作業には全く問題ありません。サポートの対応も丁寧でした。" },
  { label: "スタートアップ在宅エンジニア", rating: 3, text: "料金の安さと縛りなしで選びましたが、混雑時は若干速度が落ちます。v6プラスは必須オプションだと思ってください。それでも月額の安さを考えれば十分な選択肢です。" },
];

const faqs = [
  { question: "enひかりの月額料金はいくらですか？", answer: "戸建てタイプで月額4,620円、マンションタイプで月額3,520円です。光回線の中でも最安級の料金設定となっています。" },
  { question: "enひかりは本当に契約縛りがないのですか？", answer: "はい、最低利用期間や自動更新の縛りがありません。いつ解約しても違約金は発生しません。ただし工事費の残債がある場合はその分の支払いが必要です。" },
  { question: "v6プラスオプションは必要ですか？", answer: "テレワーク用途なら強くおすすめします。月額198円の追加で、夜間や休日の速度低下を大幅に軽減できます。v6プラスなしだと混雑時に速度が落ちやすくなります。" },
  { question: "UQ mobile割とは何ですか？", answer: "UQ mobileユーザーがenひかりを契約すると、enひかりの月額料金が110円割引されます。毎月の固定費を抑えたい方には嬉しい特典です。" },
  { question: "enひかりの通信速度はどのくらいですか？", answer: "v6プラス利用時で下り200〜400Mbps、上り150〜300Mbps程度が一般的です。Web会議やクラウド作業には十分な速度が確保できます。" },
  { question: "enひかりはどの地域で利用できますか？", answer: "NTTフレッツ光の提供エリア全域で利用可能です。フレッツ光が使える場所であれば、全国どこでもenひかりを契約できます。" },
];

export default function EnHikariReviewPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "enひかり" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">光回線レビュー</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">enひかり 縛りなし最安級回線のテレワーク実力</h1>
          <p className="text-cyan-100 leading-relaxed">月額4,620円・契約縛りなし。v6プラス対応の最安級光回線はテレワークに耐えられるか検証。</p>
        </div>
      </section>

      {/* Overview Table */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["回線名", "enひかり"],
                  ["運営会社", "株式会社縁人"],
                  ["回線種別", "NTTフレッツ光コラボ"],
                  ["下り最大速度", "1Gbps"],
                  ["上り最大速度", "1Gbps"],
                  ["月額料金（戸建て）", "4,620円"],
                  ["月額料金（マンション）", "3,520円"],
                  ["初期費用", "事務手数料3,300円 + 工事費16,500円"],
                  ["契約期間", "縛りなし（違約金なし）"],
                  ["提供エリア", "全国（NTTフレッツ光提供エリア）"],
                  ["IPv6対応", "v6プラス対応（月額198円）"],
                  ["セット割", "UQ mobile割（月額110円引き）"],
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

      {/* Strengths */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">enひかりがテレワークに向いている理由</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "業界最安級の月額料金", desc: "戸建て4,620円・マンション3,520円は光回線の中でもトップクラスの安さ。テレワークの固定費を最小限に抑えたい方に最適です。" },
              { title: "契約縛りなしで安心", desc: "最低利用期間なし・違約金なし。テレワークが終了した場合や、より良い回線が見つかった場合もすぐに乗り換えられます。" },
              { title: "v6プラスで速度確保", desc: "月額198円のオプションでv6プラスに対応。混雑時間帯でもIPv6 IPoE接続で安定した速度を維持できます。" },
              { title: "UQ mobile割でさらにお得", desc: "UQ mobileユーザーならenひかりが月額110円割引。スマートフォンと光回線の合計コストを最小限に抑えられます。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros/Cons */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-[#0891B2] mb-4">メリット</h2>
              <ul className="space-y-3">
                {["光回線最安級の月額料金", "契約縛りなし・違約金なし", "v6プラスで安定した速度", "全国エリア対応", "UQ mobile割あり"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#0891B2] font-bold mt-0.5">+</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">デメリット</h2>
              <ul className="space-y-3">
                {["v6プラスは別途オプション料金が必要", "大手と比べて知名度が低い", "キャッシュバック等の派手な特典がない", "工事費の実質無料キャンペーンがない"].map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-orange-400 font-bold mt-0.5">-</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
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

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">enひかりに関するよくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-[#F0F9FF] rounded-lg border border-gray-200 group">
                <summary className="p-5 cursor-pointer font-medium text-gray-800 flex items-center justify-between hover:text-[#0891B2]">
                  <span className="flex items-center gap-3">
                    <span className="text-[#0891B2] font-bold text-sm">Q{i + 1}</span>
                    {faq.question}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">enひかりで低コストなテレワーク環境を</h2>
          <p className="text-cyan-100 mb-8">縛りなし・最安級料金。必要十分な速度でテレワークをサポートします。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/review/rakuten/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">次: 楽天ひかり</Link>
          </div>
        </div>
      </section>
    </>
  );
}
