import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "名古屋でテレワーク向け光回線おすすめ5選",
  description: "名古屋・愛知県内でテレワークに最適な光回線を5社厳選。コミュファ光やNURO光など東海エリアならではの選択肢を含め、速度・料金・安定性で比較します。",
};

const providers = [
  { rank: 1, name: "コミュファ光", speed: "下り1Gbps / 上り1Gbps", price: "5,170円", mansion: "4,070円", area: "愛知県全域", point: "中部電力グループの独自光回線。東海エリア顧客満足度No.1。独自回線で混雑に強く、au/UQ mobileセット割あり。名古屋のテレワーカーに最もおすすめ。", link: "/#ranking" },
  { rank: 2, name: "NURO光", speed: "下り2Gbps / 上り1Gbps", price: "5,200円", mansion: "2,090〜2,750円", area: "名古屋市+周辺都市", point: "速度重視の方に最適。東海エリアでもエリア拡大中。独自G-PON技術で下り2Gbps。マンションタイプは月額2,090円〜と安い。", link: "/review/nuro/" },
  { rank: 3, name: "ドコモ光", speed: "下り1Gbps / 上り1Gbps", price: "5,720円", mansion: "4,400円", area: "愛知県全域", point: "NTT西日本回線で愛知県全域対応。ドコモスマホセット割で家族にお得。IPv6 IPoE対応プロバイダを選べば速度も安定。", link: "/review/docomo/" },
  { rank: 4, name: "auひかり", speed: "下り1Gbps / 上り1Gbps", price: "5,610円", mansion: "3,740〜5,500円", area: "名古屋市内一部+マンション", point: "KDDIの独自回線。名古屋では戸建てエリアが限定的だが、マンションタイプは広く対応。auスマホセット割がお得。", link: "/review/au-hikari/" },
  { rank: 5, name: "楽天ひかり", speed: "下り1Gbps / 上り1Gbps", price: "4,800円", mansion: "3,800円", area: "愛知県全域", point: "楽天モバイルとのセットでSPU+2倍。月額料金も手頃で、楽天経済圏の名古屋テレワーカーにはポイント還元で実質コスト削減。", link: "/review/rakuten/" },
];

const faqs = [
  { question: "名古屋でテレワークに最もおすすめの光回線は？", answer: "名古屋・愛知県ではコミュファ光が総合力No.1です。中部電力グループの独自光回線で安定性が高く、東海エリア顧客満足度でも毎年上位にランクインしています。速度重視ならNURO光（エリア内の場合）もおすすめです。" },
  { question: "コミュファ光は名古屋以外でも使えますか？", answer: "コミュファ光は中部電力グループの回線で、愛知・岐阜・三重・静岡・長野の東海5県で利用可能です。名古屋以外の東海エリアでも検討できます。ただし一部山間部などは未対応の場合があります。" },
  { question: "名古屋のマンションでおすすめの光回線は？", answer: "NURO光 for マンション対応物件なら月額2,090円〜と最安。未対応の場合はコミュファ光マンションタイプ（4,070円）やドコモ光（4,400円）が候補です。コミュファ光はマンション導入実績が多いのも強みです。" },
  { question: "名古屋でNURO光のエリアはどの程度ですか？", answer: "名古屋市内の大部分と、豊田市・岡崎市・一宮市など主要都市で利用可能です。ただし住所単位で対応状況が異なるため、NURO光公式サイトでの住所検索による確認が必要です。" },
  { question: "名古屋で光回線の開通が早いのはどのサービス？", answer: "NTT回線を利用するドコモ光やソフトバンク光は最短2週間で開通します。コミュファ光は独自回線のため3週間〜1ヶ月、NURO光は1〜2ヶ月が目安です。急ぎの方はNTT系を選びましょう。" },
  { question: "名古屋のテレワーカーにコミュファ光が人気な理由は？", answer: "独自回線で混雑に強い安定性、東海エリア限定で利用者が適度に分散、au/UQ mobileセット割対応、地域密着のサポート体制、といった点が名古屋のテレワーカーに支持される理由です。" },
];

export default function NagoyaAreaPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "エリア別おすすめ" }, { name: "名古屋" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">エリア別おすすめ</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">名古屋でテレワーク向け光回線おすすめ5選</h1>
          <p className="text-cyan-100 leading-relaxed">名古屋・愛知県のテレワーカーのための光回線ガイド。東海限定のコミュファ光を含む5社を徹底比較します。</p>
        </div>
      </section>

      {/* Nagoya Specific */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">名古屋のテレワーク回線事情</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "東海限定のコミュファ光", desc: "中部電力グループのコミュファ光は東海エリア限定の独自回線。混雑に強く、安定性と顧客満足度が高い名古屋テレワーカーの味方です。" },
              { title: "NURO光エリアの拡大", desc: "名古屋市内を中心にNURO光の対応エリアが拡がっています。下り2Gbpsの高速通信は、IT企業のリモートワーカーに人気です。" },
              { title: "自動車産業とテレワーク", desc: "名古屋はトヨタ関連企業が多く、製造業のテレワークも増加中。大容量データの送受信やVPN接続に対応できる安定回線が求められます。" },
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
          <h2 className="text-2xl font-bold mb-6">名古屋テレワーク向け光回線ランキング</h2>
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
                    <p><span className="font-medium text-gray-700">名古屋エリア:</span> {p.area}</p>
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
          <h2 className="text-2xl font-bold mb-6">名古屋での光回線選びのポイント</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "まずコミュファ光を検討", desc: "東海エリアならコミュファ光が最有力候補。独自回線の安定性と充実したサポート体制は、テレワーカーにとって大きな安心材料です。" },
              { title: "速度重視ならNURO光", desc: "コミュファ光よりさらに速度を求めるなら、NURO光がエリア内なら最速。ただしエリアは限定的なので、必ず住所検索で確認してください。" },
              { title: "スマホキャリアとのセット割", desc: "au/UQ mobileユーザーはコミュファ光、ドコモユーザーはドコモ光のセット割で通信費全体を最適化しましょう。家族の人数が多いほど差額が大きくなります。" },
              { title: "転勤の可能性を考慮", desc: "名古屋は転勤族が多い都市です。コミュファ光やeo光は東海・関西限定のため、転勤の可能性がある方は全国対応のドコモ光やSo-net光 minicoも検討しましょう。" },
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
          <h2 className="text-2xl font-bold mb-6">名古屋のテレワーク回線 よくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">名古屋のテレワーク環境を整えよう</h2>
          <p className="text-cyan-100 mb-8">東海エリアならではの選択肢で、最適な回線を選びましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">全国ランキング</Link>
            <Link href="/area/tokyo/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">東京エリア</Link>
            <Link href="/area/osaka/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">大阪エリア</Link>
          </div>
        </div>
      </section>
    </>
  );
}
