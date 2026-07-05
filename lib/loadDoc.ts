import { readFile } from "fs/promises";
import path from "path";

// Reads a Markdown file from the project's /docs directory. Server-only.
export async function loadDoc(fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), "docs", fileName);
  return readFile(filePath, "utf-8");
}
