import React, { useState } from "react";
import "./Header.css";
import avatar from "../../assets/imgs/avatar.png";
import { NavLink } from "react-router-dom";
import Modal from "./Modal/Modal";
import Backdrop from "./Backdrop/Backdrop";
import RightModal from "./RightModal/RightModal";

export default function Header({
  setFirstName,
  setsurName,
  setNum,
  setEmail,
  setPass,
  card,
  setCard,
  HandleChange,
}) {
  let [modal, setModal] = useState(false);
  let [rightModal, setRightModal] = useState(false);

  let modalOpenHandler = () => {
    setModal(true);
  };

  let modalHideHandler = () => {
    setModal(false);
  };
  return (
    <div className="header">
      <div className="content">
        <div className="header-in">
          <h3>BADIIYAT</h3>
          <div className="nav">
            <ul className="ul-header">
              <li>
                <NavLink to="bosh-sahifa">Bosh sahifa</NavLink>
              </li>
              <li>
                <NavLink to="kitoblar">Kitoblar</NavLink>
              </li>
              <li>
                <NavLink to="nazm">Nazm</NavLink>
              </li>
              <li>
                <NavLink to="maqolalar">Maqolalar</NavLink>
              </li>
              <li>
                <NavLink to="forum">Forum</NavLink>
              </li>
            </ul>

            <div className="avatar-flex">
              <div className="circle">
                {card.length}
              </div>
              <img src={avatar} alt="avatar" onClick={modalOpenHandler} />
              <i className="bx bx-chevron-down"></i>
              <Modal
              card={card}
              setModal={setModal}
                setRightModal={setRightModal}
                setPass={setPass}
                modal={modal}
                setFirstName={setFirstName}
                setsurName={setsurName}
                setNum={setNum}
                setEmail={setEmail}
                modalHideHandler={modalHideHandler}
              />
              <Backdrop modal={modal} modalHideHandler={modalHideHandler} />
              <RightModal HandleChange={HandleChange} card={card} setCard={setCard} rightModal={rightModal} setRightModal={setRightModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
