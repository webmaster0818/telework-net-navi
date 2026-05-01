import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "大阪でテレワーク向け光回線おすすめ5選",
  description: "大阪府内でテレワークに最適な光回線を5社厳選。eo光やNURO光など関西エリアならではの選択肢を含め、速度・料金・安定性で比較します。",
};

const providers = [
  { rank: 1, name: "eo光", speed: "下り1Gbps / 上り1Gbps", price: "5,448円", mansion: "3,876円〜", area: "大阪府全域", point: "関西電力系の独自光回線。関西エリア顧客満足度No.1。独自回線で混雑に強く、上り下り対称1Gbpsの安定通信。au/UQ mobileセット割あり。", link: "/#ranking" },
  { rank: 2, name: "NURO光", speed: "下り2Gbps / 上り1Gbps", price: "5,200円", mansion: "2,090〜2,750円", area: "大阪市内+周辺都市", point: "速度重視なら最有力。独自G-PON技術で下り2Gbpsの圧倒的スピード。大阪市内を中心にエリア拡大中。", link: "/review/nuro/" },
  { rank: 3, name: "ドコモ光", speed: "下り1Gbps / 上り1Gbps", price: "5,720円", mansion: "4,400円", area: "大阪府全域", point: "NTT西日本エリアで全域対応。ドコモスマホユーザーは最大1,100円/台のセット割。プロバイダ選択肢が多い。", link: "/review/docomo/" },
  { rank: 4, name: "auひかり", speed: "下り1Gbps / 上り1Gbps", price: "5,610円", mansion: "3,740〜5,500円", area: "大阪府内一部（マンション中心）", point: "大阪では戸建てタイプのエリアが限定的だが、マンションタイプは広く対応。auスマホセット割がお得。", link: "/review/au-hikari/" },
  { rank: 5, name: "So-net光 minico", speed: "下り1Gbps / 上り1Gbps", price: "4,500円", mansion: "3,400円", area: "大阪府全域", point: "月額料金の安さと契約期間の縛りなしが魅力。IPv6対応で日中のテレワークには十分な速度。コスパ重視の方に。", link: "/review/sonet/" },
];

const faqs = [
  { question: "大阪でテレワークに最もおすすめの光回線は？", answer: "大阪エリアではeo光が総合力No.1です。関西電力グループの独自光回線で、安定性と顧客満足度が高いです。速度最優先ならNURO光（エリア内の場合）、ドコモスマホユーザーならドコモ光がおすすめです。" },
  { question: "eo光は東京でも使えますか？", answer: "いいえ。eo光は関西電力グループが運営する回線で、大阪・京都・兵庫・滋賀・奈良・和歌山・福井の2府5県限定です。関西在住のテレワーカーだからこそ利用できるメリットの大きい回線です。" },
  { question: "大阪のマンションでおすすめの光回線は？", answer: "NURO光 for マンション対応物件なら月額2,090円〜で最安。未対応の場合はeo光マンションタイプ（3,876円〜）やドコモ光（4,400円）が候補です。物件の対応状況を管理会社に確認してから申し込みましょう。" },
  { question: "大阪でNURO光のエリアはどこまで対応していますか？", answer: "大阪市内の大部分と、堺市・豊中市・吹田市・高槻市など主要都市で利用可能です。ただし対応エリアは住所単位で異なるため、NURO光公式サイトでの住所検索による確認が必要です。" },
  { question: "大阪のテレワーカーにeo光が人気な理由は？", answer: "独自回線で混雑に強い、関西エリア顧客満足度No.1の実績、au/UQ mobileセット割がある、サポート品質が高い、といった理由から関西在住のテレワーカーに支持されています。" },
  { question: "大阪で光回線の開通が早いのはどのサービス？", answer: "NTT回線を利用するドコモ光やソフトバンク光は最短2週間程度で開通します。eo光は独自回線のため1ヶ月程度、NURO光は1〜2ヶ月が目安です。すぐにテレワークを始めたい場合はNTT系が有利です。" },
];

export default function OsakaAreaPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "エリア別おすすめ" }, { name: "大阪" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">エリア別おすすめ</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">大阪でテレワーク向け光回線おすすめ5選</h1>
          <p className="text-cyan-100 leading-relaxed">大阪在住テレワーカーのための光回線ガイド。関西限定のeo光を含む5社を速度・料金・安定性で比較します。</p>
        </div>
      </section>

      {/* Osaka Specific */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">大阪のテレワーク回線事情</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "関西限定のeo光が強い", desc: "関西電力グループのeo光は独自光回線で、顧客満足度が非常に高いです。関西在住なら真っ先に検討すべき回線です。" },
              { title: "NURO光のエリア拡大中", desc: "大阪市内を中心にNURO光のエリアが拡大しています。対応エリアなら下り2Gbpsの圧倒的速度が手に入ります。" },
              { title: "マンション密集地域の注意点", desc: "大阪は人口密度が高くマンションが多い地域です。建物の配線方式によって速度が変わるため、事前確認が重要です。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#F0F9FF] rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Ranking */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">大阪テレワーク向け光回線ランキング</h2>
          <div className="space-y-6">
            {providers.map((p) => (
              <div key={p.name} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#0891B2] text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">{p.rank}</span>
                  <h3 className="font-bold text-xl text-[#0C4A6E]">{p.name}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium text-gray-700">速度:</span> {p.speed}</p>
                    <p><span className="font-medium text-gray-700">戸建て月額:</span> {p.price}</p>
                    <p><span className="font-medium text-gray-700">マンション月額:</span> {p.mansion}</p>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium text-gray-700">大阪エリア:</span> {p.area}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.point}</p>
                <Link href={p.link} className="text-sm text-[#0891B2] font-medium hover:underline">詳細レビューを読む →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Guide */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">大阪での光回線選びのポイント</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "まずeo光のエリア確認", desc: "大阪府内ならeo光が最有力候補。公式サイトで住所検索して対応エリアを確認しましょう。独自回線の安定性は関西テレワーカーの強い味方です。" },
              { title: "NURO光との比較検討", desc: "エリア内ならNURO光も有力です。速度はNURO光が上ですが、安定性・サポートではeo光が優位。総合的に判断してください。" },
              { title: "スマホキャリアに合わせる", desc: "au/UQ mobileユーザーはeo光、ドコモユーザーはドコモ光、ソフトバンクユーザーはNURO光のセット割でトータルコストを最適化できます。" },
              { title: "マンションの配線方式確認", desc: "大阪の古いマンションはVDSL方式が多いです。光配線方式への変更が可能か管理会社に相談するか、ホームルーターも含めて検討しましょう。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#F0F9FF] rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">大阪のテレワーク回線 よくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">大阪のテレワーク環境を整えよう</h2>
          <p className="text-cyan-100 mb-8">関西ならではの選択肢を含めて、最適な回線を選びましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">全国ランキング</Link>
            <Link href="/area/tokyo/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">東京エリア</Link>
            <Link href="/area/nagoya/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">名古屋エリア</Link>
          </div>
        </div>
      </section>
    </>
  );
}
