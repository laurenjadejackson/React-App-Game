
import { mount } from "enzyme";

describe("game", () => {
  it("asks user to enter text", () => {
    const text = mount(<StartGame />);

    expect(text.find("#entertext").length).toBe(1);
  });
});
