import React from "react";
import TreemapChart from "./Charts/d3Treemap";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <h1>d3plus sandbox</h1>
      <TreemapChart />
      <Dropdown />
    </div>
  );
}

export default App;
