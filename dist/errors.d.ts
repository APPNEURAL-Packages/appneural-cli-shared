export declare class AppneuralError extends Error {
    readonly code: string;
    readonly details?: unknown;
    constructor(message: string, code?: string, details?: unknown);
}
export declare class AuthError extends AppneuralError {
    constructor(message?: string, details?: unknown);
}
export declare class GithubApiError extends AppneuralError {
    constructor(message?: string, details?: unknown);
}
export declare class ValidationError extends AppneuralError {
    constructor(message?: string, details?: unknown);
}
export declare class FileError extends AppneuralError {
    constructor(message?: string, details?: unknown);
}
export declare class ExecError extends AppneuralError {
    constructor(message?: string, details?: unknown);
}
//# sourceMappingURL=errors.d.ts.map