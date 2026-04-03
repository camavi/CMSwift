import fs from "node:fs/promises";
import path from "node:path";

const rootDir = path.resolve("pages/_cmswift-fe/js/cms-src");
const outputFile = path.resolve("pages/_cmswift-fe/js/cms.js");
const manifestFile = path.join(rootDir, "modules.json");

async function readModule(name) {
  const filename = path.join(rootDir, name);
  return fs.readFile(filename, "utf8");
}

async function main() {
  const modules = JSON.parse(await fs.readFile(manifestFile, "utf8"));
  if (!Array.isArray(modules) || !modules.length) {
    throw new Error("Invalid cms module manifest");
  }
  const chunks = await Promise.all(modules.map(readModule));
  const output = chunks.join("");
  await fs.writeFile(outputFile, output, "utf8");
  process.stdout.write(`[build:cms] wrote ${path.relative(process.cwd(), outputFile)} from ${modules.length} modules\n`);
}

main().catch((error) => {
  console.error("[build:cms] failed:", error);
  process.exitCode = 1;
});
