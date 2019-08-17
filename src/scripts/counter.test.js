const counter = require("./counter");

test("1987650707421 to return 'пост'", () => {
  expect(counter(1987650707421)).toBe("пост");
});
