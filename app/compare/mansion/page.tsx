import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "マンションのテレワーク回線おすすめ【光回線 vs ホームルーター】",
  description: "マンション在住のテレワーカー向け回線ガイド。光回線マンションタイプとホームルーターの速度・安定性・導入のしやすさを比較し、最適な選択肢を提案します。",
};

const comparisonData = [
  ["最大下り速度", "100Mbps〜1Gbps", "2.7〜4.2Gbps（理論値）"],
  ["実測下り速度", "200〜600Mbps", "50〜200Mbps"],
  ["最大上り速度", "100Mbps〜1Gbps", "183Mbps前後"],
  ["月額料金", "3,300〜5,500円", "4,000〜5,400円"],
  ["工事の有無", "必要（管理会社の許可も必要）", "不要"],
  ["開通までの期間", "2週間〜2ヶ月", "最短翌日"],
  ["安定性", "非常に高い", "環境に左右される"],
  ["同時接続", "有線+Wi-Fiで多数対応", "Wi-Fiのみ、10〜40台程度"],
  ["持ち運び", "不可", "一部機種は可能"],
  ["契約の制約", "2〜3年縛りが多い", "2〜3年（一部縛りなし）"],
];

const faqs = [
  { question: "マンションでテレワークするなら光回線とホームルーターどちらが良いですか？", answer: "安定性を重視するなら光回線をおすすめします。光回線は有線接続が可能で、Web会議中の接続切れや速度低下が起きにくいです。ただし工事が難しい物件や短期間の利用ならホームルーターも選択肢になります。" },
  { question: "マンションで光回線の工事ができない場合はどうすればよいですか？", answer: "管理会社に工事許可が下りない場合は、ホームルーター（WiMAX・ドコモhome 5G・ソフトバンクエアー等）が有力な代替手段です。コンセントに挿すだけで利用開始でき、工事不要です。" },
  { question: "マンションタイプの光回線が遅いのはなぜですか？", answer: "マンションタイプは建物内の配線方式（VDSL・LAN・光配線）によって速度が異なります。VDSL方式では最大100Mbpsに制限されます。光配線方式の物件であれば最大1Gbpsの速度が期待できます。" },
  { question: "ホームルーターでZoom会議は問題なくできますか？", answer: "通常の1対1のZoom会議であれば問題ないケースが多いです。ただし、参加者が多い会議や画面共有を頻繁に行う場合は、速度不足や遅延が発生する可能性があります。5G対応ルーターを窓際に設置すると改善しやすいです。" },
  { question: "マンションで一番安いテレワーク向け回線は？", answer: "NURO光 for マンション対応物件なら月額2,090円〜と最安クラスです。未対応の場合はドコモ光マンションタイプ（4,400円）やホームルーター（4,000円台〜）が候補になります。" },
  { question: "賃貸マンションを退去する際、回線の撤去工事は必要ですか？", answer: "光回線の場合、管理会社から撤去を求められることがあります。撤去費用は無料〜16,500円程度です。ホームルーターは工事不要のため、返却するだけで完了します。引っ越しが多い方はホームルーターが手軽です。" },
];

export default function MansionComparePage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較", href: "/#comparison" }, { name: "マンションの回線比較" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">回線比較</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">マンションのテレワーク回線おすすめ</h1>
          <p className="text-cyan-100 leading-relaxed">マンション在住テレワーカーのための回線選びガイド。光回線マンションタイプとホームルーターを徹底比較します。</p>
        </div>
      </section>

      {/* Why Important */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">マンションのテレワーク回線選びが難しい理由</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "建物の配線方式に依存", desc: "マンションの光回線は建物の配線方式（光配線・LAN・VDSL）で速度上限が決まります。自分では変更できないため、事前確認が重要です。" },
              { title: "管理会社の許可が必要", desc: "光回線の新規導入には管理会社や大家の許可が必要です。工事NGの物件では光回線自体が使えない場合もあります。" },
              { title: "共有回線の混雑", desc: "マンションタイプは建物内で回線を共有するため、住人が多い物件や夜間帯は速度低下が起きやすくなります。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#F0F9FF] rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">光回線 vs ホームルーター 比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="px-4 py-3 text-left font-medium">比較項目</th>
                  <th className="px-4 py-3 text-left font-medium">光回線（マンションタイプ）</th>
                  <th className="px-4 py-3 text-left font-medium">ホームルーター</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map(([item, hikari, router]) => (
                  <tr key={item} className="border-b border-gray-100">
                    <th className="bg-[#F0F9FF] px-4 py-3 text-left font-medium text-gray-700 w-40">{item}</th>
                    <td className="px-4 py-3 text-gray-800">{hikari}</td>
                    <td className="px-4 py-3 text-gray-800">{router}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommended by Situation */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">状況別おすすめ回線</h2>
          <div className="space-y-6">
            {[
              { situation: "光配線方式のマンションにお住まい", recommend: "光回線（NURO光 for マンション / ドコモ光マンションタイプ）", reason: "最大1Gbpsの高速通信が可能。有線接続でWeb会議も安定。テレワークに最も適した環境です。" },
              { situation: "VDSL方式のマンションにお住まい", recommend: "ホームルーター（ドコモhome 5G）の検討も価値あり", reason: "VDSL方式は最大100Mbpsに制限されます。5G対応ホームルーターのほうが高速な場合があるため、エリアと実測値を比較してください。" },
              { situation: "工事不可のマンション", recommend: "ホームルーター（WiMAX / ドコモhome 5G）", reason: "コンセントに挿すだけで開通。5G対応エリアなら下り100〜200Mbps程度の実測も期待できます。" },
              { situation: "短期間（1年以内）の利用", recommend: "縛りなしプランのホームルーター", reason: "光回線の工事費を考えると、短期間なら縛りなしプランのホームルーターが費用面で有利です。" },
            ].map((item) => (
              <div key={item.situation} className="bg-[#F0F9FF] rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.situation}</h3>
                <p className="text-sm text-gray-800 font-medium mb-1">おすすめ: {item.recommend}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">マンションでテレワーク回線を快適にするコツ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "有線LAN接続を優先する", desc: "Wi-Fiは壁や家具の影響で不安定になりやすいため、テレワーク用PCは可能な限りLANケーブルで直接接続しましょう。CAT6以上のケーブルを推奨します。" },
              { title: "ルーターの設置場所を最適化", desc: "ホームルーターは窓際の高い位置に設置すると電波を受信しやすくなります。金属棚や電子レンジの近くは避けてください。" },
              { title: "建物の配線方式を事前確認", desc: "入居前にマンションの配線方式（光配線・LAN・VDSL）を管理会社に確認しましょう。光配線方式なら高速通信が期待できます。" },
              { title: "IPv6 IPoE対応を確認", desc: "光回線を選ぶ際はIPv6 IPoE対応のプロバイダを選びましょう。従来のPPPoE方式より混雑に強く、テレワーク時間帯も安定します。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">マンションのテレワーク回線 よくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">マンションでも快適テレワークを実現</h2>
          <p className="text-cyan-100 mb-8">あなたのマンションに最適な回線を見つけましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/compare/home-router/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">ホームルーター比較</Link>
          </div>
        </div>
      </section>
    </>
  );
}
