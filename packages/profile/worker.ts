/**
 * Serves the Next.js static export (`out/`) via the Workers ASSETS binding.
 * Deploy with `wrangler deploy` from this package directory (see CI).
 */
interface Env {
  ASSETS: {
    fetch(input: Request | URL | string, init?: RequestInit): Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
};
