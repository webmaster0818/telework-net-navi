import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "テレワーク回線よくある質問 | FAQ",
  description: "テレワーク・リモートワークのインターネット回線に関するよくある質問をまとめました。必要な速度、回線選びのポイント、トラブル対処法まで網羅。",
};

const faqs = [
  {
    question: "テレワークに必要な回線速度の目安は？",
    answer: "Web会議（Zoom/Teams）を快適に行うには、下り30Mbps以上・上り10Mbps以上が最低ラインです。複数人のビデオ会議や画面共有を同時に行う場合は、下り50Mbps以上・上り20Mbps以上を推奨します。VPN接続を使う場合はさらに余裕があると安心です。",
  },
  {
    question: "光回線とモバイルWi-Fi（ポケットWi-Fi）、テレワークにはどちらが良いですか？",
    answer: "テレワーク用途では光回線を強くおすすめします。モバイルWi-Fiは通信量の制限、Ping値の高さ（遅延）、電波状況による不安定さがあり、Web会議の品質に影響します。光回線は通信量無制限で低遅延、安定した速度が得られるため、長時間のテレワークに適しています。",
  },
  {
    question: "上り速度が重要と言われるのはなぜですか？",
    answer: "テレワークではWeb会議での映像送信（カメラ映像のアップロード）、クラウドストレージへのファイルアップロード、画面共有など、上り方向の通信が頻繁に発生します。上り速度が遅いと自分のカメラ映像がカクつく、ファイルの共有に時間がかかる、画面共有が遅延するなどの問題が起きます。",
  },
  {
    question: "IPv6/IPoE接続にするとテレワークが快適になりますか？",
    answer: "はい。IPv6 IPoE接続は従来のPPPoE接続と異なり、NTTの網終端装置（ボトルネック）を経由しないため、利用者が集中する時間帯でも速度が低下しにくいです。特にフレッツ光回線を使う光コラボ（ドコモ光、ビッグローブ光、GMO光アクセスなど）では、IPv6 IPoE対応が速度改善に大きく貢献します。",
  },
  {
    question: "Web会議中に映像や音声が途切れる場合の対処法は？",
    answer: "以下の対策を順番に試してください。(1) Wi-Fiから有線LAN接続に切り替える、(2) Wi-Fiルーターを再起動する、(3) ルーターの設置場所を見直す（障害物を減らす）、(4) 同時接続している他の機器を減らす、(5) IPv6 IPoE接続に変更する、(6) プロバイダの変更を検討する。多くの場合、有線LAN接続への切り替えで改善します。",
  },
  {
    question: "マンションでテレワーク向けの回線を使うにはどうすればよいですか？",
    answer: "まず建物の配線方式を確認してください。光配線方式なら最大1Gbpsの速度が期待でき、テレワークに十分です。VDSL方式（最大100Mbps）の場合は、NURO光やauひかりの個別引き込みを検討するか、IPv6対応のプロバイダに変更して速度改善を図りましょう。管理会社への確認が第一歩です。",
  },
  {
    question: "VPN接続時に速度が遅くなるのですが対策はありますか？",
    answer: "VPN接続では暗号化処理のオーバーヘッドにより、通常時より10〜30%程度速度が低下するのは正常です。対策としては、(1) 回線自体の速度を上げる（高速回線への乗り換え）、(2) VPNサーバーに近い接続ポイントを選ぶ、(3) スプリットトンネリング（業務通信のみVPN経由）の設定、(4) 有線LAN接続の利用が有効です。",
  },
  {
    question: "回線工事にどのくらい時間がかかりますか？テレワーク開始に間に合いますか？",
    answer: "一般的な光コラボ（ドコモ光、ビッグローブ光など）で2〜4週間、NURO光で1〜3ヶ月程度です。繁忙期（3〜4月）はさらに遅れる可能性があります。テレワーク開始が決まったら早めに申し込むことが重要です。工事までの間はモバイルWi-Fiのレンタルで一時的に対応する方法もあります。",
  },
  {
    question: "テレワーク用にWi-Fiルーターを買い替えるべきですか？",
    answer: "Wi-Fi 5（802.11ac）以前のルーターを使っている場合は、Wi-Fi 6（802.11ax）対応ルーターへの買い替えをおすすめします。Wi-Fi 6は複数デバイスの同時接続に強く、テレワーク中に家族がネットを使っても速度低下しにくいです。また、IPv6 IPoE対応のルーターであることも確認しましょう。",
  },
  {
    question: "テレワーク回線の費用は会社に請求できますか？",
    answer: "企業によって対応は異なります。テレワーク手当として月額3,000〜5,000円程度を支給する企業が増えています。また、在宅勤務に伴う通信費は一定の計算式で経費精算できるケースもあります（国税庁のFAQ参照）。まずは勤務先の人事・総務部門に確認することをおすすめします。",
  },
];

export default function FaqPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "よくある質問" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">テレワーク回線 よくある質問</h1>
          <p className="text-cyan-100 leading-relaxed">テレワーク・リモートワークのインターネット回線に関する疑問にお答えします。</p>
        </div>
      </section>

      <section className="bg-[#F0F9FF] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-lg border border-gray-200 shadow-sm group" open={i === 0}>
                <summary className="p-5 cursor-pointer font-medium text-gray-800 flex items-center justify-between hover:text-[#0891B2] transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="bg-[#0891B2] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">Q{i + 1}</span>
                    <span>{faq.question}</span>
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 ml-11">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">おすすめ回線ガイド</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "速度重視なら", name: "NURO光", desc: "下り最大2Gbpsで業界最速クラス", href: "/review/nuro/" },
              { title: "安定性重視なら", name: "auひかり", desc: "独自回線で混雑に強い", href: "/review/au-hikari/" },
              { title: "コスパ重視なら", name: "GMO光アクセス", desc: "月額4,818円で縛りなし", href: "/review/gmo/" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="block bg-[#F0F9FF] rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <p className="text-sm text-[#0891B2] font-medium mb-1">{item.title}</p>
                <h3 className="font-bold text-lg text-[#0C4A6E] mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">最適なテレワーク回線を見つけよう</h2>
          <p className="text-cyan-100 mb-8">5社の詳細比較で、あなたに合った回線がきっと見つかります。</p>
          <Link href="/#ranking" className="inline-block bg-white text-[#0C4A6E] font-bold px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors shadow-lg">
            ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
