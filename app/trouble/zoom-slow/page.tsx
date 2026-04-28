import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Zoom会議が重い・固まる原因と対策【回線別解決法】",
  description: "テレワーク中のZoom会議が重い・固まる・途切れる原因を徹底解説。回線速度・Wi-Fi環境・PC設定など原因別の具体的な対策方法を紹介。",
};

const faqs = [
  { question: "Zoomに必要な通信速度はどのくらいですか？", answer: "1対1の通話なら上下1.5Mbps、グループ通話（ギャラリービュー）なら上り3Mbps・下り4Mbps程度が推奨されています。画面共有を伴う場合はさらに上り速度に余裕が必要です。" },
  { question: "Wi-Fiと有線LANではどちらが安定しますか？", answer: "有線LAN接続の方が圧倒的に安定します。Wi-Fiは電波干渉や距離による速度低下が発生しやすく、Zoomの映像が固まる原因になります。テレワークでは可能な限り有線接続を推奨します。" },
  { question: "Zoomの「接続が不安定です」の表示を消すには？", answer: "まずスピードテストで回線速度を確認し、下り10Mbps以上あるか確認してください。速度が十分なら、Wi-Fiの電波環境やルーターの位置を見直しましょう。それでも改善しない場合は有線LAN接続を試してください。" },
  { question: "バーチャル背景をオフにすると改善しますか？", answer: "はい、改善する場合があります。バーチャル背景はCPU負荷が高く、特にスペックの低いPCでは映像処理が追いつかず、Zoomが重くなる原因になります。グリーンスクリーンなしのバーチャル背景は特に負荷が大きいです。" },
  { question: "回線を変えずにZoomを安定させる方法は？", answer: "有線LAN接続への切り替え、Zoomの画質設定を720pに下げる、バーチャル背景をオフにする、不要なアプリを閉じる、ルーターの再起動といった対策を順番に試してください。" },
  { question: "光回線なのにZoomが重い場合の原因は？", answer: "光回線でもPPPoE接続の場合はプロバイダの混雑で速度低下が起きます。IPv6 IPoE（v6プラスやクロスパスなど）に切り替えることで改善するケースが多いです。また、ルーターの性能不足やWi-Fiの電波環境も確認してください。" },
];

export default function ZoomSlowPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "トラブル対策" }, { name: "Zoom会議が重い・固まる" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#7C2D12] to-[#EA580C] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-200 text-sm font-medium mb-2">トラブルシューティング</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Zoom会議が重い・固まる原因と対策</h1>
          <p className="text-orange-100 leading-relaxed">テレワーク中のZoomトラブルを回線・Wi-Fi・PC設定の3つの観点から解決。回線別の具体的な改善策を紹介します。</p>
        </div>
      </section>

      {/* Causes */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Zoomが重くなる主な原因</h2>
          <div className="space-y-6">
            {[
              { num: "1", title: "回線速度の不足", desc: "光回線でもPPPoE接続の場合、プロバイダの網終端装置が混雑すると実効速度が大幅に低下します。特に昼休みや夕方以降は利用者が増え、Zoomの映像や音声が途切れる原因になります。IPv6 IPoE接続への切り替えで解消できるケースが多いです。" },
              { num: "2", title: "Wi-Fi環境の問題", desc: "ルーターとの距離が遠い、壁や床を挟んでいる、電子レンジなどの電波干渉がある場合、Wi-Fi接続が不安定になります。特に2.4GHz帯は干渉を受けやすく、5GHz帯への切り替えや有線LAN接続が有効です。" },
              { num: "3", title: "PCのスペック不足", desc: "CPUやメモリの性能が低い場合、Zoomの映像処理が追いつかず、映像が固まったり音声が途切れたりします。特にバーチャル背景使用時はCPU負荷が高くなります。タスクマネージャーでCPU使用率を確認しましょう。" },
              { num: "4", title: "同時利用による帯域圧迫", desc: "家族が動画を視聴している、大容量ファイルをダウンロード中など、他のデバイスが帯域を占有している場合、Zoomに十分な速度が割り当てられません。QoS機能のあるルーターで優先設定を行うと改善します。" },
              { num: "5", title: "Zoomアプリの設定", desc: "HD画質が有効になっている、バーチャル背景を使用している、録画を同時に行っているなど、Zoom側の設定が重い場合があります。設定の見直しで改善できることがあります。" },
            ].map((cause) => (
              <div key={cause.num} className="bg-[#FFF7ED] rounded-lg p-6 border border-orange-100">
                <div className="flex items-start gap-4">
                  <span className="bg-[#EA580C] text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">{cause.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{cause.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cause.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Category */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">対策方法【優先度順】</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-[#0C4A6E] mb-4 text-lg">すぐにできる対策（費用ゼロ）</h3>
              <ul className="space-y-3">
                {[
                  "有線LANケーブルで接続する（最も効果的）",
                  "Zoomの画質をHDから標準に下げる（設定 → ビデオ → HDをオフ）",
                  "バーチャル背景をオフにする",
                  "不要なブラウザタブやアプリを閉じる",
                  "ルーターを再起動する",
                  "5GHz帯のWi-Fiに接続する（2.4GHz帯は干渉を受けやすい）",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold mt-0.5">1</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-[#0C4A6E] mb-4 text-lg">回線設定の見直し</h3>
              <ul className="space-y-3">
                {[
                  "IPv6 IPoE接続（v6プラス・クロスパス等）に変更する",
                  "プロバイダにIPv6オプションを申し込む",
                  "ルーターのファームウェアを最新に更新する",
                  "ルーターのQoS設定でZoomのトラフィックを優先する",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-600 font-bold mt-0.5">2</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-[#0C4A6E] mb-4 text-lg">機器・回線の変更</h3>
              <ul className="space-y-3">
                {[
                  "Wi-Fi 6対応ルーターに買い替える",
                  "メッシュWi-Fiを導入して電波の死角を解消する",
                  "光回線自体をNURO光やauひかりなど独自回線に乗り換える",
                  "テレワーク頻度が高いならPCのメモリを8GB以上に増設する",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-purple-600 font-bold mt-0.5">3</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Requirements Table */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Zoom会議に必要な通信速度の目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="px-4 py-3 text-left">利用シーン</th>
                  <th className="px-4 py-3 text-left">推奨下り速度</th>
                  <th className="px-4 py-3 text-left">推奨上り速度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1対1ビデオ通話（720p）", "1.5Mbps", "1.5Mbps"],
                  ["1対1ビデオ通話（1080p）", "3.0Mbps", "3.0Mbps"],
                  ["グループ通話（ギャラリー）", "4.0Mbps", "3.0Mbps"],
                  ["画面共有", "2.0Mbps", "2.0Mbps"],
                  ["画面共有＋ビデオ", "4.0Mbps", "3.5Mbps"],
                ].map(([scene, down, up]) => (
                  <tr key={scene} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{scene}</td>
                    <td className="px-4 py-3 text-gray-600">{down}</td>
                    <td className="px-4 py-3 text-gray-600">{up}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">出典: Zoom公式ヘルプセンターの推奨帯域幅を参考に作成</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Zoomトラブルに関するよくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-lg border border-gray-200 group">
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
          <h2 className="text-2xl font-bold mb-4">回線の見直しでZoomを根本解決</h2>
          <p className="text-cyan-100 mb-8">設定変更で改善しない場合は、回線そのものの見直しが最も効果的です。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">回線ランキングを見る</Link>
            <Link href="/knowledge/required-speed/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">必要な通信速度を確認</Link>
          </div>
        </div>
      </section>
    </>
  );
}
