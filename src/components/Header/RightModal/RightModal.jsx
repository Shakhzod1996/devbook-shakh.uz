import React, { useEffect, useState } from "react";
import "./RightModal.css";

export default function RightModal({
  rightModal,
  setRightModal,
  card,
  setCard,
  HandleChange,
}) {
  let [price, setPrice] = useState(0);
  const rightModalHideHandler = () => {
    setRightModal(false);
  };

  let removeCardHandler = (id) => {
    const arr = card.filter((item) => {
      return id !== item.bookId;
    });
    setCard(arr);
    handlePrice();
  };

  let handlePrice = () => {
    let ant = 0;
    card.map((item) => {
      return (ant += item.amount * item.bookPrice);
    });
    setPrice(ant);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div
      className={`${
        rightModal ? "right-modal right-modal-show" : "right-modal"
      }`}
    >
      <button className="x-btn" onClick={rightModalHideHandler}>
        <i className="bx bx-x"></i>
      </button>

      <ul className="save-ul">
        <h2 className="saved-header">Saved Books</h2>
        {card.map((item, i) => (
          <li key={i} className="save-li">
            <img src={item.bookImg} alt="bookimg" />

            <div className="bookname">
              <h3>Kitob: {item.bookName}</h3>
              <h4>Adib: {item.name}</h4>
              <p>
                <i className="bx bxs-star"></i> {item.bookRating}
              </p>
            </div>

            <div className="book-price">
              <h3>{item.bookPrice}</h3>
              <div className="pluz-minus">
                <button onClick={() => HandleChange(item, 1)}>+</button>
                <button onClick={() => HandleChange(item, -1)}>-</button>
                <button
                  onClick={() => removeCardHandler(item.bookId)}
                  className="remove"
                >
                  remve
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="bottom">
        <h1>Total: {price.toFixed(0)} So'm</h1>
      </div>
    </div>
  );
}
