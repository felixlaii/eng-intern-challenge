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
      isNumber = false;
    } else if (char >= "A" && char <= "Z") {
      brailleText += brailleMap["cap"] + brailleMap[char.toLowerCase()];
      isNumber = false;
    } else if (char >= "0" && char <= "9") {
      if (!isNumber) {
        brailleText += brailleMap["num"];
        isNumber = true;
      }
    }
  }
}
