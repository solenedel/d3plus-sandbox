import React from "react";
import { Treemap } from "d3plus-react";
import { generateFakeData } from "../helpers/generateFakeData";

const methods = {
  groupBy: "id", // groupBy determines the label on each rectangle
  data: generateFakeData(20), // argument = number of data points
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
