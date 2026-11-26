import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

const FRAGMENTS = [
  "I bought noise-cancelling headphones",
  "so I could ignore people",
  "in high definition.",
];

function assembleLine(parts: string[]): string {
  return parts.join(" ");
}

function writeEntry(text: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, text, "utf8");
}

writeEntry(assembleLine(FRAGMENTS));
