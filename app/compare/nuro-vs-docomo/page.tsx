import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "NURO光 vs ドコモ光【テレワーク向け徹底比較】",
  description: "NURO光とドコモ光をテレワーク視点で徹底比較。速度・安定性・料金・エリアなど在宅勤務に重要な項目を表で比較し、あなたに合った回線を提案します。",
};

const comparisonData = [
  ["最大下り速度", "2Gbps", "1Gbps"],
  ["最大上り速度", "1Gbps", "1Gbps"],
  ["月額料金（戸建て）", "5,200円", "5,720円"],
  ["月額料金（マンション）", "2,090〜2,750円", "4,400円"],
  ["回線種別", "独自回線（G-PON）", "NTTフレッツ光コラボ"],
  ["IPv6 IPoE", "対応（デュアルスタック）", "対応（v6プラス等）"],
  ["提供エリア", "限定（北海道・関東・東海・関西・中国・九州の一部）", "全国（NTT東西エリア）"],
  ["工事回数", "2回", "1回"],
  ["開通までの目安", "1〜3ヶ月", "2週間〜1ヶ月"],
  ["契約期間", "3年", "2年"],
  ["セキュリティソフト", "無料付帯", "なし（別途契約）"],
  ["スマホセット割", "ソフトバンク", "ドコモ"],
  ["テレワーク適性", "非常に高い", "高い"],
];

const faqs = [
  { question: "NURO光とドコモ光、テレワークにはどちらが良いですか？", answer: "回線速度と安定性を最優先するならNURO光が有利です。独自回線のため混雑時間帯でも速度が落ちにくく、下り2Gbpsの高速通信が可能です。一方、全国どこでも利用でき開通が早い点ではドコモ光に分があります。" },
  { question: "ドコモのスマホユーザーはドコモ光一択ですか？", answer: "ドコモのスマホセット割（最大月1,100円引き）は大きなメリットですが、NURO光のエリア内であれば回線品質の差も考慮すべきです。家族でドコモ回線が多い場合はドコモ光のコスパが高くなります。" },
  { question: "マンションではどちらがおすすめですか？", answer: "マンションの場合、NURO光 for マンション対応物件なら月額2,090円〜と非常に安く、速度も安定します。未対応物件ではドコモ光マンションタイプ（4,400円）のほうが導入しやすいです。" },
  { question: "開通工事はどのくらい違いますか？", answer: "ドコモ光はNTT回線を利用するため工事1回で済み、最短2週間程度で開通します。NURO光は宅内・屋外の2回工事が必要で、1〜3ヶ月かかる場合があります。テレワーク開始まで余裕がない場合はドコモ光が無難です。" },
  { question: "Web会議の安定性はどちらが上ですか？", answer: "実測値ベースではNURO光のほうが平均速度が高く、特に夜間の安定性で差が出ます。ただしドコモ光もIPv6 IPoE（v6プラス等）を利用すれば、テレワークに十分な速度が確保できます。" },
  { question: "途中で乗り換えは簡単にできますか？", answer: "どちらも契約期間内の解約には違約金が発生します。NURO光は3,850円、ドコモ光は5,500円です。工事費の残債がある場合は追加で請求されるため、契約前にしっかり比較検討することをおすすめします。" },
];

export default function NuroVsDocomoPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較", href: "/#comparison" }, { name: "NURO光 vs ドコモ光" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">回線比較</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">NURO光 vs ドコモ光 テレワーク向け徹底比較</h1>
          <p className="text-cyan-100 leading-relaxed">人気2大光回線をテレワーク視点で徹底比較。速度・安定性・料金・開通までの期間など、在宅勤務で重要なポイントを詳しく解説します。</p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="px-4 py-3 text-left font-medium">比較項目</th>
                  <th className="px-4 py-3 text-left font-medium">NURO光</th>
                  <th className="px-4 py-3 text-left font-medium">ドコモ光</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map(([item, nuro, docomo]) => (
                  <tr key={item} className="border-b border-gray-100">
                    <th className="bg-[#F0F9FF] px-4 py-3 text-left font-medium text-gray-700 w-44">{item}</th>
                    <td className="px-4 py-3 text-gray-800">{nuro}</td>
                    <td className="px-4 py-3 text-gray-800">{docomo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NURO Strengths */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">NURO光が向いている人</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "速度最優先のテレワーカー", desc: "大容量ファイルの送受信やクラウド開発など、常に高速通信が求められる職種の方。下り2Gbps・上り1Gbpsの圧倒的なスピードが武器になります。" },
              { title: "動画配信やデザイン業務が多い方", desc: "高画質の映像素材やデザインデータを日常的に扱う方は、上り速度の速さが作業効率に直結します。独自回線の安定性も大きなメリットです。" },
              { title: "ソフトバンクスマホユーザー", desc: "おうち割光セットで1台あたり最大1,100円割引。家族全員がソフトバンクなら、通信費全体で大幅な節約が可能です。" },
              { title: "開通まで待てる余裕がある方", desc: "2回の工事と1〜3ヶ月の期間が必要ですが、開通後は業界トップクラスの通信環境が手に入ります。計画的に準備できる方に最適です。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docomo Strengths */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ドコモ光が向いている人</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "すぐにテレワーク環境が必要な方", desc: "NTT回線を利用するため工事1回で完了。最短2週間で開通するため、急な在宅勤務命令にも対応できます。" },
              { title: "NURO光エリア外にお住まいの方", desc: "NTT東日本・西日本の回線を使うため、全国ほぼどこでも利用可能。地方在住のテレワーカーにとって有力な選択肢です。" },
              { title: "ドコモスマホユーザーの家庭", desc: "ドコモ光セット割で1台あたり最大1,100円引き。家族3人がドコモなら月3,300円、年間39,600円のスマホ代節約になります。" },
              { title: "プロバイダを自由に選びたい方", desc: "24社のプロバイダから選択可能。GMOとくとくBBなどIPv6 IPoE対応プロバイダを選べば、テレワークに十分な速度を確保できます。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">結論：テレワーク用途での選び方</h2>
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>テレワーク用途における選択は、<strong>提供エリア</strong>と<strong>開通までの期間</strong>が最大の分岐点です。</p>
              <p>NURO光のエリア内にお住まいで、開通まで1〜3ヶ月待てる方は、速度・安定性ともにNURO光が有利です。特にWeb会議と大容量データ転送を頻繁に行う方には、独自回線の安定性が大きなメリットとなります。</p>
              <p>一方、エリア外の方やすぐに開通したい方はドコモ光が現実的です。IPv6 IPoE対応プロバイダを選べば、テレワークに十分な品質を確保できます。ドコモスマホユーザーならセット割のコスパも見逃せません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">NURO光 vs ドコモ光 よくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">最適な回線を見つけよう</h2>
          <p className="text-cyan-100 mb-8">あなたのテレワーク環境に合った回線を、ランキングで比較してみましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/review/nuro/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">NURO光レビュー</Link>
            <Link href="/review/docomo/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">ドコモ光レビュー</Link>
          </div>
        </div>
      </section>
    </>
  );
}
