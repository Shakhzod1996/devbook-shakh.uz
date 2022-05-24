import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignForm(props) {
  let [firstName, setFirstName] = useState("");
  let [surName, setsurName] = useState("");

  let [num, setNum] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  let emptyNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  let emptySurHandler = (e) => {
    setsurName(e.target.value);
  };

  let emptyNumHandler = (e) => {
    setNum(e.target.value);
  };

  let emptyEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  let emptypasHandler = (e) => {
    setPass(e.target.value);
  };

  let swichHandlerTrue = () => {
    props.useSwit(false);
  };

  return (
    <div className="sign-up-form">
      <h2>Sign up</h2>
      <p className="have-acc">
        Already have an account?{" "}
        <span onClick={swichHandlerTrue}>
          <Link to="/">Sign in</Link>
        </span>
      </p>
      <form className="sig-up-form">
        <input
          type="text"
          onChange={emptyNameHandler}
          value={firstName}
          placeholder="First Name"
          required
        />
        <br />
        <input
          type="text"
          value={surName}
          onChange={emptySurHandler}
          placeholder="Last Name"
          required
        />
        <br />
        <input
          type="number"
          value={num}
          onChange={emptyNumHandler}
          placeholder="Phone"
          required
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={emptyEmailHandler}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          value={pass}
          onChange={emptypasHandler}
          placeholder="Password"
          required
        />
        <br />
        {firstName === "" ||
        surName === "" ||
        num === "" ||
        email === "" ||
        pass === "" ? (
          <button className="submit" type="submit">
            Next step
          </button>
        ) : (
          <Link to="container/bosh-sahifa">
            <button className="submit" type="submit">
              {" "}
              Next step
            </button>
          </Link>
        )}
      </form>
    </div>
  );
}
