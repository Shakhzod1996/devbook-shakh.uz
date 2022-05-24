import React, { useState } from 'react';
import HarBirKitob from './HarBirKitob/HarBirKitob';
import './Kitob.css'

export default function Kitob({setSort, newArr, setNewArr, sort}) {
  let [status, setStatus] = useState("jadid");

  // ? fiter with buttons
  const filterHandlerId = () => {
    setNewArr(
      sort.filter((item) => {
        return item.id < 4;
      })
    );
    setStatus("temur");
  };

  const filterHandlerId1 = () => {
    setNewArr(sort.filter((item) => item));
    setStatus("jadid");
  };

  const filterHandlerId2 = () => {
    setNewArr(sort.filter((item) => item.id > 4 && item.id < 9));
    setStatus("sovet");
  };

  const filterHandlerId3 = () => {
    setNewArr(sort.filter((item) => item.id > 9));
    setStatus("mustaqil");
  };

  return (
    <div className="ullamolar">
      <h1>Kitoblar</h1>

      <div className="btns-filter">
        <button
          className={`${status === "temur" ? "temur" : null}`}
          onClick={filterHandlerId}
        >
          Tarixiy Kitoblar{" "}
        </button>
        <button
          className={`${status === "jadid" ? "temur" : null}`}
          onClick={filterHandlerId1}
        >
          Barcha Kitoblar{" "}
        </button>
        <button
          className={`${status === "sovet" ? "temur" : null}`}
          onClick={filterHandlerId2}
        >
          Badiiy Kitoblar{" "}
        </button>
        <button
          className={`${status === "mustaqil" ? "temur" : null}`}
          onClick={filterHandlerId3}
        >
          Sarguzash Kitoblari{" "}
        </button>
      </div>
      {newArr.length === 0 && (
        <div className="non-div">
          <h1>
            <i className="bx bx-bug"></i>
          </h1>
          <h2 className="non">Sorry! Nothing to Display</h2>
        </div>
      )}

      
      <ul className="ul-kitob">
        {newArr.map((item, i) =>  (
        <HarBirKitob key={i} books={item.books} />
        ))}
      </ul>
      
    </div>
  );
}
