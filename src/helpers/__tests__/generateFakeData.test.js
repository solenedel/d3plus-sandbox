import { generateFakeData } from "../generateFakeData";

// TEST 1: function returns an array of objects
test("Returns an array of objects", () => {
  const result = generateFakeData(5);
  expect(Array.isArray(result) && typeof result[0] === "object").toBe(true);
});
