import os from "os";
import path from "path";
export function getCliRoot() {
    return path.resolve(process.cwd());
}
export function getGlobalConfigDir() {
    return path.join(os.homedir(), ".appneural");
}
export function getGlobalTemplatesDir() {
    return path.join(getGlobalConfigDir(), "templates");
}
export function getWorkspaceRoot() {
    return process.cwd();
}
//# sourceMappingURL=paths.js.map