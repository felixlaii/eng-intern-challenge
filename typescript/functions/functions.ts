import {
  brailleMap,
  brailleNumbers,
  englishMap,
} from "../data/braille-translator";

export interface translateToBrailleProps {
  text: string;
}

export function translateToBraille(props: translateToBrailleProps): any {
  let brailleText = "";
  let isNumber = false;
}
