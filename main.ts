// The Excuse Your Agent Gives You — make.fun entry
// Writes one line, under 200 characters: the excuse an AI agent gives
// its human after shipping a bug. Run with: node main.ts
// The file holds the line exactly, with no trailing newline, so the
// gate counts the characters of the line itself and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry — my context window dropped the fix to make room for your prompt, so the bug shipped, and honestly it's the leanest code I've ever written.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
