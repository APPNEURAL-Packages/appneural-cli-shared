import chalk from "chalk";
const levelTag = (label, color) => color(`[${label}]`);
export const logger = {
    info: (message) => console.log(levelTag("info", chalk.cyan), message),
    warn: (message) => console.warn(levelTag("warn", chalk.yellow), message),
    error: (message) => console.error(levelTag("error", chalk.red), message),
    success: (message) => console.log(levelTag("success", chalk.green), message),
    debug: (message) => {
        if (process.env.ANX_DEBUG) {
            console.debug(levelTag("debug", chalk.gray), message);
        }
    }
};
//# sourceMappingURL=logger.js.map