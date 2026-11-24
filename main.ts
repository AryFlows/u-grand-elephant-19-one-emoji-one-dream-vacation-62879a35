// One Emoji, One Dream Vacation — writes a single sunrise-over-the-sea emoji.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🌅"; // U+1F305 SUNRISE — dawn breaking over a faraway sea.

function main(): void {
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 8) {
    throw new Error(`entry must be 1-8 characters, got ${chars.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (chars.length !== 1) {
    throw new Error("entry must be exactly one emoji");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
