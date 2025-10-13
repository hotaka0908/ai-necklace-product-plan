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
          <h1 className="text-3xl font-bold text-black">
            プロダクト計画
          </h1>
          <p className="text-black mt-2">
            革新的な製品で世界を変える
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-black mb-8">製品一覧</h2>

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
                  <li key={index} className="text-black text-sm">
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

        {/* Footer */}
        <footer className="mt-16 text-center text-black pb-8">
          <p className="text-sm">
            © 2025 Product Planning
          </p>
        </footer>
      </main>
    </div>
  );
}
