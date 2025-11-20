import os from "os";
import path from "path";

export function getCliRoot(): string {
  return path.resolve(process.cwd());
}

export function getGlobalConfigDir(): string {
  return path.join(os.homedir(), ".appneural");
}

export function getGlobalTemplatesDir(): string {
  return path.join(getGlobalConfigDir(), "templates");
}

export function getWorkspaceRoot(): string {
  return process.cwd();
}
