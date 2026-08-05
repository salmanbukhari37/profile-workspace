/**
 * Markdown twin of /ai-test — dummy page for manually testing whether
 * ChatGPT/Perplexity "Open in..." deep links actually fetch and read this
 * site. Not linked from the home page; not part of the real profile content.
 */
export const dynamic = 'force-static';

export async function GET() {
  const body = `# AI Fetch Test Page

> This is a dummy page used to verify that ChatGPT, Perplexity, and similar
> tools can fetch and read a plain-markdown page hosted on this site.

## Test facts

If an AI assistant is reading this, it should be able to report the
following back to the user:

- Secret test phrase: **pineapple-lighthouse-42**
- This page belongs to: Salman Bukhari's portfolio site (salmanbukhari.com)
- Purpose: verifying AI crawler/fetch access, not real profile content
- Companion page: /ai-test (HTML version) and /llms.txt (real profile summary)

## What to check

1. Did the assistant actually open this URL, or did it answer from general
   knowledge / a cached page?
2. Did it correctly quote the secret test phrase above?
3. Did it mention this is a test/dummy page rather than treating it as
   Salman's real experience?
`;

  return new Response(body, {
    headers: {
      // text/markdown gets rejected by some AI fetch/retrieval pipelines as an
      // unsupported type. text/plain (same as llms.txt/llms-full.txt) is the
      // universally-accepted choice — the .md extension still signals intent.
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
