export class Calculator {
    
    myCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    splitsSentenceIntoCharacters(sentence) {
        var stringSentence = String(sentence);
        var characters = stringSentence.split("");
        
        return characters;
      }

      lowerCase(letter) {
         return String(letter).toLowerCase();
      }

     getFrequency(letter, text) {
       const charactersFromSentence = this.splitsSentenceIntoCharacters(text);
        
        let frequencyCount = 0;

        for (let i=0; i < charactersFromSentence.length; i++) {
            if (this.lowerCase(charactersFromSentence[i]) === letter) {
                frequencyCount = frequencyCount + 1;
            } 
        }
        return frequencyCount;
    };

    getRelativeFrequency(letter, text) {
        const frequency = this.getFrequency(letter, text);
        let frequencyPercentage = frequency / text.length * 100 / 100 * 100;
    return frequencyPercentage;
    }
};