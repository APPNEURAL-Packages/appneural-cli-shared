export declare function ensureDir(dir: string): Promise<void>;
export declare function pathExists(target: string): Promise<boolean>;
export declare function copyDirectory(source: string, destination: string): Promise<void>;
export declare function readJsonFile<T>(target: string): Promise<T>;
export declare function writeJsonFile(target: string, data: unknown): Promise<void>;
//# sourceMappingURL=fs.d.ts.map