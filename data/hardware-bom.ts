// ハードウェア部品リスト (Bill of Materials)

export type ComponentStatus = 'considering' | 'decided' | 'ordered' | 'received';

export interface Component {
  id: string;
  category: string;
  name: string;
  manufacturer?: string;
  modelNumber?: string;
  specifications: string[];
  status: ComponentStatus;
  estimatedPrice?: string;
  purchaseUrl?: string;
  notes?: string;
  communityProposals?: number; // GitHub Discussionsでの提案数
}

export interface HardwareBOM {
  productId: string;
  productName: string;
  phase: string; // 'prototype' | 'beta' | 'production'
  lastUpdated: string;
  components: Component[];
}

// AIネックレスのBOM
export const aiNecklaceBOM: HardwareBOM = {
  productId: 'ai-necklace',
  productName: 'AIネックレス',
  phase: 'プロトタイプ開発',
  lastUpdated: '2025-10-14',
  components: [
    {
      id: 'camera',
      category: 'カメラモジュール',
      name: '1080p HDカメラ',
      manufacturer: '検討中',
      specifications: [
        '1080p解像度',
        '視野角120度',
        '自動焦点調整',
        '低消費電力',
      ],
      status: 'considering',
      estimatedPrice: '¥3,000 - ¥5,000',
      notes: 'エッジAI処理内蔵のモデルを優先検討',
      communityProposals: 0,
    },
    {
      id: 'microphone',
      category: 'マイク',
      name: 'デュアルビームフォーミングマイク',
      manufacturer: '検討中',
      specifications: [
        'ノイズキャンセリング機能',
        '360度音声ピックアップ',
        'MEMSマイク',
        '高SNR比',
      ],
      status: 'considering',
      estimatedPrice: '¥1,000 - ¥2,000',
      communityProposals: 0,
    },
    {
      id: 'speaker',
      category: 'スピーカー',
      name: '骨伝導スピーカー',
      manufacturer: '検討中',
      specifications: [
        '高音質',
        '低音漏れ',
        '小型軽量',
        '低消費電力',
      ],
      status: 'considering',
      estimatedPrice: '¥2,000 - ¥4,000',
      notes: 'プライバシー保護のため音漏れが少ないモデルを優先',
      communityProposals: 0,
    },
    {
      id: 'processor',
      category: 'プロセッサ',
      name: 'AI処理チップ',
      manufacturer: '検討中',
      specifications: [
        'エッジAI処理対応',
        '低消費電力',
        'Bluetooth 5.3',
        'Wi-Fi 6対応',
      ],
      status: 'considering',
      estimatedPrice: '¥5,000 - ¥8,000',
      notes: 'オフライン動作のためのエッジAI処理能力が重要',
      communityProposals: 0,
    },
    {
      id: 'battery',
      category: 'バッテリー',
      name: 'リチウムポリマーバッテリー',
      manufacturer: '検討中',
      specifications: [
        '容量: 500-800mAh',
        '最大12時間駆動',
        '急速充電対応',
        '軽量',
      ],
      status: 'considering',
      estimatedPrice: '¥1,500 - ¥2,500',
      communityProposals: 0,
    },
    {
      id: 'sensors',
      category: 'センサー',
      name: '加速度/ジャイロセンサー',
      manufacturer: '検討中',
      specifications: [
        '6軸センサー',
        '低消費電力',
        '小型',
      ],
      status: 'considering',
      estimatedPrice: '¥500 - ¥1,000',
      communityProposals: 0,
    },
    {
      id: 'gps',
      category: 'GPS',
      name: 'GPS/GNSSモジュール',
      manufacturer: '検討中',
      specifications: [
        'マルチGNSS対応',
        '低消費電力',
        '小型',
      ],
      status: 'considering',
      estimatedPrice: '¥1,000 - ¥2,000',
      communityProposals: 0,
    },
    {
      id: 'casing',
      category: 'ケーシング',
      name: 'チタン合金フレーム + シリコンカバー',
      manufacturer: '検討中',
      specifications: [
        '医療グレードシリコン',
        'チタン合金',
        '防水防塵 IP67',
        '重量: 30-40g',
      ],
      status: 'considering',
      estimatedPrice: '¥2,000 - ¥4,000',
      communityProposals: 0,
    },
  ],
};

// 扇子型モニターのBOM
export const fanMonitorBOM: HardwareBOM = {
  productId: 'fan-monitor',
  productName: '扇子型モニター',
  phase: 'プロトタイプ開発',
  lastUpdated: '2025-10-14',
  components: [
    {
      id: 'display-panel',
      category: 'ディスプレイパネル',
      name: '13.3インチ IPS液晶',
      manufacturer: '検討中',
      specifications: [
        'Full HD (1920x1080)',
        'IPSパネル',
        '輝度: 300 cd/m²',
        '視野角: 178度',
        'sRGB 100%',
      ],
      status: 'considering',
      estimatedPrice: '¥8,000 - ¥12,000',
      communityProposals: 0,
    },
    {
      id: 'hinge',
      category: 'ヒンジ機構',
      name: '折りたたみヒンジ',
      manufacturer: '検討中',
      specifications: [
        '耐久性: 10,000回以上',
        '薄型設計',
        'スムーズな開閉',
        '自動ロック機構',
      ],
      status: 'considering',
      estimatedPrice: '¥2,000 - ¥4,000',
      notes: '特許出願を検討',
      communityProposals: 0,
    },
    {
      id: 'frame',
      category: 'フレーム',
      name: 'アルミニウム合金フレーム',
      manufacturer: '検討中',
      specifications: [
        '軽量',
        '堅牢性',
        '厚さ: 5mm (展開時)',
      ],
      status: 'considering',
      estimatedPrice: '¥3,000 - ¥5,000',
      communityProposals: 0,
    },
    {
      id: 'driver-board',
      category: 'ドライバー基板',
      name: 'ディスプレイドライバー',
      manufacturer: '検討中',
      specifications: [
        'USB-C Alt Mode対応',
        'Mini HDMI対応',
        '低消費電力: 7.5W-15W',
      ],
      status: 'considering',
      estimatedPrice: '¥2,000 - ¥3,000',
      communityProposals: 0,
    },
    {
      id: 'stand',
      category: 'スタンド',
      name: '内蔵自立スタンド',
      manufacturer: '検討中',
      specifications: [
        '角度調整: 0-90度',
        '縦置き・横置き対応',
        'コンパクト収納',
      ],
      status: 'considering',
      estimatedPrice: '¥500 - ¥1,000',
      communityProposals: 0,
    },
    {
      id: 'protective-case',
      category: '保護ケース',
      name: 'マグネット式保護カバー',
      manufacturer: '検討中',
      specifications: [
        'マグネット開閉',
        '衝撃吸収',
        '薄型',
      ],
      status: 'considering',
      estimatedPrice: '¥1,000 - ¥2,000',
      communityProposals: 0,
    },
    {
      id: 'cables',
      category: 'ケーブル',
      name: 'USB-Cケーブル + Mini HDMIケーブル',
      manufacturer: '検討中',
      specifications: [
        'USB-C: 1m',
        'Mini HDMI: 1m',
        '高品質',
      ],
      status: 'considering',
      estimatedPrice: '¥500 - ¥1,000',
      communityProposals: 0,
    },
  ],
};

// すべてのBOMをエクスポート
export const allBOMs: HardwareBOM[] = [aiNecklaceBOM, fanMonitorBOM];

// 製品IDからBOMを取得するヘルパー関数
export function getBOMByProductId(productId: string): HardwareBOM | undefined {
  return allBOMs.find((bom) => bom.productId === productId);
}

// ステータスの日本語変換
export function getStatusLabel(status: ComponentStatus): string {
  const labels: Record<ComponentStatus, string> = {
    considering: '検討中',
    decided: '決定済み',
    ordered: '発注済み',
    received: '受領済み',
  };
  return labels[status];
}

// ステータスの色を取得
export function getStatusColor(status: ComponentStatus): string {
  const colors: Record<ComponentStatus, string> = {
    considering: 'bg-gray-100 text-gray-800 border-gray-300',
    decided: 'bg-blue-100 text-blue-800 border-blue-300',
    ordered: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    received: 'bg-green-100 text-green-800 border-green-300',
  };
  return colors[status];
}
