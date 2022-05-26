import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignForm(props) {
  let [password, setPassword] = useState("");

  let swichHandlerTrue = () => {
    props.setSwit(true);
  };

  let sum = (e) => {
    e.preventDefault()
  }



  let emptyPasswordHandler = (e) => {
    setPassword(e.target.value);
    console.log("qwerty");
  };

  return (
    <div className="sign-in-form">
      <h2>Sign in</h2>
      <p className="have-acc">
        Do not you have an account?{" "}
        <span onClick={swichHandlerTrue}>
          <Link to="/">sign up</Link>
        </span>
      </p>
      <form className="sig-in-form" onSubmit={sum}>
        <input
          type="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={emptyPasswordHandler}
          placeholder="Password"
          required
        />
        <br />
        {password.length < 8 ? (
          <button className="submit" type="submit">
            Next step
          </button>
        ) : (
          
            <button className="submit" type="submit">
              Next step
            </button>
          
        )}
      </form>
    </div>
  );
}
