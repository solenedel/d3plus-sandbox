import React from "react";
import { Treemap } from "d3plus-react";
import { generateFakeData } from "../helpers/generateFakeData";

const TreemapChart = ({ datasetSize }) => {
  // what is the diff between declaring methods inside vs outside the component?
  const methods = {
    groupBy: "id", // groupBy determines the label on each rectangle
    data: generateFakeData(datasetSize), // argument = number of data points
    size: (d) => d.value,
  };
  return (
    <div style={{ width: `70vw`, height: `300px` }}>
      <Treemap config={methods} />
    </div>
  );
};

export default TreemapChart;
