import React, { useState } from "react";
import Hero from "./Hero/Hero";
import Search from "./Search/Search";
import "./BoshSahifa.css";
import Ullamolar from "./Ullamolar/Ullamolar";
import arr from "../../../secondMain";

export default function BoshSahifa({ newArr, setSort, setNewArr, sort }) {
  let temp = [];
  const [part, setpart] = useState(12);
  const [data, setData] = useState(newArr.slice(0, part));
  const searchHandler = (e) => {
    arr.forEach((item, index) => {
      if (item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
        temp.push(item);
      }
    });

    setData(temp);
  };


  let parts = newArr.length/part
  const newArrBtn = []
  for(let i = 1; i<=parts; i++) newArrBtn.push(i);
  const handlerPagenation = (e)=>{
    let end = (e.target.id - 1) * part
    let partsArr = newArr.slice(end, (part+end))
    setData(partsArr);
  } 

  return (
    <div className="bosh-sahifa">
      <Hero />
      <Search searchHandler={searchHandler} />
      <Ullamolar 
      newArrBtn={newArrBtn}
      handlerPagenation={handlerPagenation}
      data={data}
      setData={setData}
        newArr={newArr}
        setSort={setSort}
        setNewArr={setNewArr}
        sort={sort}
      />
    </div>
  );
}
