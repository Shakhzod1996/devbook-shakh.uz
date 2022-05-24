import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HarBirKitob.css";

export default function HarBirKitob({ books }) {
  
  return (
    <div>
      {books.map((item, i) => (
        <Link key={i} to={`${item.bookId}`}>
        <li className="har-bir-book-li">
          <img src={item.img} alt="img" />
          <h3>{item.nomi}</h3>
          <p  className="nomi">{item.shoir}</p>
          <p><i className='bx bxs-star'></i> 4.1-3400 fikrlar</p>
          </li>
        </Link>
        
      ))}
    </div>
  );
}
