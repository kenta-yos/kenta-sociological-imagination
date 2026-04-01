import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative py-24 px-6 text-center bg-stone-100">
      <div className="max-w-2xl mx-auto">
        <Image
          src="/kendog-transparent.png"
          alt="Kenta アイコン"
          width={96}
          height={96}
          className="mx-auto mb-6 rounded-full"
          priority
        />
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-2">
          Kenta
        </h1>
        <p className="text-lg text-amber-800 font-serif mb-6">学術書キュレーター</p>
        <p className="text-stone-600 text-lg leading-relaxed">
          ちょっと難しいけど、知的好奇心を刺激してくれる「学術書」の魅力を、
          <br className="hidden md:block" />
          もっと多くの人と分かち合いたい。
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-10 text-center">
          自己紹介
        </h2>
        <div className="space-y-6 text-stone-700 leading-[1.9] text-[15px]">
          <p>
            私は「勉強」や「試験」がとても苦手です。
            <br />
            新卒の頃、簿記2級を一通り勉強したにもかかわらず「これはしんどいぞ...」と諦めたほどです。
            <br />
            英語などの語学を学ぶのも不得意です（単語が覚えられない...）。
          </p>
          <p>
            でも、学術に触れることは面白い。
            <br />
            日々の生活のなかで感じる「もやもや」「ふとした疑問」があれば、それをどのように考えればいいのか、知りたくなるのです。
          </p>
          <p>
            例えば、新卒の就活。
            <br />
            みんな一斉にリクルートスーツを着て、ESを書いて、面接を受けて、お祈りされて。
            <br />
            結構しんどいじゃないですか。このしんどさってなんだろう？何が私たちにこんなことをさせているのだろう？
          </p>
          <p>
            このような問いに答えてくれるーーいや、答えなんてないぞ、と教えてくれるのが「学術本」です。
            <br />
            答えなんてないのだけれど、別の見方・考え方を示してくれるのです。これがおもしろい。
            <br />
            自分には丸い箱にしか見えていなかったものが、実は角度によっては三角や四角に見えることを教えてくれるのです。
          </p>
          <p>
            その後も、自分の人生のフェーズごとにぶつかった壁や、その時々の社会情勢などに応じて、自分の知的好奇心に導かれるままに本を手に取ってきました。
          </p>
          <p>
            ちょっと難しいけど、知的好奇心を刺激し、満たしてくれるもの。それが「学術書」です。
            <br />
            「学術本」は、私の人生の良き相方であり、楽しいおもちゃでもあります。
          </p>
          <p>
            こんなに素晴らしいコンテンツが、なぜか、世の中にあまり普及していないのがもったいなくて仕方がないのです！
          </p>
          <p>
            人間というのは、知らなかったことを知る、新しい発見を得ることに喜びを感じる生き物です。
            <br />
            この喜びを、もっと多くの人と分かち合いたいと思っています。
          </p>
        </div>
      </div>
    </section>
  );
}

const activities = [
  {
    title: "シェア型書店 PASSAGE",
    subtitle: "神保町の棚主として",
    description:
      "神保町にあるシェア型書店「PASSAGE by ALL REVIEWS」で棚主をしています。学術と日常をつなぐ本をキュレーションし、お届けしています。",
    href: "https://passage.allreviews.jp/store/FZCII3NVTMHTZQQHMCVPATIJ",
    linkLabel: "PASSAGEの棚を見る",
    status: null,
  },
  {
    title: "読書アシスタント Luka",
    subtitle: "読書支援アプリ開発",
    description:
      "「難しそうで手が出ない」を「読んでみようかな」に変えるアプリ。本のタイトルを入れるだけで、AIが読書の準備をまるごとサポートします。",
    href: "https://my-reading-assistant.vercel.app/lp",
    linkLabel: "Lukaを試してみる",
    status: null,
  },
  {
    title: "オーダーメイド選書",
    subtitle: "あなたに最適な一冊を",
    description:
      "どんな本を読めばいいかわからない方のお話を伺い、最適な本をお選びします。あなたの興味・関心・悩みに寄り添った選書をお届けします。",
    href: null,
    linkLabel: null,
    status: "PoC実施中",
    badge: "特別価格",
    cta: "気になる方はお気軽にご連絡ください",
    contacts: [
      { label: "X (Twitter)", href: "https://x.com/ken_book_lover" },
      { label: "Bluesky", href: "https://bsky.app/profile/yomuhito21.bsky.social" },
    ],
  },
  {
    title: "読書会",
    subtitle: "本を通じた対話の場",
    description:
      "学術書を中心に、本をきっかけとした対話の場をつくっています。一人では得られない視点や気づきを、参加者同士で分かち合います。",
    href: null,
    linkLabel: null,
    status: "準備中",
  },
];

function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 px-6 bg-stone-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4 text-center">
          やっていること
        </h2>
        <p className="text-center text-stone-500 mb-12 text-sm">
          学術と日常をつなぐ、4つの活動
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-1">
                <p className="text-xs text-stone-400 tracking-wide">
                  {activity.subtitle}
                </p>
                {activity.status && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    activity.status === "PoC実施中"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-stone-200 text-stone-500"
                  }`}>
                    {activity.status}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                {activity.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {activity.description}
              </p>
              {"badge" in activity && activity.badge && (
                <p className="text-sm font-bold text-amber-700 mb-2">
                  {activity.badge}でお試しいただけます
                </p>
              )}
              {"cta" in activity && activity.cta && (
                <p className="text-sm text-stone-600 mb-3">
                  {activity.cta}
                </p>
              )}
              {"contacts" in activity && activity.contacts ? (
                <div className="flex gap-4">
                  {activity.contacts.map((c: { label: string; href: string }) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-amber-800 border-b border-amber-800/30 hover:border-amber-800 transition-colors"
                    >
                      {c.label} &rarr;
                    </Link>
                  ))}
                </div>
              ) : activity.href ? (
                <Link
                  href={activity.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-amber-800 border-b border-amber-800/30 hover:border-amber-800 transition-colors"
                >
                  {activity.linkLabel} &rarr;
                </Link>
              ) : (
                <p className="text-sm text-stone-400 italic">
                  詳細ページは近日公開
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReadingLink() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          読書の記録
        </h2>
        <p className="text-stone-600 text-sm mb-8 leading-relaxed">
          2016年から現在までの読書遍歴・知識の地図・読了リストは
          <br className="hidden md:block" />
          別サイトにまとめています。
        </p>
        <Link
          href="https://reading-note-app.vercel.app/public"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-stone-800 text-stone-50 rounded-lg text-sm hover:bg-stone-700 transition-colors"
        >
          読書遍歴を見る
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 bg-stone-900 text-stone-400">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-stone-300 text-sm">
          Kenta | 学術書キュレーター
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href="https://x.com/ken_book_lover"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-200 transition-colors"
          >
            X (Twitter)
          </Link>
          <Link
            href="https://linktr.ee/ken_book_lover"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-200 transition-colors"
          >
            Linktree
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <ReadingLink />
      <Footer />
    </main>
  );
}
