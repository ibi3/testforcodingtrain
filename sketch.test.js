const sum = require("./sketch");

test("success", () => {
  expect(sum(1, 2)).toBe(3);
});
