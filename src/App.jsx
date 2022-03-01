import React, { useState } from "react";
import TreemapChart from "./Charts/d3Treemap";
import Dropdown from "./components/Dropdown";

function App() {
  const [datasetSize, setDatasetSize] = useState(10);
  return (
    <div className="App">
      <h1>d3plus sandbox</h1>
      dataset size: {datasetSize}
      <Dropdown datasetSize={datasetSize} setDatasetSize={setDatasetSize} />
      <TreemapChart datasetSize={datasetSize} />
    </div>
  );
}

export default App;
