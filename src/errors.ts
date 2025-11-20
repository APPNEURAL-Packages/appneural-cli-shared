export class AppneuralError extends Error {
  public readonly code: string;
  public readonly details?: unknown;

  constructor(message: string, code = "APPNEURAL_ERROR", details?: unknown) {
    super(message);
    this.name = "AppneuralError";
    this.code = code;
    this.details = details;
  }
}

export class AuthError extends AppneuralError {
  constructor(message = "Authentication failed", details?: unknown) {
    super(message, "APPNEURAL_AUTH_ERROR", details);
  }
}

export class GithubApiError extends AppneuralError {
  constructor(message = "GitHub API interaction failed", details?: unknown) {
    super(message, "APPNEURAL_GITHUB_API_ERROR", details);
  }
}

export class ValidationError extends AppneuralError {
  constructor(message = "Validation failed", details?: unknown) {
    super(message, "APPNEURAL_VALIDATION_ERROR", details);
  }
}

export class FileError extends AppneuralError {
  constructor(message = "File system operation failed", details?: unknown) {
    super(message, "APPNEURAL_FILE_ERROR", details);
  }
}

export class ExecError extends AppneuralError {
  constructor(message = "Command execution failed", details?: unknown) {
    super(message, "APPNEURAL_EXEC_ERROR", details);
  }
}
