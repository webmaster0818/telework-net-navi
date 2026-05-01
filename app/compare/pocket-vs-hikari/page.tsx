import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ポケットWi-Fi vs 光回線【テレワークにはどっち？】",
  description: "ポケットWi-Fiと光回線、テレワークにはどちらが最適？速度・安定性・料金・持ち運びなど在宅勤務で重要なポイントを比較し、あなたに合った選び方を解説します。",
};

const comparisonData = [
  ["最大下り速度", "2.7〜4.2Gbps（理論値）", "1〜2Gbps"],
  ["実測下り速度", "30〜100Mbps", "300〜800Mbps"],
  ["最大上り速度", "183Mbps程度", "1Gbps"],
  ["実測上り速度", "10〜30Mbps", "200〜500Mbps"],
  ["月額料金", "3,000〜5,000円", "4,000〜5,500円"],
  ["工事の有無", "不要", "必要"],
  ["持ち運び", "可能", "不可"],
  ["バッテリー", "8〜16時間", "なし（常時電源）"],
  ["同時接続台数", "10〜16台", "有線+Wi-Fiで多数"],
  ["データ容量", "実質無制限（制限あり機種も）", "完全無制限"],
  ["安定性", "場所・天候に影響される", "非常に高い"],
  ["遅延（Ping）", "30〜80ms", "5〜20ms"],
];

const faqs = [
  { question: "ポケットWi-Fiだけでテレワークできますか？", answer: "メール・チャット・資料作成など軽い作業は問題ありません。ただしWeb会議を長時間行ったり、大容量ファイルをアップロードする業務では速度不足や接続不安定を感じる可能性があります。光回線のサブ回線としての利用が安全です。" },
  { question: "テレワークでポケットWi-Fiを使う場合の注意点は？", answer: "バッテリー切れに注意が必要です。8時間のテレワーク中にバッテリーが持たない機種もあるため、充電しながらの使用を前提としてください。また、窓際に設置して電波を確保すること、データ容量制限に引っかからないよう使用量を管理することも重要です。" },
  { question: "ポケットWi-Fiと光回線の両方を持つのはアリですか？", answer: "テレワークの安定性を最大化するなら、光回線をメイン・ポケットWi-Fiをバックアップとする二重化は有効な戦略です。光回線の障害時やカフェでの作業にポケットWi-Fiが活躍します。コスト面が許容できれば最も安心です。" },
  { question: "ポケットWi-Fiでzoom会議はできますか？", answer: "1対1の会議なら概ね問題ありません。Zoomの推奨速度はグループ会議で上り3.8Mbps・下り3.0Mbpsですが、ポケットWi-Fiでも通常はクリアできます。ただし電波状況が悪い場所では映像が途切れる場合があります。" },
  { question: "コスパが良いのはどちらですか？", answer: "月額料金だけならポケットWi-Fiが安い傾向ですが、速度・安定性を含めた総合的なコスパでは光回線が上です。テレワークの生産性への影響を考えると、月数千円の差で回線品質が大幅に上がる光回線がコスパ良好と言えます。" },
  { question: "出張が多い場合、ポケットWi-Fiと光回線どちらを選ぶべき？", answer: "出張先やカフェでも仕事が必要ならポケットWi-Fiは必須です。自宅でのテレワークが週3日以上あるなら光回線も契約し、両方持つのがベストです。出張がメインで自宅作業が少ない方はポケットWi-Fi一本でも対応可能です。" },
];

export default function PocketVsHikariPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較", href: "/#comparison" }, { name: "ポケットWi-Fi vs 光回線" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">回線比較</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ポケットWi-Fi vs 光回線 テレワークにはどっち？</h1>
          <p className="text-cyan-100 leading-relaxed">持ち運べるポケットWi-Fiか、安定の光回線か。テレワーク視点で両者の強みと弱みを徹底比較します。</p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ポケットWi-Fi vs 光回線 スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="px-4 py-3 text-left font-medium">比較項目</th>
                  <th className="px-4 py-3 text-left font-medium">ポケットWi-Fi</th>
                  <th className="px-4 py-3 text-left font-medium">光回線</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map(([item, pocket, hikari]) => (
                  <tr key={item} className="border-b border-gray-100">
                    <th className="bg-[#F0F9FF] px-4 py-3 text-left font-medium text-gray-700 w-40">{item}</th>
                    <td className="px-4 py-3 text-gray-800">{pocket}</td>
                    <td className="px-4 py-3 text-gray-800">{hikari}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワークの業務内容別おすすめ</h2>
          <div className="space-y-4">
            {[
              { task: "メール・チャット・資料閲覧", pocket: "問題なし", hikari: "問題なし", recommend: "どちらでもOK" },
              { task: "Web会議（少人数）", pocket: "概ね快適", hikari: "快適", recommend: "どちらでもOK" },
              { task: "Web会議（大人数・長時間）", pocket: "不安定になる場合あり", hikari: "安定", recommend: "光回線" },
              { task: "大容量ファイル送信", pocket: "時間がかかる", hikari: "高速", recommend: "光回線" },
              { task: "VPN接続", pocket: "遅延が大きい", hikari: "快適", recommend: "光回線" },
              { task: "外出先での作業", pocket: "対応可能", hikari: "不可", recommend: "ポケットWi-Fi" },
            ].map((item) => (
              <div key={item.task} className="bg-white rounded-lg p-4 border border-gray-100 grid grid-cols-4 gap-4 items-center text-sm">
                <span className="font-medium text-gray-800">{item.task}</span>
                <span className="text-gray-600">{item.pocket}</span>
                <span className="text-gray-600">{item.hikari}</span>
                <span className="font-medium text-[#0891B2]">{item.recommend}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When Pocket WiFi Works */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ポケットWi-Fiでテレワークできるケース</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "出張・外出が多い営業職", desc: "カフェや出張先でもテレワークが必要な方には、持ち運べるポケットWi-Fiが不可欠です。フリーWi-Fiはセキュリティリスクが高いため、自前の回線を持つ意味があります。" },
              { title: "一人暮らしで軽作業中心", desc: "一人暮らしで同時接続が少なく、Web会議も1対1が中心なら、ポケットWi-Fiでも十分対応可能です。光回線の工事を避けたい方にも適しています。" },
              { title: "光回線開通までのつなぎ", desc: "光回線の工事待ち期間（2週間〜3ヶ月）にポケットWi-Fiをレンタルする方法は、テレワーク開始に間に合わせる現実的な策です。" },
              { title: "短期間の在宅勤務", desc: "数ヶ月限定のテレワーク予定なら、工事費や違約金のリスクがないポケットWi-Fiの短期契約が合理的です。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#F0F9FF] rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">結論：テレワークのメイン回線は光回線がベスト</h2>
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>テレワークのメイン回線としては、速度・安定性・上り速度すべてで光回線が圧倒的に有利です。Web会議の途切れやファイル送信の遅さは、業務効率と信頼に直結するため、可能な限り光回線を導入することをおすすめします。</p>
              <p>ポケットWi-Fiは「サブ回線」または「外出時の作業用」として活用するのが最適な位置づけです。光回線の障害時のバックアップとしても心強い存在です。</p>
              <p>光回線が引けない環境や短期間の利用に限り、ポケットWi-Fiをメイン回線とする選択もあり得ますが、その場合は5G対応の高性能モデルを選び、窓際設置と有線接続の工夫を行ってください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ポケットWi-Fi vs 光回線 よくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">テレワークに最適な回線を選ぼう</h2>
          <p className="text-cyan-100 mb-8">光回線ランキングで、あなたにぴったりの1社を見つけましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/compare/home-router/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">ホームルーター比較</Link>
          </div>
        </div>
      </section>
    </>
  );
}
