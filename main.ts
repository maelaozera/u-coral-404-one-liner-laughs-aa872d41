import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I bought noise-cancelling headphones so I could ignore people in high definition.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
