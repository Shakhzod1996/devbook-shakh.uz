import React from "react";
import "./HarBirUllamo.css";

export default function HarBirUllamo({ item }) {
  let {
    name,
    lastName,
    born,
    bornDate,
    bornMonth,
    died,
    diedDate,
    diedMonth,
    img,
  } = item;
  return (
    <li className="li">
      <img src={img} alt="ulamo" />
      <h4>{name} {lastName}</h4>
      <p className="year">
        {born + bornDate + bornMonth } { died + diedDate + diedMonth}
      </p>
      <div className="book-flex">
        <p>
          <i className="bx bxs-book-alt" />
          34
        </p>
        <p>
          <i className="bx bx-headphone" />
          13
        </p>
      </div>
    </li>
  );
}
