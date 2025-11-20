import fs from "fs/promises";
import path from "path";

export async function ensureDir(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}

export async function pathExists(target: string): Promise<boolean> {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

export async function copyDirectory(source: string, destination: string): Promise<void> {
  await ensureDir(destination);
  const entries = await fs.readdir(source, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const srcPath = path.join(source, entry.name);
      const dstPath = path.join(destination, entry.name);
      if (entry.isDirectory()) {
        await copyDirectory(srcPath, dstPath);
      } else if (entry.isFile()) {
        await fs.copyFile(srcPath, dstPath);
      }
    })
  );
}

export async function readJsonFile<T>(target: string): Promise<T> {
  const content = await fs.readFile(target, "utf-8");
  return JSON.parse(content) as T;
}

export async function writeJsonFile(target: string, data: unknown): Promise<void> {
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
}
