import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "楽天ひかりの口コミ・評判 | 楽天経済圏ユーザーのテレワーク回線",
  description: "楽天ひかりはテレワークに使える？IPv6クロスパス対応・楽天ポイント還元・月額5,280円の実力を、速度実測・口コミ・料金面から徹底レビュー。",
};

const reviews = [
  { label: "楽天経済圏ユーザーのテレワーカー", rating: 4, text: "楽天市場のSPUが上がるのが最大のメリットです。テレワーク用回線としても、クロスパス接続なら下り300Mbps程度は安定して出るので問題ありません。楽天モバイルとセットで通信費全体を抑えられています。" },
  { label: "在宅勤務のマーケター", rating: 4, text: "Google Meetでのクライアント会議も安定しています。楽天ポイントが貯まるので、実質的な月額コストは他社より安いと感じます。IPv6対応ルーターは自分で用意する必要がありますが、一度設定すれば快適です。" },
  { label: "テレワーク歴1年の営業", rating: 3, text: "速度は可もなく不可もなくという印象。Teams会議は問題ないですが、大容量ファイルのアップロードは少し時間がかかります。楽天ポイント目当てで選んだので、その点は満足しています。" },
  { label: "フリーランスの動画編集者", rating: 3, text: "動画素材のアップロードにはもう少し上り速度が欲しいところ。ただ楽天モバイルとのセットで月額が実質安くなるのは魅力です。テレワークで軽作業メインの方にはおすすめできます。" },
];

const faqs = [
  { question: "楽天ひかりの月額料金はいくらですか？", answer: "戸建てタイプで月額5,280円、マンションタイプで月額4,180円です。楽天モバイルとセットで利用すると割引が適用される場合があります。" },
  { question: "楽天ひかりのIPv6対応状況は？", answer: "楽天ひかりはIPv6のクロスパス方式に対応しています。クロスパス対応のルーターを使用することで、混雑時間帯でも安定した速度を維持できます。" },
  { question: "楽天ポイントはどのくらい還元されますか？", answer: "楽天ひかりの利用料金に対して楽天ポイントが付与されます。また楽天市場でのSPU（スーパーポイントアッププログラム）の倍率が上がり、楽天市場での買い物がよりお得になります。" },
  { question: "楽天モバイルとのセット割はありますか？", answer: "楽天モバイルと楽天ひかりをセットで利用すると、楽天ひかりの月額料金が割引になるキャンペーンが実施されることがあります。最新の条件は公式サイトで確認してください。" },
  { question: "楽天ひかりの通信速度はどのくらいですか？", answer: "クロスパス接続時で下り250〜400Mbps、上り150〜300Mbps程度が一般的な実測値です。Web会議やクラウド作業には十分な速度です。" },
  { question: "楽天ひかりの解約違約金はありますか？", answer: "2年または3年の契約期間があり、更新月以外の解約では違約金が発生します。金額はプランにより異なりますので、契約前に確認することをおすすめします。" },
];

export default function RakutenReviewPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "楽天ひかり" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">光回線レビュー</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">楽天ひかり 楽天経済圏ユーザーのテレワーク回線</h1>
          <p className="text-cyan-100 leading-relaxed">楽天ポイント還元とIPv6クロスパス対応。楽天経済圏のテレワーカーに最適な光回線を検証。</p>
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
                  ["回線名", "楽天ひかり"],
                  ["運営会社", "楽天モバイル株式会社"],
                  ["回線種別", "NTTフレッツ光コラボ"],
                  ["下り最大速度", "1Gbps"],
                  ["上り最大速度", "1Gbps"],
                  ["月額料金（戸建て）", "5,280円"],
                  ["月額料金（マンション）", "4,180円"],
                  ["初期費用", "事務手数料1,980円 + 工事費19,800円（キャンペーンあり）"],
                  ["契約期間", "2年または3年"],
                  ["提供エリア", "全国（NTTフレッツ光提供エリア）"],
                  ["IPv6対応", "クロスパス対応"],
                  ["ポイント還元", "楽天ポイント付与・SPU対象"],
                  ["テレワーク適性", "中〜高（楽天ユーザーに最適）"],
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
          <h2 className="text-2xl font-bold mb-6">楽天ひかりがテレワーカーに選ばれる理由</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "楽天ポイント還元で実質お得", desc: "毎月の利用料金に楽天ポイントが付与され、楽天市場でのSPU倍率もアップ。楽天経済圏で生活するテレワーカーなら実質コストを大幅に下げられます。" },
              { title: "IPv6クロスパス対応", desc: "IPv6 IPoEのクロスパス方式に対応。対応ルーターを使えば混雑する時間帯でも安定した通信が可能で、テレワーク中のWeb会議も快適です。" },
              { title: "楽天モバイルとの連携", desc: "楽天モバイルとセットで利用すると割引が適用されるキャンペーンが頻繁に実施。スマートフォンと光回線をまとめて楽天に統一できます。" },
              { title: "全国対応の広いエリア", desc: "NTTフレッツ光コラボのため全国のフレッツ光提供エリアで利用可能。転勤や引越しが多い方にも安心の回線です。" },
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
                {["楽天ポイント還元で実質コスト削減", "IPv6クロスパスで安定した速度", "楽天モバイルとのセット割あり", "全国エリア対応", "楽天市場SPU倍率アップ"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#0891B2] font-bold mt-0.5">+</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">デメリット</h2>
              <ul className="space-y-3">
                {["月額料金自体は平均的な水準", "クロスパス対応ルーターが必要（別途購入）", "楽天経済圏以外のユーザーにはメリットが薄い", "契約期間の縛りあり"].map((c) => (
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
          <h2 className="text-2xl font-bold mb-6">楽天ひかりに関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">楽天ひかりで賢くテレワーク</h2>
          <p className="text-cyan-100 mb-8">楽天ポイント還元でお得に、IPv6で快適に。楽天経済圏ユーザーの最適解。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/knowledge/required-speed/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">関連: 必要な通信速度は？</Link>
          </div>
        </div>
      </section>
    </>
  );
}
