import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "So-net光の口コミ・評判 | テレワーク向け速度と評判",
  description: "So-net光はテレワークに使える？v6プラス対応・月額4,928円からのソニーグループ回線を、Web会議安定性・速度実測・セキュリティ面から徹底レビュー。",
};

const reviews = [
  { label: "テレワーク歴3年のデザイナー", rating: 4, text: "v6プラスに切り替えてから夜間の速度低下がほぼなくなりました。Figmaの共同編集もスムーズで、大きなデザインデータのアップロードも問題ありません。NUROほどの爆速ではないですが、十分快適です。" },
  { label: "IT企業の在宅エンジニア", rating: 4, text: "フレッツ光コラボなので提供エリアが広いのが決め手でした。v6プラス接続なら下り300〜500Mbps程度は安定して出ます。セキュリティソフトが無料なのもテレワーカーには助かります。" },
  { label: "カスタマーサポート在宅勤務", rating: 3, text: "基本的には安定していますが、ごくまれにv6プラスでも混雑する時間帯があります。ただしZoom通話が途切れるほどではないので、業務には支障ありません。料金も手頃で満足しています。" },
  { label: "フリーランスライター", rating: 5, text: "以前の回線からSo-net光に乗り換えて正解でした。Google Meetでのクライアント打ち合わせが安定し、クラウドストレージへの原稿アップロードも快適。カスペルスキーが無料でついてくるのも安心感があります。" },
];

const faqs = [
  { question: "So-net光の実測速度はどのくらいですか？", answer: "v6プラス接続時で下り300〜500Mbps、上り200〜350Mbps程度が一般的な実測値です。従来のPPPoE接続と比べて大幅に改善されます。" },
  { question: "So-net光とNURO光の違いは何ですか？", answer: "どちらもソニーグループですが、NURO光は独自回線で最大2Gbps、So-net光はNTTフレッツ光コラボで最大1Gbpsです。So-net光の方が提供エリアが広く、NUROが使えない地域でも利用できます。" },
  { question: "v6プラスとは何ですか？", answer: "IPv6 IPoE接続を利用してIPv4通信も高速化する技術です。従来のPPPoE方式のボトルネックを回避でき、夜間や休日でも速度低下しにくくなります。" },
  { question: "セキュリティソフトは本当に無料ですか？", answer: "So-net光プラスではカスペルスキーのセキュリティソフトが最大7台まで無料で利用可能です。追加費用なくパソコンやスマートフォンを保護できます。" },
  { question: "So-net光の工事費はかかりますか？", answer: "新規申込の場合、工事費26,400円が発生しますが、キャンペーンにより実質無料になることが多いです。転用・事業者変更の場合は工事不要です。" },
  { question: "So-net光の解約違約金はいくらですか？", answer: "2年契約プランの場合、更新月以外の解約で3,480円の違約金が発生します。工事費の残債がある場合は別途請求されます。" },
];

export default function SonetReviewPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "So-net光" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">光回線レビュー</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">So-net光 テレワーク向け速度と評判</h1>
          <p className="text-cyan-100 leading-relaxed">NUROと同じソニーグループが運営。v6プラス対応でテレワークに必要な安定性を確保できるか検証。</p>
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
                  ["回線名", "So-net光プラス"],
                  ["運営会社", "ソニーネットワークコミュニケーションズ"],
                  ["回線種別", "NTTフレッツ光コラボ"],
                  ["下り最大速度", "1Gbps"],
                  ["上り最大速度", "1Gbps"],
                  ["月額料金（戸建て）", "4,928円"],
                  ["月額料金（マンション）", "3,828円"],
                  ["初期費用", "事務手数料3,500円 + 工事費26,400円（実質無料）"],
                  ["契約期間", "2年（自動更新）"],
                  ["提供エリア", "全国（NTTフレッツ光提供エリア）"],
                  ["IPv6対応", "v6プラス対応"],
                  ["セキュリティ", "カスペルスキー無料（最大7台）"],
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

      {/* Strengths */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">So-net光がテレワークに適している理由</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "v6プラスで混雑回避", desc: "IPv6 IPoE接続により、従来のPPPoE方式で発生していた夜間の速度低下を大幅に軽減。テレワーク中のWeb会議も安定して利用できます。" },
              { title: "全国対応の広いエリア", desc: "NTTフレッツ光コラボのため、NURO光が提供されていない地域でもSo-net光なら利用可能。全国転勤のある方にも安心です。" },
              { title: "セキュリティソフト無料", desc: "カスペルスキーが最大7台まで無料。在宅勤務で使用するPC・スマートフォンのセキュリティ対策が追加費用なしで完了します。" },
              { title: "ソニーグループの信頼性", desc: "NURO光と同じソニーネットワークコミュニケーションズが運営。長年のISP実績があり、サポート体制も充実しています。" },
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
                {["v6プラス対応で夜間も速度安定", "全国エリア対応で引越しにも強い", "セキュリティソフト最大7台無料", "月額4,928円の手頃な料金設定", "NUROが使えない地域の代替に最適"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#0891B2] font-bold mt-0.5">+</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">デメリット</h2>
              <ul className="space-y-3">
                {["NURO光ほどの最大速度は出ない", "光コラボのため独自回線より混雑しやすい", "v6プラス非対応ルーターでは効果なし", "2年縛りあり（更新月以外は違約金）"].map((c) => (
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
          <h2 className="text-2xl font-bold mb-6">So-net光に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">So-net光でテレワーク環境を整えよう</h2>
          <p className="text-cyan-100 mb-8">全国対応・v6プラス・セキュリティ無料。バランスの取れた光回線です。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/review/en-hikari/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">次: enひかり</Link>
          </div>
        </div>
      </section>
    </>
  );
}
