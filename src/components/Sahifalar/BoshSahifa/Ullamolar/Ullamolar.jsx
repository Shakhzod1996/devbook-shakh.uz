import React, { useState } from "react";
import { Link } from "react-router-dom";
import HarBirUllamo from "./HarBirUllamo/HarBirUllamo";
import "./Ullamolar.css";
import arr from '../../../../secondMain'

export default function Ullamolar({newArrBtn, handlerPagenation, newArr, setSort, setNewArr, sort, data, setData }) {
  let [status, setStatus] = useState('hammasi')



  // ? fiter with buttons
  const filterHandlerId = () => {
    setData(
      sort.filter((item) => {
        return item.genre === "biznes";
      })
    );
    setStatus("biznes");
  };

  const filterHandlerId1 = () => {
    setData(sort.filter((item) => item));
    setStatus("hammasi");
  };

  const filterHandlerId2 = () => {
    setData(sort.filter((item) => item.genre === "diniy"));
    setStatus("diniy");
  };

  const filterHandlerId3 = () => {
    setData(sort.filter((item) => item.genre === "jahon"));
    setStatus("jahon");
  };

  return (
    <div className="ullamolar">
      <h1>ASOSIY KATEGORIYALAR</h1>

      <div className="btns-filter">
        <button
          className={`${status === "hammasi" ? "temur" : null}`}
          onClick={filterHandlerId1}
        >
          Hamma Yozuvchilar{" "}
        </button>
        <button
          className={`${status === "biznes" ? "temur" : null}`}
          onClick={filterHandlerId}
        >
          Biznes Yozuvchilari{" "}
        </button>

        <button
          className={`${status === "diniy" ? "temur" : null}`}
          onClick={filterHandlerId2}
        >
          Diniy kitob Yozuvchilari{" "}
        </button>
        <button
          className={`${status === "jahon" ? "temur" : null}`}
          onClick={filterHandlerId3}
        >
          Jahon Yozuvchilari{" "}
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
        {data.map((item, i) => {
          return (
            <Link key={item.id} to={`${item.id}`}>
              <HarBirUllamo item={item} />
            </Link>
          );
        })}
      </ul>

      <div className="pagination">
      {newArrBtn && newArrBtn.map((e,i)=>(
        <button onClick={handlerPagenation} key={i} id={e}>{e}</button>
        ))}
      </div>
    </div>
  );
}
