import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Google Meetに最適な回線は？【推奨環境ガイド】",
  description: "Google Meetでテレワーク会議を快適に行うための回線速度・推奨環境・設定のコツを解説。ブラウザだけで使えるMeetを最大限活用する方法をまとめました。",
};

const speedRequirements = [
  ["1対1音声通話", "100kbps", "100kbps"],
  ["1対1ビデオ通話（SD）", "1.0Mbps", "1.0Mbps"],
  ["1対1ビデオ通話（HD）", "2.6Mbps", "3.2Mbps"],
  ["グループ通話（5人）", "2.6Mbps", "3.2Mbps"],
  ["グループ通話（10人以上）", "3.2Mbps", "4.0Mbps"],
  ["画面共有", "500kbps", "500kbps"],
];

const faqs = [
  { question: "Google Meetに必要な回線速度はどのくらいですか？", answer: "Google公式の推奨速度は、HD画質の1対1通話で上り2.6Mbps・下り3.2Mbpsです。グループ通話（10人以上）では上り3.2Mbps・下り4.0Mbpsが推奨されます。安定運用には実測20Mbps以上を確保してください。" },
  { question: "Google MeetはChromeブラウザでないと使えませんか？", answer: "ChromeだけでなくEdge、Firefox、Safariでも利用可能です。ただし最も安定して動作するのはChromeです。ブラウザを最新版に更新し、不要な拡張機能を無効にすると通信負荷が軽減されます。" },
  { question: "Google Meetの通話品質が悪い場合の対処法は？", answer: "有線LAN接続への切り替え、ブラウザの他タブを閉じる、解像度を下げる（自動調整機能あり）、VPNを一時的にオフにする、IPv6 IPoE対応への切り替えが有効です。Meet設定画面から帯域制限を調整することもできます。" },
  { question: "Google MeetとZoomの回線要件の違いは？", answer: "どちらもHD画質で上り2〜4Mbps程度が推奨されており、大きな差はありません。Google Meetはブラウザベースのため、アプリのインストールが不要な分、手軽に使える一方、ブラウザのメモリ消費に注意が必要です。" },
  { question: "Google WorkspaceとGoogle Meetの関係は？", answer: "Google MeetはGoogle Workspaceの一部として提供されています。無料版では会議時間や参加人数に制限がありますが、Workspace契約があれば最大500人参加・録画機能・ブレイクアウトルームなど上位機能が利用可能です。" },
  { question: "Google Meetの背景ぼかし機能は回線に負荷をかけますか？", answer: "背景ぼかしや背景変更はPCのCPU/GPUに負荷をかけますが、回線帯域への影響は限定的です。ただしPCの処理が重くなることで映像エンコードが遅れ、結果的に通話品質が低下する場合があります。スペックに余裕がない場合はオフにしてください。" },
];

export default function GoogleMeetPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "Web会議ツール別ガイド" }, { name: "Google Meet" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">Web会議ツール別ガイド</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Google Meetに最適な回線は？</h1>
          <p className="text-cyan-100 leading-relaxed">ブラウザだけで使えるGoogle Meet。快適なテレワーク会議のための推奨回線環境と設定のポイントを解説します。</p>
        </div>
      </section>

      {/* Speed Requirements */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Google Meet 推奨帯域幅</h2>
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
          <p className="text-sm text-gray-500 mt-4">出典: Google Workspace管理者ヘルプ（2026年4月時点）。安定した会議のためには推奨値の5〜10倍の実測速度を確保してください。</p>
        </div>
      </section>

      {/* Meet Features */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Google Meetのテレワーク向け機能と回線要件</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "ノイズキャンセリング", desc: "AIによる自動ノイズ除去機能。処理はクラウド側で行われるため、安定した回線接続が前提です。回線が不安定だとノイズ除去の効果が低下します。" },
              { title: "自動字幕（日本語対応）", desc: "リアルタイムで日本語字幕を表示する機能。音声データの送受信が増えるため、わずかに帯域を消費しますが、聞き取りにくい環境でのテレワークに有効です。" },
              { title: "ブレイクアウトルーム", desc: "大人数の会議を小グループに分割する機能。グループ切り替え時に一時的に通信が増加するため、安定した回線があると切り替えがスムーズです。" },
              { title: "画面共有と共同編集", desc: "Google Docs等と連携して会議中に共同編集が可能。画面共有とドキュメント操作を同時に行うため、上り下りともに安定した帯域が必要です。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browser Optimization */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ブラウザ最適化でMeetを快適に</h2>
          <div className="bg-[#F0F9FF] rounded-lg p-6 border border-gray-100">
            <p className="text-sm text-gray-700 mb-4">Google Meetはブラウザベースのため、ブラウザの設定が通話品質に直結します。以下の最適化を行ってください。</p>
            <ul className="space-y-3">
              {[
                "Google Chromeを最新版に更新する（推奨ブラウザ）",
                "会議中は不要なタブを閉じてメモリを確保する",
                "広告ブロッカー等の拡張機能を最小限にする",
                "ハードウェアアクセラレーションを有効にする（Chrome設定）",
                "キャッシュを定期的にクリアする",
                "WebRTCの設定が正常か確認する（chrome://webrtc-internals/）",
                "カメラ・マイクのアクセス権限を事前に許可しておく",
                "VPNを使用している場合はスプリットトンネリングを設定する",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#0891B2] font-bold mt-0.5">-</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommended Providers */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Google Meet向けおすすめ光回線</h2>
          <div className="space-y-4">
            {[
              { name: "NURO光", reason: "下り2Gbps・上り1Gbpsの高速回線で、HD画質のグループ通話も余裕。Google Workspaceとの組み合わせで最高のテレワーク環境。", link: "/review/nuro/" },
              { name: "ドコモ光（GMOとくとくBB）", reason: "全国対応で導入しやすく、v6プラス対応でMeetのリアルタイム通信も安定。Google系サービスとの相性が良い。", link: "/review/docomo/" },
              { name: "GMO光アクセス", reason: "月額料金が安く、IPv6 IPoE標準対応。コスト重視のテレワーカーでもMeetの品質を確保できる。", link: "/review/gmo/" },
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
          <h2 className="text-2xl font-bold mb-6">Google Meetと回線に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">Google Meetを快適に使える回線を選ぼう</h2>
          <p className="text-cyan-100 mb-8">ブラウザ1つでWeb会議。安定した回線で生産性を最大化。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/tool/zoom/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">Zoom向けガイド</Link>
            <Link href="/tool/teams/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">Teams向けガイド</Link>
          </div>
        </div>
      </section>
    </>
  );
}
