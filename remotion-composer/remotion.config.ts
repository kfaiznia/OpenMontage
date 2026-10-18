import { Config } from "@remotion/cli/config";
// Environment-specific: this container has no downloaded Chrome; use the Playwright headless shell if present.
import { existsSync } from "fs";
const p = "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";
if (existsSync(p)) Config.setBrowserExecutable(p);
