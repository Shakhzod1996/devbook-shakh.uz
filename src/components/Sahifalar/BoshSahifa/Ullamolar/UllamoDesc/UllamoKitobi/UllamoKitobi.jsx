import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./UllamoKitobi.css";

export default function UllamoKitobi({ book }) {
  return (
    <li className="kitob-li">
      <img src={book.img} alt="img" />
      <h3>{book.nomi}</h3>
      <p>
        <i className="bx bxs-star"></i> 4,1-3400 fikrlar
      </p>
    </li>
  );
}
