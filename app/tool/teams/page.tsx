import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Microsoft Teamsに最適な回線は？【安定接続のコツ】",
  description: "Microsoft Teamsでテレワーク会議を安定して行うための回線選び。必要速度・推奨設定・トラブル対策をまとめた完全ガイドです。",
};

const speedRequirements = [
  ["1対1音声通話", "58kbps", "58kbps"],
  ["1対1ビデオ通話（360p）", "500kbps", "500kbps"],
  ["1対1ビデオ通話（720p HD）", "1.2Mbps", "1.2Mbps"],
  ["1対1ビデオ通話（1080p）", "2.0Mbps", "2.0Mbps"],
  ["グループビデオ通話", "2.0Mbps", "4.0Mbps"],
  ["画面共有", "250kbps", "250kbps"],
  ["Together モード", "1.0Mbps", "2.0Mbps"],
];

const faqs = [
  { question: "Teamsに必要な回線速度はどのくらいですか？", answer: "Microsoft公式の推奨速度は、1対1のHDビデオ通話で上り下りともに1.2Mbpsです。グループ通話では上り2.0Mbps・下り4.0Mbpsが推奨されます。安定した会議のためには実測20Mbps以上を目安にしてください。" },
  { question: "Teamsの通話が途切れる場合の対処法は？", answer: "まず有線LAN接続に切り替えてください。Wi-Fi使用時は5GHz帯に接続し、ルーターとの距離を縮めます。それでも改善しない場合は、IPv6 IPoE対応への切り替えや、ルーターのQoS設定でTeamsの通信を優先する方法が有効です。" },
  { question: "TeamsとZoom、回線要件に違いはありますか？", answer: "Teamsのほうがやや帯域要件が低く設計されていますが、実際の使用感では大きな差はありません。どちらも安定運用には実測20Mbps以上が目安です。TeamsはMicrosoft 365との統合機能が多い分、バックグラウンド通信が多くなる傾向があります。" },
  { question: "Teamsでカメラをオフにすると通信量は減りますか？", answer: "大幅に減ります。ビデオをオフにすると通信量は音声通話レベル（58kbps程度）まで下がります。回線が不安定な場合の応急処置として有効ですが、コミュニケーション品質を考えるとカメラオンが望ましいため、根本的な回線改善を推奨します。" },
  { question: "Teamsのバックグラウンド通信が多いのですが？", answer: "TeamsはOneDrive同期、チャット受信、プレゼンス更新など常時通信を行います。テレワーク中は他のMicrosoft 365アプリの同期タイミングを調整し、会議中は不要なファイルの同期を一時停止すると回線負荷を軽減できます。" },
  { question: "Teams会議の録画には追加の回線速度が必要ですか？", answer: "Teams会議の録画はクラウド（OneDrive/SharePoint）に保存されるため、録画自体に追加の帯域は必要ありません。ただし、録画の再生やダウンロード時にはそれなりの下り速度が求められます。" },
];

export default function TeamsPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "Web会議ツール別ガイド" }, { name: "Microsoft Teams" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">Web会議ツール別ガイド</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Microsoft Teamsに最適な回線は？</h1>
          <p className="text-cyan-100 leading-relaxed">企業導入率No.1のWeb会議ツールTeams。安定した接続を実現するための回線選びと設定のコツを解説します。</p>
        </div>
      </section>

      {/* Speed Requirements */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Teams公式の推奨帯域幅</h2>
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
          <p className="text-sm text-gray-500 mt-4">出典: Microsoft公式ドキュメント（2026年4月時点）。実際の利用では推奨値の10倍以上の実測速度があると安定します。</p>
        </div>
      </section>

      {/* Teams Specific Tips */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Teamsで安定接続を実現するコツ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "QoS設定でTeamsの通信を優先", desc: "ルーターのQoS（Quality of Service）機能でTeamsの通信を優先設定すると、家族の動画視聴やダウンロードと同時利用しても会議が途切れにくくなります。" },
              { title: "Microsoft 365の同期タイミング調整", desc: "OneDriveやSharePointの同期が会議と同時に走ると帯域を圧迫します。会議中はファイル同期を一時停止する、または同期スケジュールを業務時間外に設定しましょう。" },
              { title: "有線LAN接続とIPv6 IPoEの併用", desc: "有線LAN接続で安定性を確保しつつ、IPv6 IPoE対応プロバイダで混雑を回避する組み合わせが、Teamsに最も適したネットワーク環境です。" },
              { title: "Teams管理センターで通話品質を監視", desc: "IT管理者はTeams管理センターの通話品質ダッシュボードで、社員の接続品質をモニタリングできます。問題のある社員に回線改善をアドバイスしましょう。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Setup */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Teams向け推奨ネットワーク構成</h2>
          <div className="bg-[#F0F9FF] rounded-lg p-6 border border-gray-100">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#0C4A6E] mb-2">基本構成（個人テレワーカー向け）</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>- 光回線（実測下り100Mbps以上・上り50Mbps以上）</li>
                  <li>- IPv6 IPoE対応プロバイダ</li>
                  <li>- Wi-Fi 6対応ルーター（有線LAN接続がベスト）</li>
                  <li>- CAT6以上のLANケーブル</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0C4A6E] mb-2">上級構成（管理職・頻繁な大規模会議向け）</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>- NURO光またはauひかり（独自回線で安定性重視）</li>
                  <li>- QoS設定済みルーター</li>
                  <li>- 有線LAN接続（必須）</li>
                  <li>- UPS（無停電電源装置）で停電対策</li>
                  <li>- モバイル回線（障害時のバックアップ）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Providers */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Teams向けおすすめ光回線</h2>
          <div className="space-y-4">
            {[
              { name: "NURO光", reason: "独自回線の安定性がTeamsの常時接続と相性抜群。上り1Gbpsで画面共有もスムーズ。", link: "/review/nuro/" },
              { name: "auひかり", reason: "KDDIの独自回線で安定性が高い。法人プランも充実しており、企業テレワークにも対応。", link: "/review/au-hikari/" },
              { name: "ドコモ光（GMOとくとくBB）", reason: "全国対応で導入しやすい。v6プラス対応で混雑を回避し、Teams会議も安定。", link: "/review/docomo/" },
            ].map((provider, i) => (
              <div key={provider.name} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#0891B2] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">{i + 1}</span>
                  <h3 className="font-bold text-lg text-[#0C4A6E]">{provider.name}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{provider.reason}</p>
                <Link href={provider.link} className="text-sm text-[#0891B2] font-medium hover:underline">詳細レビューを読む →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Teamsと回線に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">Teams会議を安定させる回線選び</h2>
          <p className="text-cyan-100 mb-8">企業のテレワークを支える安定回線をランキングでチェック。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/tool/zoom/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">Zoom向けガイド</Link>
            <Link href="/tool/google-meet/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">Google Meet向けガイド</Link>
          </div>
        </div>
      </section>
    </>
  );
}
