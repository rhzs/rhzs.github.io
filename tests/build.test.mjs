import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

test("a production homepage is generated for GitHub Pages", () => {
  assert.ok(
    existsSync(new URL("../dist/index.html", import.meta.url)),
    "Missing production homepage",
  );
});
