import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "テレワーク向けWi-Fiルーターおすすめ5選【2026年最新】",
  description: "テレワークに最適なWi-Fiルーターを厳選5機種紹介。Wi-Fi 6対応・v6プラス対応・メッシュWi-Fi対応など、在宅勤務で重視すべきポイントと選び方を解説。",
};

const routers = [
  { name: "BUFFALO WSR-5400XE6", price: "約14,000円", wifi: "Wi-Fi 6E", speed: "4803+573Mbps", ipv6: "v6プラス/transix対応", feature: "Wi-Fi 6E対応のハイコスパモデル。6GHz帯が使え、干渉の少ない環境でテレワーク可能。v6プラスにも対応し、3LDK程度の住居なら十分なカバー範囲。" },
  { name: "NEC Aterm WX5400HP", price: "約12,000円", wifi: "Wi-Fi 6", speed: "4804+574Mbps", ipv6: "v6プラス/transix/クロスパス対応", feature: "NECのロングセラーモデル。主要なIPv6 IPoEサービスに幅広く対応。安定性に定評があり、テレワーク用途での評判が高い。メッシュWi-Fi機能も搭載。" },
  { name: "TP-Link Archer AX73", price: "約11,000円", wifi: "Wi-Fi 6", speed: "4804+574Mbps", ipv6: "v6プラス対応", feature: "コストパフォーマンスに優れたWi-Fi 6ルーター。6本のアンテナで広範囲をカバー。USB 3.0ポート搭載で簡易NASとしても利用可能。" },
  { name: "BUFFALO WNR-5400XE6P/2S", price: "約28,000円", wifi: "Wi-Fi 6E（メッシュ2台セット）", speed: "4803+573Mbps", ipv6: "v6プラス/transix対応", feature: "メッシュWi-Fi 2台セット。広い住居や2階建てでもWi-Fiの死角を解消。テレワークの作業部屋がルーターから離れている場合に最適。" },
  { name: "ASUS RT-AX86U Pro", price: "約25,000円", wifi: "Wi-Fi 6", speed: "4804+861Mbps", ipv6: "v6プラス対応", feature: "高性能CPUと大容量メモリで多台数接続でも安定。QoS機能でテレワークのトラフィックを優先設定可能。VPN機能も充実しており、セキュリティ重視のテレワーカーに。" },
];

const faqs = [
  { question: "テレワーク用ルーターの選び方で最も重要なポイントは？", answer: "IPv6 IPoE（v6プラス・クロスパス等）への対応が最重要です。どれだけ高性能なルーターでも、IPv6 IPoE非対応では混雑時の速度改善ができません。次に重要なのはWi-Fi規格（Wi-Fi 6以上推奨）と有線LANポートの速度（1Gbps以上）です。" },
  { question: "Wi-Fi 6とWi-Fi 6Eの違いは何ですか？", answer: "Wi-Fi 6Eは従来の2.4GHz帯と5GHz帯に加え、6GHz帯が使える規格です。6GHz帯は利用者が少なく電波干渉が少ないため、より安定した通信が可能です。ただし、接続するデバイス側もWi-Fi 6E対応である必要があります。" },
  { question: "メッシュWi-Fiはテレワークに必要ですか？", answer: "作業部屋がルーターから離れている場合や、2階建て以上の住居では効果的です。メッシュWi-Fiを使うとWi-Fiの死角がなくなり、家中どこでも安定した通信が可能になります。1LDK程度なら通常のルーター1台で十分です。" },
  { question: "ルーターは何年で買い替えるべきですか？", answer: "3〜5年が目安です。Wi-Fiの規格は2〜3年ごとに更新され、古いルーターではセキュリティ更新も止まります。3年以上前のルーターを使っている場合は、Wi-Fi 6以上の機種への買い替えを検討しましょう。" },
  { question: "有線LAN接続とWi-Fi接続、テレワークにはどちらが良いですか？", answer: "Web会議の安定性を重視するなら有線LAN接続が確実です。ただし、Wi-Fi 6以上のルーターと5GHz帯接続であれば、Wi-Fiでも十分な速度と安定性を確保できます。デスクトップPCなら有線、ノートPCならWi-Fiと使い分けるのが現実的です。" },
  { question: "ルーターのQoS機能とは何ですか？", answer: "QoS（Quality of Service）は、特定のアプリケーションやデバイスの通信を優先する機能です。テレワーク中のZoom・Teamsの通信を優先設定することで、家族が動画を視聴していてもWeb会議の品質を維持できます。" },
];

export default function RouterPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "知識" }, { name: "おすすめルーター" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-blue-200 text-sm font-medium mb-2">テレワーク知識</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">テレワーク向けWi-Fiルーターおすすめ5選</h1>
          <p className="text-blue-100 leading-relaxed">2026年最新のWi-Fiルーターから、テレワークに最適な5機種を厳選。選び方のポイントも解説します。</p>
        </div>
      </section>

      {/* Selection Points */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワーク用ルーター選びの3つのポイント</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "IPv6 IPoE対応", desc: "v6プラス・クロスパス・transixなど、利用中の光回線に対応したIPv6 IPoE方式をサポートしているか確認しましょう。これが最も重要なポイントです。" },
              { title: "Wi-Fi 6以上の規格", desc: "Wi-Fi 6（802.11ax）以上に対応したルーターを選びましょう。従来のWi-Fi 5と比べて速度・安定性・同時接続性能が大幅に向上しています。" },
              { title: "カバー範囲と間取り", desc: "作業部屋までの距離や壁の数を考慮しましょう。2LDK以上や2階建ての場合は、メッシュWi-Fi対応モデルの検討をおすすめします。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#F0F9FF] rounded-lg p-6 border border-blue-100">
                <h3 className="font-bold text-[#1E3A5F] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Router List */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめルーター5選</h2>
          <div className="space-y-6">
            {routers.map((router, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[#3B82F6] font-bold text-sm">#{i + 1}</span>
                    <h3 className="font-bold text-gray-800 text-lg">{router.name}</h3>
                  </div>
                  <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded text-sm font-medium">{router.price}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Wi-Fi規格</p>
                    <p className="text-sm font-medium text-gray-800">{router.wifi}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">最大速度</p>
                    <p className="text-sm font-medium text-gray-800">{router.speed}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">IPv6対応</p>
                    <p className="text-sm font-medium text-gray-800">{router.ipv6}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{router.feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">5機種の比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="px-4 py-3 text-left">機種名</th>
                  <th className="px-4 py-3 text-left">価格</th>
                  <th className="px-4 py-3 text-left">Wi-Fi</th>
                  <th className="px-4 py-3 text-left">メッシュ</th>
                  <th className="px-4 py-3 text-left">おすすめ用途</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["WSR-5400XE6", "約14,000円", "6E", "非対応", "1LDK〜2LDK"],
                  ["WX5400HP", "約12,000円", "6", "対応", "安定性重視"],
                  ["Archer AX73", "約11,000円", "6", "対応", "コスパ重視"],
                  ["WNR-5400XE6P/2S", "約28,000円", "6E", "2台セット", "広い住居"],
                  ["RT-AX86U Pro", "約25,000円", "6", "対応", "高性能・QoS"],
                ].map(([name, price, wifi, mesh, use]) => (
                  <tr key={name} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{name}</td>
                    <td className="px-4 py-3 text-gray-600">{price}</td>
                    <td className="px-4 py-3 text-gray-600">{wifi}</td>
                    <td className="px-4 py-3 text-gray-600">{mesh}</td>
                    <td className="px-4 py-3 text-gray-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ルーター選びに関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">ルーターと回線、両方見直して快適テレワーク</h2>
          <p className="text-cyan-100 mb-8">高性能ルーターの実力を発揮するには、回線自体の速度も重要です。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">回線ランキングを見る</Link>
            <Link href="/knowledge/ipv6-ipoe/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">関連: IPv6 IPoEとは？</Link>
          </div>
        </div>
      </section>
    </>
  );
}
