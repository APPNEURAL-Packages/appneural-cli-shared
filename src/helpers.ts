import { execa } from "execa";
import inquirer from "inquirer";
import ora, { type Options as OraOptions } from "ora";
import { logger } from "./logger.js";

export async function withSpinner<T>(
  text: string,
  action: () => Promise<T>,
  spinnerStyle?: OraOptions["spinner"] | string
): Promise<T> {
  const spinner = ora({
    text,
    spinner: (spinnerStyle as OraOptions["spinner"]) ?? "dots"
  }).start();
  try {
    const result = await action();
    spinner.succeed(text);
    return result;
  } catch (error) {
    spinner.fail(text);
    throw error;
  }
}

type InputOptions = { initial?: string; validate?: (value: string) => true | string } | string | undefined;

export async function input(message: string, options?: InputOptions): Promise<string> {
  const normalized =
    typeof options === "string" ? { initial: options } : options ?? {};

  const question: {
    type: "input";
    name: "value";
    message: string;
    default?: string;
    validate?: (value: string) => true | string;
  } = {
    type: "input",
    name: "value",
    message,
    default: normalized.initial
  };

  if (normalized.validate) {
    question.validate = normalized.validate;
  }

  const response = await inquirer.prompt<{ value: string }>([
    question
  ]);
  return response.value;
}

export async function select(message: string, choices: string[]): Promise<string> {
  const response = await inquirer.prompt<{ value: string }>([
    { type: "list", name: "value", message, choices }
  ]);
  return response.value;
}

export async function toggle(message: string, yesLabel = "Yes", noLabel = "No"): Promise<boolean> {
  const response = await inquirer.prompt<{ value: boolean }>([
    { type: "confirm", name: "value", message: `${message} (${yesLabel}/${noLabel})`, default: true }
  ]);
  return response.value;
}

export async function runCommand(
  command: string,
  args: string[],
  options?: { cwd?: string; capture?: boolean }
): Promise<void> {
  await execa(command, args, {
    cwd: options?.cwd,
    stdio: options?.capture === false ? "inherit" : "pipe"
  });
}

export async function withTelemetry<T>(commandName: string, fn: () => Promise<T>): Promise<T> {
  const start = Date.now();
  logger.debug(`Telemetry start: ${commandName}`);
  try {
    const result = await fn();
    logger.debug(`Telemetry success: ${commandName} (${Date.now() - start}ms)`);
    return result;
  } catch (error) {
    logger.debug(`Telemetry error: ${commandName} (${Date.now() - start}ms)`);
    throw error;
  }
}
