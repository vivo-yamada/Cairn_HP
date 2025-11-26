import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-emerald-50 to-amber-100">
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 border-b border-emerald-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow">
              岐
            </span>
            <span className="text-sm font-semibold tracking-tight">
              岐阜ケルン山岳会
            </span>
          </Link>
          <nav className="hidden gap-5 text-xs font-medium text-slate-700 md:flex">
            <a href="#mountains" className="hover:text-emerald-600">
              山を探す
            </a>
            <a href="#seasons" className="hover:text-emerald-600">
              季節で選ぶ
            </a>
            <a href="#journal" className="hover:text-emerald-600">
              マウンテンジャーナル
            </a>
            <a href="#learn" className="hover:text-emerald-600">
              登山を学ぶ
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        {/* ヒーローセクション */}
        <section className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              冒険へ一歩踏み出す、岐阜の山旅
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
              岐阜の山へ、
              <br className="hidden md:block" />
              一歩を踏み出そう。
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
              川沿いの里山から、雲の上の稜線まで。
              次の休日に歩きたくなる岐阜の山を、季節の写真とストーリーで紹介します。
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#mountains"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                山を探す
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#learn"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-xs font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50"
              >
                登山を学ぶ
              </a>
            </div>
            <p className="mt-3 text-[11px] text-slate-500">
              初めての方も歓迎。20〜70代の仲間と、安全に楽しく山を歩きましょう。
            </p>
          </div>

          {/* 右側：ポップなコレクションカード群 */}
          <div className="grid gap-3 text-xs text-slate-800 md:grid-cols-2">
            <div className="rounded-2xl bg-white/90 p-3 shadow-sm shadow-emerald-100">
              <p className="text-[11px] font-semibold text-emerald-700">
                はじめての山歩き
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                金華山や鳩吹山などの低山から、気持ちよくはじめる一歩。
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-emerald-400/80 to-sky-400/80 p-3 text-white shadow-sm">
              <p className="text-[11px] font-semibold">アルプスの夏</p>
              <p className="mt-1 text-[11px] text-emerald-50">
                乗鞍岳や白山で体験する、雲の上の世界と星空。
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 p-3 shadow-sm shadow-amber-100">
              <p className="text-[11px] font-semibold text-amber-700">
                紅葉の谷を歩く
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                透明な沢と色づいた森を抜ける、秋だけのごほうびコース。
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 text-white p-3 shadow-sm">
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
              <h2 className="text-xl font-semibold text-slate-900">
                人気の山から、はじめてみよう。
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                まずは岐阜ケルンでもおなじみの、歩きやすくて景色の良い山から。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
              <span className="rounded-full bg-white/90 px-3 py-1 shadow-sm">
                # はじめての山歩き
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1 shadow-sm">
                # 絶景を楽しむ
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1 shadow-sm">
                # のんびりハイク
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* 金華山 */}
            <article className="group overflow-hidden rounded-2xl bg-white/90 shadow-sm ring-1 ring-emerald-50 transition hover:-translate-y-1 hover:shadow-emerald-100">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544210057-0c0a73e4c6e8?auto=format&fit=crop&w=900&q=80"
                  alt="金華山のイメージ"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1 px-3 py-3">
                <p className="text-[11px] text-slate-500">岐阜市 / 標高 329m</p>
                <h3 className="text-sm font-semibold text-slate-900">金華山</h3>
                <p className="text-[11px] text-emerald-700">
                  はじめてでも登りやすい・街からすぐの展望台。
                </p>
              </div>
            </article>

            {/* 乗鞍岳 */}
            <article className="group overflow-hidden rounded-2xl bg-white/90 shadow-sm ring-1 ring-sky-50 transition hover:-translate-y-1 hover:shadow-sky-100">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80"
                  alt="乗鞍岳のイメージ"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1 px-3 py-3">
                <p className="text-[11px] text-slate-500">飛騨 / 標高 3026m</p>
                <h3 className="text-sm font-semibold text-slate-900">乗鞍岳</h3>
                <p className="text-[11px] text-sky-700">
                  バスで標高を稼いで、雲の上の世界を体験する夏の一日。
                </p>
              </div>
            </article>

            {/* 白山 */}
            <article className="group overflow-hidden rounded-2xl bg-white/90 shadow-sm ring-1 ring-amber-50 transition hover:-translate-y-1 hover:shadow-amber-100">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80"
                  alt="白山のイメージ"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1 px-3 py-3">
                <p className="text-[11px] text-slate-500">郡上 / 標高 2702m</p>
                <h3 className="text-sm font-semibold text-slate-900">白山</h3>
                <p className="text-[11px] text-amber-700">
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
              <h2 className="text-xl font-semibold text-slate-900">
                季節で選ぶ、岐阜の山旅。
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                同じ山でも、春夏秋冬でまったく違う表情を見せてくれます。
              </p>
            </div>
            <div className="inline-flex gap-2 text-[11px]">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-white">
                春
              </span>
              <span className="rounded-full bg-sky-200 px-3 py-1 text-slate-700">
                夏
              </span>
              <span className="rounded-full bg-amber-200 px-3 py-1 text-slate-700">
                秋
              </span>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-100">
                冬
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-white/90 p-3 shadow-sm shadow-emerald-100">
              <p className="text-[11px] font-semibold text-emerald-700">
                春 / 残雪と花
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                雪解けの稜線と咲きはじめた花を追いかける、柔らかな季節。
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 p-3 shadow-sm shadow-sky-100">
              <p className="text-[11px] font-semibold text-sky-700">
                夏 / 高山の大展望
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                青空と入道雲の下で、短い夏を思いきり味わう稜線歩き。
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 p-3 shadow-sm shadow-amber-100">
              <p className="text-[11px] font-semibold text-amber-700">
                秋 / 紅葉の谷
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                透明な沢と、赤や黄色に染まる森が広がる人気のシーズン。
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-3 text-slate-100 shadow-sm">
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
          <div className="rounded-2xl bg-white/90 p-4 shadow-sm shadow-emerald-100">
            <h2 className="text-sm font-semibold text-slate-900">
              安全に、長く山を楽しむために。
            </h2>
            <p className="mt-1 text-[11px] text-slate-600">
              美しい山旅の裏側には、静かな準備と慎重な判断があります。
              岐阜ケルン山岳会では、装備の選び方から歩き方、ルートの選び方まで、
              一緒に学ぶ機会を用意しています。
            </p>
            <ul className="mt-3 grid gap-2 text-[11px] text-slate-700 md:grid-cols-3">
              <li className="rounded-xl bg-emerald-50 px-3 py-2">
                <p className="font-semibold text-emerald-800">はじめての登山</p>
                <p className="mt-1 text-[11px]">
                  服装・靴・ザックの選び方から、山の選び方まで。
                </p>
              </li>
              <li className="rounded-xl bg-sky-50 px-3 py-2">
                <p className="font-semibold text-sky-800">
                  装備チェックリスト
                </p>
                <p className="mt-1 text-[11px]">
                  日帰り・泊まり・雪山など、シーン別の持ち物を整理。
                </p>
              </li>
              <li className="rounded-xl bg-amber-50 px-3 py-2">
                <p className="font-semibold text-amber-800">
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
            className="space-y-3 rounded-2xl bg-white/90 p-4 shadow-sm shadow-slate-100"
          >
            <h2 className="text-sm font-semibold text-slate-900">
              マウンテンジャーナル
            </h2>
            <article className="border-l-2 border-emerald-300 pl-3 text-[11px]">
              <p className="text-[10px] font-semibold text-emerald-700">
                山の楽しみ方
              </p>
              <p className="mt-0.5 font-semibold text-slate-900">
                はじめての岐阜の山歩きガイド
              </p>
              <p className="mt-0.5 text-slate-600">
                金華山や鳩吹山など、街から近い低山で「最初の一歩」を踏み出すためのポイント。
              </p>
            </article>
            <article className="border-l-2 border-sky-300 pl-3 text-[11px]">
              <p className="text-[10px] font-semibold text-sky-700">
                季節のおすすめ
              </p>
              <p className="mt-0.5 font-semibold text-slate-900">
                春からはじめる、残雪と花の山旅
              </p>
              <p className="mt-0.5 text-slate-600">
                雪解けとともに咲き出す花を追いかけながら、少しずつステップアップ。
              </p>
            </article>
            <article className="border-l-2 border-amber-300 pl-3 text-[11px]">
              <p className="text-[10px] font-semibold text-amber-700">
                初心者向け装備
              </p>
              <p className="mt-0.5 font-semibold text-slate-900">
                日帰り登山の装備チェックリスト
              </p>
              <p className="mt-0.5 text-slate-600">
                「何を持っていけばいい？」に答える、ベーシックな持ち物リスト。
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

