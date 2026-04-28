import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "テレワークに必要な通信速度は？【用途別の目安】",
  description: "テレワークに必要な通信速度を用途別に解説。Zoom・Teams・Google Meetなどのビデオ会議、ファイル送受信、クラウドサービスごとの推奨速度と、自宅回線の選び方を紹介。",
};

const faqs = [
  { question: "テレワークには何Mbps必要ですか？", answer: "基本的なテレワーク（メール・チャット・Web閲覧）なら下り10Mbps・上り5Mbpsで十分です。ビデオ会議を頻繁に行う場合は下り30Mbps・上り10Mbps以上、大容量ファイルのやり取りが多い場合は下り100Mbps・上り30Mbps以上を推奨します。" },
  { question: "Zoom会議に必要な速度はどのくらいですか？", answer: "1対1の通話なら上下1.5Mbps、グループ通話（ギャラリービュー）なら下り4Mbps・上り3Mbpsが推奨です。画面共有を伴う場合はさらに余裕が必要で、上下5Mbps以上が目安です。" },
  { question: "光回線とモバイル回線、テレワークにはどちらが良いですか？", answer: "光回線を強くおすすめします。モバイル回線は通信量制限があり、ビデオ会議を1日数回行うと月間50GB以上消費することがあります。また、光回線の方が上り速度が安定しており、長時間のテレワークに適しています。" },
  { question: "回線速度が足りているか確認する方法は？", answer: "fast.com（Netflix提供）やSpeedtest by Ooklaで下り・上りの実測速度を計測できます。テレワーク中の時間帯（10時、13時、15時など）に複数回計測し、平均値がビデオ会議の推奨速度を上回っているか確認しましょう。" },
  { question: "家族と同居している場合、必要な速度は増えますか？", answer: "はい、増えます。テレワーク中に家族がYouTubeやNetflixを視聴する場合、その分の帯域（動画1本あたり下り5〜25Mbps）が追加で必要です。家族3〜4人が同時利用する場合、下り100Mbps以上の実測速度が出る回線を選びましょう。" },
  { question: "速度が足りない場合はどうすればいいですか？", answer: "まずIPv6 IPoE接続への変更を検討してください（無料〜月額数百円）。それでも不十分な場合は、NURO光やauひかりなど独自回線への乗り換えが効果的です。有線LAN接続やルーターの買い替えでも改善する場合があります。" },
];

export default function RequiredSpeedPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "知識" }, { name: "テレワークに必要な通信速度" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-blue-200 text-sm font-medium mb-2">テレワーク知識</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">テレワークに必要な通信速度は？</h1>
          <p className="text-blue-100 leading-relaxed">用途別の速度目安と、自宅回線が十分かどうかの判断基準を解説します。</p>
        </div>
      </section>

      {/* Speed Requirements Table */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">用途別の必要通信速度一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="px-4 py-3 text-left">用途</th>
                  <th className="px-4 py-3 text-left">下り速度</th>
                  <th className="px-4 py-3 text-left">上り速度</th>
                  <th className="px-4 py-3 text-left">重要度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["メール・ビジネスチャット", "1〜5Mbps", "1〜3Mbps", "低"],
                  ["Web閲覧・SaaS利用", "5〜10Mbps", "1〜5Mbps", "低"],
                  ["VoIP音声通話", "0.5〜1Mbps", "0.5〜1Mbps", "中"],
                  ["ビデオ会議（1対1）", "1.5〜3Mbps", "1.5〜3Mbps", "高"],
                  ["ビデオ会議（グループ）", "4〜8Mbps", "3〜5Mbps", "高"],
                  ["画面共有", "2〜5Mbps", "2〜5Mbps", "高"],
                  ["クラウドストレージ同期", "10〜30Mbps", "10〜30Mbps", "中"],
                  ["大容量ファイル送受信", "30Mbps以上", "30Mbps以上", "中"],
                  ["リモートデスクトップ", "5〜15Mbps", "3〜10Mbps", "高"],
                  ["動画編集・デザイン作業", "50Mbps以上", "30Mbps以上", "高"],
                ].map(([use, down, up, importance]) => (
                  <tr key={use} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{use}</td>
                    <td className="px-4 py-3 text-gray-600">{down}</td>
                    <td className="px-4 py-3 text-gray-600">{up}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${importance === "高" ? "bg-red-100 text-red-700" : importance === "中" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{importance}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* User Type Recommendations */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワークタイプ別の推奨回線速度</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "ライトユーザー", desc: "メール・チャット中心。ビデオ会議は週に数回程度。", speed: "下り30Mbps / 上り10Mbps", rec: "フレッツ光コラボ（v6プラス付き）で十分" },
              { type: "スタンダードユーザー", desc: "毎日のビデオ会議、クラウドでの共同作業が中心。", speed: "下り100Mbps / 上り30Mbps", rec: "光コラボ（v6プラス）またはauひかりがおすすめ" },
              { type: "ヘビーユーザー", desc: "大容量ファイル送受信、動画編集、複数デバイス同時利用。", speed: "下り300Mbps以上 / 上り100Mbps以上", rec: "NURO光またはauひかりを推奨" },
            ].map((item) => (
              <div key={item.type} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#1E3A5F] mb-2 text-lg">{item.type}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-blue-50 rounded p-3 mb-3">
                  <p className="text-xs font-medium text-blue-800">推奨速度</p>
                  <p className="text-sm font-bold text-blue-900">{item.speed}</p>
                </div>
                <p className="text-xs text-gray-500">{item.rec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Measure */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">自宅の通信速度を計測する方法</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "計測ツールにアクセス", desc: "fast.com（Netflix提供）またはspeedtest.net にアクセスします。ブラウザだけで計測可能で、アプリのインストールは不要です。" },
              { step: "2", title: "テレワーク中の時間帯に計測", desc: "朝（9時頃）、昼（12時頃）、午後（15時頃）、夕方（18時頃）の4回計測しましょう。時間帯による速度変動を把握できます。" },
              { step: "3", title: "下り・上りの両方を確認", desc: "fast.comの場合、「詳細を表示」をクリックすると上り速度やレイテンシ（遅延）も確認できます。テレワークでは上り速度も重要です。" },
              { step: "4", title: "結果を上記の目安と比較", desc: "計測結果が推奨速度を下回っている場合は、IPv6 IPoE接続への変更やルーターの見直し、回線の乗り換えを検討しましょう。" },
            ].map((item) => (
              <div key={item.step} className="bg-[#F0F9FF] rounded-lg p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                  <span className="bg-[#3B82F6] text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">{item.step}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ping/Latency */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">速度だけではない：レイテンシ（遅延）の重要性</h2>
          <p className="text-gray-600 leading-relaxed mb-6">通信速度（Mbps）だけでなく、レイテンシ（Ping値）もテレワークの快適さに大きく影響します。レイテンシが高いとWeb会議で音声の遅延が発生したり、リモートデスクトップの操作がもたつきます。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden bg-white">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="px-4 py-3 text-left">レイテンシ</th>
                  <th className="px-4 py-3 text-left">評価</th>
                  <th className="px-4 py-3 text-left">テレワークへの影響</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["20ms以下", "非常に良好", "全てのテレワーク用途で快適"],
                  ["20〜50ms", "良好", "ビデオ会議も問題なし"],
                  ["50〜100ms", "普通", "ビデオ会議でわずかな遅延を感じる場合あり"],
                  ["100ms以上", "要改善", "音声の遅延やリモートデスクトップのもたつきが発生"],
                ].map(([latency, rating, impact]) => (
                  <tr key={latency} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{latency}</td>
                    <td className="px-4 py-3 text-gray-600">{rating}</td>
                    <td className="px-4 py-3 text-gray-600">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワークの通信速度に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">速度が足りないなら回線の見直しを</h2>
          <p className="text-cyan-100 mb-8">テレワークに最適な回線をランキングで比較できます。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">回線ランキングを見る</Link>
            <Link href="/trouble/zoom-slow/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">関連: Zoom会議が重い対策</Link>
          </div>
        </div>
      </section>
    </>
  );
}
