import React from "react";
import { Treemap } from "d3plus-react";
import { generateFakeData } from "../helpers/generateFakeData";

const data = generateFakeData(10);
console.log("DATA: ", data);

const methods = {
  groupBy: "id", // groupBy determines the label on each rectangle
  data,
  size: (d) => d.value,
};

const TreemapChart = () => {
  return (
    <div style={{ width: `70vw`, height: `300px` }}>
      <Treemap config={methods} />
    </div>
  );
};

export default TreemapChart;
