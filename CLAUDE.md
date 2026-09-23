# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo Layout

The repo holds one Vite app, `landing/`, with its own `package.json`/`node_modules` —
always `cd landing` before running commands. (`music_finder`, `options_tracker` and
`research_paper` used to live here and were split into their own repos in `be7d164`.)

`landing/` is the portfolio site at [starcandy.org](https://starcandy.org): React 19 +
TypeScript + Vite, plain CSS (no Tailwind/component lib). Single page, no router, no
backend beyond a small Cloudflare Worker.

## Commands

Run from inside `landing/`, not the repo root:

```
npm run dev              # vite dev server
npm run build            # tsc -b && vite build
npm run preview          # preview production build
npm run lint             # eslint .
npm run gallery:build    # resize gallery_src/ → public/photos/, write src/data/photos.json
npm run gallery:upload   # push public/photos/ to the R2 bucket
npm run deploy           # build + wrangler deploy (CI does this automatically)
```

There is no test suite.

## Architecture

- **`src/App.tsx`** owns all page state: the active tab (`experience` / `projects` /
  `photos` / `contact`), the open lightbox photo, and an Escape key handler. Each tab
  is a presentational component in `src/components/`.
- **`src/App.css`** holds the design tokens (color, type, spacing) and every component
  style. Match the existing custom properties rather than introducing new colors.
- **`src/hooks/useReveal.ts`** — `IntersectionObserver` scroll-reveal. It intentionally
  runs on *every* render (no dep array) so tab-switched content is picked up, and
  unobserves revealed elements so they never re-animate.
- **Photo gallery** — image bytes live in the R2 bucket `starcandy-photos`, not in Git.
  `src/data/photos.json` (committed) is the manifest: paths, dimensions, real EXIF
  extracted from originals. Originals in `gallery_src/` and staged output in
  `public/photos/` are both gitignored. Regenerate the manifest with
  `npm run gallery:build` — never hand-edit `photos.json`.
- **`worker/index.ts`** — serves `/photos/*` from R2 with immutable cache headers.
  `run_worker_first` in `wrangler.jsonc` routes only that prefix to the Worker;
  everything else is served by the static-assets layer and never invokes it.
- **Dev server** — `vite.config.ts` proxies `/photos/*` to the live site, since the R2
  binding doesn't exist locally. Gallery images therefore require network access in dev.

## Deploy

Pushes to `main` touching `landing/**` trigger `.github/workflows/deploy-landing.yml`
(npm ci → lint → build → `wrangler deploy`), using the `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` secrets.
