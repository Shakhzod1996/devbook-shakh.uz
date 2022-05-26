import React, { useState } from "react";
import { Link } from "react-router-dom";
import HarBirUllamo from "./HarBirUllamo/HarBirUllamo";
import "./Ullamolar.css";

export default function Ullamolar({ newArr, setSort, setNewArr, sort }) {
  console.log(newArr);
  let [status, setStatus] = useState("hammasi");
  // ? fiter with buttons
  const filterHandlerId = () => {
    setNewArr(
      sort.filter((item) => {
        return item.genre === "biznes";
      })
    );
    setStatus("biznes");
  };

  const filterHandlerId1 = () => {
    setNewArr(sort.filter((item) => item));
    setStatus("hammasi");
  };

  const filterHandlerId2 = () => {
    setNewArr(sort.filter((item) => item.genre === 'diniy'));
    setStatus("diniy");
  };

  const filterHandlerId3 = () => {
    setNewArr(sort.filter((item) => item.id > 9));
    setStatus("mustaqil");
  };

  return (
    <div className="ullamolar">
      <h1>ASOSIY KATEGORIYALAR</h1>

      <div className="btns-filter">
        <button
          className={`${status === "hammasi" ? "temur" : null}`}
          onClick={filterHandlerId1}
        >
          Hamma kitoblar{" "}
        </button>
        <button
          className={`${status === "biznes" ? "temur" : null}`}
          onClick={filterHandlerId}
        >
          Biznes kitoblari{" "}
        </button>

        <button
          className={`${status === "diniy" ? "temur" : null}`}
          onClick={filterHandlerId2}
        >
          Diniy kitoblar{" "}
        </button>
        <button
          className={`${status === "mustaqil" ? "temur" : null}`}
          onClick={filterHandlerId3}
        >Jahon Kitoblari
          {" "}
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

      <ul className="ul-ullamo">
        {newArr.map((item, i) => (
          <Link key={item.id} to={`${item.id}`}>
            <HarBirUllamo item={item} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
