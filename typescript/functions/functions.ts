import {
  brailleMap,
  brailleNumbers,
  englishMap,
} from "../data/braille-translator";

export function translateToBraille(text: string): any {
  let brailleText = "";
  let isNumber = false;

  for (const char of text) {
    if (char === " ") {
      brailleText += brailleMap[" "];
    }
  }
}
