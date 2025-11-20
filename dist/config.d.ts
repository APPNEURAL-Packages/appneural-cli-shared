export interface CliConfig {
    githubToken?: string;
    user?: {
        username?: string;
        email?: string;
    };
    lastBannerVersion?: string;
    [key: string]: unknown;
}
export declare function readConfig(): Promise<CliConfig>;
export declare function writeConfig(config: CliConfig): Promise<void>;
//# sourceMappingURL=config.d.ts.map