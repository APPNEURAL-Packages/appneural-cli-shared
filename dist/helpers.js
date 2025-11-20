import { execa } from "execa";
import inquirer from "inquirer";
import ora from "ora";
import { logger } from "./logger.js";
export async function withSpinner(text, action, spinnerStyle) {
    const spinner = ora({
        text,
        spinner: spinnerStyle ?? "dots"
    }).start();
    try {
        const result = await action();
        spinner.succeed(text);
        return result;
    }
    catch (error) {
        spinner.fail(text);
        throw error;
    }
}
export async function input(message, options) {
    const normalized = typeof options === "string" ? { initial: options } : options ?? {};
    const response = await inquirer.prompt([
        { type: "input", name: "value", message, default: normalized.initial, validate: normalized.validate }
    ]);
    return response.value;
}
export async function select(message, choices) {
    const response = await inquirer.prompt([
        { type: "list", name: "value", message, choices }
    ]);
    return response.value;
}
export async function toggle(message, yesLabel = "Yes", noLabel = "No") {
    const response = await inquirer.prompt([
        { type: "confirm", name: "value", message: `${message} (${yesLabel}/${noLabel})`, default: true }
    ]);
    return response.value;
}
export async function runCommand(command, args, options) {
    await execa(command, args, {
        cwd: options?.cwd,
        stdio: options?.capture === false ? "inherit" : "pipe"
    });
}
export async function withTelemetry(commandName, fn) {
    const start = Date.now();
    logger.debug(`Telemetry start: ${commandName}`);
    try {
        const result = await fn();
        logger.debug(`Telemetry success: ${commandName} (${Date.now() - start}ms)`);
        return result;
    }
    catch (error) {
        logger.debug(`Telemetry error: ${commandName} (${Date.now() - start}ms)`);
        throw error;
    }
}
//# sourceMappingURL=helpers.js.map