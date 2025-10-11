import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Home() {
  const filePath = path.join(process.cwd(), 'AI-Necklace-Product-Plan.md');
  const markdown = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-black">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-black">
            AIネックレス プロダクト計画
          </h1>
          <p className="text-black mt-2">
            世界中の人々の生活をもっと良くする、ウェアラブルAIデバイス
          </p>
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
        <footer className="mt-12 text-center text-black pb-8">
          <p className="text-sm">
            © 2025 AI Necklace Project
          </p>
        </footer>
      </main>
    </div>
  );
}
