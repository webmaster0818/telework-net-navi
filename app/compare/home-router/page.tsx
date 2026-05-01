import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホームルーターでテレワークは可能？【光回線との比較】",
  description: "ホームルーター（WiMAX・ドコモhome 5G・ソフトバンクエアー）でテレワークは快適にできるのか。光回線と比較しながらメリット・デメリット・選び方を解説します。",
};

const routerComparison = [
  ["機種名", "Speed Wi-Fi HOME 5G L13", "home 5G HR02", "Airターミナル5"],
  ["提供元", "WiMAX（UQ）", "NTTドコモ", "ソフトバンク"],
  ["下り最大速度", "4.2Gbps", "4.2Gbps", "2.1Gbps"],
  ["実測下り速度", "80〜200Mbps", "150〜300Mbps", "50〜100Mbps"],
  ["上り最大速度", "286Mbps", "218Mbps", "非公開"],
  ["月額料金", "4,950円〜", "4,950円", "5,368円"],
  ["データ容量", "実質無制限", "無制限", "無制限"],
  ["契約期間", "2年（なしプランあり）", "なし", "2年"],
  ["スマホセット割", "au / UQ mobile", "ドコモ", "ソフトバンク / Y!mobile"],
  ["持ち運び", "可（登録住所のみ）", "不可（登録住所のみ）", "不可（登録住所のみ）"],
];

const faqs = [
  { question: "ホームルーターだけでテレワークは本当にできますか？", answer: "メール・チャット・資料作成といった基本業務は問題ありません。1対1のWeb会議も概ね快適です。ただし、10人以上の大規模会議や大容量ファイルの頻繁なアップロードには、速度や安定性が不足する場合があります。" },
  { question: "ホームルーターで一番テレワーク向きな機種は？", answer: "実測速度と安定性でドコモhome 5Gが最も評価が高いです。5Gエリア内なら下り200〜300Mbps程度の実測も報告されています。WiMAXはコスパ重視の方に、ソフトバンクエアーはソフトバンクユーザーにおすすめです。" },
  { question: "ホームルーターの速度が遅い場合の対処法は？", answer: "窓際の高い位置に設置する、5GHz帯のWi-Fiに接続する、有線LANアダプターで接続する、周囲の電波干渉を避ける（電子レンジから離す）、といった方法で改善が見込めます。" },
  { question: "ホームルーターと光回線、月額料金はどちらが安い？", answer: "月額料金だけ見るとほぼ同等（4,000〜5,500円）です。ただし光回線は工事費（実質無料キャンペーンあり）が必要で、ホームルーターは端末代（実質無料の場合あり）が必要です。総合コストはキャンペーン次第で変動します。" },
  { question: "テレワーク中にホームルーターの通信制限はかかりますか？", answer: "3社とも基本的にはデータ容量無制限ですが、短期間に大容量を使用すると一時的に速度制限がかかる場合があります。通常のテレワーク利用（1日8時間のWeb会議＋資料作業）であれば制限に達することは稀です。" },
  { question: "ホームルーターから光回線に乗り換えるタイミングは？", answer: "Web会議が頻繁に途切れる、上りの速度不足でファイル送信に時間がかかる、同居家族の利用で速度が低下する、といった症状が出たら光回線への乗り換えを検討すべきタイミングです。" },
];

export default function HomeRouterPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較", href: "/#comparison" }, { name: "ホームルーター比較" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">回線比較</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ホームルーターでテレワークは可能？</h1>
          <p className="text-cyan-100 leading-relaxed">工事不要で即日利用できるホームルーター。テレワーク用途での実力を光回線と比較しながら検証します。</p>
        </div>
      </section>

      {/* Pros/Cons */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワーク用途でのメリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0891B2] mb-4">メリット</h3>
              <ul className="space-y-3">
                {["工事不要。コンセントに挿すだけで即日開通", "初期費用が安い（端末実質無料の場合も）", "引っ越し時の移転手続きが簡単", "光回線が引けない物件でも利用可能", "5G対応エリアなら高速通信も期待できる"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#0891B2] font-bold mt-0.5">+</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">デメリット</h3>
              <ul className="space-y-3">
                {["上り速度が光回線より大幅に遅い", "電波環境により速度が大きく変動する", "有線接続が基本1ポートのみ", "大人数のWeb会議で不安定になりやすい", "登録住所以外では基本的に利用不可"].map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-orange-400 font-bold mt-0.5">-</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Router Comparison */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">主要ホームルーター3機種 比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="px-4 py-3 text-left font-medium">項目</th>
                  <th className="px-4 py-3 text-left font-medium">WiMAX</th>
                  <th className="px-4 py-3 text-left font-medium">ドコモhome 5G</th>
                  <th className="px-4 py-3 text-left font-medium">ソフトバンクエアー</th>
                </tr>
              </thead>
              <tbody>
                {routerComparison.slice(1).map(([item, wimax, docomo, sb]) => (
                  <tr key={item} className="border-b border-gray-100">
                    <th className="bg-[#F0F9FF] px-4 py-3 text-left font-medium text-gray-700 w-36">{item}</th>
                    <td className="px-4 py-3 text-gray-800">{wimax}</td>
                    <td className="px-4 py-3 text-gray-800">{docomo}</td>
                    <td className="px-4 py-3 text-gray-800">{sb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* vs Hikari */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ホームルーター vs 光回線 テレワーク適性比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="px-4 py-3 text-left font-medium">項目</th>
                  <th className="px-4 py-3 text-left font-medium">ホームルーター</th>
                  <th className="px-4 py-3 text-left font-medium">光回線</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Web会議（1対1）", "問題なし", "問題なし"],
                  ["Web会議（大人数）", "不安定になる場合あり", "安定"],
                  ["大容量アップロード", "時間がかかる", "高速"],
                  ["VPN接続", "可能だが遅延あり", "快適"],
                  ["クラウド開発", "やや厳しい", "快適"],
                  ["同時利用（家族）", "速度低下しやすい", "影響少ない"],
                ].map(([item, router, hikari]) => (
                  <tr key={item} className="border-b border-gray-100">
                    <th className="bg-[#F0F9FF] px-4 py-3 text-left font-medium text-gray-700 w-44">{item}</th>
                    <td className="px-4 py-3 text-gray-800">{router}</td>
                    <td className="px-4 py-3 text-gray-800">{hikari}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">結論：ホームルーターが向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-[#0891B2] mb-4">ホームルーターでOK</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>- Web会議は1日1〜2回、少人数中心</li>
                <li>- メール・チャット・資料作成がメイン</li>
                <li>- 光回線の工事ができない物件</li>
                <li>- 1〜2年の短期利用予定</li>
                <li>- すぐに回線が必要</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-orange-500 mb-4">光回線を推奨</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>- 大人数Web会議が頻繁にある</li>
                <li>- 大容量ファイルのアップロードが多い</li>
                <li>- VPN接続で社内システムにアクセス</li>
                <li>- 家族も同時にネットを利用</li>
                <li>- 動画編集やクラウド開発を行う</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ホームルーターとテレワーク よくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">あなたに合った回線を探す</h2>
          <p className="text-cyan-100 mb-8">光回線もホームルーターも、テレワークに最適な1台を見つけましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/compare/mansion/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">マンション回線比較</Link>
          </div>
        </div>
      </section>
    </>
  );
}
