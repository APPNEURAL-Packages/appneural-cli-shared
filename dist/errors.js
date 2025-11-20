export class AppneuralError extends Error {
    code;
    details;
    constructor(message, code = "APPNEURAL_ERROR", details) {
        super(message);
        this.name = "AppneuralError";
        this.code = code;
        this.details = details;
    }
}
export class AuthError extends AppneuralError {
    constructor(message = "Authentication failed", details) {
        super(message, "APPNEURAL_AUTH_ERROR", details);
    }
}
export class GithubApiError extends AppneuralError {
    constructor(message = "GitHub API interaction failed", details) {
        super(message, "APPNEURAL_GITHUB_API_ERROR", details);
    }
}
export class ValidationError extends AppneuralError {
    constructor(message = "Validation failed", details) {
        super(message, "APPNEURAL_VALIDATION_ERROR", details);
    }
}
export class FileError extends AppneuralError {
    constructor(message = "File system operation failed", details) {
        super(message, "APPNEURAL_FILE_ERROR", details);
    }
}
export class ExecError extends AppneuralError {
    constructor(message = "Command execution failed", details) {
        super(message, "APPNEURAL_EXEC_ERROR", details);
    }
}
//# sourceMappingURL=errors.js.map