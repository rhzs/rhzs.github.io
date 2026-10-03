import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { load } from "cheerio";

const output = new URL("../dist/", import.meta.url).pathname;
const readPage = (path) =>
  load(readFileSync(join(output, path, "index.html"), "utf8"));

test("the site publishes the requested portfolio and blog categories", () => {
  for (const route of [
    "",
    "work",
    "about",
    "blog",
    "blog/life",
    "blog/technical",
    "blog/religious",
  ]) {
    assert.ok(
      existsSync(join(output, route, "index.html")),
      `Missing page: /${route}`,
    );
    const $ = readPage(route);
    assert.equal($("main").length, 1);
    assert.equal($("h1").length, 1);
    assert.equal(
      $('link[rel="canonical"]').attr("href"),
      `https://rhzs.github.io/${route ? `${route}/` : ""}`,
    );
    assert.ok($('nav[aria-label="Main navigation"]').length);
    assert.ok(
      $('a[href="#main-content"]').length,
      "Keyboard skip link is missing",
    );
  }
});

test("every internal page, asset, and heading link resolves", () => {
  assert.ok(
    existsSync(output),
    "Build the static site before testing its links",
  );
  const visit = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const file = join(directory, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (entry.name.endsWith(".html")) {
        const $ = load(readFileSync(file, "utf8"));
        for (const element of $(
          "a[href], link[href], img[src], script[src]",
        ).toArray()) {
          const href = $(element).attr("href") ?? $(element).attr("src");
          if (!href || /^(https?:|mailto:|data:)/.test(href)) continue;
          const currentPath = file
            .slice(output.length)
            .replace(/index\.html$/, "");
          const url = new URL(href, `https://rhzs.github.io/${currentPath}`);
          const path = decodeURIComponent(url.pathname).replace(/^\//, "");
          const target = join(
            output,
            path.endsWith("/") || !path ? `${path}index.html` : path,
          );
          assert.ok(
            existsSync(target),
            `${file} contains a broken link: ${href}`,
          );
          if (url.hash && target.endsWith(".html")) {
            const linkedPage = load(readFileSync(target, "utf8"));
            const id = decodeURIComponent(url.hash.slice(1));
            assert.ok(
              linkedPage("[id]")
                .toArray()
                .some((node) => linkedPage(node).attr("id") === id),
              `Missing heading: ${href}`,
            );
          }
        }
      }
    }
  };
  visit(output);
});

test("the CV is available and empty blog categories show a useful empty state", () => {
  assert.ok(
    existsSync(join(output, "rheza-satria-cv.pdf")),
    "Missing downloadable CV",
  );
  assert.ok(readPage("work").text().includes("Principal Software Engineer"));
  for (const category of ["life", "technical", "religious"]) {
    const $ = readPage(`blog/${category}`);
    if ($(".post-list article").length === 0) {
      assert.ok($.text().includes("No posts published yet"));
      assert.equal($('a[href^="/blog/posts/"]').length, 0);
    }
  }
});
