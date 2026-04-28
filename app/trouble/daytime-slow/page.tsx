import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "昼間にネットが遅くなる原因と対策【テレワーカー必見】",
  description: "テレワーク中に昼間のネットが遅くなる原因を解説。プロバイダ混雑・回線方式・Wi-Fi環境など原因別の対策方法を紹介。IPv6 IPoEや回線乗り換えの効果も検証。",
};

const faqs = [
  { question: "昼間にネットが遅くなるのはなぜですか？", answer: "テレワークの普及により、平日昼間のインターネット利用者が増加しています。特にPPPoE接続の場合、プロバイダの網終端装置に負荷が集中し、昼の12時〜13時や14時〜17時頃に速度低下が起きやすくなっています。" },
  { question: "昼間だけ遅いのは回線の問題ですか？", answer: "多くの場合、回線そのものではなくプロバイダの接続方式が原因です。PPPoE接続はプロバイダの設備を経由するため混雑の影響を受けますが、IPv6 IPoE接続に変更すると混雑を回避できます。回線（光ファイバー）自体の速度は時間帯で変わりません。" },
  { question: "IPv6 IPoEに変更するだけで改善しますか？", answer: "PPPoEの混雑が原因であれば、IPv6 IPoEへの変更で大幅に改善します。多くのケースで下り速度が3〜10倍程度向上したという報告があります。ただし、マンションのVDSL方式が原因の場合はIPv6でも改善しません。" },
  { question: "マンションで昼間遅い場合はどうすればいいですか？", answer: "マンションの場合、共有部分の回線を住民が同時に利用するため速度が低下しやすいです。光配線方式への変更を管理組合に提案するか、NURO光のような個別回線を引き込むことを検討してください。" },
  { question: "モバイルWi-Fiを併用する方法は有効ですか？", answer: "Web会議中だけスマートフォンのテザリングに切り替えるなど、緊急的な対策として有効です。ただし通信量の制限やバッテリー消費の問題があるため、恒久的な対策としては回線の見直しをおすすめします。" },
  { question: "スピードテストは何を使えばいいですか？", answer: "fast.com（Netflix提供）やSpeedtest by Ooklaが一般的です。テレワーク中に遅さを感じたタイミングで計測し、下り・上りともに記録しておくと原因の切り分けに役立ちます。複数回計測して平均値を確認しましょう。" },
];

export default function DaytimeSlowPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "トラブル対策" }, { name: "昼間にネットが遅い" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#7C2D12] to-[#EA580C] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-200 text-sm font-medium mb-2">トラブルシューティング</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">昼間にネットが遅くなる原因と対策</h1>
          <p className="text-orange-100 leading-relaxed">テレワーク中の「昼間だけネットが遅い」問題を根本から解決。プロバイダ混雑の仕組みと具体的な対策を解説します。</p>
        </div>
      </section>

      {/* Why Daytime Slow */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">なぜ昼間にネットが遅くなるのか</h2>
          <p className="text-gray-600 leading-relaxed mb-6">テレワークの普及以降、平日昼間のインターネット利用パターンが大きく変わりました。従来は夜間に集中していた利用が、昼間にも分散するようになり、特にPPPoE接続では混雑の影響を受けやすくなっています。</p>
          <div className="bg-[#FFF7ED] rounded-lg p-6 border border-orange-100 mb-6">
            <h3 className="font-bold text-[#7C2D12] mb-3">時間帯別の混雑傾向</h3>
            <div className="space-y-3">
              {[
                { time: "9:00〜12:00", level: "やや混雑", desc: "テレワーク開始。Web会議やクラウドサービスの利用が増加" },
                { time: "12:00〜13:00", level: "混雑", desc: "昼休みの動画視聴やSNS利用が加わり、テレワーク需要と重なる" },
                { time: "13:00〜17:00", level: "やや混雑", desc: "午後のテレワーク。大容量ファイルのやり取りが集中しやすい" },
                { time: "17:00〜22:00", level: "非常に混雑", desc: "テレワーク終了後に動画・ゲーム利用が加わり、最も混雑する時間帯" },
              ].map((t) => (
                <div key={t.time} className="flex items-start gap-3 text-sm">
                  <span className="font-medium text-gray-800 w-28 flex-shrink-0">{t.time}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium flex-shrink-0 ${t.level === "非常に混雑" ? "bg-red-100 text-red-700" : t.level === "混雑" ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"}`}>{t.level}</span>
                  <span className="text-gray-600">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">昼間に遅くなる具体的な原因</h2>
          <div className="space-y-4">
            {[
              { title: "PPPoE接続の網終端装置混雑", desc: "フレッツ光のPPPoE接続では、プロバイダの網終端装置（NTE）を経由します。この装置の処理能力に限界があり、利用者が増えると速度が低下します。テレワーク普及で昼間の利用者が急増し、従来は夜間だけだった混雑が昼間にも発生するようになりました。" },
              { title: "マンション共有回線の混雑", desc: "マンションタイプの光回線は、建物内の住民で回線を共有します。テレワーカーが増えた結果、同じ建物内で昼間に複数の住民がWeb会議やクラウドサービスを利用し、帯域が不足するケースがあります。" },
              { title: "プロバイダの帯域不足", desc: "一部のプロバイダでは、昼間の利用者増加に対して設備増強が追いついていないことがあります。安価なプロバイダほどこの傾向が強い場合があります。" },
              { title: "Wi-Fiの電波干渉", desc: "昼間は近隣の家庭でもWi-Fiの利用が増えるため、特に2.4GHz帯では電波干渉が発生しやすくなります。5GHz帯への切り替えや有線LAN接続で改善できます。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">昼間の速度低下を解決する方法</h2>
          <div className="space-y-6">
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="font-bold text-green-800 mb-4 text-lg">最も効果的: IPv6 IPoE接続への変更</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">PPPoE接続からIPv6 IPoE接続（v6プラス・クロスパス・transix等）に変更することで、混雑する網終端装置を経由せずにインターネットに接続できます。多くのプロバイダで無料または月額数百円で提供されています。</p>
              <div className="bg-white rounded p-4">
                <p className="text-sm font-medium text-gray-700 mb-2">改善の目安（PPPoEからの変更時）</p>
                <p className="text-sm text-gray-600">昼間の下り速度: 10〜50Mbps → 100〜400Mbps程度に改善するケースが多い</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "有線LAN接続に変更", desc: "Wi-Fiの不安定さを排除できます。特にWeb会議中は有線接続がおすすめです。Cat6以上のLANケーブルを使用しましょう。" },
                { title: "ルーターの位置と設定を見直す", desc: "ルーターを作業部屋の近くに移動し、5GHz帯のWi-Fiに接続しましょう。ファームウェアの更新も忘れずに。" },
                { title: "プロバイダの変更を検討", desc: "同じフレッツ光でもプロバイダによって混雑状況は異なります。IPv6 IPoEに対応した評判の良いプロバイダに変更することで改善する場合があります。" },
                { title: "独自回線への乗り換え", desc: "NURO光やauひかりはフレッツ光とは異なる独自回線を使用しているため、PPPoEの混雑の影響を受けません。根本的な解決策です。" },
              ].map((item) => (
                <div key={item.title} className="bg-[#F0F9FF] rounded-lg p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">昼間のネット速度に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">昼間も快適な回線を選ぼう</h2>
          <p className="text-cyan-100 mb-8">混雑に強い回線に切り替えれば、時間帯を気にせずテレワークに集中できます。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">回線ランキングを見る</Link>
            <Link href="/knowledge/ipv6-ipoe/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">関連: IPv6 IPoEとは？</Link>
          </div>
        </div>
      </section>
    </>
  );
}
