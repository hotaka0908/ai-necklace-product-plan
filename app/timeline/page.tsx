'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  allMilestones,
  groupByYear,
  filterByProduct,
  filterByCategory,
  formatDate,
  categoryInfo,
  type MilestoneCategory,
} from '@/data/timeline';

export default function TimelinePage() {
  const [selectedProduct, setSelectedProduct] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<MilestoneCategory | 'all'>('all');

  // フィルタリング
  let filteredMilestones = allMilestones;
  if (selectedProduct !== 'all') {
    filteredMilestones = filterByProduct(filteredMilestones, selectedProduct);
  }
  if (selectedCategory !== 'all') {
    filteredMilestones = filterByCategory(filteredMilestones, selectedCategory);
  }

  const timelineYears = groupByYear(filteredMilestones);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-black">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">開発の遍歴</h1>
              <p className="text-black mt-2">進化の過程をたどる</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/status"
                className="px-4 py-2 border-2 border-black text-black hover:bg-gray-100 transition-colors text-sm font-bold"
              >
                開発状況
              </Link>
              <Link
                href="/"
                className="px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors text-sm font-bold"
              >
                ← トップ
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* フィルター */}
        <section className="mb-8">
          <div className="bg-white border-2 border-black p-6">
            <h2 className="text-lg font-bold text-black mb-4">フィルター</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* 製品フィルター */}
              <div>
                <label className="block text-sm font-bold text-black mb-2">製品</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full border-2 border-black px-4 py-2 text-black bg-white"
                >
                  <option value="all">すべて</option>
                  <option value="ai-necklace">AIネックレス</option>
                  <option value="fan-monitor">扇子型モニター</option>
                  <option value="general">全体</option>
                </select>
              </div>

              {/* カテゴリフィルター */}
              <div>
                <label className="block text-sm font-bold text-black mb-2">カテゴリ</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as MilestoneCategory | 'all')}
                  className="w-full border-2 border-black px-4 py-2 text-black bg-white"
                >
                  <option value="all">すべて</option>
                  {Object.entries(categoryInfo).map(([key, info]) => (
                    <option key={key} value={key}>
                      {info.icon} {info.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 統計情報 */}
            <div className="mt-6 pt-6 border-t border-black">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="border border-black p-3">
                  <div className="text-2xl font-bold text-black">{allMilestones.length}</div>
                  <div className="text-xs text-black mt-1">総マイルストーン数</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-2xl font-bold text-black">
                    {allMilestones.filter((m) => m.productId === 'ai-necklace').length}
                  </div>
                  <div className="text-xs text-black mt-1">AIネックレス</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-2xl font-bold text-black">
                    {allMilestones.filter((m) => m.productId === 'fan-monitor').length}
                  </div>
                  <div className="text-xs text-black mt-1">扇子型モニター</div>
                </div>
                <div className="border border-black p-3">
                  <div className="text-2xl font-bold text-black">
                    {new Date().getFullYear() - 2025 + 1}
                  </div>
                  <div className="text-xs text-black mt-1">開発期間（年）</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* タイムライン */}
        <section>
          {timelineYears.length === 0 ? (
            <div className="text-center py-12 border-2 border-black">
              <p className="text-black">該当するマイルストーンが見つかりませんでした。</p>
            </div>
          ) : (
            <div className="space-y-12">
              {timelineYears.map((yearData) => (
                <div key={yearData.year}>
                  {/* 年ヘッダー */}
                  <div className="bg-black text-white px-6 py-3 inline-block text-2xl font-bold mb-6">
                    {yearData.year}
                  </div>

                  {/* マイルストーン */}
                  <div className="space-y-6 relative pl-8 border-l-4 border-black ml-4">
                    {yearData.milestones.map((milestone) => (
                      <div key={milestone.id} className="relative">
                        {/* タイムラインドット */}
                        <div className="absolute -left-[42px] top-0 w-8 h-8 bg-black border-4 border-white"></div>

                        {/* マイルストーンカード */}
                        <div className="bg-white border-2 border-black p-6 hover:shadow-lg transition-shadow">
                          {/* ヘッダー */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                            <div className="flex-1">
                              <div className="text-sm text-black font-bold mb-1">
                                {formatDate(milestone.date)}
                              </div>
                              <h3 className="text-xl font-bold text-black">{milestone.title}</h3>
                            </div>
                            <div className="flex gap-2">
                              {/* カテゴリバッジ */}
                              <span
                                className={`px-3 py-1 text-xs font-bold border-2 ${
                                  categoryInfo[milestone.category].color
                                }`}
                              >
                                {categoryInfo[milestone.category].icon}{' '}
                                {categoryInfo[milestone.category].label}
                              </span>
                              {/* 製品バッジ */}
                              {milestone.productId && milestone.productId !== 'general' && (
                                <span className="px-3 py-1 text-xs font-bold border-2 border-black bg-white text-black">
                                  {milestone.productId === 'ai-necklace'
                                    ? 'AIネックレス'
                                    : '扇子型モニター'}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* 説明 */}
                          <p className="text-black mb-4">{milestone.description}</p>

                          {/* 詳細 */}
                          {milestone.details && milestone.details.length > 0 && (
                            <div className="bg-gray-50 border border-black p-4 mb-4">
                              <h4 className="font-bold text-black mb-2 text-sm">詳細</h4>
                              <ul className="space-y-1">
                                {milestone.details.map((detail, i) => (
                                  <li key={i} className="text-sm text-black flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* リンク */}
                          {milestone.links && milestone.links.length > 0 && (
                            <div className="flex gap-3 flex-wrap">
                              {milestone.links.map((link, i) => (
                                <a
                                  key={i}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm px-3 py-1 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
                                >
                                  {link.label} →
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="mt-12">
          <div className="bg-black text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">次のマイルストーンを一緒に作りませんか？</h2>
            <p className="mb-6">
              あなたのアイデアや技術で、このプロジェクトをさらに前進させることができます。
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contribute"
                className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
              >
                貢献方法を見る →
              </Link>
              <a
                href="https://github.com/hotaka0908/ai-necklace-product-plan/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors font-bold"
              >
                ディスカッションに参加
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
