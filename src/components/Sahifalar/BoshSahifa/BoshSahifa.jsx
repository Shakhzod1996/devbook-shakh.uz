import React, { useState } from "react";
import Hero from "./Hero/Hero";
import Search from "./Search/Search";
import "./BoshSahifa.css";
import Ullamolar from "./Ullamolar/Ullamolar";
import arr from '../../../MainObj'

export default function BoshSahifa({ newArr, setSort, setNewArr, sort }) {
  let [searchText, setSearchText] = useState("");
  const excludeColumns = ['id', 'userImg', 'desc'];

  let handleChange = (value) => {
    setSearchText(value);
    filteredData(value);
  };

  let filteredData = (value) => {
    const lowerCasedValue = value.toLowerCase().trim();
    if (!lowerCasedValue) {
      setNewArr(arr);
    } else {
      const filterData = newArr.filter(item => {
        return Object.keys(item).some(key => {
          return excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCasedValue)
        })
      })
      setNewArr(filterData)
    }
  };
  return (
    <div className="bosh-sahifa">
      <Hero />
      <Search handleChange={handleChange} searchText={searchText} />
      <Ullamolar
        newArr={newArr}
        setSort={setSort}
        setNewArr={setNewArr}
        sort={sort}
      />
    </div>
  );
}
