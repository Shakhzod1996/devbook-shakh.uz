import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./UllamoKitobi.css";

export default function UllamoKitobi({ book }) {
  return (
    <Link to={`../kitoblar/${book.bookId}`}>
      <li className="kitob-li">
        <img src={book.bookImg} alt="img" />
        <h3>{book.bookName}</h3>
        <p>
          <i className="bx bxs-star"></i> {book.bookRating}-3400 fikrlar
        </p>
      </li>
    </Link>
  );
}
