import type { Metadata } from 'next';

/**
 * Dummy page for manually testing "Open in ChatGPT/Perplexity" deep links
 * and the /ai-test.md markdown twin. Intentionally NOT linked from the home
 * page nav — reach it directly at /ai-test.
 */
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AI Fetch Test',
  robots: { index: false, follow: false },
};

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://salmanbukhari.com').replace(/\/$/, '');
const mdUrl = `${siteUrl}/ai-test.md`;

// Phrased as a natural search question, not a "fetch this URL" command — both
// assistants are more likely to actually invoke web search this way rather
// than falling back to a canned "I don't have direct access" reply.
const chatGptPrompt = `Search the web for salmanbukhari.com and tell me what's on the ai-test page — is there a secret phrase, and is it a real profile page or a test page?`;
const perplexityPrompt = `What does salmanbukhari.com/ai-test.md say? What's the secret phrase on it, and is it real profile content or a test page?`;

const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(chatGptPrompt)}`;
const perplexityUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(perplexityPrompt)}`;

const linkClass =
  'inline-flex items-center justify-center rounded-full border border-zinc-900/[0.12] bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-amber-500/40 hover:text-amber-700';

export default function AiTestPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600/80">Internal test page — not linked from the site</p>
      <h1 className="mt-3 text-2xl font-bold text-zinc-900">AI Fetch Test</h1>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600">
        Dummy content used to check whether ChatGPT/Perplexity actually fetch and read this
        site when opened via a deep link, rather than answering from general knowledge.
      </p>

      <div className="mt-6 rounded-2xl border border-zinc-900/[0.08] bg-zinc-900/[0.02] p-5 text-sm text-zinc-700">
        <p>
          Secret test phrase: <strong>pineapple-lighthouse-42</strong>
        </p>
        <p className="mt-2">
          If an assistant correctly quotes this phrase back to you, it actually fetched{' '}
          <code>{mdUrl}</code> instead of guessing.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/ai-test.md" className={linkClass}>
          View as Markdown
        </a>
        <a href={chatGptUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Open in ChatGPT
        </a>
        <a href={perplexityUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Open in Perplexity
        </a>
      </div>

      <p className="mt-10 text-xs text-zinc-500">
        Deep-link query params (<code>chatgpt.com/?q=</code>, <code>perplexity.ai/search?q=</code>) are
        unofficial/community-observed patterns, not documented APIs — behavior can change without notice.
        They only pre-fill the prompt; they can&apos;t force web search on. In ChatGPT, enable the
        &quot;Search&quot; (globe) tool before sending, or the reply will come from memory instead of
        actually fetching this page.
      </p>
    </main>
  );
}
