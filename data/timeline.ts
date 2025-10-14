// 開発遍歴・タイムライン

export type MilestoneCategory = 'prototype' | 'software' | 'hardware' | 'test' | 'partnership' | 'achievement';

export interface Milestone {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  description: string;
  category: MilestoneCategory;
  productId?: 'ai-necklace' | 'fan-monitor' | 'general'; // どの製品に関連するか
  details?: string[]; // 詳細情報（箇条書き）
  imageUrl?: string; // 画像URL（任意）
  links?: Array<{
    label: string;
    url: string;
  }>;
}

export interface TimelineYear {
  year: string;
  milestones: Milestone[];
}

// マイルストーンのカテゴリ情報
export const categoryInfo: Record<MilestoneCategory, { label: string; color: string; icon: string }> = {
  prototype: {
    label: 'プロトタイプ',
    color: 'bg-purple-100 text-purple-800 border-purple-300',
    icon: '🔧',
  },
  software: {
    label: 'ソフトウェア',
    color: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: '💻',
  },
  hardware: {
    label: 'ハードウェア',
    color: 'bg-green-100 text-green-800 border-green-300',
    icon: '⚙️',
  },
  test: {
    label: 'テスト・検証',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    icon: '🧪',
  },
  partnership: {
    label: 'パートナーシップ',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    icon: '🤝',
  },
  achievement: {
    label: '達成・マイルストーン',
    color: 'bg-red-100 text-red-800 border-red-300',
    icon: '🎉',
  },
};

// AIネックレスの開発遍歴
export const aiNecklaceTimeline: Milestone[] = [
  {
    id: 'ai-necklace-001',
    date: '2025-03-10',
    title: 'M5Stack CoreS3にて音声会話成功',
    description: 'M5Stack CoreS3を使用した最初の音声会話プロトタイプが動作',
    category: 'prototype',
    productId: 'ai-necklace',
    details: [
      'M5Stack CoreS3とマイク・スピーカーを接続',
      'OpenAI Whisper APIで音声認識を実装',
      'GPT-4で会話応答を生成',
      'Google Text-to-Speechで音声出力',
      '基本的な会話フローが完成',
    ],
  },
  {
    id: 'ai-necklace-002',
    date: '2025-04-15',
    title: 'カメラモジュール統合テスト',
    description: 'カメラモジュールの統合と画像認識機能の初期実装',
    category: 'hardware',
    productId: 'ai-necklace',
    details: [
      'OV2640カメラモジュールを接続',
      '画像キャプチャ機能の実装',
      'OpenAI Vision APIで画像認識テスト',
      '「これは何？」と質問して物体認識に成功',
    ],
  },
  {
    id: 'ai-necklace-003',
    date: '2025-05-20',
    title: 'バッテリー駆動テスト成功',
    description: 'モバイルバッテリーでの駆動テストに成功、約8時間の連続動作を確認',
    category: 'test',
    productId: 'ai-necklace',
    details: [
      'リチウムポリマーバッテリー（3000mAh）を搭載',
      '約8時間の連続駆動を確認',
      '消費電力の最適化を実施',
      'スリープモードの実装',
    ],
  },
  {
    id: 'ai-necklace-004',
    date: '2025-06-01',
    title: 'Raspberry Pi 5への移行',
    description: 'より高性能なRaspberry Pi 5にプラットフォームを移行',
    category: 'hardware',
    productId: 'ai-necklace',
    details: [
      'M5StackからRaspberry Pi 5に移行',
      'より高速な処理性能を実現',
      'メモリ8GBでより複雑な処理が可能に',
      'エッジAI処理の準備',
    ],
  },
  {
    id: 'ai-necklace-005',
    date: '2025-07-10',
    title: 'リアルタイム翻訳機能の実装',
    description: '日本語と英語のリアルタイム翻訳機能を実装',
    category: 'software',
    productId: 'ai-necklace',
    details: [
      '音声認識後、即座に翻訳',
      '翻訳結果を音声で出力',
      '日英・英日の双方向翻訳に対応',
      '平均レスポンスタイム3秒以下',
    ],
  },
  {
    id: 'ai-necklace-006',
    date: '2025-08-15',
    title: 'OCR機能の実装',
    description: 'カメラで捉えた文字を読み取るOCR機能を実装',
    category: 'software',
    productId: 'ai-necklace',
    details: [
      'Tesseract OCRエンジンを統合',
      '日本語・英語の文字認識',
      '看板や標識の読み取りに成功',
      '認識した文字を音声で読み上げ',
    ],
  },
  {
    id: 'ai-necklace-007',
    date: '2025-09-20',
    title: 'Raspberry Pi 5にてメール送受信成功',
    description: 'Raspberry Pi 5を使用したメール送受信機能が動作',
    category: 'achievement',
    productId: 'ai-necklace',
    details: [
      'Gmail APIを統合',
      '音声コマンドでメール送信',
      '新着メールの音声読み上げ',
      '音声でメール返信が可能に',
      'スマートフォン不要での完全動作',
    ],
  },
  {
    id: 'ai-necklace-008',
    date: '2025-10-05',
    title: 'Bluetoothイヤホン対応',
    description: 'Bluetoothイヤホンでの音声出力に対応',
    category: 'hardware',
    productId: 'ai-necklace',
    details: [
      'Bluetooth 5.3モジュールを統合',
      'ワイヤレスイヤホンでの音声出力',
      '骨伝導スピーカーとの切り替え機能',
      'バッテリー消費の最適化',
    ],
  },
  {
    id: 'ai-necklace-009',
    date: '2025-10-14',
    title: 'オープンソース化とコミュニティ立ち上げ',
    description: 'プロジェクトをGitHubで公開し、コミュニティからの貢献を受け付け開始',
    category: 'achievement',
    productId: 'ai-necklace',
    details: [
      'GitHubリポジトリを公開',
      'ハードウェアBOMの完全公開',
      'コミュニティ貢献ガイドラインを作成',
      '開発遍歴・タイムラインページを公開',
    ],
  },
];

// 扇子型モニターの開発遍歴
export const fanMonitorTimeline: Milestone[] = [
  {
    id: 'fan-monitor-001',
    date: '2025-08-01',
    title: '折りたたみ機構のアイデア発案',
    description: '扇子のように折りたためるモニターのコンセプトを考案',
    category: 'prototype',
    productId: 'fan-monitor',
    details: [
      '既存のポータブルモニターの課題を分析',
      '扇子型の折りたたみ機構を着想',
      '初期スケッチとコンセプト図を作成',
    ],
  },
  {
    id: 'fan-monitor-002',
    date: '2025-08-20',
    title: '3Dプリンタで試作品製作',
    description: '3Dプリンタでヒンジ機構の試作品を製作',
    category: 'prototype',
    productId: 'fan-monitor',
    details: [
      '3Dプリンタでヒンジ部分を試作',
      '開閉テストを実施（50回以上）',
      '改善点を洗い出し',
      '第2次試作へ',
    ],
  },
  {
    id: 'fan-monitor-003',
    date: '2025-09-10',
    title: 'ディスプレイパネル選定',
    description: '13.3インチIPSパネルを選定、テスト購入',
    category: 'hardware',
    productId: 'fan-monitor',
    details: [
      '複数のディスプレイパネルを比較',
      '13.3インチ Full HD IPSパネルに決定',
      'テスト用に1枚購入',
      '発色・視野角ともに良好',
    ],
  },
  {
    id: 'fan-monitor-004',
    date: '2025-09-25',
    title: '第1次プロトタイプ完成',
    description: '折りたたみ機構とディスプレイを統合した第1次プロトタイプが完成',
    category: 'achievement',
    productId: 'fan-monitor',
    details: [
      'ヒンジ機構とディスプレイを統合',
      '3つ折りで厚さ約20mmに',
      'USB-C接続でラップトップに表示成功',
      '重量約500g（目標達成）',
    ],
  },
  {
    id: 'fan-monitor-005',
    date: '2025-10-10',
    title: 'カフェでの実地テスト',
    description: '実際のカフェで作業環境として使用し、フィードバックを収集',
    category: 'test',
    productId: 'fan-monitor',
    details: [
      '都内3ヶ所のカフェでテスト',
      '設置時間は約10秒',
      '周囲の反応は好評',
      'テーブルスペースの問題を確認',
    ],
  },
];

// 全体のマイルストーン（製品横断）
export const generalTimeline: Milestone[] = [
  {
    id: 'general-001',
    date: '2025-02-01',
    title: 'プロジェクト始動',
    description: 'AIウェアラブルデバイスのプロジェクトを正式に開始',
    category: 'achievement',
    productId: 'general',
    details: [
      'プロジェクトチーム結成',
      '初期コンセプトの策定',
      '技術調査の開始',
      'プロトタイプ開発計画の作成',
    ],
  },
  {
    id: 'general-002',
    date: '2025-10-14',
    title: 'Webサイト公開',
    description: 'プロダクト計画書とコミュニティサイトを公開',
    category: 'achievement',
    productId: 'general',
    details: [
      'Next.jsでWebサイトを構築',
      'プロダクト計画書を公開',
      '開発状況ダッシュボードを実装',
      'コミュニティ貢献システムを構築',
    ],
  },
];

// すべてのマイルストーンを統合
export const allMilestones: Milestone[] = [
  ...generalTimeline,
  ...aiNecklaceTimeline,
  ...fanMonitorTimeline,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 新しい順

// 年ごとにグループ化
export function groupByYear(milestones: Milestone[]): TimelineYear[] {
  const grouped = milestones.reduce((acc, milestone) => {
    const year = milestone.date.substring(0, 4);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(milestone);
    return acc;
  }, {} as Record<string, Milestone[]>);

  return Object.entries(grouped)
    .map(([year, milestones]) => ({
      year,
      milestones: milestones.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    }))
    .sort((a, b) => parseInt(b.year) - parseInt(a.year)); // 新しい年順
}

// 製品でフィルタリング
export function filterByProduct(milestones: Milestone[], productId?: string): Milestone[] {
  if (!productId || productId === 'all') {
    return milestones;
  }
  return milestones.filter((m) => m.productId === productId);
}

// 日付をフォーマット
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// カテゴリでフィルタリング
export function filterByCategory(milestones: Milestone[], category?: MilestoneCategory): Milestone[] {
  if (!category) {
    return milestones;
  }
  return milestones.filter((m) => m.category === category);
}
