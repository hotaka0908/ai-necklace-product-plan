import Link from 'next/link';

const products = [
  {
    id: 'ai-necklace',
    name: 'AIネックレス',
    description: '世界中の人々の生活をもっと良くする、ウェアラブルAIデバイス',
    features: ['音声操作', 'カメラ搭載', 'ハンズフリー'],
  },
  {
    id: 'fan-monitor',
    name: '扇子型モニター',
    description: '持ち運べる折りたたみ式モニター、どこでも作業空間を拡張',
    features: ['折りたたみ式', 'ポータブル', '軽量設計'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-black">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-black">
                プロダクト計画
              </h1>
              <p className="text-gray-66 mt-2">
                革新的な製品で世界を変える
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/timeline"
                className="px-4 py-2 border-2 border-black text-black hover:bg-gray-100 transition-colors text-sm font-bold"
              >
                開発遍歴
              </Link>
              <Link
                href="/status"
                className="px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors text-sm font-bold"
              >
                開発状況
              </Link>
              <Link
                href="/contribute"
                className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors text-sm font-bold"
              >
                貢献する
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-66 mb-8">製品一覧</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="block bg-white border-2 border-black p-6 hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-2">
                {product.name}
              </h3>
              <p className="text-black mb-4">
                {product.description}
              </p>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-3d text-sm">
                    • {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-black font-bold">
                詳細を見る →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 mb-12">
          <div className="bg-black text-white p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">オープンに開発しています</h2>
            <p className="text-white mb-6">
              ソフトウェアもハードウェアも、すべての開発状況を公開しています。
              <br />
              あなたの知識と経験で、より良い製品を一緒に作りませんか？
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/status"
                className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
              >
                開発状況を見る →
              </Link>
              <Link
                href="/contribute"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors font-bold"
              >
                貢献方法を見る
              </Link>
            </div>
          </div>
        </section>

        {/* GitHub Link */}
        <section className="mb-12">
          <div className="border-2 border-black p-6 text-center">
            <h3 className="text-xl font-bold text-black mb-3">GitHubで開発中</h3>
            <p className="text-black mb-4">
              プルリクエスト、部品提案、バグ報告など、どんな貢献も歓迎します
            </p>
            <a
              href="https://github.com/hotaka0908/ai-necklace-product-plan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors font-bold"
            >
              GitHub リポジトリ →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-3d pb-8">
          <p className="text-sm">
            © 2025 Product Planning
          </p>
        </footer>
      </main>
    </div>
  );
}
