import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "NURO光の口コミ・評判 | テレワーク向け徹底レビュー",
  description: "NURO光はテレワークに最適？下り最大2Gbps・上り1Gbpsの実力を、Web会議安定性・速度実測・料金面から徹底レビュー。実際の在宅勤務ユーザーの口コミも掲載。",
};

const reviews = [
  { label: "テレワーク歴2年のユーザー", rating: 5, text: "Zoom会議が途切れることがなくなりました。以前使っていたフレッツ光では夜間に速度低下がありましたが、NURO光に変えてからは常に安定しています。大容量のデザインデータを送る際も、上り速度のおかげでストレスフリーです。" },
  { label: "フリーランスエンジニア", rating: 4, text: "開通までに2ヶ月かかったのがマイナスポイントですが、開通後の速度は文句なし。下り800Mbps、上り400Mbps程度は常に出ています。GitHub へのpush やDocker イメージの転送も快適です。" },
  { label: "営業職リモートワーカー", rating: 5, text: "Teams会議を1日5〜6回行いますが、映像も音声も全く問題ありません。家族がYouTubeを見ていても影響が出ないのが素晴らしい。セキュリティソフトが無料でついてくるのもテレワーカーには嬉しいです。" },
  { label: "テレワーク歴4年の管理職", rating: 4, text: "部下20人とのWeb会議でも安定しています。ただし提供エリアが限られているため、引っ越し先で使えないリスクがある点は要注意。エリア内なら間違いなくおすすめです。" },
];

const faqs = [
  { question: "NURO光の実測速度はどのくらい出ますか？", answer: "一般的な戸建てプランで、下り500〜900Mbps、上り300〜500Mbps程度の実測値が報告されています。時間帯による変動は少なめです。" },
  { question: "NURO光の提供エリアはどこですか？", answer: "北海道、関東、東海、関西、中国、九州の一部エリアで提供されています。公式サイトで住所検索による詳細なエリア確認が可能です。" },
  { question: "マンションでもNURO光は使えますか？", answer: "NURO光 for マンションが導入済みの物件、またはNURO光の戸建てプランを集合住宅に個別導入する方法があります。物件の管理会社への確認が必要です。" },
  { question: "開通工事は何回必要ですか？", answer: "宅内工事と屋外工事の計2回が必要です。同日工事オプション（有料）を利用すると1日で完了する場合もあります。" },
  { question: "テレワークでNURO光を使うメリットは？", answer: "下り2Gbps・上り1Gbpsの高速回線で、Web会議の高画質配信やクラウドストレージへの大容量アップロードが快適です。独自回線のため混雑の影響も受けにくいです。" },
  { question: "解約時の違約金はありますか？", answer: "3年契約の場合、更新月以外の解約で3,850円の違約金が発生します。工事費残債がある場合はその分も請求されます。" },
];

export default function NuroReviewPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "NURO光" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">光回線レビュー</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">NURO光 テレワーク向け徹底レビュー</h1>
          <p className="text-cyan-100 leading-relaxed">下り最大2Gbps・上り最大1Gbps。ソニーグループが運営する高速光回線のテレワーク適性を検証。</p>
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
                  ["回線名", "NURO光（ニューロ光）"],
                  ["運営会社", "ソニーネットワークコミュニケーションズ"],
                  ["下り最大速度", "2Gbps"],
                  ["上り最大速度", "1Gbps"],
                  ["月額料金（戸建て）", "5,200円"],
                  ["月額料金（マンション）", "2,090〜2,750円"],
                  ["初期費用", "事務手数料3,300円 + 工事費44,000円（実質無料）"],
                  ["契約期間", "3年（自動更新）"],
                  ["提供エリア", "北海道・関東・東海・関西・中国・九州（一部）"],
                  ["IPv6対応", "対応（デュアルスタック）"],
                  ["テレワーク適性", "非常に高い"],
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
          <h2 className="text-2xl font-bold mb-6">NURO光がテレワークに強い理由</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "業界最速クラスの回線速度", desc: "下り最大2Gbps・上り最大1Gbpsは光回線の中でもトップクラス。高画質のWeb会議や大容量ファイルの送受信を同時にこなせます。" },
              { title: "独自回線で混雑に強い", desc: "NTTフレッツ光とは異なる独自のG-PON技術を採用。利用者が集中する時間帯でも速度が落ちにくく、安定したテレワーク環境を実現します。" },
              { title: "Wi-Fiルーター内蔵ONU", desc: "高性能Wi-Fiルーターが一体型ONUとして提供されるため、別途ルーターを購入する必要がありません。設定も簡単です。" },
              { title: "セキュリティソフト無料", desc: "カスペルスキーのセキュリティソフトが無料で利用可能。テレワーク時の情報セキュリティ対策にも配慮されています。" },
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
                {["下り2Gbps・上り1Gbpsの圧倒的速度", "独自回線で夜間も速度安定", "Wi-Fiルーター内蔵で追加費用なし", "セキュリティソフト無料付帯", "工事費実質無料キャンペーンあり"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#0891B2] font-bold mt-0.5">+</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">デメリット</h2>
              <ul className="space-y-3">
                {["提供エリアが限定的（全国対応ではない）", "開通まで1〜3ヶ月かかる場合がある", "工事が2回必要で立ち会いが必要", "マンションタイプは導入条件あり"].map((c) => (
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
          <h2 className="text-2xl font-bold mb-6">NURO光に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">NURO光でテレワーク環境を快適に</h2>
          <p className="text-cyan-100 mb-8">業界最速クラスの回線速度で、Web会議もファイル送信もストレスフリー。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/review/au-hikari/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">次: auひかり</Link>
          </div>
        </div>
      </section>
    </>
  );
}
