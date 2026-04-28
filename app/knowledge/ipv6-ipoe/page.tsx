import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IPv6 IPoEとは？テレワークが速くなる仕組みを解説",
  description: "IPv6 IPoEの仕組みをわかりやすく解説。PPPoEとの違い、v6プラス・クロスパス・transixの違い、テレワークで速度が改善する理由、導入方法まで徹底ガイド。",
};

const faqs = [
  { question: "IPv6 IPoEとPPPoEの違いは何ですか？", answer: "PPPoEはプロバイダの認証装置（網終端装置）を経由してインターネットに接続する方式で、この装置が混雑のボトルネックになります。IPv6 IPoEはVNE事業者のネットワークを経由し、混雑しやすい網終端装置を通らないため、高速で安定した接続が可能です。" },
  { question: "v6プラス、クロスパス、transixの違いは？", answer: "いずれもIPv6 IPoEでIPv4通信も行うための技術ですが、採用するVNE事業者が異なります。v6プラスはJPNE、クロスパスはアルテリア・ネットワークス、transixはインターネットマルチフィードが提供しています。通信品質に大きな差はなく、利用するプロバイダによって使える方式が決まります。" },
  { question: "IPv6 IPoEにするとどのくらい速くなりますか？", answer: "PPPoE接続で混雑時に10〜50Mbps程度だった速度が、IPv6 IPoEに変更すると100〜400Mbps程度まで改善するケースが多いです。ただし効果はプロバイダや地域、時間帯によって異なります。" },
  { question: "IPv6 IPoEを使うには何が必要ですか？", answer: "プロバイダがIPv6 IPoEに対応していること、IPv6 IPoE対応のルーター（v6プラス対応ルーターなど）を使用していることが必要です。多くのプロバイダでは申し込みだけで無料〜月額数百円で利用できます。" },
  { question: "IPv6 IPoEのデメリットはありますか？", answer: "一部のオンラインゲームやVPN接続で制限が生じる場合があります。また、特定のポートを使う自宅サーバーの運用が難しくなることがあります。一般的なテレワーク用途では問題になることはほとんどありません。" },
  { question: "自分の回線がIPv6 IPoEかどうか確認する方法は？", answer: "test-ipv6.com にアクセスすると、IPv6接続の状態を確認できます。また、ルーターの管理画面で接続方式がIPoEになっているか確認する方法もあります。プロバイダのマイページでも確認可能です。" },
];

export default function Ipv6IpoePage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "知識" }, { name: "IPv6 IPoEとは" }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-blue-200 text-sm font-medium mb-2">テレワーク知識</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">IPv6 IPoEとは？テレワークが速くなる仕組み</h1>
          <p className="text-blue-100 leading-relaxed">「v6プラス」「クロスパス」の正体を解説。なぜIPv6 IPoEに変えるだけでテレワークが快適になるのかを図解します。</p>
        </div>
      </section>

      {/* What is IPv6 IPoE */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">IPv6 IPoEの基本</h2>
          <p className="text-gray-600 leading-relaxed mb-6">IPv6 IPoEとは、従来のPPPoE方式に代わるインターネット接続方式です。PPPoE方式では混雑しやすかったプロバイダの網終端装置を経由せず、VNE（Virtual Network Enabler）事業者のネットワークを通って直接インターネットに接続します。</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 rounded-lg p-6 border border-red-100">
              <h3 className="font-bold text-red-800 mb-3">従来のPPPoE方式</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>自宅 → NTT網 → <span className="font-bold text-red-600">網終端装置（混雑ポイント）</span> → プロバイダ → インターネット</p>
                <p className="text-red-600 text-xs mt-2">網終端装置の処理能力に限界があり、利用者が増えると速度低下</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3">IPv6 IPoE方式</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>自宅 → NTT網 → <span className="font-bold text-green-600">VNE事業者（大容量）</span> → インターネット</p>
                <p className="text-green-600 text-xs mt-2">網終端装置を経由しないため、混雑の影響を受けにくい</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Faster */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">IPv6 IPoEで速くなる理由</h2>
          <div className="space-y-4">
            {[
              { title: "混雑する網終端装置を回避", desc: "PPPoE方式の最大のボトルネックである網終端装置（NTE）を経由しません。NTT東西の網終端装置は全プロバイダの通信を集約するため混雑しやすいですが、IPv6 IPoEではVNE事業者が独自の大容量ネットワークで処理するため、混雑の影響を受けにくくなります。" },
              { title: "認証処理が不要", desc: "PPPoEではプロバイダへのログイン認証（ID/パスワード）が毎回必要ですが、IPoEでは回線自体で認証するため、認証処理のオーバーヘッドがありません。これにより接続の安定性が向上します。" },
              { title: "IPv4 over IPv6で互換性を維持", desc: "IPv6 IPoEでは、従来のIPv4サイト（IPv6非対応のサイト）にもアクセスできるよう、IPv4 over IPv6技術（MAP-E、DS-Liteなど）を使用します。これにより、IPv4サイトにも高速にアクセスできます。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#1E3A5F] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">主なIPv6 IPoEサービスの比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="px-4 py-3 text-left">サービス名</th>
                  <th className="px-4 py-3 text-left">提供事業者</th>
                  <th className="px-4 py-3 text-left">IPv4変換方式</th>
                  <th className="px-4 py-3 text-left">対応プロバイダ例</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["v6プラス", "JPNE", "MAP-E", "So-net光、GMOとくとくBB、enひかり等"],
                  ["クロスパス", "アルテリア", "DS-Lite", "楽天ひかり等"],
                  ["transix", "IMHD", "DS-Lite", "IIJmio、excite MEC光等"],
                  ["OCNバーチャルコネクト", "NTTコム", "MAP-E", "OCN光等"],
                  ["v6コネクト", "朝日ネット", "MAP-E", "ASAHIネット等"],
                ].map(([name, provider, method, examples]) => (
                  <tr key={name} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{name}</td>
                    <td className="px-4 py-3 text-gray-600">{provider}</td>
                    <td className="px-4 py-3 text-gray-600">{method}</td>
                    <td className="px-4 py-3 text-gray-600">{examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Switch */}
      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">IPv6 IPoEの導入手順</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "プロバイダのIPv6 IPoE対応を確認", desc: "現在利用中のプロバイダがIPv6 IPoEに対応しているか、公式サイトやサポートに確認します。未対応の場合はプロバイダの変更を検討しましょう。" },
              { step: "2", title: "IPv6 IPoEオプションを申し込む", desc: "対応プロバイダの場合、マイページや電話でIPv6 IPoEオプションを申し込みます。多くの場合、無料または月額200円程度で利用可能です。" },
              { step: "3", title: "対応ルーターを準備する", desc: "v6プラス対応、またはクロスパス対応のルーターが必要です。プロバイダからレンタルできる場合もあります。市販のルーターを購入する場合は対応方式を確認してください。" },
              { step: "4", title: "ルーターの設定を変更する", desc: "ルーターの接続方式をPPPoEからIPoEに変更します。多くの対応ルーターでは自動認識されますが、手動設定が必要な場合もあります。" },
              { step: "5", title: "速度を計測して効果を確認", desc: "fast.comやspeedtest.netで変更前後の速度を比較しましょう。特に混雑時間帯（12時、20時頃）での速度改善を確認してください。" },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="bg-[#3B82F6] text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">{item.step}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">IPv6 IPoEに関するよくある質問</h2>
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
          <h2 className="text-2xl font-bold mb-4">IPv6 IPoE対応の回線を選ぼう</h2>
          <p className="text-cyan-100 mb-8">テレワークを快適にする第一歩は、IPv6 IPoE対応の回線を選ぶことです。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">回線ランキングを見る</Link>
            <Link href="/trouble/daytime-slow/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">関連: 昼間に遅くなる対策</Link>
          </div>
        </div>
      </section>
    </>
  );
}
