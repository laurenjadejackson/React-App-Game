import { Calculator } from "./Calculator";

const calculator = new Calculator();

describe("get frequency", () => {
  it("can calculate frequency", () => {
    const frequencyCount = calculator.getFrequency("l", "Hello");

    expect(frequencyCount).toBe(2);
  });
});

describe("split sentence", () => {
  it("can split a sentence into characters", () => {
    const splitSentence = calculator.splitsSentenceIntoCharacters("Hello");

    expect(splitSentence).toEqual(["H", "e", "l", "l", "o"]);
  });
});

describe("lower case", () => {
  it("turns characters into lower case", () => {
    const charactersToLowerCase = calculator.lowerCase("HELLO");

    expect(charactersToLowerCase).toBe("hello");
  });
});

describe("get relative frequency", () => {
  it("calculates relative freqeuncy", () => {
    const relativeFrequencyCount = calculator.getRelativeFrequency("l", "Hello");

    expect(relativeFrequencyCount).toBe(40);
  })
})

describe('Calculator', () => {
  let sentence = 'hello';
  const expectedResults = {
    h: {
      relativeFrequency: 20,
      count: 1
    },
    l: {
      relativeFrequency: 40,
      count: 2,
    },
    e: {
      relativeFrequency: 20,
      count: 1
    },
    o: {
      relativeFrequency: 20,
      count: 1
    },
  }

  const actualResults = calculator.calculate(sentence);
  expect(actualResults).toEqual(expectedResults);

  sentence = 'hElLo';
  const actualResults = calculator.calculate(sentence);
  expect(actualResults).toEqual(expectedResults);
})