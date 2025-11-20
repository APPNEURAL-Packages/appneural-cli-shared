import fs from "fs/promises";
import os from "os";
import path from "path";
import { logger } from "./logger.js";

export interface CliConfig {
  githubToken?: string;
  user?: {
    username?: string;
    email?: string;
  };
  lastBannerVersion?: string;
  [key: string]: unknown;
}

const CONFIG_DIR = path.join(os.homedir(), ".appneural");
const CONFIG_PATH = path.join(CONFIG_DIR, "config.json");

export async function readConfig(): Promise<CliConfig> {
  try {
    const content = await fs.readFile(CONFIG_PATH, "utf-8");
    return JSON.parse(content) as CliConfig;
  } catch (_error) {
    return {};
  }
}

export async function writeConfig(config: CliConfig): Promise<void> {
  await fs.mkdir(CONFIG_DIR, { recursive: true });
  await fs.writeFile(CONFIG_PATH, `${JSON.stringify(config, null, 2)}\n`, "utf-8");
  logger.debug("APPNEURAL configuration persisted");
}
