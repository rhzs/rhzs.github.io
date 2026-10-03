# Personal site implementation plan

**Goal:** Publish a CV-based professional portfolio and three-category blog at https://rhzs.github.io.

**Architecture:** Astro static pages and Markdown content collections. GitHub Actions builds, checks links, and deploys to GitHub Pages. Execute inline in the current workspace.

**Tech stack:** Astro, TypeScript, CSS, Node test runner, Cheerio, GitHub Pages.

1. Create build-output tests in `tests/site.test.mjs`; run `npm test` and verify that the missing home page fails an assertion.
2. Implement shared layout and CSS in `src/layouts/Layout.astro` and `src/styles/global.css`, CV-grounded profile data in `src/data/profile.ts`, and Home, Work, About, Blog, category, article, and 404 routes in `src/pages/`.
3. Add `src/content.config.ts` with an empty `src/content/blog/` collection, category validation, and Markdown article routes. Do not import existing posts: the user requested empty categories. Add the provided PDF in `public/`.
4. Run `npm run check`, `npm run build`, and `npm test`. Resolve concrete failures. Inspect generated navigation, metadata, Markdown headings, code blocks, and download links.
5. Document editing and publishing in `README.md`; add `.github/workflows/deploy.yml` with checks and Pages artifact/deployment actions. Initialize the repository, commit named site files, create public `rhzs/rhzs.github.io`, push main, and enable Pages with Actions.
6. Wait for successful deployment and verify live Home, Work, Blog, category, and CV URLs.
