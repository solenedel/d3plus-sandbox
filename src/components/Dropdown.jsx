import React from "react";

const Dropdown = () => {
  return (
    <select>
      Dataset size
      <option value="5">10 points</option>
      <option value="20">20 points</option>
      <option value="50">50 points</option>
    </select>
  );
};

export default Dropdown;
