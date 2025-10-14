import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBOMByProductId, getStatusLabel, getStatusColor } from '@/data/hardware-bom';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function HardwarePage({ params }: PageProps) {
  const { id } = await params;
  const bom = getBOMByProductId(id);

  if (!bom) {
    notFound();
  }

  // カテゴリごとにグループ化
  const groupedComponents = bom.components.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<string, typeof bom.components>);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-black">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">{bom.productName} - ハードウェア部品リスト</h1>
              <p className="text-black mt-2">Bill of Materials (BOM)</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/status"
                className="px-4 py-2 border-2 border-black text-black hover:bg-gray-100 transition-colors"
              >
                ← 開発状況
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* 概要 */}
        <section className="mb-8">
          <div className="bg-white border-2 border-black p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-black mb-2">現在のフェーズ</h3>
                <p className="text-2xl text-black">{bom.phase}</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">部品数</h3>
                <p className="text-2xl text-black">{bom.components.length} 種類</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">最終更新</h3>
                <p className="text-2xl text-black">{bom.lastUpdated}</p>
              </div>
            </div>
          </div>
        </section>

        {/* コミュニティへの呼びかけ */}
        <section className="mb-8">
          <div className="bg-black text-white p-6">
            <h3 className="text-xl font-bold mb-3">より良い部品をご存知ですか?</h3>
            <p className="mb-4">
              以下の部品についてより良い選択肢をご存知の方は、ぜひ提案してください。
              <br />
              コミュニティの知見で、より良い製品を一緒に作りましょう。
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/hotaka0908/ai-necklace-product-plan/discussions/new?category=hardware-components"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
              >
                部品を提案する →
              </a>
              <Link
                href="/contribute"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                貢献ガイドを見る
              </Link>
            </div>
          </div>
        </section>

        {/* 部品リスト */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6">部品一覧</h2>
          <div className="space-y-8">
            {Object.entries(groupedComponents).map(([category, components]) => (
              <div key={category}>
                <h3 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-black">
                  {category}
                </h3>
                <div className="space-y-4">
                  {components.map((component) => (
                    <div
                      key={component.id}
                      className="bg-white border-2 border-black p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-black">{component.name}</h4>
                          {component.manufacturer && (
                            <p className="text-sm text-black mt-1">メーカー: {component.manufacturer}</p>
                          )}
                          {component.modelNumber && (
                            <p className="text-sm text-black font-mono">型番: {component.modelNumber}</p>
                          )}
                        </div>
                        <div
                          className={`px-4 py-2 border-2 text-sm font-bold ${getStatusColor(
                            component.status
                          )}`}
                        >
                          {getStatusLabel(component.status)}
                        </div>
                      </div>

                      {/* 仕様 */}
                      <div className="mb-4">
                        <h5 className="font-bold text-black mb-2">仕様</h5>
                        <ul className="list-disc list-inside space-y-1">
                          {component.specifications.map((spec, index) => (
                            <li key={index} className="text-sm text-black">
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 価格 */}
                      {component.estimatedPrice && (
                        <div className="mb-4">
                          <h5 className="font-bold text-black mb-2">推定価格</h5>
                          <p className="text-black">{component.estimatedPrice}</p>
                        </div>
                      )}

                      {/* 購入URL */}
                      {component.purchaseUrl && (
                        <div className="mb-4">
                          <a
                            href={component.purchaseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline hover:no-underline"
                          >
                            購入リンク →
                          </a>
                        </div>
                      )}

                      {/* 備考 */}
                      {component.notes && (
                        <div className="mb-4">
                          <h5 className="font-bold text-black mb-2">備考</h5>
                          <p className="text-sm text-black">{component.notes}</p>
                        </div>
                      )}

                      {/* コミュニティ提案 */}
                      <div className="pt-4 border-t border-black">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-black">
                            コミュニティからの提案:{' '}
                            <span className="font-bold">{component.communityProposals || 0} 件</span>
                          </div>
                          <a
                            href={`https://github.com/hotaka0908/ai-necklace-product-plan/discussions?discussions_q=label%3Ahardware+${encodeURIComponent(
                              component.category
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors text-sm"
                          >
                            この部品の提案を見る →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* フッターCTA */}
        <section className="mt-12">
          <div className="bg-white border-2 border-black p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              このプロジェクトをより良くしましょう
            </h3>
            <p className="text-black mb-6">
              あなたの知識と経験で、製品をより良いものにできます。
              <br />
              部品の提案、技術的なアドバイス、お待ちしています。
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/hotaka0908/ai-necklace-product-plan/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                ディスカッションに参加 →
              </a>
              <Link
                href="/contribute"
                className="px-6 py-3 border-2 border-black text-black hover:bg-gray-100 transition-colors"
              >
                貢献方法を見る
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// 動的ルートの生成
export async function generateStaticParams() {
  return [
    { id: 'ai-necklace' },
    { id: 'fan-monitor' },
  ];
}
