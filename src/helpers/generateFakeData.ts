import faker from "@faker-js/faker";

// function to generate dummy data for Treemap charts
export const generateFakeData = (numOfPoints) => {
  const data = [];

  // only accept number arguments
  if (typeof numOfPoints !== "number") {
    return undefined;
  }

  for (let i = 0; i < numOfPoints; i += 1) {
    data.push({
      id: faker.finance.currencyName(),
      value: faker.datatype.number(),
    });
  }

  return data;
};
