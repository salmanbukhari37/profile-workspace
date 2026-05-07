# Salman Profile Workspace

This repository is an Nx workspace containing a single Next.js app:

- Project name: `profile`
- Project path: `packages/profile`
- Framework: Next.js 16 + React 19
- Build mode: static export (`output: 'export'`)

## Prerequisites

- Node.js 20+ (recommended LTS)
- `pnpm` (workspace package manager)

## Getting Started

1. Install dependencies from the workspace root:

```sh
pnpm install
```

2. Set environment variables:

```sh
cp packages/profile/.env.example packages/profile/.env.local
```

3. Start the development server:

```sh
npx nx dev profile
```

Open [http://localhost:3000](http://localhost:3000).

## Available Nx Commands

Run all commands from the workspace root.

- Start dev server:

```sh
npx nx dev profile
```

- Build static output:

```sh
npx nx build profile
```

- Lint:

```sh
npx nx lint profile
```

- View workspace/project graph:

```sh
npx nx graph
```

## Build Output and Deployment

This app is configured for static export in `packages/profile/next.config.ts`.

- Running `npx nx build profile` generates static files in:

```text
packages/profile/out
```

Deploy the contents of `packages/profile/out` to any static host (for example Cloudflare Pages, Netlify, Vercel static output, S3 + CloudFront, or GitHub Pages).

## Useful Paths

- App source: `packages/profile/app`
- Reusable components: `packages/profile/components`
- Static assets: `packages/profile/public`
- Project config: `packages/profile/project.json`
