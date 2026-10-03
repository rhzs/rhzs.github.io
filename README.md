# Rheza Satria’s personal site

Professional work and a blog for life, technical, and religious writing. Published at **https://rhzs.github.io** using GitHub Pages.

## Work on the site

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Professional details are in `src/data/profile.ts`. Page content is in `src/pages/`; shared styling is in `src/styles/global.css`. The downloadable CV is `public/rheza-satria-cv.pdf`.

## Publish a blog post

The blog starts empty, as requested. Add a Markdown file to `src/content/blog/`, for example `my-first-post.md`:

```markdown
---
title: "My first post"
description: "A short description for the blog index and search results."
date: 2026-10-03
category: life
draft: false
---

Write your post here. Markdown headings, links, images, and fenced code blocks are supported.
```

Use `life`, `technical`, or `religious` for the category. The filename becomes the address, e.g. `/blog/posts/my-first-post/`. Set `draft: true` to keep a post unpublished. Posts dated in the future remain unpublished until a build runs on or after their date; GitHub Pages does not automatically rebuild at the publication date.

Images can be placed in `public/images/` and linked as `![Description](/images/example.jpg)`.

## Check and deploy

```sh
npm run check
npm run build
npm test
```

Push to `main` to run the GitHub Actions checks and publish the static build. In the repository’s **Settings → Pages**, the build source should be **GitHub Actions**. No server, API key, or database is needed.

The checks cover generated routes, canonical URLs, internal links and heading anchors, navigation accessibility, the CV download, and empty category behavior. They continue to work as articles are added.
