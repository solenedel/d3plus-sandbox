"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFakeData = void 0;
const faker_1 = __importDefault(require("@faker-js/faker"));
// function to generate dummy data for Treemap charts
const generateFakeData = (numOfPoints) => {
    const data = [];
    // only accept number arguments
    if (typeof numOfPoints !== "number") {
        return undefined;
    }
    for (let i = 0; i < numOfPoints; i += 1) {
        data.push({
            id: faker_1.default.finance.currencyName(),
            value: faker_1.default.datatype.number(),
        });
    }
    return data;
};
exports.generateFakeData = generateFakeData;
