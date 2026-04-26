import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ドコモ光の口コミ・評判 | テレワーク向け徹底レビュー",
  description: "ドコモ光はテレワークに使える？全国エリア対応・プロバイダ選択自由・ドコモスマホ割の実力を徹底レビュー。在宅勤務ユーザーのリアルな口コミも。",
};

const reviews = [
  { label: "テレワーク歴2年のユーザー", rating: 4, text: "ドコモスマホの家族4人分の割引が大きく、通信費トータルで月5,000円以上節約できています。プロバイダにGMOとくとくBBを選んでIPv6接続にしたら、Web会議も問題なく使えています。" },
  { label: "フリーランスライター", rating: 4, text: "全国どこでも使えるのが最大の安心材料。転勤族の自分には重要なポイントです。速度はプロバイダ次第ですが、IPv6対応のプロバイダを選べば日中は200Mbps以上出ています。" },
  { label: "テレワーク歴3年の人事担当", rating: 3, text: "夜間に若干速度が落ちることがありますが、テレワークは基本日中なので大きな問題ではありません。ドコモショップで対面サポートを受けられるのは、IT に詳しくない自分には助かります。" },
  { label: "テレワーク歴1年の経理担当", rating: 5, text: "IPv6のv6プラス接続にしてから速度が劇的に改善しました。以前は夜間にZoomが固まることがありましたが、今はほぼ問題なし。プロバイダ選びが重要だと実感しています。" },
];

const faqs = [
  { question: "ドコモ光の実測速度は？", answer: "IPv6対応プロバイダ利用時で、下り200〜400Mbps、上り150〜300Mbps程度が一般的です。PPPoE接続のみの場合は夜間に50Mbps以下になることもあるため、IPv6対応プロバイダの選択が重要です。" },
  { question: "おすすめのプロバイダは？", answer: "テレワーク用途では、v6プラス対応のGMOとくとくBB、OCN インターネット、@niftyなどが人気です。IPv6 IPoE接続に対応しているプロバイダを選ぶことをおすすめします。" },
  { question: "ドコモスマホ割はどのくらいお得？", answer: "ドコモ光セット割で1回線あたり最大1,100円/月割引。家族全員に適用されるため、4人家族なら最大4,400円/月の節約になります。ahamoは割引対象外です。" },
  { question: "テレワークでの使い勝手は？", answer: "IPv6対応プロバイダを選べば、Web会議・VPN接続ともに快適です。全国対応のため転居時も継続利用でき、ドコモショップでのサポートも受けられます。" },
  { question: "10ギガプランはありますか？", answer: "はい。ドコモ光 10ギガプランが一部エリアで提供されています。月額6,380円で上下最大10Gbpsの超高速通信が可能です。" },
  { question: "契約期間と違約金は？", answer: "2年契約（自動更新）で、更新月以外の解約時に5,500円の違約金が発生します。契約期間なしのプランもありますが、月額が550円高くなります。" },
];

export default function DocomoReviewPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "ドコモ光" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">光回線レビュー</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ドコモ光 テレワーク向け徹底レビュー</h1>
          <p className="text-cyan-100 leading-relaxed">全国エリア対応・プロバイダ選択自由。ドコモユーザーに最適な光回線のテレワーク適性を検証。</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["回線名", "ドコモ光"],
                  ["運営会社", "NTTドコモ"],
                  ["下り最大速度", "1Gbps"],
                  ["上り最大速度", "1Gbps"],
                  ["月額料金（戸建て）", "5,720円（タイプA）"],
                  ["月額料金（マンション）", "4,400円（タイプA）"],
                  ["初期費用", "事務手数料3,300円 + 工事費22,000円（キャンペーンで無料）"],
                  ["契約期間", "2年（自動更新）"],
                  ["提供エリア", "全国（フレッツ光提供エリア）"],
                  ["IPv6対応", "プロバイダにより対応"],
                  ["テレワーク適性", "高い（プロバイダ選び次第）"],
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
          <h2 className="text-2xl font-bold mb-6">ドコモ光がテレワークに強い理由</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "全国エリアカバー", desc: "フレッツ光回線を利用するため、全国ほぼどこでも利用可能。転勤や引っ越しがあっても継続利用できる安心感があります。" },
              { title: "プロバイダ選択の自由度", desc: "20社以上のプロバイダから選べるため、速度重視・サポート重視など自分の優先事項に合わせた選択が可能です。" },
              { title: "ドコモスマホ割の大きな節約効果", desc: "家族全員のドコモスマホが割引対象。4人家族なら年間52,800円の節約にもなり、回線料金を実質的に大幅に抑えられます。" },
              { title: "ドコモショップの対面サポート", desc: "全国のドコモショップで対面での契約・サポートが受けられます。ネット手続きが不安な方でも安心です。" },
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
                {["全国エリア対応で引っ越し先でも安心", "プロバイダを自由に選択可能", "ドコモスマホ割で家族全員お得", "IPv6対応プロバイダで高速化", "ドコモショップでの対面サポート"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-[#0891B2] font-bold mt-0.5">+</span>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">デメリット</h2>
              <ul className="space-y-3">
                {["プロバイダにより速度品質に差がある", "月額料金は他社と比べてやや高め", "フレッツ光回線のため混雑の影響あり", "ahamoはスマホ割の対象外"].map((c) => (
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
          <h2 className="text-2xl font-bold mb-6">ドコモ光に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">ドコモ光で安心のテレワーク環境を</h2>
          <p className="text-cyan-100 mb-8">全国対応とドコモスマホ割で、安定性とコスパを両立。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/review/biglobe/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">次: ビッグローブ光</Link>
          </div>
        </div>
      </section>
    </>
  );
}
