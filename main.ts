// Real-Life Patch Notes: The Comedy Changelog.
// A single original patch note, written verbatim to /output/entry.txt.
// The program is fully deterministic: no network, no randomness,
// no clock, no input — every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const patchNote =
  "v2.4.0: fixed a bug where the stomach growled loudly in silent moments, including exams, first dates and funerals.";

// The grader runs this in a sandbox where /output already exists.
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, patchNote, "utf8");
