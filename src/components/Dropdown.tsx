import React from "react";

const Dropdown = ({ datasetSize }: Props) => {
  const changeSelectedOption = (e) => {
    setDatasetSize(Number(e.target.value));
  };

  return (
    <select onChange={changeSelectedOption}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
    </select>
  );
};

export default Dropdown;
