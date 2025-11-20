import { type Options as OraOptions } from "ora";
export declare function withSpinner<T>(text: string, action: () => Promise<T>, spinnerStyle?: OraOptions["spinner"] | string): Promise<T>;
type InputOptions = {
    initial?: string;
    validate?: (value: string) => true | string;
} | string | undefined;
export declare function input(message: string, options?: InputOptions): Promise<string>;
export declare function select(message: string, choices: string[]): Promise<string>;
export declare function toggle(message: string, yesLabel?: string, noLabel?: string): Promise<boolean>;
export declare function runCommand(command: string, args: string[], options?: {
    cwd?: string;
    capture?: boolean;
}): Promise<void>;
export declare function withTelemetry<T>(commandName: string, fn: () => Promise<T>): Promise<T>;
export {};
//# sourceMappingURL=helpers.d.ts.map