import Link from "next/link";

const rankings = [
  {
    rank: 1,
    name: "NURO光",
    maxSpeed: "下り最大2Gbps",
    uploadSpeed: "上り最大1Gbps",
    monthlyFee: "5,200円",
    features: ["ソニーグループ運営", "独自回線で高速", "Wi-Fiルーター内蔵ONU", "セキュリティソフト無料"],
    pros: ["下り最大2Gbpsで業界最速クラス", "上り1Gbpsで大容量ファイル送信も快適", "Web会議中の映像・音声が安定"],
    cons: ["提供エリアが限定的", "開通まで1〜3ヶ月かかる場合あり"],
    recommend: "高画質Web会議や大容量データ送受信が多いテレワーカーに最適。回線品質を最重視する方におすすめ。",
    reviewPath: "/review/nuro/",
  },
  {
    rank: 2,
    name: "auひかり",
    maxSpeed: "下り最大1Gbps",
    uploadSpeed: "上り最大1Gbps",
    monthlyFee: "5,610円",
    features: ["独自回線で混雑なし", "au/UQスマホ割あり", "高額キャッシュバック", "IPv6デュアルスタック"],
    pros: ["独自回線のため夜間でも速度低下しにくい", "au/UQモバイルとのセット割で通信費を削減", "上り速度が安定しておりファイルアップに強い"],
    cons: ["マンションタイプは建物設備により速度差あり", "関西・東海・沖縄は戸建て未提供"],
    recommend: "安定した回線品質とスマホ割を両立したい方に。独自回線ならではの混雑耐性が強み。",
    reviewPath: "/review/au-hikari/",
  },
  {
    rank: 3,
    name: "ドコモ光",
    maxSpeed: "下り最大1Gbps",
    uploadSpeed: "上り最大1Gbps",
    monthlyFee: "5,720円",
    features: ["フレッツ光回線", "プロバイダ選択自由", "ドコモスマホ割", "IPv6 IPoE対応"],
    pros: ["全国エリアカバー率が高い", "ドコモスマホ割で家族全員の通信費削減", "IPv6対応プロバイダ選択で高速通信可能"],
    cons: ["プロバイダにより品質差がある", "料金はやや高め"],
    recommend: "ドコモユーザーで家族のスマホ割を最大限活用したい方に。エリアの広さも安心材料。",
    reviewPath: "/review/docomo/",
  },
  {
    rank: 4,
    name: "ビッグローブ光",
    maxSpeed: "下り最大1Gbps",
    uploadSpeed: "上り最大1Gbps",
    monthlyFee: "5,478円",
    features: ["IPv6 IPoE標準装備", "auスマホ割対応", "昼間の速度安定", "老舗プロバイダの信頼性"],
    pros: ["IPv6 IPoE標準で追加設定なしに高速化", "日中のテレワーク時間帯に速度が安定", "auスマホとのセット割で月額を抑えられる"],
    cons: ["夜間のピーク時は若干速度低下の報告あり", "キャッシュバック受取りまでの期間が長い"],
    recommend: "日中メインのテレワーカーに。IPv6標準対応と安定した昼間速度が魅力。",
    reviewPath: "/review/biglobe/",
  },
  {
    rank: 5,
    name: "GMO光アクセス",
    maxSpeed: "下り最大1Gbps",
    uploadSpeed: "上り最大1Gbps",
    monthlyFee: "4,818円",
    features: ["月額最安級の料金設定", "v6プラス標準対応", "Wi-Fiルーター無料レンタル", "契約縛りなし"],
    pros: ["月額4,818円で光回線最安クラスのコスパ", "v6プラス標準で混雑回避", "契約期間の縛りがなく解約金不要"],
    cons: ["回線はフレッツ光で混雑の影響を受ける可能性", "サポート対応に時間がかかる場合あり"],
    recommend: "コストを抑えつつ必要十分な速度を確保したい方に。縛りなしで気軽に始められる。",
    reviewPath: "/review/gmo/",
  },
];

const faqs = [
  {
    question: "テレワークに必要な回線速度はどのくらいですか？",
    answer: "Web会議を快適に行うには、下り30Mbps以上・上り10Mbps以上が目安です。複数人でのビデオ通話や画面共有を行う場合は、下り50Mbps以上・上り20Mbps以上あると安心です。",
  },
  {
    question: "上り速度が重要なのはなぜですか？",
    answer: "テレワークではWeb会議の映像送信やファイルアップロードなど、上り方向の通信が頻繁に発生します。上り速度が遅いと自分の映像がカクつく、ファイル共有に時間がかかるなどの問題が起きます。",
  },
  {
    question: "光回線とモバイルWi-Fi、テレワークにはどちらが良いですか？",
    answer: "安定性・速度・通信量の観点から、テレワークには光回線を強くおすすめします。モバイルWi-Fiは通信制限やPing値の高さがWeb会議の品質に影響する場合があります。",
  },
  {
    question: "マンションでもテレワーク向き回線は使えますか？",
    answer: "はい。多くの光回線はマンションプランを提供しています。ただし建物の設備や配線方式により速度が異なるため、VDSL方式よりも光配線方式の物件の方が高速です。",
  },
  {
    question: "IPv6/IPoE接続とは何ですか？",
    answer: "IPv6 IPoE接続は、従来のPPPoE接続と異なりNTTの網終端装置を経由しないため、夜間など混雑時でも速度が低下しにくい接続方式です。テレワーク用途では特におすすめです。",
  },
  {
    question: "回線工事にはどのくらい時間がかかりますか？",
    answer: "一般的に申し込みから2〜4週間程度ですが、繁忙期やNURO光の場合は1〜3ヶ月かかることもあります。テレワーク開始前に余裕を持って申し込むことをおすすめします。",
  },
  {
    question: "Web会議が途切れるときの対処法は？",
    answer: "Wi-Fiルーターの再起動、有線LAN接続への切り替え、ルーターの設置場所変更、IPv6対応プロバイダへの変更などが効果的です。また、同時接続機器を減らすことも有効です。",
  },
  {
    question: "テレワーク向け回線を選ぶポイントは？",
    answer: "上り速度の安定性、Ping値の低さ（Web会議の応答速度）、IPv6対応、時間帯ごとの速度安定性、料金とスマホ割の有無を総合的に比較することが重要です。",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] via-[#0E5A82] to-[#0891B2] text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#67E8F9] text-sm font-medium tracking-widest uppercase mb-4">
            Telework Internet Guide 2026
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            テレワークの回線選び、<br className="md:hidden" />もう迷わない
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Web会議の安定性・上り速度・料金を徹底比較。<br className="hidden md:block" />
            在宅勤務に本当に必要な回線をプロ目線で厳選しました。
          </p>
          <Link
            href="#ranking"
            className="inline-block bg-white text-[#0C4A6E] font-bold px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors shadow-lg"
          >
            ランキングを見る
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10社", label: "厳選比較" },
              { value: "実測", label: "速度データ" },
              { value: "安定性", label: "Web会議品質" },
              { value: "上り重視", label: "テレワーク特化" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0891B2] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="bg-[#F0F9FF] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              テレワーク向け光回線ランキング
            </h2>
            <p className="text-gray-500">Web会議安定性・上り速度・コスパを総合評価</p>
          </div>

          <div className="space-y-8">
            {rankings.map((item) => (
              <div key={item.rank} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:flex">
                  {/* Rank & Name */}
                  <div className="bg-gradient-to-b from-[#0C4A6E] to-[#0E5A82] text-white p-6 md:w-64 flex flex-col justify-center items-center text-center">
                    <span className="text-[#67E8F9] text-sm font-medium">RANK</span>
                    <span className="text-5xl font-bold my-1">{item.rank}</span>
                    <span className="text-xl font-bold mt-2">{item.name}</span>
                    <span className="text-cyan-200 text-lg font-bold mt-1">月額{item.monthlyFee}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 p-6">
                    {/* Speed & Price */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-cyan-50 text-[#0891B2] px-3 py-1 rounded-full text-sm font-medium">{item.maxSpeed}</span>
                      <span className="bg-cyan-50 text-[#0891B2] px-3 py-1 rounded-full text-sm font-medium">{item.uploadSpeed}</span>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.map((f) => (
                        <span key={f} className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-medium">{f}</span>
                      ))}
                    </div>

                    {/* Pros */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-gray-700 mb-2">メリット</h4>
                      <ul className="space-y-1">
                        {item.pros.map((p) => (
                          <li key={p} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-[#0891B2] mt-0.5 flex-shrink-0">+</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-gray-700 mb-2">注意点</h4>
                      <ul className="space-y-1">
                        {item.cons.map((c) => (
                          <li key={c} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-orange-400 mt-0.5 flex-shrink-0">-</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommend */}
                    <div className="bg-[#F0F9FF] rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-700"><span className="font-bold text-[#0891B2]">おすすめポイント:</span> {item.recommend}</p>
                    </div>

                    <Link
                      href={item.reviewPath}
                      className="inline-block bg-[#0891B2] text-white font-medium px-6 py-2.5 rounded-lg hover:bg-[#0C4A6E] transition-colors text-sm"
                    >
                      詳細レビューを見る
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">5社比較一覧表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0C4A6E] text-white">
                  <th className="p-3 text-left font-medium">回線名</th>
                  <th className="p-3 text-left font-medium">月額料金</th>
                  <th className="p-3 text-left font-medium">下り最大</th>
                  <th className="p-3 text-left font-medium">上り最大</th>
                  <th className="p-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((item, i) => (
                  <tr key={item.name} className={i % 2 === 0 ? "bg-[#F0F9FF]" : "bg-white"}>
                    <td className="p-3 font-bold text-[#0C4A6E]">
                      <Link href={item.reviewPath} className="hover:text-[#0891B2]">{item.name}</Link>
                    </td>
                    <td className="p-3">{item.monthlyFee}</td>
                    <td className="p-3">{item.maxSpeed.replace("下り最大", "")}</td>
                    <td className="p-3">{item.uploadSpeed.replace("上り最大", "")}</td>
                    <td className="p-3 text-gray-600">{item.features[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F0F9FF] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            テレワーク回線よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-lg border border-gray-200 group">
                <summary className="p-5 cursor-pointer font-medium text-gray-800 flex items-center justify-between hover:text-[#0891B2] transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-[#0891B2] font-bold text-sm">Q{i + 1}</span>
                    {faq.question}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            あなたに最適なテレワーク回線を見つけよう
          </h2>
          <p className="text-cyan-100 mb-8 leading-relaxed">
            各回線の詳細レビューでは、実際のテレワーカーの口コミや速度実測データをご紹介しています。
          </p>
          <Link
            href="#ranking"
            className="inline-block bg-white text-[#0C4A6E] font-bold px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors shadow-lg"
          >
            ランキングに戻る
          </Link>
        </div>
      </section>
    </>
  );
}
