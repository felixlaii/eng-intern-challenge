import { translateToEnglish, translateToBraille } from "./functions/functions";

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: ts-node cli.ts <translateTo|translateFrom> <text>");
  process.exit(1);
}

const [command, text] = args;
