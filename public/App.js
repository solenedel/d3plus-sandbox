"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const d3Treemap_1 = __importDefault(require("./Charts/d3Treemap"));
const Dropdown_1 = __importDefault(require("./components/Dropdown"));
;
function App() {
    const [datasetSize, setDatasetSize] = (0, react_1.useState)(10);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "d3plus sandbox" }, void 0), "dataset size:", (0, jsx_runtime_1.jsx)(Dropdown_1.default, { datasetSize: Props.datasetSize, setDatasetSize: setDatasetSize }, void 0), (0, jsx_runtime_1.jsx)(d3Treemap_1.default, { datasetSize: datasetSize }, void 0)] }), void 0));
}
exports.default = App;
