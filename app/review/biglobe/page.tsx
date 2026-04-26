import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ビッグローブ光の口コミ・評判 | テレワーク向け徹底レビュー",
  description: "ビッグローブ光はテレワークに向いている？IPv6 IPoE標準対応・昼間の速度安定性・auスマホ割を徹底レビュー。在宅勤務ユーザーの口コミも掲載。",
};

const reviews = [
  { label: "テレワーク歴2年のユーザー", rating: 4, text: "IPv6 IPoEが標準で使えるので、面倒な設定なしに高速接続できました。日中のテレワーク時間帯は下り300Mbps以上安定して出ており、Web会議も快適です。auスマホ割で月々1,100円引きなのも嬉しい。" },
  { label: "在宅カスタマーサポート", rating: 4, text: "1日中ヘッドセットで通話しながら画面共有する仕事ですが、昼間は全く問題ありません。ただ夜20時以降は若干速度が落ちる印象です。テレワークは基本9時〜18時なので業務には支障なし。" },
  { label: "テレワーク歴3年のマーケター", rating: 5, text: "コスパの良さで選びました。月額5,478円でIPv6標準対応、auスマホ割もあるので実質的にかなりお得。昼間のZoom会議は画質も安定していて満足しています。" },
  { label: "テレワーク歴1年のプログラマー", rating: 3, text: "昼間は問題ないのですが、夜間にGitHubへのpushが遅くなることがあります。テレワーク用途なら十分ですが、夜型の人には向かないかも。キャッシュバックの受取りが12ヶ月後と遅いのが難点。" },
];

const faqs = [
  { question: "ビッグローブ光の実測速度は？", answer: "IPv6 IPoE接続時で、下り200〜400Mbps、上り150〜250Mbps程度の実測値が報告されています。特に日中の速度安定性に定評があります。" },
  { question: "IPv6 IPoEは追加料金がかかりますか？", answer: "いいえ。ビッグローブ光ではIPv6 IPoE（IPv6オプション）が標準で無料提供されています。申し込み時に自動的に設定されます。" },
  { question: "auスマホ割は使えますか？", answer: "はい。auスマートバリューで1回線あたり最大1,100円/月割引が適用されます。UQモバイルの自宅セット割にも対応しています。" },
  { question: "テレワーク時間帯の速度は安定していますか？", answer: "日中（9時〜18時）の速度安定性には定評があります。フレッツ光回線を使用していますが、IPv6 IPoE接続により混雑を回避しているため、テレワーク時間帯は快適です。" },
  { question: "キャッシュバックの条件は？", answer: "キャッシュバック金額は時期やキャンペーンにより異なりますが、受取りまでに12ヶ月程度かかるケースが多いです。受取り手続きのメールを見逃さないよう注意が必要です。" },
  { question: "契約期間と違約金は？", answer: "3年契約で更新月以外の解約時に4,230円の違約金が発生します。2年契約プランもありますが月額が若干高くなります。" },
];

export default function BiglobeReviewPage() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "ビッグローブ光" }]} />

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cyan-200 text-sm font-medium mb-2">光回線レビュー</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ビッグローブ光 テレワーク向け徹底レビュー</h1>
          <p className="text-cyan-100 leading-relaxed">IPv6 IPoE標準装備で昼間の速度安定性に定評。auスマホ割でお得に使えるビッグローブ光を検証。</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["回線名", "ビッグローブ光"],
                  ["運営会社", "ビッグローブ（KDDIグループ）"],
                  ["下り最大速度", "1Gbps"],
                  ["上り最大速度", "1Gbps"],
                  ["月額料金（戸建て）", "5,478円"],
                  ["月額料金（マンション）", "4,378円"],
                  ["初期費用", "事務手数料3,300円 + 工事費28,600円（実質無料）"],
                  ["契約期間", "3年（自動更新）"],
                  ["提供エリア", "全国（フレッツ光提供エリア）"],
                  ["IPv6対応", "IPv6 IPoE標準対応（無料）"],
                  ["テレワーク適性", "高い（特に日中）"],
                ].map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-100">
                    <th className="bg-[#F0F9FF] px-4 py-3 text-left font-medium text-gray-700 w-40">{key}</th>
                    <td className="px-4 py-3 text-gray-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ビッグローブ光がテレワークに強い理由</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "IPv6 IPoE標準装備", desc: "申し込み時から自動的にIPv6 IPoE接続が設定されるため、追加申請や設定の手間なく高速通信を利用できます。" },
              { title: "昼間の速度安定性", desc: "テレワークのコアタイムである日中の速度安定性に定評があり、Web会議やVPN接続が快適に行えます。" },
              { title: "auスマホ割でコスト削減", desc: "auスマートバリュー対応で家族のauスマホ料金を割引。KDDIグループならではのメリットです。" },
              { title: "老舗プロバイダの信頼性", desc: "30年以上の歴史を持つ老舗プロバイダ。技術力とサポート体制に安定感があります。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-[#0891B2] mb-4">メリット</h2>
              <ul className="space-y-3">
                {["IPv6 IPoE標準で追加設定不要", "日中のテレワーク時間帯に安定した速度", "auスマホ割で通信費を節約", "全国エリア対応（フレッツ光網）", "月額5,478円で比較的リーズナブル"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-[#0891B2] font-bold mt-0.5">+</span>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">デメリット</h2>
              <ul className="space-y-3">
                {["夜間のピーク時に速度低下の可能性", "キャッシュバック受取りまで時間がかかる", "フレッツ光回線のため独自回線には劣る", "3年契約の縛りがある"].map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-orange-400 font-bold mt-0.5">-</span>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F9FF] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">テレワーカーの口コミ</h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#0891B2]">{r.label}</span>
                  <span className="text-sm text-yellow-500">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">ビッグローブ光に関するよくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-[#F0F9FF] rounded-lg border border-gray-200 group">
                <summary className="p-5 cursor-pointer font-medium text-gray-800 flex items-center justify-between hover:text-[#0891B2]">
                  <span className="flex items-center gap-3"><span className="text-[#0891B2] font-bold text-sm">Q{i + 1}</span>{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">ビッグローブ光で日中快適なテレワークを</h2>
          <p className="text-cyan-100 mb-8">IPv6標準対応と安定した昼間速度でテレワークをサポート。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-[#0C4A6E] font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">ランキングに戻る</Link>
            <Link href="/review/gmo/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">次: GMO光アクセス</Link>
          </div>
        </div>
      </section>
    </>
  );
}
