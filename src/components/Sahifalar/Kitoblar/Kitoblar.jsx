import React from "react";
import Hero from "./Hero/Hero";
import Kitob from "./Kitob/Kitob";
import "./Kitoblar.css";
import Search from "./Search/Search";

export default function Kitoblar({ setSort, newArr, setNewArr, sort }) {
  return (
    <div className="kitoblar">
      <Hero />
      <Search />

      <Kitob
        setSort={setSort}
        newArr={newArr}
        setNewArr={setNewArr}
        sort={sort}
      />
    </div>
  );
}
