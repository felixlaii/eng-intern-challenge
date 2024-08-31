import {
  brailleMap,
  brailleNumbers,
  englishMap,
} from "../data/braille-translator";

export function translateToBraille(text: string): string {
  let brailleText = "";
  let isNumber = false;

  for (const char of text) {
    if (char === " ") {
      brailleText += brailleMap.letters[" "];
      isNumber = false;
    } else if (char >= "A" && char <= "Z") {
      brailleText +=
        brailleMap.letters["cap"] + brailleMap.letters[char.toLowerCase()];
      isNumber = false;
    } else if (char >= "0" && char <= "9") {
      if (!isNumber) {
        brailleText += brailleMap.numbers["num"];
        isNumber = true;
      }
      brailleText += brailleMap.numbers[char];
    } else if (char >= "a" && char <= "z") {
      brailleText += brailleMap.letters[char];
      isNumber = false;
    }
  }
  return brailleText;
}

export function translateToEnglish(braille: string): string {
  let englishText = "";
  let isCapital = false;
  let isNumber = false;

  const brailleChars = braille.match(/.{1,6}/g) || [];

  for (const char of brailleChars) {
    if (char === brailleMap[" "]) {
      englishText += " ";
      isCapital = false;
      isNumber = false;
    } else if (char === brailleMap["cap"]) {
      isCapital = true;
    } else if (char === brailleMap["num"]) {
      isNumber = true;
    } else {
      let translatedChar =
        englishMap.letters[char] || englishMap.numbers[char] || "";

      if (isNumber) {
        if (translatedChar >= "a" && translatedChar <= "j") {
          translatedChar = (
            translatedChar.charCodeAt(0) -
            "a".charCodeAt(0) +
            "1".charCodeAt(0)
          ).toString();
        } else if (translatedChar === "k") {
          translatedChar = "0";
        }
        isNumber = false;
      }

      if (isCapital) {
        translatedChar = translatedChar.toUpperCase();
        isCapital = false;
      }
      englishText += translatedChar;
    }
  }

  return englishText;
}
