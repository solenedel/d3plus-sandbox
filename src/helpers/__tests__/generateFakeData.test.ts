import { generateFakeData } from "../generateFakeData";

// TEST 1
test("Returns an array of objects", () => {
  const result = generateFakeData(5);
  expect(Array.isArray(result) && typeof result[0] === "object").toBe(true);
});

// TEST 2
test("Objects in the returned array contain an id and a value property", () => {
  const result = generateFakeData(5);
  const objectKeys = Object.keys(result[0]);
  const expectedKeys = ["id", "value"];
  expect(objectKeys).toStrictEqual(expectedKeys);
});

// TEST 3
test("Returned array contains the same number of values as the argument passed to the function", () => {
  const argument = 5;
  const arrayLength = generateFakeData(argument).length;
  expect(arrayLength).toBe(argument);
});

// TEST 4
test("Returns undefined when the argument is not a number", () => {
  const argument1 = "test";
  const result1 = generateFakeData(argument1);

  const argument2 = [3, 5];
  const result2 = generateFakeData(argument2);

  const argument3 = { test: "foo" };
  const result3 = generateFakeData(argument3);

  expect(result1 && result2 && result3).toBe(undefined);
});

// TEST 5
test("Returns an empty array when the argument is zero", () => {
  const argument = 0;
  const result = generateFakeData(argument);

  expect(result).toStrictEqual([]);
});
