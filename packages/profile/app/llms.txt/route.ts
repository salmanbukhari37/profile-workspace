import { buildLlmsIndex } from '../llm-content';

/** llms.txt (https://llmstxt.org) — short index; see /llms-full.txt for full detail. */
export const dynamic = 'force-static';

export async function GET() {
  return new Response(buildLlmsIndex(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
