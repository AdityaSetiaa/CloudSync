#!/usr/bin/env node

import "dotenv/config";
import { Command } from "commander";
import { registerCommand } from "./commands/register.js";
import { loginCommand } from "./commands/login.js";
import { helpcommand } from "./commands/Help.js";
import { statusCommand } from "./commands/status.js";
import { logoutcommand } from "./commands/logout.js";

const program = new Command();

program
    .command('hello')
    .description('Print Hello, World!')
    .action(() => {
    console.log('CloudSync says Hello (/>/_/</)');})


program
  .name("CloudSync")
  .description("CLI backup tool with versioning")
  .version("1.0.0");


registerCommand(program);
loginCommand(program);
helpcommand(program)
statusCommand(program) 
logoutcommand(program)

program.parse();
