import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "上り速度が遅い原因と改善方法【テレワーク必須】",
  description: "テレワークで上り速度（アップロード速度）が遅いと感じる原因と改善方法を解説。Web会議やファイル送信に必要な上り速度の目安と、回線・設定別の具体的な対策を紹介。",
};

const faqs = [
  { question: "テレワークに必要な上り速度はどのくらいですか？", answer: "Web会議で3〜5Mbps、ファイルアップロードで10Mbps以上が目安です。複数のクラウドサービスを同時利用する場合は、上り30Mbps以上あると快適にテレワークできます。" },
  { question: "上り速度と下り速度の違いは何ですか？", answer: "上り速度はデータを送信する速度（アップロード）、下り速度はデータを受信する速度（ダウンロード）です。テレワークでは、Web会議の映像送信やファイルのアップロードに上り速度が重要になります。" },
  { question: "上り速度だけが遅い原因は何ですか？", answer: "多くの光回線は下り速度を重視した設計のため、上り速度は下りより遅くなる傾向があります。特にVDSL方式のマンションやモバイル回線では上り速度が制限されることがあります。また、クラウドバックアップが裏で動作している場合も上り速度を消費します。" },
  { question: "VDSLマンションで上り速度を改善するには？", answer: "VDSL方式では上下最大100Mbpsが物理的な上限です。改善するには、マンションに光配線方式の導入を管理組合に提案するか、NURO光のような戸建て方式を個別に引き込む方法があります。" },
  { question: "クラウドストレージへのアップロードが遅い場合の対策は？", answer: "大容量ファイルは圧縮してからアップロードする、アップロード時間帯を混雑しない朝や深夜にずらす、有線LAN接続にする、IPv6 IPoE接続に変更するなどの対策が有効です。" },
  { question: "上り速度が速い光回線はどれですか？", answer: "NURO光は上り最大1Gbps、auひかりも上り最大1Gbpsと高速です。フレッツ光コラボ系も最大1Gbpsですが、IPv6 IPoE接続を利用しないと実測値が低くなることがあります。" },
];

export default function UploadSpeedPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "トラブル対策" }, { name: "上り速度が遅い" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#7C2D12] to-[#EA580C] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-200 text-sm font-medium mb-2">トラブルシューティング</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">上り速度が遅い原因と改善方法</h1>
          <p className="text-orange-100 leading-relaxed">テレワークで重要なのは下りだけではありません。Web会議やファイル送信に欠かせない上り速度の改善方法を解説します。</p>
        </div>
      </section>

      {/* Why Upload Matters */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワークで上り速度が重要な理由</h2>
          <p className="text-gray-600 leading-relaxed mb-6">回線速度というと「下り速度」に注目しがちですが、テレワークでは「上り速度」も同等に重要です。以下のような場面で上り速度が業務に直結します。</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Web会議の映像送信", desc: "Zoom・Teams・Google Meetで自分の映像と音声を相手に送信するには、安定した上り速度が必要です。上りが遅いと自分の映像だけ固まります。" },
              { title: "ファイルのアップロード", desc: "Google Drive・Dropbox・OneDriveへの資料アップロード、メール添付ファイルの送信など、上り速度が遅いと作業効率が大幅に低下します。" },
              { title: "画面共有・リモートデスクトップ", desc: "画面共有やリモートデスクトップ接続では、自分の画面情報を常に上り回線で送信し続けます。上りが不安定だと共有画面がカクつきます。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#FFF7ED] rounded-lg p-6 border border-orange-100">
                <h3 className="font-bold text-[#7C2D12] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Speed Requirements */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワーク用途別の上り速度目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden bg-white">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="px-4 py-3 text-left">用途</th>
                  <th className="px-4 py-3 text-left">最低限必要</th>
                  <th className="px-4 py-3 text-left">推奨</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["メール・チャット", "1Mbps", "3Mbps"],
                  ["Web会議（音声のみ）", "0.5Mbps", "1Mbps"],
                  ["Web会議（映像あり）", "1.5Mbps", "5Mbps"],
                  ["画面共有", "2Mbps", "5Mbps"],
                  ["ファイルアップロード（100MB）", "5Mbps", "30Mbps以上"],
                  ["クラウド同期（常時）", "3Mbps", "10Mbps"],
                  ["リモートデスクトップ", "3Mbps", "10Mbps"],
                ].map(([use, min, rec]) => (
                  <tr key={use} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{use}</td>
                    <td className="px-4 py-3 text-gray-600">{min}</td>
                    <td className="px-4 py-3 text-gray-600">{rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">上り速度が遅くなる主な原因</h2>
          <div className="space-y-4">
            {[
              { title: "PPPoE接続による混雑", desc: "フレッツ光のPPPoE接続は、プロバイダの網終端装置で混雑が発生しやすく、上下ともに速度が低下します。IPv6 IPoE接続に変更することで大幅に改善できます。" },
              { title: "VDSL方式のマンション", desc: "マンションの共用部から各戸までが電話線（VDSL）の場合、上下最大100Mbpsに制限されます。実測ではさらに低くなることが多く、上り10〜30Mbps程度しか出ないケースもあります。" },
              { title: "Wi-Fi接続の不安定さ", desc: "Wi-Fiは有線LANと比べて上り速度が不安定になりやすいです。特に2.4GHz帯での接続や、ルーターとの距離が離れている場合は上り速度が大幅に低下します。" },
              { title: "バックグラウンドのアップロード", desc: "クラウドストレージの自動同期、OSのアップデート、バックアップソフトなどが裏で上り帯域を消費していることがあります。タスクマネージャーのネットワーク使用状況を確認しましょう。" },
              { title: "ルーターの性能不足", desc: "古いルーターや安価なルーターでは、NAT処理やパケット転送の性能がボトルネックになり、上り速度が制限されることがあります。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#FFF7ED] rounded-lg p-6 border border-orange-100">
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">上り速度を改善する方法</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "有線LAN接続にする", desc: "最も効果的な対策です。LANケーブル（Cat6以上推奨）でPCとルーターを直結することで、Wi-Fiの不安定さを排除できます。" },
              { title: "IPv6 IPoE接続に変更", desc: "プロバイダに問い合わせてIPv6 IPoE（v6プラス・クロスパス等）を有効にしましょう。PPPoEの混雑を回避でき、上下ともに速度が改善します。" },
              { title: "バックグラウンド同期を制御", desc: "Dropbox・OneDrive等のクラウド同期を一時停止するか、上り帯域の制限設定を行いましょう。Web会議中は同期を止めるのが効果的です。" },
              { title: "ルーターの買い替え", desc: "3年以上前のルーターは買い替えを検討しましょう。Wi-Fi 6対応ルーターは上り速度も大幅に改善されています。" },
              { title: "光回線の乗り換え", desc: "VDSL方式や速度の出ない回線からNURO光やauひかりなど上り速度に優れた回線に乗り換えることで、根本的に解決できます。" },
              { title: "回線タイプの確認・変更", desc: "マンションの場合、光配線方式への変更を管理組合に相談するか、戸建て方式の個別引き込みを検討しましょう。" },
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
          <h2 className="text-2xl font-bold mb-6">上り速度に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">上り速度に強い回線を選ぼう</h2>
          <p className="text-cyan-100 mb-8">テレワークの快適さは上り速度で決まります。回線選びで根本解決しましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">回線ランキングを見る</Link>
            <Link href="/trouble/zoom-slow/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">関連: Zoom会議が重い対策</Link>
          </div>
        </div>
      </section>
    </>
  );
}
