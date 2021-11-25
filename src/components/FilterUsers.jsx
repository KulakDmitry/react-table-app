import React from "react";
import Input from "./UI/Input/Input";

const FilterUsers = ({ filter, setFilter, setLimit }) => {
  return (
    <>
      <Input
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        placeholder={"Search..."}
        type="text"
      />
      <div className={"outputCount"}>
        <select
          style={{ cursor: "pointer" }}
          onChange={(e) => setLimit(e.target.value)}
        >
          <option>20</option>
          <option>35</option>
          <option>50</option>
        </select>
        <span>Output by</span>
      </div>
    </>
  );
};

export default FilterUsers;
