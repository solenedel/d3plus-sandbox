"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Dropdown = ({ datasetSize }) => {
    const changeSelectedOption = (e) => {
        setDatasetSize(Number(e.target.value));
    };
    return ((0, jsx_runtime_1.jsxs)("select", Object.assign({ onChange: changeSelectedOption }, { children: [(0, jsx_runtime_1.jsx)("option", Object.assign({ value: "10" }, { children: "10" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "20" }, { children: "20" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "50" }, { children: "50" }), void 0)] }), void 0));
};
exports.default = Dropdown;
