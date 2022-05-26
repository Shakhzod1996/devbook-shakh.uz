import React, { useState } from "react";
import Hero from "./Hero/Hero";
import Kitob from "./Kitob/Kitob";
import "./Kitoblar.css";
import arr from '../../../secondMain'

import SearchBook from './SearchBook/SearchBook'

export default function Kitoblar({ setSort, newArr, setNewArr, sort }) {

    // ? PAgination Data
    const [part, setpart] = useState(4);
    const [data, setData] = useState(newArr.slice(0, part));
    let parts = newArr.length/part
    const newArrBtn = []
    for(let i = 1; i<=parts; i++) newArrBtn.push(i);
    const handlerPagenation = (e)=>{
      let end = (e.target.id - 1) * part
      let partsArr = newArr.slice(end, (part+end))
      setData(partsArr);
    }


  let temp = [];
  const searchHandler = (e) => {
    console.log(e.keyCode);
    if(e.keyCode !== 8){
      arr.forEach((item) => {
        item.bookObj.map(el => {
          if(el.bookName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
            temp.push(item);
          }
        })  
        setData(temp);
      });
    }else {
      setData(arr.map(item => {
          return item
      }))
    }
  };
  
  return (
    <div className="kitoblar">
      <Hero />
      <SearchBook searchHandler={searchHandler} />
      <Kitob
      newArrBtn={newArrBtn}
      setData={setData}
      handlerPagenation={handlerPagenation}
      data={data}
        setSort={setSort}
        newArr={newArr}
        setNewArr={setNewArr}
        sort={sort}
      />
    </div>
  );
}
