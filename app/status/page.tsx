import Link from 'next/link';
import { allBOMs } from '@/data/hardware-bom';

// 開発フェーズの定義
const developmentPhases = [
  { id: 'ai-necklace', name: 'AIネックレス', phase: 'プロトタイプ開発', progress: 15 },
  { id: 'fan-monitor', name: '扇子型モニター', phase: 'プロトタイプ開発', progress: 10 },
];

// ソフトウェア開発状況（後でGitHub APIから取得）
const softwareStatus = {
  repo: 'hotaka0908/ai-necklace-product-plan',
  branch: 'main',
  lastCommit: '2025-10-14',
  openIssues: 0,
  openPRs: 0,
};

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-black">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">開発状況</h1>
              <p className="text-black mt-2">プロジェクトの現在地を確認</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/timeline"
                className="px-4 py-2 border-2 border-black text-black hover:bg-gray-100 transition-colors"
              >
                開発遍歴
              </Link>
              <Link
                href="/"
                className="px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                ← トップへ
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* 概要セクション */}
        <section className="mb-12">
          <div className="bg-white border-2 border-black p-6">
            <h2 className="text-2xl font-bold text-black mb-4">プロジェクト概要</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {developmentPhases.map((product) => (
                <div key={product.id} className="border border-black p-4">
                  <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                  <p className="text-sm text-black mb-3">現在のフェーズ: {product.phase}</p>
                  <div className="w-full bg-gray-200 h-4 border border-black">
                    <div
                      className="bg-black h-full"
                      style={{ width: `${product.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-black mt-2 text-right">{product.progress}% 完了</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ソフトウェア開発状況 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">ソフトウェア開発</h2>
          <div className="bg-white border-2 border-black p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-black mb-3">リポジトリ情報</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-black">リポジトリ:</dt>
                    <dd className="font-mono text-sm text-black">{softwareStatus.repo}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-black">ブランチ:</dt>
                    <dd className="font-mono text-sm text-black">{softwareStatus.branch}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-black">最終更新:</dt>
                    <dd className="text-sm text-black">{softwareStatus.lastCommit}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="font-bold text-black mb-3">開発状況</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-black">オープンなIssue:</dt>
                    <dd className="text-black">{softwareStatus.openIssues} 件</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-black">オープンなPR:</dt>
                    <dd className="text-black">{softwareStatus.openPRs} 件</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-black">
              <div className="flex gap-4">
                <a
                  href={`https://github.com/${softwareStatus.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  GitHubで見る →
                </a>
                <a
                  href={`https://github.com/${softwareStatus.repo}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-black text-black hover:bg-gray-100 transition-colors"
                >
                  Issues
                </a>
                <a
                  href={`https://github.com/${softwareStatus.repo}/pulls`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-black text-black hover:bg-gray-100 transition-colors"
                >
                  Pull Requests
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ハードウェア開発状況 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">ハードウェア開発</h2>
          <div className="space-y-6">
            {allBOMs.map((bom) => {
              const totalComponents = bom.components.length;
              const decidedComponents = bom.components.filter(
                (c) => c.status === 'decided' || c.status === 'ordered' || c.status === 'received'
              ).length;
              const progressPercentage = Math.round((decidedComponents / totalComponents) * 100);

              return (
                <div key={bom.productId} className="bg-white border-2 border-black p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black">{bom.productName}</h3>
                      <p className="text-sm text-black mt-1">
                        現在のフェーズ: {bom.phase}
                      </p>
                      <p className="text-xs text-black mt-1">
                        最終更新: {bom.lastUpdated}
                      </p>
                    </div>
                    <Link
                      href={`/hardware/${bom.productId}`}
                      className="px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors text-sm"
                    >
                      詳細を見る →
                    </Link>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-black mb-2">
                      <span>部品選定の進捗</span>
                      <span>
                        {decidedComponents} / {totalComponents} 完了
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-4 border border-black">
                      <div
                        className="bg-black h-full"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="border border-black p-3">
                      <div className="text-black font-bold">検討中</div>
                      <div className="text-2xl text-black mt-1">
                        {bom.components.filter((c) => c.status === 'considering').length}
                      </div>
                    </div>
                    <div className="border border-black p-3">
                      <div className="text-black font-bold">決定済み</div>
                      <div className="text-2xl text-black mt-1">
                        {bom.components.filter((c) => c.status === 'decided').length}
                      </div>
                    </div>
                    <div className="border border-black p-3">
                      <div className="text-black font-bold">発注済み</div>
                      <div className="text-2xl text-black mt-1">
                        {bom.components.filter((c) => c.status === 'ordered').length}
                      </div>
                    </div>
                    <div className="border border-black p-3">
                      <div className="text-black font-bold">受領済み</div>
                      <div className="text-2xl text-black mt-1">
                        {bom.components.filter((c) => c.status === 'received').length}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* コミュニティ貢献の呼びかけ */}
        <section className="mb-12">
          <div className="bg-black text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">プロジェクトに貢献しませんか?</h2>
            <p className="mb-6">
              より良い部品の提案、コードの改善、ドキュメントの充実など、
              <br />
              あなたの知識と経験でこのプロジェクトをより良くしてください。
            </p>
            <Link
              href="/contribute"
              className="inline-block px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
            >
              貢献ガイドを見る →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
