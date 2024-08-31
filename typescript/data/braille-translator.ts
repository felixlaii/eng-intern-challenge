export const brailleMap: { [key: string]: any } = {
  a: "O.....",
  b: "O.O...",
  c: "OO....",
  d: "OO.O..",
  e: "O..O..",
  f: "OOO...",
  g: "OOOO..",
  h: "O.OO..",
  i: ".OO...",
  j: ".OOO..",
  k: "O...O.",
  l: "O.O.O.",
  m: "OO..O.",
  n: "OO.OO.",
  o: "O..OO.",
  p: "OOO.O.",
  q: "OOOOO.",
  r: "O.OOO.",
  s: ".OO.O.",
  t: ".OOOO.",
  u: "O...OO",
  v: "O.O.OO",
  w: ".OOO.O",
  x: "OO..OO",
  y: "OO.OOO",
  z: "O..OOO",
  cap: ".....O",
  num: ".O.OOO",
  " ": "......",
  1: "O.....",
  2: "O.O...",
  3: "OO....",
  4: "OO.O..",
  5: "O..O..",
  6: "OOO...",
  7: "OOOO..",
  8: "O.OO..",
  9: ".OO...",
  0: ".OOO..",
};

export const brailleNumbers: { [key: string]: string } = {
  "1": brailleMap["a"],
  "2": brailleMap["b"],
  "3": brailleMap["c"],
  "4": brailleMap["d"],
  "5": brailleMap["e"],
  "6": brailleMap["f"],
  "7": brailleMap["g"],
  "8": brailleMap["h"],
  "9": brailleMap["i"],
  "0": brailleMap["j"],
};

export const englishMap: { [key: string]: string } = {};
for (const key in brailleMap) {
  if (brailleMap.hasOwnProperty(key)) {
    englishMap[brailleMap[key]] = key;
  }
}
for (const key in brailleNumbers) {
  if (brailleNumbers.hasOwnProperty(key)) {
    englishMap[brailleNumbers[key]] = key;
  }
}
