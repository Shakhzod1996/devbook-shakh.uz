import React from "react";
import './HarBirUllamo.css'

export default function HarBirUllamo({ item }) {
  let {userName, birth, dead, userImg } = item;
  return (
    <li className="li">
      <img src={userImg} alt="ulamo" />
      <h4>{userName}</h4>
      <p className="year">{birth} + {dead}</p>
      <div className="book-flex">
        <p><i className="bx bxs-book-alt" />34</p>
        <p><i className="bx bx-headphone" />13</p>
      </div>
    </li>
  );
}
