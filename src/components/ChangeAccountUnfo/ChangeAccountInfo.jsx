import React, { useState } from "react";
import "./ChangeAccountInfo.css";
import user from "../../assets/imgs/user.png";
import { Link } from "react-router-dom";

export default function ChangeAccountInfo({
  num,
  surName,
  email,
  firstName,
  setFirstName,
  setsurName,
  setNum,
  setEmail,
}) {

  let NameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  let sureNameChangeHandler = (e) => {
    setsurName(e.target.value);
  };

  let numberChangeHandler = (e) => {
    setNum(e.target.value);   
  };

  let emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="change-account-flex">
      <div className="left-div">
        <img src={user} alt="" />
        <div>
          <i className="bx bx-camera"></i>
        </div>
      </div>
      <div className="right-div">
        <h2 className="prof-header">My profile</h2>
        <div className="form-change">
          <label htmlFor="name">First Name</label>
          <br />
          <input
            onChange={NameChangeHandler}
            value={firstName}
            type="text"
            id="name"
            placeholder="Change Name..."
          />{" "}
          <br />
          <label value htmlFor="surename">
            Last Name
          </label>
          <br />
          <input
            type="text"
            value={surName}
            onChange={sureNameChangeHandler}
            id="surename"
            placeholder="Change Lastname..."
          />
          <br />
          <label htmlFor="tavallud">Tavallud sana</label>
          <br />
          <input
            type="date"
            value={num}
            onChange={numberChangeHandler}
            id="tavallud"
            placeholder="Change Date..."
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={emailChangeHandler}
            type="text"
            value={email}
            id="email"
            placeholder="Change Email..."
          />
          <br />
          <div className="change-div">
            <Link to="../../container/bosh-sahifa">
              <button className="btn-change" type="button">
                Save Changes
              </button>
            </Link>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
