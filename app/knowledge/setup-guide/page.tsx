import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "テレワークのネット環境を整える完全ガイド【初心者向け】",
  description: "テレワーク初心者向けにネット環境の整え方を徹底解説。光回線の選び方、Wi-Fiルーターの設定、有線LAN接続、セキュリティ対策まで、自宅の仕事環境を一から構築する手順を紹介。",
};

const faqs = [
  { question: "テレワークを始めるのに最低限必要なネット環境は？", answer: "光回線（下り30Mbps以上・上り10Mbps以上の実測速度）、Wi-Fiルーターまたは有線LAN接続、セキュリティソフトの3つが最低限必要です。ビデオ会議を頻繁に行う場合は、有線LAN接続を強く推奨します。" },
  { question: "テレワーク用の回線工事にはどのくらい時間がかかりますか？", answer: "光回線の新規開通は申込みから2〜4週間が目安です。NURO光は2回の工事が必要で1〜3ヶ月かかる場合があります。既にフレッツ光が開通済みの場合、プロバイダ変更（転用・事業者変更）なら工事不要で1〜2週間で切り替わります。" },
  { question: "マンションでテレワーク環境を整えるコツは？", answer: "まずマンションの回線方式を確認してください。光配線方式なら高速通信が期待できます。VDSL方式の場合は速度に限界があるため、NURO光のような個別引き込みの検討をおすすめします。Wi-Fiは5GHz帯を使い、可能なら有線LAN接続にしましょう。" },
  { question: "セキュリティ対策は何をすればいいですか？", answer: "セキュリティソフトのインストール、OSとアプリの自動更新有効化、ルーターのファームウェア更新、Wi-Fiの暗号化方式をWPA3に設定、VPN利用（会社指定がある場合）の5つが基本です。" },
  { question: "テレワーク環境の構築費用はどのくらいですか？", answer: "光回線の月額料金が4,000〜6,000円程度、Wi-Fiルーターが10,000〜15,000円（購入時のみ）、LANケーブルが500〜1,500円程度です。セキュリティソフトは光回線のオプションで無料の場合もあります。初期費用は工事費を含め2〜5万円程度ですが、キャンペーンで実質無料になることが多いです。" },
  { question: "現在の環境がテレワークに十分か確認する方法は？", answer: "fast.comで下り・上りの速度を計測し、下り30Mbps以上・上り10Mbps以上あるか確認してください。次にZoomのテストミーティング（zoom.us/test）で映像・音声の品質を確認します。問題がなければ現在の環境でテレワーク可能です。" },
];

export default function SetupGuidePage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "知識" }, { name: "ネット環境セットアップガイド" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-blue-200 text-sm font-medium mb-2">テレワーク知識</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">テレワークのネット環境を整える完全ガイド</h1>
          <p className="text-blue-100 leading-relaxed">初心者でも迷わない。回線選びからセキュリティ対策まで、テレワーク環境の構築を一から解説します。</p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワーク環境に必要な4つの要素</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "1", title: "光回線（インターネット回線）", desc: "テレワークの土台。ビデオ会議やクラウドサービスを快適に使うには、光回線が必須です。モバイル回線では通信量制限や速度不安定のリスクがあります。" },
              { num: "2", title: "Wi-Fiルーター / 有線LAN", desc: "光回線をPCやスマートフォンに接続する機器。テレワークの安定性を左右する重要な要素です。可能なら有線LAN接続をおすすめします。" },
              { num: "3", title: "セキュリティ対策", desc: "自宅ネットワークのセキュリティは自分で守る必要があります。セキュリティソフト、ファイアウォール、VPNなどの対策が必要です。" },
              { num: "4", title: "バックアップ回線", desc: "光回線の障害時に備えて、スマートフォンのテザリングなどバックアップ手段を用意しておくと安心です。" },
            ].map((item) => (
              <div key={item.num} className="bg-[#F0F9FF] rounded-lg p-6 border border-blue-100">
                <div className="flex items-start gap-3">
                  <span className="bg-[#3B82F6] text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[#1E3A5F] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1: Choose ISP */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">Step 1: 光回線を選ぶ</h2>
          <p className="text-gray-600 mb-6">テレワークに適した光回線の選び方を解説します。</p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-3">チェックポイント</h3>
              <ul className="space-y-2">
                {[
                  "IPv6 IPoE（v6プラス・クロスパス等）に対応しているか",
                  "提供エリアに自宅が含まれているか",
                  "マンションの場合、回線方式（光配線/VDSL/LAN）を確認",
                  "月額料金と契約期間（縛りの有無）",
                  "工事費の実質無料キャンペーンがあるか",
                  "セキュリティソフトやルーターの無料特典があるか",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#3B82F6] font-bold mt-0.5">-</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-3">住居タイプ別のおすすめ</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded p-4">
                  <p className="font-medium text-blue-800 text-sm mb-2">戸建ての場合</p>
                  <p className="text-sm text-gray-600">NURO光（提供エリア内の場合）、auひかり、ドコモ光（v6プラス付き）がおすすめ。上下ともに高速な回線を選べます。</p>
                </div>
                <div className="bg-blue-50 rounded p-4">
                  <p className="font-medium text-blue-800 text-sm mb-2">マンションの場合</p>
                  <p className="text-sm text-gray-600">まず建物の回線方式を確認。光配線方式なら光コラボ系、VDSL方式で速度が不満ならNURO光の個別引き込みを検討。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Router Setup */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">Step 2: ルーターを設定する</h2>
          <p className="text-gray-600 mb-6">回線が開通したら、ルーターの最適な設定を行いましょう。</p>
          <div className="space-y-4">
            {[
              { title: "IPv6 IPoE接続を有効にする", desc: "ルーターの管理画面にアクセスし、接続方式をIPoEに設定します。対応ルーターなら自動認識される場合が多いですが、手動設定が必要な場合はプロバイダの設定ガイドを参照してください。" },
              { title: "Wi-Fiのセキュリティを設定", desc: "暗号化方式はWPA3（またはWPA2）を選択し、推測されにくいパスワードを設定します。初期設定のパスワードは必ず変更してください。" },
              { title: "5GHz帯のSSIDに接続する", desc: "ルーターからは2.4GHz帯と5GHz帯の2つのSSIDが発信されます。テレワーク用のPCは干渉の少ない5GHz帯に接続しましょう。ルーターから離れている場合は2.4GHz帯の方が安定することもあります。" },
              { title: "ファームウェアを最新に更新", desc: "ルーターの管理画面からファームウェアの更新を確認し、最新版に更新します。セキュリティパッチや性能改善が含まれています。自動更新を有効にしておくと安心です。" },
              { title: "ルーターの設置場所を最適化", desc: "床に直置きせず、棚の上など高い位置に設置します。電子レンジの近くは避け、作業部屋に近い場所に配置しましょう。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#F0F9FF] rounded-lg p-6 border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 3: Wired Connection */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">Step 3: 有線LAN接続を検討する</h2>
          <p className="text-gray-600 mb-6">Web会議の安定性を最大限に高めるなら、有線LAN接続がおすすめです。</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-[#1E3A5F] mb-3">有線LAN接続のメリット</h3>
              <ul className="space-y-2">
                {[
                  "Wi-Fiの電波干渉の影響を受けない",
                  "通信速度が安定する（速度の揺れが少ない）",
                  "レイテンシ（遅延）が低い",
                  "Web会議の映像・音声が途切れにくい",
                  "設定が簡単（ケーブルを差すだけ）",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold mt-0.5">+</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-[#1E3A5F] mb-3">必要なもの</h3>
              <ul className="space-y-2">
                {[
                  "LANケーブル（Cat6以上推奨、長さは必要分）",
                  "ルーターのLANポート（空きがあることを確認）",
                  "PCのLANポート（ない場合はUSB-LANアダプタ）",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#3B82F6] font-bold mt-0.5">-</span>{item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-4">LANケーブル（Cat6、5m）は500〜1,000円程度で購入できます。USB-LANアダプタは1,500〜3,000円程度です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Security */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">Step 4: セキュリティ対策を行う</h2>
          <p className="text-gray-600 mb-6">自宅でテレワークを行う場合、オフィスとは異なるセキュリティリスクに注意が必要です。</p>
          <div className="space-y-4">
            {[
              { title: "セキュリティソフトを導入", desc: "Windows Defenderに加えて、専用のセキュリティソフトの導入を検討しましょう。So-net光やNURO光ではカスペルスキーが無料で提供されています。" },
              { title: "OSとアプリを常に最新に保つ", desc: "Windows Update、macOSのソフトウェアアップデートを自動更新に設定し、セキュリティパッチを速やかに適用しましょう。" },
              { title: "Wi-Fiの暗号化を確認", desc: "ルーターのWi-Fi暗号化方式がWPA3またはWPA2になっているか確認してください。WEPやWPA（初代）は脆弱なので使用しないでください。" },
              { title: "VPN接続（会社指定がある場合）", desc: "会社がVPN接続を指定している場合は、必ずVPNを経由して業務を行いましょう。VPN接続時は速度が低下する場合があるため、回線速度に余裕を持つことが重要です。" },
              { title: "パスワード管理", desc: "業務アカウントのパスワードは使い回さず、パスワードマネージャーの利用を検討しましょう。二要素認証が利用できるサービスでは必ず有効にしてください。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#FEF2F2] rounded-lg p-6 border border-red-100">
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワーク環境チェックリスト</h2>
          <div className="bg-white rounded-lg p-6 border border-gray-100">
            <div className="space-y-3">
              {[
                "光回線を契約した（IPv6 IPoE対応）",
                "Wi-Fiルーターを設置・設定した",
                "5GHz帯のWi-Fiに接続している（または有線LAN接続）",
                "fast.comで速度を計測し、下り30Mbps・上り10Mbps以上を確認",
                "ルーターのファームウェアを最新に更新した",
                "Wi-Fiのパスワードを初期設定から変更した",
                "セキュリティソフトをインストールした",
                "OSの自動更新を有効にした",
                "Zoom/Teamsのテスト通話で品質を確認した",
                "バックアップ回線（テザリング等）を準備した",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワーク環境に関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">まずは回線選びから始めよう</h2>
          <p className="text-cyan-100 mb-8">テレワーク環境の土台は光回線。最適な回線をランキングで比較できます。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">回線ランキングを見る</Link>
            <Link href="/knowledge/router/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">関連: おすすめルーター5選</Link>
          </div>
        </div>
      </section>
    </>
  );
}
