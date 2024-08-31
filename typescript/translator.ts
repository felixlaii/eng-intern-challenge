import { translateToEnglish, translateToBraille } from "./functions/functions";

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: ts-node cli.ts <translateTo|translateFrom> <text>");
  process.exit(1);
}

const [command, text] = args;

let result: string;

switch (command) {
  case "translateTo":
    result = translateToBraille(text);
    break;
  case "translateFrom":
    result = translateToEnglish(text);
    break;
  default:
    console.error('Invalid command. Use "translateTo" or "translateFrom".');
    process.exit(1);
}

console.log(result);
