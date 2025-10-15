import Link from 'next/link';

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-black">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">プロジェクトへの貢献</h1>
              <p className="text-gray-66 mt-2">あなたの力で製品をより良く</p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              ← トップへ
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* イントロ */}
        <section className="mb-12">
          <div className="bg-black text-white p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">このプロジェクトに貢献しませんか？</h2>
            <p className="text-lg text-white">
              ソフトウェアとハードウェアの両面で、あなたの知識と経験が必要です。
              <br />
              一緒に世界を変える製品を作りましょう。
            </p>
          </div>
        </section>

        {/* 貢献方法の選択 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-66 mb-6">貢献の方法</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* ソフトウェア */}
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold text-black mb-4">ソフトウェア開発</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-black mr-2">🐛</span>
                  <span className="text-black">バグ修正</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✨</span>
                  <span className="text-black">新機能の実装</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">📝</span>
                  <span className="text-black">ドキュメント改善</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">🎨</span>
                  <span className="text-black">UI/UXデザイン</span>
                </li>
              </ul>
              <a
                href="https://github.com/hotaka0908/ai-necklace-product-plan"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                GitHubで貢献する →
              </a>
            </div>

            {/* ハードウェア */}
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold text-black mb-4">ハードウェア開発</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-black mr-2">🔧</span>
                  <span className="text-black">部品の提案</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">💡</span>
                  <span className="text-black">技術的アドバイス</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">📐</span>
                  <span className="text-black">設計の改善提案</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">🏭</span>
                  <span className="text-black">製造方法の提案</span>
                </li>
              </ul>
              <a
                href="https://github.com/hotaka0908/ai-necklace-product-plan/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Discussionsで提案する →
              </a>
            </div>
          </div>
        </section>

        {/* ソフトウェア貢献の詳細 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-66 mb-6">ソフトウェアへの貢献</h2>
          <div className="bg-white border-2 border-black p-6">
            <h3 className="text-lg font-bold text-black mb-4">1. 開発環境のセットアップ</h3>
            <div className="bg-gray-50 border border-black p-4 mb-6 font-mono text-sm">
              <div className="mb-2 text-gray-66"># リポジトリをフォーク &amp; クローン</div>
              <div className="mb-2 text-gray-3d">git clone https://github.com/YOUR_USERNAME/ai-necklace-product-plan.git</div>
              <div className="mb-2 text-gray-3d">cd ai-necklace-product-plan</div>
              <div className="mb-4 text-gray-3d">&nbsp;</div>
              <div className="mb-2 text-gray-66"># 依存関係のインストール</div>
              <div className="mb-2 text-gray-3d">npm install</div>
              <div className="mb-4 text-gray-3d">&nbsp;</div>
              <div className="mb-2 text-gray-66"># 開発サーバーの起動</div>
              <div className="text-gray-3d">npm run dev</div>
            </div>

            <h3 className="text-lg font-bold text-black mb-4">2. プルリクエストの送り方</h3>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-black">
              <li>新しいブランチを作成: <code className="bg-gray-100 px-2 py-1">git checkout -b feature/your-feature</code></li>
              <li>変更を加える</li>
              <li>コミット: <code className="bg-gray-100 px-2 py-1">git commit -m &quot;Add: 機能説明&quot;</code></li>
              <li>プッシュ: <code className="bg-gray-100 px-2 py-1">git push origin feature/your-feature</code></li>
              <li>GitHubでプルリクエストを作成</li>
            </ol>

            <h3 className="text-lg font-bold text-black mb-4">3. 貢献できる分野</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-black p-4">
                <h4 className="font-bold text-black mb-2">初心者向け</h4>
                <ul className="space-y-1 text-sm text-black">
                  <li>• ドキュメントの誤字修正</li>
                  <li>• READMEの改善</li>
                  <li>• コメントの追加</li>
                  <li>• テストの追加</li>
                </ul>
              </div>
              <div className="border border-black p-4">
                <h4 className="font-bold text-black mb-2">中級者以上向け</h4>
                <ul className="space-y-1 text-sm text-black">
                  <li>• 新機能の実装</li>
                  <li>• バグ修正</li>
                  <li>• パフォーマンス改善</li>
                  <li>• アーキテクチャの改善</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ハードウェア貢献の詳細 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-66 mb-6">ハードウェアへの貢献</h2>
          <div className="bg-white border-2 border-black p-6">
            <h3 className="text-lg font-bold text-black mb-4">部品提案の手順</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-black mb-1">GitHub Discussionsに移動</h4>
                  <p className="text-sm text-black">
                    <a
                      href="https://github.com/hotaka0908/ai-necklace-product-plan/discussions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Discussions
                    </a>
                    を開き、「Hardware Components」カテゴリを選択
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-black mb-1">新しいディスカッションを作成</h4>
                  <p className="text-sm text-black">
                    タイトル例: <code className="bg-gray-100 px-2 py-1">[部品提案] カメラ: Sony IMX500</code>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-black mb-1">以下の情報を含める</h4>
                  <ul className="text-sm text-black space-y-1 mt-2">
                    <li>• 対象製品 (AIネックレス / 扇子型モニター)</li>
                    <li>• 部品カテゴリ</li>
                    <li>• 製品名、メーカー、型番</li>
                    <li>• 購入URL</li>
                    <li>• 主要仕様</li>
                    <li>• 提案理由 (なぜこの部品が良いか)</li>
                    <li>• 推定価格</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-black mb-1">コミュニティでディスカッション</h4>
                  <p className="text-sm text-black">
                    他のメンバーと意見交換し、より良い選択肢を一緒に探しましょう
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-black">
              <div className="flex gap-4">
                <Link
                  href="/hardware/ai-necklace"
                  className="px-4 py-2 border-2 border-black text-black hover:bg-gray-100 transition-colors"
                >
                  AIネックレスの部品リスト
                </Link>
                <Link
                  href="/hardware/fan-monitor"
                  className="px-4 py-2 border-2 border-black text-black hover:bg-gray-100 transition-colors"
                >
                  扇子型モニターの部品リスト
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* リンク集 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-66 mb-6">リンク集</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://github.com/hotaka0908/ai-necklace-product-plan/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-6 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-bold text-black mb-2">📖 CONTRIBUTING.md</h3>
              <p className="text-sm text-black">詳細な貢献ガイドライン</p>
            </a>
            <a
              href="https://github.com/hotaka0908/ai-necklace-product-plan/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-6 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-bold text-black mb-2">🐛 Issues</h3>
              <p className="text-sm text-black">バグ報告・機能要望</p>
            </a>
            <a
              href="https://github.com/hotaka0908/ai-necklace-product-plan/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-6 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-bold text-black mb-2">🔀 Pull Requests</h3>
              <p className="text-sm text-black">コードの変更提案</p>
            </a>
            <a
              href="https://github.com/hotaka0908/ai-necklace-product-plan/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-6 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-bold text-black mb-2">💬 Discussions</h3>
              <p className="text-sm text-black">質問・アイデア・部品提案</p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-black text-white p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">今すぐ始めましょう</h2>
            <p className="text-white mb-6">
              小さな貢献でも大歓迎です。一緒に素晴らしい製品を作りましょう。
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/hotaka0908/ai-necklace-product-plan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
              >
                GitHubで始める →
              </a>
              <Link
                href="/status"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                開発状況を見る
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
