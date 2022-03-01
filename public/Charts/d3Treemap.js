"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const d3plus_react_1 = require("d3plus-react");
const generateFakeData_1 = require("../helpers/generateFakeData");
const TreemapChart = ({ props: Props }) => {
    // what is the diff between declaring methods inside vs outside the component?
    const methods = {
        groupBy: "id",
        data: (0, generateFakeData_1.generateFakeData)(props.datasetSize),
        size: (d) => d.value,
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: { width: `70vw`, height: `300px` } }, { children: (0, jsx_runtime_1.jsx)(d3plus_react_1.Treemap, { config: methods }, void 0) }), void 0));
};
exports.default = TreemapChart;
