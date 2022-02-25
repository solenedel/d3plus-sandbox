import React from "react";
import { Treemap } from "d3plus-react";

const methods = {
  groupBy: "id",
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
  return <Treemap config={methods} />;
};

export default TreemapChart;
