import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "東京でテレワーク向け光回線おすすめ5選【2026年最新】",
  description: "東京都内でテレワークに最適な光回線を5社厳選。速度実測・料金・マンション対応・開通の早さなど在宅勤務に重要なポイントで比較。エリア別の注意点も解説。",
};

const providers = [
  { rank: 1, name: "NURO光", speed: "下り2Gbps / 上り1Gbps", price: "5,200円", mansion: "2,090〜2,750円", area: "東京23区+多摩エリア大部分", point: "速度・安定性ともに東京エリアで最強クラス。独自回線で夜間も安定。IT企業が多い東京のテレワーカーに最適。", link: "/review/nuro/" },
  { rank: 2, name: "auひかり", speed: "下り1Gbps / 上り1Gbps", price: "5,610円", mansion: "3,740〜5,500円", area: "東京23区+一部市部", point: "KDDI独自回線で安定性が高い。auスマホセット割で家族全員お得。マンションタイプの選択肢も豊富。", link: "/review/au-hikari/" },
  { rank: 3, name: "ドコモ光", speed: "下り1Gbps / 上り1Gbps", price: "5,720円", mansion: "4,400円", area: "東京都全域", point: "NTT回線で東京都内ほぼ全域対応。ドコモユーザーはセット割がお得。開通も比較的早い。", link: "/review/docomo/" },
  { rank: 4, name: "So-net光 minico", speed: "下り1Gbps / 上り1Gbps", price: "4,500円", mansion: "3,400円", area: "東京都全域", point: "月額料金が安く、契約期間の縛りなし。専用帯域ではないが、IPv6対応で日中のテレワークには十分。", link: "/review/sonet/" },
  { rank: 5, name: "楽天ひかり", speed: "下り1Gbps / 上り1Gbps", price: "4,800円", mansion: "3,800円", area: "東京都全域", point: "楽天モバイルとのセットでSPU+2倍。楽天経済圏のテレワーカーにはポイント還元で実質コスト大幅削減。", link: "/review/rakuten/" },
];

const faqs = [
  { question: "東京でテレワークに最もおすすめの光回線は？", answer: "速度と安定性を最優先するならNURO光がおすすめです。東京23区と多摩エリアの大部分で利用可能で、独自回線による安定した高速通信がテレワークに最適です。エリア外の場合はドコモ光やauひかりが候補になります。" },
  { question: "東京のマンションでおすすめの光回線は？", answer: "NURO光 for マンション対応物件なら月額2,090円〜と最安クラスです。未対応の場合はドコモ光マンションタイプ（4,400円）が全域対応で安心。auひかりマンションタイプも料金が比較的安くおすすめです。" },
  { question: "東京都内でも光回線の速度に差はありますか？", answer: "あります。同じプロバイダでも地域や建物によって実測速度は異なります。特にマンションのVDSL方式は最大100Mbpsに制限されます。また、利用者が多い都心部ではフレッツ光コラボ系が混雑しやすい傾向があります。" },
  { question: "東京で開通が早い光回線は？", answer: "NTT回線を利用するドコモ光やソフトバンク光は最短2週間程度で開通します。NURO光は2回の工事が必要で1〜2ヶ月かかりますが、東京エリアは比較的開通が早い傾向です。" },
  { question: "東京の一人暮らしテレワーカーにおすすめの回線は？", answer: "コスパ重視ならSo-net光 minico（月額4,500円・縛りなし）がおすすめです。速度重視ならNURO光、ドコモスマホユーザーならドコモ光のセット割を活用するとトータルコストを抑えられます。" },
  { question: "テレワーク用に10Gbpsプランは必要ですか？", answer: "一般的なテレワーク（Web会議・資料作成・メール）には1〜2Gbpsプランで十分です。10Gbpsプランは映像制作や大規模データ分析など、常に大容量通信が必要な専門職向けです。東京では一部エリアでNURO光10Gやauひかり10Gが利用可能です。" },
];

export default function TokyoAreaPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "エリア別おすすめ" }, { name: "東京" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">エリア別おすすめ</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">東京でテレワーク向け光回線おすすめ5選</h1>
          <p className="text-cyan-100 leading-relaxed">東京都内でテレワークに最適な光回線を、速度・料金・安定性・マンション対応の観点から厳選しました。2026年最新情報です。</p>
        </div>
      </section>

      {/* Tokyo Specific */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">東京のテレワーク回線事情</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "全キャリア対応エリア", desc: "東京は主要光回線がすべて利用可能な恵まれたエリアです。選択肢が多い分、自分の優先事項に合わせた選び方が重要になります。" },
              { title: "マンション比率が高い", desc: "東京はマンション居住率が高く、建物の配線方式によって利用できる回線や速度が変わります。入居前の確認が欠かせません。" },
              { title: "利用者集中による混雑", desc: "特にフレッツ光コラボ系は利用者が多く、夜間に速度低下する場合があります。独自回線（NURO光・auひかり）は混雑の影響を受けにくいです。" },
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
          <h2 className="text-2xl font-bold mb-6">東京テレワーク向け光回線ランキング</h2>
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
                    <p><span className="font-medium text-gray-700">東京エリア:</span> {p.area}</p>
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
          <h2 className="text-2xl font-bold mb-6">東京での光回線選びのポイント</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "スマホセット割を活用する", desc: "ドコモユーザーはドコモ光、auユーザーはauひかり、ソフトバンクユーザーはNURO光のセット割がお得です。家族全員分の割引で年間数万円の差になります。" },
              { title: "マンションの配線方式を確認", desc: "光配線方式なら高速通信が期待できますが、VDSL方式では100Mbps上限になります。管理会社に配線方式を確認してから回線を選びましょう。" },
              { title: "開通までの期間を考慮する", desc: "急なテレワーク開始にはNTT系の光回線（最短2週間）が有利。余裕があればNURO光で最高品質を狙うのも手です。開通待ちの間はモバイル回線でしのぎましょう。" },
              { title: "IPv6 IPoE対応を確認", desc: "東京はフレッツ光利用者が多いため、IPv4 PPPoE接続は混雑しがちです。IPv6 IPoE対応のプロバイダを選ぶことで、安定した速度を確保できます。" },
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
          <h2 className="text-2xl font-bold mb-6">東京のテレワーク回線 よくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">東京のテレワーク環境を整えよう</h2>
          <p className="text-cyan-100 mb-8">あなたのエリアで最適な光回線を見つけましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">全国ランキング</Link>
            <Link href="/area/osaka/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">大阪エリア</Link>
            <Link href="/area/nagoya/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">名古屋エリア</Link>
          </div>
        </div>
      </section>
    </>
  );
}
