import fs from "fs/promises";
import os from "os";
import path from "path";
import { logger } from "./logger.js";
const CONFIG_DIR = path.join(os.homedir(), ".appneural");
const CONFIG_PATH = path.join(CONFIG_DIR, "config.json");
export async function readConfig() {
    try {
        const content = await fs.readFile(CONFIG_PATH, "utf-8");
        return JSON.parse(content);
    }
    catch (_error) {
        return {};
    }
}
export async function writeConfig(config) {
    await fs.mkdir(CONFIG_DIR, { recursive: true });
    await fs.writeFile(CONFIG_PATH, `${JSON.stringify(config, null, 2)}\n`, "utf-8");
    logger.debug("APPNEURAL configuration persisted");
}
//# sourceMappingURL=config.js.map