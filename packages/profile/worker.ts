/**
 * Serves the Next.js static export (`out/`) via the Workers ASSETS binding.
 * Deploy with `wrangler deploy` from this package directory (see CI).
 *
 * NOTE: requests that match a file in `out/` are served directly by the asset
 * server and never reach this script — it only runs for non-asset paths. So
 * response headers for static files (e.g. the Content-Type on `.md`) cannot be
 * set here; they live in `public/_headers`, which is copied to `out/_headers`.
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
