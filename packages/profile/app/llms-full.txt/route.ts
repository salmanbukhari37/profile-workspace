import { buildLlmsFull } from '../llm-content';

/** llms-full.txt (https://llmstxt.org) — complete expanded detail behind /llms.txt. */
export const dynamic = 'force-static';

export async function GET() {
  return new Response(buildLlmsFull(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
