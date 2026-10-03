# Rheza Satria personal site

Build and publish a public personal site at https://rhzs.github.io. Professional details come from CV-RhezaSatria-Sep-2026.pdf. The user explicitly requested that all blog categories remain empty for now. Do not import existing posts or invent articles, religious beliefs, career claims, or availability for work.

## Structure

- Home: introduction, current role, featured professional work, and recent writing.
- Work: employment history, selected outcomes, technical experience, education, and research publications.
- Blog: reverse chronological articles with Life, Technical, and Religious category pages.
- Blog URLs use `/writing/`, because the existing `rhzs/blog` GitHub Pages project reserves `/blog/`. Preserve the old project and use “Blog” as the navigation label for the new site.
- Articles: Markdown content rendered as static pages when the owner adds posts. No articles are published in the initial version.
- About: short CV-grounded biography and contact/profile links.
- CV: a downloadable copy of the provided professional CV.

## Design

Light reading surface (#f8f9fc), dark ink (#282538), violet accent (#6251a8), pale violet (#eeebf7), muted ink (#686579), and subtle borders (#dedee8). Newsreader display and Source Sans 3 body fonts with system fallbacks. A compact sidebar identifies the owner and provides navigation on desktop; it becomes a header on mobile. Large left-aligned typography and a quiet, spacious layout keep professional work and personal writing equally visible. No invented portrait or decorative images.

## Implementation

Astro emits static HTML and CSS suitable for GitHub Pages, with no application server and no required browser JavaScript. Content collections validate Markdown frontmatter and the three categories. GitHub Actions checks types, builds the site, validates emitted routes and links, and deploys the exact build to Pages. New Markdown posts trigger publication on push to main.

## Verification

Type and template checks pass; the production build succeeds. Tests validate requested category routes, accessible navigation, canonical URLs, downloadable CV, every internal link, and empty blog categories. Validate article rendering with a temporary local fixture removed before the final build. Verify the GitHub Pages deployment and fetch the live pages before reporting publication.
