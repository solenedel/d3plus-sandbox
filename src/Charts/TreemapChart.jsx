import React from "react";
import { Treemap } from "d3plus-react";

const methods = {
  groupBy: "id",
  data: [
    { id: "alpha", value: 29 },
    { id: "beta", value: 10 },
  ],
  size: (d) => d.value,
};

const TreemapChart = () => {
  return <Treemap config={methods} />;
};

export default TreemapChart;
