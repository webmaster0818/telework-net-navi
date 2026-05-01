import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Zoomに最適な回線は？【必要速度と推奨プロバイダ】",
  description: "Zoomでテレワーク会議を快適に行うために必要な回線速度・推奨環境・おすすめプロバイダを解説。映像が途切れる原因と対策もわかりやすく紹介します。",
};

const speedRequirements = [
  ["1対1ビデオ通話（高画質）", "3.8Mbps", "3.0Mbps"],
  ["グループ通話（720p）", "2.6Mbps", "1.0Mbps"],
  ["グループ通話（1080p）", "3.8Mbps", "3.0Mbps"],
  ["画面共有のみ", "150kbps", "150kbps"],
  ["画面共有+ビデオ", "3.8Mbps", "3.0Mbps"],
  ["ギャラリービュー（25人）", "4.0Mbps", "4.0Mbps"],
];

const recommendedProviders = [
  { name: "NURO光", speed: "下り2Gbps / 上り1Gbps", point: "独自回線で混雑時間帯も安定。上り1Gbpsは画面共有やプレゼン時に強い。", link: "/review/nuro/" },
  { name: "auひかり", speed: "下り1Gbps / 上り1Gbps", point: "独自回線（一部エリア）で安定性が高い。auスマホユーザーはセット割でお得。", link: "/review/au-hikari/" },
  { name: "ドコモ光", speed: "下り1Gbps / 上り1Gbps", point: "全国対応のフレッツ光コラボ。IPv6 IPoE対応プロバイダ選択で安定性確保。", link: "/review/docomo/" },
];

const faqs = [
  { question: "Zoomに必要な回線速度はどのくらいですか？", answer: "Zoom公式の推奨速度は、グループ通話（1080p）で上り3.8Mbps・下り3.0Mbpsです。ただし安定した会議のためには実測で上り下りともに20Mbps以上あると安心です。回線速度テストで確認してみてください。" },
  { question: "Zoomで映像が途切れる原因は何ですか？", answer: "主な原因は、回線速度の不足、Wi-Fi電波の不安定さ、ルーターの性能不足、プロバイダの混雑です。特にIPv4 PPPoE接続の光回線は夜間に混雑しやすく、IPv6 IPoEへの切り替えで改善するケースが多いです。" },
  { question: "Zoomで有線LAN接続は効果がありますか？", answer: "非常に効果があります。Wi-Fi接続に比べて速度のブレが少なくなり、パケットロスも減少します。特に重要な会議や長時間の会議では、有線LAN接続を強くおすすめします。CAT6以上のLANケーブルを使用してください。" },
  { question: "Zoomの通信量はどのくらいですか？", answer: "1対1のビデオ通話で1時間あたり約600MB〜1.2GB、グループ通話で約800MB〜2.4GB程度です。1日8時間のテレワークで複数回会議がある場合、月間30〜100GB程度を見込んでおくと良いでしょう。" },
  { question: "ホームルーターでZoomは使えますか？", answer: "1対1の通話は概ね快適ですが、大人数のグループ通話や画面共有を頻繁に行う場合は不安定になる場合があります。5G対応ホームルーターを窓際に設置し、有線LAN接続することで改善が見込めます。" },
  { question: "Zoomの接続品質を事前にテストする方法は？", answer: "Zoomアプリの設定から「統計情報」でリアルタイムの速度・遅延・パケットロスを確認できます。また、zoom.us/test にアクセスするとテストミーティングで事前に接続品質を確認可能です。" },
];

export default function ZoomPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "Web会議ツール別ガイド" }, { name: "Zoom" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">Web会議ツール別ガイド</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Zoomに最適な回線は？</h1>
          <p className="text-cyan-100 leading-relaxed">テレワークの必須ツールZoom。必要な回線速度から推奨プロバイダまで、快適なオンライン会議環境の作り方を解説します。</p>
        </div>
      </section>

      {/* Speed Requirements */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Zoom公式の推奨回線速度</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="px-4 py-3 text-left font-medium">利用シーン</th>
                  <th className="px-4 py-3 text-left font-medium">上り（推奨）</th>
                  <th className="px-4 py-3 text-left font-medium">下り（推奨）</th>
                </tr>
              </thead>
              <tbody>
                {speedRequirements.map(([scene, up, down]) => (
                  <tr key={scene} className="border-b border-gray-100">
                    <th className="bg-[#F0F9FF] px-4 py-3 text-left font-medium text-gray-700">{scene}</th>
                    <td className="px-4 py-3 text-gray-800">{up}</td>
                    <td className="px-4 py-3 text-gray-800">{down}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">出典: Zoom公式ヘルプセンター（2026年4月時点）。実際の利用では、推奨速度の5〜10倍の実測速度があると安定します。</p>
        </div>
      </section>

      {/* Trouble Shooting */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Zoom会議が不安定になる原因と対策</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Wi-Fi接続の不安定さ", desc: "壁や家具で電波が減衰し、速度にムラが出ます。可能な限り有線LAN接続に切り替えるか、Wi-Fi 6対応ルーターへの買い替えを検討してください。" },
              { title: "プロバイダの混雑", desc: "IPv4 PPPoE接続は特に夜間帯に混雑します。IPv6 IPoE対応プロバイダに切り替えることで、混雑を回避して安定した速度を確保できます。" },
              { title: "上り速度の不足", desc: "画面共有やカメラ映像の送信には上り速度が重要です。上り速度が10Mbps以下の場合は、回線の見直しやルーターの設定確認をおすすめします。" },
              { title: "PCのスペック不足", desc: "Zoomは映像処理にCPUを多く使います。他のアプリを閉じる、仮想背景をオフにする、解像度を720pに下げるなどの対策が有効です。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Providers */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Zoomテレワークにおすすめの光回線</h2>
          <div className="space-y-4">
            {recommendedProviders.map((provider, i) => (
              <div key={provider.name} className="bg-[#F0F9FF] rounded-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#0891B2] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">{i + 1}</span>
                  <h3 className="font-bold text-lg text-[#0C4A6E]">{provider.name}</h3>
                  <span className="text-sm text-gray-500">{provider.speed}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{provider.point}</p>
                <Link href={provider.link} className="text-sm text-[#0891B2] font-medium hover:underline">詳細レビューを読む →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Zoomを快適に使うための設定チェックリスト</h2>
          <div className="bg-white rounded-lg p-6 border border-gray-100">
            <ul className="space-y-3">
              {[
                "有線LAN接続を優先する（CAT6以上のケーブル推奨）",
                "IPv6 IPoE対応のプロバイダ・ルーターを使用する",
                "ルーターのファームウェアを最新に更新する",
                "Zoomアプリを常に最新版にアップデートする",
                "会議前にzoom.us/testでテストミーティングを行う",
                "仮想背景は高スペックPCでのみ使用する",
                "他のアプリのバックグラウンド通信を制限する",
                "Wi-Fi使用時は5GHz帯に接続する",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#0891B2] font-bold mt-0.5">-</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Zoomと回線に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">Zoom会議を途切れさせない回線選び</h2>
          <p className="text-cyan-100 mb-8">Web会議に強い光回線をランキングでチェックしましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/tool/teams/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">Teams向けガイド</Link>
          </div>
        </div>
      </section>
    </>
  );
}
