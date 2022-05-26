import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

export default function Modal({
  card,
  modal,
  setModal,
  setRightModal,
  modalHideHandler,
  setFirstName,
  setsurName,
  setNum,
  setEmail,
  setPass,
}) {
  let rightModalShowHandler = () => {
    setRightModal(true);
    setModal(false);
  };

  let inputsToZero = () => {
    setFirstName("");
    setsurName("");
    setNum("");
    setEmail("");
    setPass("");
  };
  return (
    <div className={`${modal ? "modal modal-open" : "modal"}`}>
      <ul className="modal-ul">
        <Link to="account" onClick={modalHideHandler}>
          <li>
            <i className="bx bx-user"></i> My Account
          </li>
        </Link>
        <li onClick={rightModalShowHandler} className="saved">
          <i className="bx bxs-bookmark"></i> Saved Books
          <div className="circle1">
            {card.length}
          </div>
        </li>
        <Link onClick={modalHideHandler} to="account-settings">
          <li>
            <i className="bx bx-cog"></i> Account Settings
          </li>
        </Link>
        <Link onClick={inputsToZero} to="/">
          <li>
            <i className="bx bx-log-out"></i>Log Out
          </li>
        </Link>
      </ul>
    </div>
  );
}
