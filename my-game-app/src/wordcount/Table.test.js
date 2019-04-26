import { Header } from "./Header";
import { TableBody } from "./TableBody";

const header = new Header();
const tableBody = new TableBody();

describe("All headings print out", () => {
  it("renders headings", () => {
    const head = header.printHeader("Hello");

    expect(head === "| Calculator | Frequency | Relative Frequency |");
  });
});

describe("characters column", () => {
  it("prints characters under correct heading", () => {
    const table = tableBody.printCharactersColumn("H");

    expect(table === "|     H     ");
  });
});

describe("frequency column", () => {
  it("prints frequencies under frequency column", () => {
    const table = tableBody.printFrequnecyColumn("H");

    expect(table === "|      1      ");
  })
})

describe("relative frequency column", () => {
  it("prints relative frequencies under relative frequencies heading", () => {
    const table = tableBody.printRelativeFrequencycolumn("H", "Hello");

    expect(table === "|          0.2%           |");
  })
})
