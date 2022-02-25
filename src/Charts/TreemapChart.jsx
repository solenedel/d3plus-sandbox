import React from "react";
import { Treemap } from "d3plus-react";

const methods = {
  groupBy: "id", // groupBy determines the label on each rectangle
  data: [
    { id: "alpha", value: 29 },
    { id: "beta", value: 10 },
    { id: "one", value: 1 },
    { id: "two", value: 20 },
    { id: "apple", value: 40 },
    { id: "kiwi", value: 14 },
    { id: "pineapple", value: 2 },
  ],
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
