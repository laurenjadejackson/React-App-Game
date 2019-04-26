import { Calculator } from "./Calculator";

export class TableBody {
  printRows(sentence) {
    const calculate = new Calculator();
    const characters = calculate.myCharacters;

    for (let i = 0; i < characters.length; i++) {
      var frequency = calculate.getFrequency(characters[i], sentence);
      var relativeFrequency = calculate.getRelativeFrequency(characters[i], sentence);
   
   
   
    }
  }

  printCharactersColumn(characters) {
    console.log("|     " + characters + "     ");
  }

  printFrequnecyColumn(number) {
    let length = 6;

    let numberOfDigits = String(number).length;

    let whiteSpacesRequired = length - numberOfDigits;

    let whiteSpaces = "";

    for (let i = 0; i < whiteSpacesRequired; i++) {
      whiteSpaces = whiteSpaces + " ";
    }
    console.log("|     " + number + whiteSpaces);
  }

  printRelativeFrequencycolumn(number) {
    let length = 9;

    let numberOfDigits = String(number).length;

    let whiteSpacesRequired = length - numberOfDigits;

    let whiteSpaces = "";

    for (let i = 0; i <whiteSpacesRequired; i++) {
      whiteSpaces = whiteSpaces + " ";
    }
    
    console.log("|          " + number + "%" + whiteSpaces + "|")
  }
}
