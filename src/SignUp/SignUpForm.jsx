import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignForm({
  setSwit,
  firstName,
  setFirstName,
  surName,
  setsurName,
  num,
  setNum,
  email,
  setEmail,
  pass,
  setPass,
}) {
  let [one, setOne] = useState('black');
  let [two, setTwo] = useState('black');
  let [three, setThree] = useState('black');
  let [four, setFour] = useState('black');

  let emptyNameHandler = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length > 5 && e.target.value.match(/[A-Z]/)) {
      setOne("green");
    } else {
      setOne("red");
    }
  };

  let emptySurHandler = (e) => {
    setsurName(e.target.value);

    if (e.target.value.length > 5 && e.target.value.match(/[A-Z]/)) {
      setTwo("green");
    } else {
      setTwo("red");
    }
  };

  let emptyNumHandler = (e) => {
    setNum(e.target.value);
  };

  let emptyEmailHandler = (e) => {
    setEmail(e.target.value);
    if (
      e.target.value.length > 5 &&
      e.target.value.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)
    ) {
      setThree("green");
    } else {
      setThree("red");
    }
  };

  let emptypasHandler = (e) => {
    setPass(e.target.value);
    if (
      e.target.value.length > 8 &&
      e.target.value.match(/[A-Z]/) &&
      e.target.value.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)
    ) {
      setFour("green");
    } else {
      setFour("red");
    }
  };

  let swichHandlerTrue = () => {
    setSwit(false);
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
        <div>
          <input
            className={one === 'black' ? 'input-black': one === 'green' ? "input-green" : "input-red"}
            type="text"
            onChange={emptyNameHandler}
            value={firstName}
            placeholder="First Name"
            required
          />
          <p className={`${one === "black" ? "err black" : one === "green" ? "err green" : "err red"}`}>
          {one === "black" ? "" : one === "green" ? "Success" : "Enter Valid UserName"}
          </p>
        </div>
        <br />

        <div>
          <input
            className={two === 'black' ? 'input-black': two === 'green' ? "input-green" : "input-red"}
            type="text"
            value={surName}
            onChange={emptySurHandler}
            placeholder="Last Name"
            required
          />
          <p className={`${two === "black" ? "err black" : two === "green" ? "err green" : "err red"}`}>
          {two === "black" ? "" : two === "green" ? "Success" : "Enter Valid LastName"}
          </p>
        </div>

        <br />

        <div>
          <input
            type="date"
            value={num}
            onChange={emptyNumHandler}
            placeholder="BirthDate"
            required
          />
          <p className="er3"></p>
        </div>

        <br />

        <div>
          <input
            className={three === 'black' ? 'input-black': three === 'green' ? "input-green" : "input-red"}
            type="email"
            value={email}
            onChange={emptyEmailHandler}
            placeholder="Email"
            required
          />
          <p className={`${three === "black" ? "err black" : three === "green" ? "err green" : "err red"}`}>
          {three === "black" ? "" : three === "green" ? "Success" : "Enter Valid Email"}
          </p>
        </div>
        <br />

        <div>
          <input
            className={four === 'black' ? 'input-black': four === 'green' ? "input-green" : "input-red"}
            type="password"
            value={pass}
            onChange={emptypasHandler}
            placeholder="Password"
            required
          />
          <p className={`${four === "black" ? "err black" : four === "green" ? "err green" : "err red"}`}>
          {four === "black" ? "" : four === "green" ? "Success" : "Enter Valid Password"}
          </p>
        </div>

        <br />
        {one === "green" && two === "green" && three === "green" && four === "green" ? (
          <Link to="container/bosh-sahifa">
            <button className="submit" type="submit">
              {" "}
              Next step
            </button>
          </Link>
        ) : (
          <button className="submit" type="submit">
            Next step
          </button>
        )}
      </form>
    </div>
  );
}
