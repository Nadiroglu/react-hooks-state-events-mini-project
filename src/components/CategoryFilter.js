import React, { useState } from "react";

function CategoryFilter({categories, navSelect, selected}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
     {categories.map((cat) => {
      return <button key={ cat } className={selected === cat  ? "selected" : ""} onClick={() => navSelect(cat)}>{cat}</button>
     })}
    </div>
  );
}

export default CategoryFilter;
