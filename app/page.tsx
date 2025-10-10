import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Home() {
  const filePath = path.join(process.cwd(), 'AI-Necklace-Product-Plan.md');
  const markdown = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-10 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            AIネックレス プロダクト計画
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            世界中の人々の生活をもっと良くする、ウェアラブルAIデバイス
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 md:p-12">
          <article className="markdown prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </article>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-600 dark:text-slate-400 pb-8">
          <p className="text-sm">
            © 2025 AI Necklace Project
          </p>
        </footer>
      </main>
    </div>
  );
}
