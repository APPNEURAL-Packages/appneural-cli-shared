import chalk from "chalk";

const levelTag = (label: string, color: (input: string) => string): string => color(`[${label}]`);

export const logger = {
  info: (message: string): void => console.log(levelTag("info", chalk.cyan), message),
  warn: (message: string): void => console.warn(levelTag("warn", chalk.yellow), message),
  error: (message: string): void => console.error(levelTag("error", chalk.red), message),
  success: (message: string): void => console.log(levelTag("success", chalk.green), message),
  debug: (message: string): void => {
    if (process.env.ANX_DEBUG) {
      console.debug(levelTag("debug", chalk.gray), message);
    }
  }
};

export type Logger = typeof logger;
