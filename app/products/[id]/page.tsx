import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';

const products: { [key: string]: { file: string; name: string } } = {
  'ai-necklace': {
    file: 'AI-Necklace-Product-Plan.md',
    name: 'AIネックレス',
  },
  'fan-monitor': {
    file: 'Fan-Monitor-Product-Plan.md',
    name: '扇子型モニター',
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((id) => ({
    id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products[id];

  if (!product) {
    notFound();
  }

  const filePath = path.join(process.cwd(), product.file);
  const markdown = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-black">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Link href="/" className="text-black hover:underline mb-2 inline-block">
            ← 製品一覧に戻る
          </Link>
          <h1 className="text-3xl font-bold text-black">
            {product.name} プロダクト計画
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200">
          <article className="markdown prose prose-slate max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </article>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-3d pb-8">
          <p className="text-sm">
            © 2025 Product Planning
          </p>
        </footer>
      </main>
    </div>
  );
}
