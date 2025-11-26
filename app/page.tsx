import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow shadow-emerald-700/60">
              岐
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-50">
              岐阜ケルン山岳会
            </span>
          </Link>
          <nav className="hidden gap-5 text-xs font-medium text-slate-200 md:flex">
            <a href="#mountains" className="hover:text-emerald-300">
              山を探す
            </a>
            <a href="#seasons" className="hover:text-emerald-300">
              季節で選ぶ
            </a>
            <a href="#journal" className="hover:text-emerald-300">
              マウンテンジャーナル
            </a>
            <a href="#learn" className="hover:text-emerald-300">
              登山を学ぶ
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        {/* ヒーローセクション */}
        <section className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-500/40 shadow-sm shadow-emerald-900/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              冒険へ一歩踏み出す、岐阜の山旅
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-50 md:text-4xl">
              岐阜の山へ、
              <br className="hidden md:block" />
              一歩を踏み出そう。
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              川沿いの里山から、雲の上の稜線まで。
              次の休日に歩きたくなる岐阜の山を、季節の写真とストーリーで紹介します。
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#mountains"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-900/60 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                山を探す
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#learn"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2 text-xs font-semibold text-slate-100 shadow-sm hover:bg-slate-800"
              >
                登山を学ぶ
              </a>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              初めての方も歓迎。20〜70代の仲間と、安全に楽しく山を歩きましょう。
            </p>
          </div>

          {/* 右側：ポップなコレクションカード群 */}
          <div className="grid gap-3 text-xs text-slate-100 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-900/80 p-3 shadow-sm shadow-black/60 ring-1 ring-slate-700">
              <p className="text-[11px] font-semibold text-emerald-300">
                はじめての山歩き
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                金華山や鳩吹山などの低山から、気持ちよくはじめる一歩。
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/80 to-sky-500/80 p-3 text-white shadow-sm shadow-black/60">
              <p className="text-[11px] font-semibold">アルプスの夏</p>
              <p className="mt-1 text-[11px] text-emerald-100">
                乗鞍岳や白山で体験する、雲の上の世界と星空。
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 p-3 shadow-sm shadow-black/60 ring-1 ring-amber-600/40">
              <p className="text-[11px] font-semibold text-amber-300">
                紅葉の谷を歩く
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                透明な沢と色づいた森を抜ける、秋だけのごほうびコース。
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 text-white p-3 shadow-sm shadow-black/60 ring-1 ring-slate-700">
              <p className="text-[11px] font-semibold text-emerald-200">
                雪山の静けさ
              </p>
              <p className="mt-1 text-[11px] text-slate-200">
                経験者と歩く、白い世界に包まれる特別な一日。
              </p>
            </div>
          </div>
        </section>

        {/* 山を探す */}
        <section id="mountains" className="mt-12 space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">
                人気の山から、はじめてみよう。
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                まずは岐阜ケルンでもおなじみの、歩きやすくて景色の良い山から。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
              <span className="rounded-full bg-slate-900/80 px-3 py-1 shadow-sm shadow-black/40 ring-1 ring-slate-700">
                # はじめての山歩き
              </span>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 shadow-sm shadow-black/40 ring-1 ring-slate-700">
                # 絶景を楽しむ
              </span>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 shadow-sm shadow-black/40 ring-1 ring-slate-700">
                # のんびりハイク
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* 金華山 */}
            <article className="group overflow-hidden rounded-2xl bg-slate-900/90 shadow-sm shadow-black/60 ring-1 ring-emerald-700/40 transition hover:-translate-y-1 hover:shadow-emerald-900/70">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544210057-0c0a73e4c6e8?auto=format&fit=crop&w=900&q=80"
                  alt="金華山のイメージ"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1 px-3 py-3">
                <p className="text-[11px] text-slate-400">岐阜市 / 標高 329m</p>
                <h3 className="text-sm font-semibold text-slate-50">金華山</h3>
                <p className="text-[11px] text-emerald-300">
                  はじめてでも登りやすい・街からすぐの展望台。
                </p>
              </div>
            </article>

            {/* 乗鞍岳 */}
            <article className="group overflow-hidden rounded-2xl bg-slate-900/90 shadow-sm shadow-black/60 ring-1 ring-sky-700/40 transition hover:-translate-y-1 hover:shadow-sky-900/70">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80"
                  alt="乗鞍岳のイメージ"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1 px-3 py-3">
                <p className="text-[11px] text-slate-400">飛騨 / 標高 3026m</p>
                <h3 className="text-sm font-semibold text-slate-50">乗鞍岳</h3>
                <p className="text-[11px] text-sky-300">
                  バスで標高を稼いで、雲の上の世界を体験する夏の一日。
                </p>
              </div>
            </article>

            {/* 白山 */}
            <article className="group overflow-hidden rounded-2xl bg-slate-900/90 shadow-sm shadow-black/60 ring-1 ring-amber-700/40 transition hover:-translate-y-1 hover:shadow-amber-900/70">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80"
                  alt="白山のイメージ"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1 px-3 py-3">
                <p className="text-[11px] text-slate-400">郡上 / 標高 2702m</p>
                <h3 className="text-sm font-semibold text-slate-50">白山</h3>
                <p className="text-[11px] text-amber-300">
                  山小屋泊でじっくり楽しみたい、花とご来光の信仰の山。
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* 季節で選ぶ */}
        <section id="seasons" className="mt-14 space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">
                季節で選ぶ、岐阜の山旅。
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                同じ山でも、春夏秋冬でまったく違う表情を見せてくれます。
              </p>
            </div>
            <div className="inline-flex gap-2 text-[11px]">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-white shadow-sm shadow-emerald-900/60">
                春
              </span>
              <span className="rounded-full bg-sky-700 px-3 py-1 text-slate-50">
                夏
              </span>
              <span className="rounded-full bg-amber-600 px-3 py-1 text-slate-50">
                秋
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-100">
                冬
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-900/90 p-3 shadow-sm shadow-black/60 ring-1 ring-emerald-700/40">
              <p className="text-[11px] font-semibold text-emerald-300">
                春 / 残雪と花
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                雪解けの稜線と咲きはじめた花を追いかける、柔らかな季節。
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/90 p-3 shadow-sm shadow-black/60 ring-1 ring-sky-700/40">
              <p className="text-[11px] font-semibold text-sky-300">
                夏 / 高山の大展望
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                青空と入道雲の下で、短い夏を思いきり味わう稜線歩き。
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/90 p-3 shadow-sm shadow-black/60 ring-1 ring-amber-700/40">
              <p className="text-[11px] font-semibold text-amber-300">
                秋 / 紅葉の谷
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                透明な沢と、赤や黄色に染まる森が広がる人気のシーズン。
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950 p-3 text-slate-100 shadow-sm shadow-black/60 ring-1 ring-slate-700">
              <p className="text-[11px] font-semibold text-emerald-200">
                冬 / 静かな雪山
              </p>
              <p className="mt-1 text-[11px] text-slate-200">
                足音だけが響く白い世界。経験者と一緒に楽しむ特別な時間。
              </p>
            </div>
          </div>
        </section>

        {/* 学び & ジャーナル */}
        <section
          id="learn"
          className="mt-14 grid gap-6 md:grid-cols-[1.2fr,1fr]"
        >
          <div className="rounded-2xl bg-slate-900/90 p-4 shadow-sm shadow-black/60 ring-1 ring-slate-700">
            <h2 className="text-sm font-semibold text-slate-50">
              安全に、長く山を楽しむために。
            </h2>
            <p className="mt-1 text-[11px] text-slate-300">
              美しい山旅の裏側には、静かな準備と慎重な判断があります。
              岐阜ケルン山岳会では、装備の選び方から歩き方、ルートの選び方まで、
              一緒に学ぶ機会を用意しています。
            </p>
            <ul className="mt-3 grid gap-2 text-[11px] text-slate-200 md:grid-cols-3">
              <li className="rounded-xl bg-emerald-900/40 px-3 py-2 ring-1 ring-emerald-600/50">
                <p className="font-semibold text-emerald-200">はじめての登山</p>
                <p className="mt-1 text-[11px]">
                  服装・靴・ザックの選び方から、山の選び方まで。
                </p>
              </li>
              <li className="rounded-xl bg-sky-900/30 px-3 py-2 ring-1 ring-sky-700/60">
                <p className="font-semibold text-sky-200">
                  装備チェックリスト
                </p>
                <p className="mt-1 text-[11px]">
                  日帰り・泊まり・雪山など、シーン別の持ち物を整理。
                </p>
              </li>
              <li className="rounded-xl bg-amber-900/30 px-3 py-2 ring-1 ring-amber-700/60">
                <p className="font-semibold text-amber-200">
                  もしものときの対応
                </p>
                <p className="mt-1 text-[11px]">
                  迷った・ケガをしたときの、基本的な判断と連絡の仕方。
                </p>
              </li>
            </ul>
          </div>

          <div
            id="journal"
            className="space-y-3 rounded-2xl bg-slate-900/90 p-4 shadow-sm shadow-black/60 ring-1 ring-slate-700"
          >
            <h2 className="text-sm font-semibold text-slate-50">
              マウンテンジャーナル
            </h2>
            <article className="border-l-2 border-emerald-500 pl-3 text-[11px]">
              <p className="text-[10px] font-semibold text-emerald-300">
                山の楽しみ方
              </p>
              <p className="mt-0.5 font-semibold text-slate-50">
                はじめての岐阜の山歩きガイド
              </p>
              <p className="mt-0.5 text-slate-300">
                金華山や鳩吹山など、街から近い低山で「最初の一歩」を踏み出すためのポイント。
              </p>
            </article>
            <article className="border-l-2 border-sky-500 pl-3 text-[11px]">
              <p className="text-[10px] font-semibold text-sky-300">
                季節のおすすめ
              </p>
              <p className="mt-0.5 font-semibold text-slate-50">
                春からはじめる、残雪と花の山旅
              </p>
              <p className="mt-0.5 text-slate-300">
                雪解けとともに咲き出す花を追いかけながら、少しずつステップアップ。
              </p>
            </article>
            <article className="border-l-2 border-amber-400 pl-3 text-[11px]">
              <p className="text-[10px] font-semibold text-amber-200">
                初心者向け装備
              </p>
              <p className="mt-0.5 font-semibold text-slate-50">
                日帰り登山の装備チェックリスト
              </p>
              <p className="mt-0.5 text-slate-300">
                「何を持っていけばいい？」に答える、ベーシックな持ち物リスト。
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

