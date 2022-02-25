import faker from "@faker-js/faker";

// function to generate dummy data for Treemap charts
export const generateFakeData = (numOfPoints) => {
  // const idArray = [];
  // const valueArray = [];
  const data = [];

  for (let i = 0; i < numOfPoints; i += 1) {
    data.push({ id: faker.animal.type(), value: faker.datatype.number() });
    // idArray.push(faker.animal.type());
    // valueArray.push(faker.datatype.number());
  }

  return data;
};
